import { get } from "vuex-pathify";
import set from "lodash.set";
import lGet from "lodash.get";
import mapvalues from "lodash.mapvalues";
import gbProcess from "@/lib/foe-compute-process/gb-investment";
import { compute as GbLevelingOrderProcess } from "@/lib/foe-compute-process/gb-leveling-order";
import { bonus } from "~/lib/foe-data/bonus";
import numberinput from "~/components/number-input/NumberInput";
import yesNo from "~/components/yes-no/YesNo";
import Utils from "~/scripts/utils";

const i18nPrefix = "routes.gb_leveling_order.";
const rewardWithRandom = ["strategy_points", "random_goods", "supplies", "penal_unit"];
const fpProductionHimejiCarrier = 0.25 * 10 + 0.12 * 50 + 0.05 * 200;
const goodsProductionHimejiCarrier = 0.24 * 10 + 0.08 * 25 + 0.03 * 50 + 0.01 * 100;
const unitProductionHimejiCarrier = 0.16 * 5 + 0.04 * 10;

export default {
  name: "GbLevelingOrder",
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    const popularRewardKinds = [
      {
        key: "strategy_points",
        text: this.$t("foe_data.bonus.research.name") + ` (${this.$t("components.gb_patron_data.rewards.fp")})`,
      },
      { key: "military_boost", text: this.$t(`foe_data.bonus.${bonus.military_boost}.name`) },
    ];

    /*
     * All bonus provided by GBs
     */
    const rewardKinds = [
      ...popularRewardKinds,
      { key: "support_boost", text: this.$t(`foe_data.bonus.${bonus.support_boost}.name`) },
      { key: "clan_goods", text: this.$t(`foe_data.bonus.${bonus.clan_goods}.name`) },
      { key: "totem_drop", text: this.$t(`foe_data.bonus.${bonus.totem_drop}.name`) },
      { key: "happiness", text: this.$t(`foe_data.bonus.${bonus.happiness}.name`) },
      { key: "supplies", text: this.$t(`foe_data.bonus.${bonus.supplies}.name`) },
      { key: "plunder_repel", text: this.$t(`foe_data.bonus.${bonus.plunder_repel}.name`) },
      { key: "random_goods", text: this.$t(`foe_data.bonus.${bonus.random_goods}.name`) },
      { key: "population", text: this.$t(`foe_data.bonus.${bonus.population}.name`) },
      { key: "medals", text: this.$t(`foe_data.bonus.${bonus.medals}.name`) },
      { key: "supplies_boost", text: this.$t(`foe_data.bonus.${bonus.supplies_boost}.name`) },
      { key: "money", text: this.$t(`foe_data.bonus.${bonus.money}.name`) },
      { key: "money_boost", text: this.$t(`foe_data.bonus.${bonus.money_boost}.name`) },
      { key: "fierce_resistance", text: this.$t(`foe_data.bonus.${bonus.fierce_resistance}.name`) },
      { key: "quest_boost", text: this.$t(`foe_data.bonus.${bonus.quest_boost}.name`) },
      { key: "penal_unit", text: this.$t(`foe_data.bonus.${bonus.penal_unit}.name`) },
      { key: "aid_goods", text: this.$t(`foe_data.bonus.${bonus.aid_goods}.name`) },
      { key: "plunder_goods", text: this.$t(`foe_data.bonus.${bonus.plunder_goods}.name`) },
      { key: "contribution_boost", text: this.$t(`foe_data.bonus.${bonus.contribution_boost}.name`) },
      { key: "aid_boost", text: this.$t(`foe_data.bonus.${bonus.aid_boost}.name`) },
      { key: "critical_hit_chance", text: this.$t(`foe_data.bonus.${bonus.critical_hit_chance}.name`) },
      { key: "helping_hands", text: this.$t(`foe_data.bonus.${bonus.helping_hands}.name`) },
      { key: "plunder_and_pillage", text: this.$t(`foe_data.bonus.${bonus.plunder_and_pillage}.name`) },
      { key: "first_strike", text: this.$t(`foe_data.bonus.${bonus.first_strike}.name`) },
      { key: "double_collection", text: this.$t(`foe_data.bonus.${bonus.double_collection}.name`) },
      { key: "advanced_tactics", text: this.$t(`foe_data.bonus.${bonus.advanced_tactics}.name`) },
      { key: "spoils_of_war", text: this.$t(`foe_data.bonus.${bonus.spoils_of_war}.name`) },
      { key: "missile_launch", text: this.$t(`foe_data.bonus.${bonus.missile_launch}.name`) },
      { key: "previous_era_goods", text: this.$t(`foe_data.bonus.${bonus.previous_era_goods}.name`) },
      { key: "diplomatic_gifts", text: this.$t(`foe_data.bonus.${bonus.diplomatic_gifts}.name`) },
      { key: "special_goods", text: this.$t(`foe_data.bonus.${bonus.special_goods}.name`) },
      { key: "mysterious_shards", text: this.$t(`foe_data.bonus.${bonus.mysterious_shards}.name`) },
    ].sort((a, b) => a.text.localeCompare(b.text));

    const gbsInfo = mapvalues(
      this.$store.copy(`profile/profiles@${this.$store.get("global/currentProfile")}.gb`),
      (elt) => (elt.yourLevel === undefined ? -1 : elt.yourLevel)
    );

    return {
      i18nPrefix,
      chosenReward: "",
      popularRewardKinds,
      rewardKinds,
      targetLevel: 10,
      targetLevelTimeout: null,
      buildRatio: 0.2,
      buildRatioTimeout: null,
      initFpBy24h: 10,
      initFpBy24hTimeout: null,
      fromLevel: gbsInfo,
      fromLevelTimeout: {},
      includeRandomReward: false,
      randomRewardProduction: 10,
      randomRewardProductionTimeout: null,
      gbs: {},
      r: [],
    };
  },
  computed: {
    gbsData: get("foe/gbs@gbsData"),
    canHaveRandomGBReward() {
      return rewardWithRandom.includes(this.chosenReward);
    },
  },
  watch: {
    gbsData() {
      this.updateData();
    },
    chosenReward() {
      this.initGbs();
      this.updateData();
    },
    targetLevel(val) {
      if (val < -1) {
        return;
      }
      clearTimeout(this.targetLevelTimeout);
      this.targetLevelTimeout = setTimeout(this.updateData, 1000);
    },
    buildRatio(val) {
      if (val < 0 || val > 1) {
        return;
      }
      clearTimeout(this.buildRatioTimeout);
      this.buildRatioTimeout = setTimeout(this.updateData, 1000);
    },
    initFpBy24h(val) {
      if (val < 1) {
        return;
      }
      clearTimeout(this.initFpBy24hTimeout);
      this.initFpBy24hTimeout = setTimeout(this.updateData, 1000);
    },
    randomRewardProduction(val) {
      if (val < 1) {
        return;
      }
      this.initGbs();
      clearTimeout(this.randomRewardProductionTimeout);
      this.randomRewardProductionTimeout = setTimeout(this.updateData, 1000);
    },
    includeRandomReward() {
      this.initGbs();
      this.updateData();
    },
  },
  methods: {
    formatDate(durationInDay) {
      return Utils.getFormatedDuration(this.$moment.duration(durationInDay, "days"), this.$i18n);
    },
    fromLevelChange() {
      for (const key in this.fromLevel) {
        if (this.fromLevel[key] < -1) {
          return;
        }
      }

      clearTimeout(this.fromLevelTimeout);
      this.fromLevelTimeout = setTimeout(() => {
        for (const key in this.fromLevel) {
          if (!(key in this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.gb`))) {
            this.$store.set(
              `profile/profiles@${this.$store.get("global/currentProfile")}.gb.${key}`,
              this.$clone(Utils.getDefaultGBConf())
            );
          }
          this.$store.set(
            `profile/profiles@${this.$store.get("global/currentProfile")}.gb.${key}.yourLevel`,
            this.$clone(this.fromLevel[key])
          );
        }
        this.updateData();
      }, 1000);
    },
    initGbs() {
      if (!this.gbsData || !this.chosenReward.length) {
        return;
      }
      const gbs = this.$clone(this.gbsData);

      const bonusKey = this.chosenReward;
      const investorPercentage = [90, 90, 90, 90, 90];

      const fromLevel = {};

      if (this.canHaveRandomGBReward && this.includeRandomReward) {
        /**
         * Generate corresponding bonusKey according to probabilities to obtains this bonus with some GB that provides
         * random rewards.
         *
         * @param bonusBy24h {number}
         * Bonus product by the player in 24h. It is used to compute the rewards of The Blue Galaxy
         * @param baseRatioRandomReward {number}
         * Values come from here: https://forgeofempires.fandom.com/wiki/Himeji_Castle#Random_Rewards
         * @param skipHimejiCarrier {boolean}
         * @param skipGalaxy {boolean}
         */
        const generateTranslatedRandomReward = (
          bonusBy24h,
          baseRatioRandomReward,
          skipHimejiCarrier = false,
          skipGalaxy = false
        ) => {
          /*
           * Add "strategy_points" for GB that can provide the desired bonus as a random reward.
           * - Himeji
           * - Space Carrier
           * - The Blue Galaxy
           * - Flying Island: TODO, when the probabilities of obtaining are found
           */

          const Himeji_Castle = this.$store.get("foe/gbs@gbs.Himeji_Castle.key");
          const Space_Carrier = this.$store.get("foe/gbs@gbs.Space_Carrier.key");
          const The_Blue_Galaxy = this.$store.get("foe/gbs@gbs.The_Blue_Galaxy.key");

          if (!skipHimejiCarrier) {
            const randomRewardGBArray = [Himeji_Castle, Space_Carrier];

            for (const gbKey of randomRewardGBArray) {
              let rewardKey = "spoils_of_war";
              if (gbKey === Space_Carrier) {
                rewardKey = "diplomatic_gifts";
              }

              let previous = gbs[gbKey].gbReward[1];

              for (let i = 1; i < gbs[gbKey].levels.length; i++) {
                let currentValue = i in gbs[gbKey].gbReward ? gbs[gbKey].gbReward[i] : previous;
                if (!(rewardKey in currentValue)) {
                  currentValue = previous;
                }

                set(
                  gbs[gbKey].gbReward,
                  `${i}.${bonusKey}`,
                  Math.floor(baseRatioRandomReward * currentValue.trials * (currentValue[rewardKey] / 100))
                );

                set(gbs[gbKey].gbReward, `${i}.isFromRandom`, true);
                previous = currentValue;
              }
            }
          }

          if (!skipGalaxy) {
            // Manage Blue Galaxy
            const gbKey = The_Blue_Galaxy;
            const rewardKey = "double_collection";
            let previous = gbs[gbKey].gbReward[1];

            for (let i = 1; i < gbs[gbKey].levels.length; i++) {
              let currentValue = i in gbs[gbKey].gbReward ? gbs[gbKey].gbReward[i] : previous;
              if (!(rewardKey in currentValue)) {
                currentValue = previous;
              }

              set(
                gbs[gbKey].gbReward,
                `${i}.${bonusKey}`,
                Math.floor(bonusBy24h * currentValue.trials * (currentValue[rewardKey] / 100))
              );
              set(gbs[gbKey].gbReward, `${i}.isFromRandom`, true);
              previous = currentValue;
            }
          }
        };

        if (bonusKey === "strategy_points") {
          generateTranslatedRandomReward(this.initFpBy24h, fpProductionHimejiCarrier);
        } else if (bonusKey === "random_goods") {
          generateTranslatedRandomReward(this.randomRewardProduction, goodsProductionHimejiCarrier);
        } else if (bonusKey === "supplies") {
          generateTranslatedRandomReward(this.randomRewardProduction, 0, true);
        } else if (bonusKey === "penal_unit") {
          generateTranslatedRandomReward(this.randomRewardProduction, unitProductionHimejiCarrier, false, true);
        }
      }

      if (["military_boost", "fierce_resistance"].includes(bonusKey)) {
        const Terracotta_Army = this.$store.get("foe/gbs@gbs.Terracotta_Army.key");
        const gbKey = Terracotta_Army;
        const rewardKey = "advanced_tactics";
        let previous = gbs[gbKey].gbReward[1];

        for (let i = 1; i < gbs[gbKey].levels.length; i++) {
          let currentValue = i in gbs[gbKey].gbReward ? gbs[gbKey].gbReward[i] : previous;
          if (!(rewardKey in currentValue)) {
            currentValue = previous;
          }

          set(gbs[gbKey].gbReward, `${i}.${bonusKey}`, currentValue[rewardKey]);
          previous = currentValue;
        }
      }

      for (const gbKey in gbs) {
        if (!(bonusKey in gbs[gbKey].gbReward[1])) {
          delete gbs[gbKey];
          continue;
        }

        let previous = gbs[gbKey].gbReward[1][bonusKey];

        // Add empirical value for missing values
        for (let i = 2; i < gbs[gbKey].levels.length; i++) {
          // If level is present in GB reward and the desired reward is not null, all it's ok
          if (i in gbs[gbKey].gbReward && gbs[gbKey].gbReward[i][bonusKey]) {
            previous = gbs[gbKey].gbReward[i][bonusKey];
            continue;
          }

          if (!lGet(gbs[gbKey].gbReward, `${i}.isFromRandom`, false)) {
            if (bonusKey === "strategy_points") {
              if (i < 10) {
                gbs[gbKey].gbReward[i + 1] = { [bonusKey]: previous };
              } else {
                set(gbs[gbKey].gbReward, `${i}.${bonusKey}`, Math.floor((gbs[gbKey].gbReward[10][bonusKey] * i) / 10));
              }
            } else {
              gbs[gbKey].gbReward[i + 1] = { [bonusKey]: previous };
            }
          }
        }
        gbs[gbKey].r = gbProcess.ComputeLevelInvestmentRange(
          1,
          gbs[gbKey].levels.length,
          investorPercentage,
          gbs[gbKey].levels
        );

        gbs[gbKey].totalBuildCost = Object.keys(gbs[gbKey].buildCost).reduce(
          (acc, key) => acc + gbs[gbKey].buildCost[key],
          0
        );

        fromLevel[gbKey] = this.$clone(
          this.$store.get(`profile/profiles@${this.$store.get("global/currentProfile")}.gb.${gbKey}.yourLevel`)
        );
        if (fromLevel[gbKey] === undefined) {
          fromLevel[gbKey] = -1;
        }
      }

      this.fromLevel = fromLevel;
      this.gbs = gbs;
    },
    updateData() {
      if (!this.gbsData || !this.chosenReward.length) {
        return;
      }

      if (!Object.keys(this.gbs).length || !Object.keys(this.fromLevel).length) {
        this.initGbs();
      }

      this.r = GbLevelingOrderProcess(
        this.gbs,
        this.chosenReward,
        this.fromLevel,
        this.targetLevel === null ? -1 : this.targetLevel,
        this.buildRatio,
        this.initFpBy24h
      );
    },
  },
  mounted() {
    this.updateData();
  },
  components: {
    numberinput,
    yesNo,
  },
};
