import clone from "lodash.clonedeep";

function strategyRewardByPreparationCost(gbs, counter, bonusKey, lower, toLevel, cbEachGB = null) {
  let lowerResult;
  let lowerCost = 0;
  let lowerReward = Number.MIN_SAFE_INTEGER;

  // Find best next level of GB to growing
  for (const gbKey of Object.keys(counter)) {
    if (
      counter[gbKey].targetLevel === (toLevel === -1 ? gbs[gbKey].levels.length - 1 : toLevel) ||
      counter[gbKey].targetLevel === gbs[gbKey].levels.length - 1
    ) {
      continue;
    }

    let cost;
    let reward;
    try {
      cost = gbs[gbKey].r.levels[counter[gbKey].targetLevel].totalPreparations;
      reward = gbs[gbKey].gbReward[counter[gbKey].targetLevel + 1][bonusKey];
      reward = reward || 0;
    } catch (e) {
      console.error(`${gbKey} get level: `, counter[gbKey].targetLevel + 1);
      throw e;
    }

    const computedCost = reward / (counter[gbKey].cumulativeCost + cost);

    if (cbEachGB) {
      cbEachGB({
        gbKey,
        cost,
        reward,
        computedCost,
      });
    }

    if (!lowerResult) {
      lowerResult = gbKey;
      lowerCost = cost;
      lowerReward = reward;
    } else {
      const computedLowerCost = lowerReward / (counter[lowerResult].cumulativeCost + lowerCost);

      if (lowerCost === 0 || computedCost > computedLowerCost) {
        lowerResult = gbKey;
        lowerCost = cost;
        lowerReward = reward;
      }
    }
  }

  return {
    lower: lowerResult,
    lowerCost,
    lowerReward,
  };
}

class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = {};
  }

  get parent() {
    return this._parent;
  }

  set parent(value) {
    this._parent = value;
  }

  get children() {
    return this._children;
  }

  set children(value) {
    this._children = value;
  }

  addChildren(key, node) {
    node.parent = this;
    this._children[key] = node;
  }

  _computeChildren(gbs, bonusKey, toLevel, initFpBy24h) {
    let lowTime = Number.MAX_SAFE_INTEGER;
    let lowTimeGbKey = null;
    const result = strategyRewardByPreparationCost(
      gbs,
      this.data.counter,
      bonusKey,
      this.data.choosedGB,
      toLevel,
      ({ gbKey, cost, reward, computedCost }) => {
        const counter = clone(this.data.counter);
        const fpBy24h =
          initFpBy24h +
          // If reward is FP, sum the FP bonus of each GB
          (bonusKey === "strategy_points"
            ? Object.keys(counter)
                .map((elt) => counter[elt].reward)
                .reduce((acc, elt) => acc + elt)
            : 0);

        let time = this.data.time;
        let remaningFP = this.data.remaningFP;

        // Does GB is built ?
        if (!counter[gbKey].isBuilt) {
          // Take in account goods needs to build the GB
          const rawCost = counter[gbKey].cumulativeCost;
          const div = Math.trunc(rawCost / fpBy24h);
          remaningFP = rawCost % fpBy24h;

          time += div + (remaningFP > 0 ? 1 : 0);
          counter[gbKey].isBuilt = true;
        }

        // Update time
        const rawCost = cost - remaningFP;
        const div = Math.trunc(rawCost / fpBy24h);
        remaningFP = rawCost % fpBy24h;
        time += div + (remaningFP > 0 ? 1 : 0);

        if (time < lowTime) {
          lowTime = time;
          lowTimeGbKey = gbKey;
        }

        // Update counter map
        counter[gbKey].targetLevel += 1;
        counter[gbKey].cumulativeCost += cost;
        counter[gbKey].reward = reward;

        // Add children
        this.addChildren(
          gbKey,
          new Node({
            choosedGB: gbKey,
            counter: counter,
            time,
            remaningFP,
            RewardCostRatio: computedCost,
          })
        );
      }
    );

    return { ...result, lowTimeGbKey, lowTime };
  }

  /**
   * Compute the best path to go from current GBs state to the desired levels.
   * The strategy is:
   * - maximize the number of FPs
   * - minimize the time necessary to reach the target level
   * Stop condition: all GBs have reached the desired level
   *
   * @param gbs {object} Info about gbs
   * @param bonusKey {string} Bonus to maximize
   * @param toLevel {number} Level to reach. If -1, use the max level of each GBs
   * @param initFpBy24h {number} FPs production (GB excluded)
   * @returns {Node[]} Return the path computed
   */
  compute(gbs, bonusKey, toLevel, initFpBy24h) {
    const bestChild = this._computeChildren(gbs, bonusKey, toLevel, initFpBy24h);
    if (Object.keys(this._children).length === 0) {
      return [];
    }

    let gbKey = bestChild.lower;

    if (gbKey !== bestChild.lowTimeGbKey) {
      /*
       * Weighs the value to choose which one is the more efficient.
       * RewardCostRatio = Reward / TotalCost(FP needs to be invested by the owner)
       * time: time (in day) to reach the target level = (TotalCost / fpBy24h)
       */
      if (
        this._children[bestChild.lowTimeGbKey].data.time / this._children[bestChild.lowTimeGbKey].data.RewardCostRatio >
        this._children[gbKey].data.time / this._children[gbKey].data.RewardCostRatio
      ) {
        gbKey = bestChild.lowTimeGbKey;
      }
    }

    return [this._children[gbKey], ...this._children[gbKey].compute(gbs, bonusKey, toLevel, initFpBy24h)];
  }
}

function minMaxGBLevel(gbs, bonusKey, fromLevel, toLevel = -1, goodRatio = 0.2, initFpBy24h = 1) {
  if (toLevel === 0) {
    return [];
  }

  // Init phase
  const FPGBs = [];

  const counter = {};
  for (const key of Object.keys(gbs)) {
    if (toLevel >= 0 && fromLevel[key] >= toLevel) {
      if (bonusKey === "strategy_points") {
        initFpBy24h += gbs[key].gbReward[Math.max(fromLevel[key], 0) + 1][bonusKey];
      }
      continue;
    }
    counter[key] = {
      targetLevel: Math.max(fromLevel[key], 0),
      cumulativeCost: fromLevel[key] < 0 ? gbs[key].totalBuildCost * goodRatio : 0,
      reward: 0,
      isBuilt: fromLevel[key] >= 0,
    };
    FPGBs.push(key);
  }

  if (FPGBs.length === 0) {
    return [];
  }

  const choosedGB = FPGBs[0];
  counter[choosedGB].cumulativeCost += gbs[choosedGB].r.levels[Math.max(fromLevel[choosedGB], 0)].totalPreparations;
  counter[choosedGB].reward = gbs[choosedGB].gbReward[Math.max(fromLevel[choosedGB], 0) + 1][bonusKey];

  // Create the root node
  const tree = new Node({ choosedGB, counter, time: 0, remaningFP: 0 });

  // Compute the best leveling order
  const result = tree.compute(gbs, bonusKey, toLevel, initFpBy24h);

  // Prepare result by aggregating consecutive GB into one row
  let previous = result[0];
  const levelProgress = clone(fromLevel);
  let toLevelProgress = previous.data.counter[previous.data.choosedGB].targetLevel;

  const resultArray = [];

  for (const elt of result.slice(1)) {
    if (elt.data.choosedGB === previous.data.choosedGB) {
      toLevelProgress = elt.data.counter[elt.data.choosedGB].targetLevel;
    } else {
      resultArray.push({
        gbKey: previous.data.choosedGB,
        from: levelProgress[previous.data.choosedGB],
        to: toLevelProgress,
        time: previous.data.time,
        bonus: Object.keys(previous.data.counter)
          .map((elt) => previous.data.counter[elt].reward)
          .reduce((acc, elt) => acc + elt),
      });
      levelProgress[previous.data.choosedGB] = toLevelProgress;
      toLevelProgress = elt.data.counter[elt.data.choosedGB].targetLevel;
    }
    previous = elt;
  }

  resultArray.push({
    gbKey: previous.data.choosedGB,
    from: levelProgress[previous.data.choosedGB],
    to: toLevelProgress,
    time: previous.data.time,
    bonus: Object.keys(previous.data.counter)
      .map((elt) => previous.data.counter[elt].reward)
      .reduce((acc, elt) => acc + elt),
  });

  return resultArray;
}

export const compute = minMaxGBLevel;
