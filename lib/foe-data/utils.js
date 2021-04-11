/**
 * Rounds one number to the nearest integer multiple of another
 *
 * @param value {number} The number to round to the nearest integer multiple of another
 * @param factor {number} The number to whose multiples value will be rounded
 * @returns {number} Return the rounded value
 */
function mround(value, factor) {
  return Math.round(value / factor) * factor;
}

/**
 * Generate reward for all of the first 5 places
 *
 * @param firstRankReward {number} Reward of the first place
 * @returns {[{ fp: number}]} Return an array of number
 */
function generateReward(firstRankReward) {
  const result = [{ fp: firstRankReward }];

  result[result.length] = { fp: mround(result[result.length - 1].fp / 2, 5) };
  result[result.length] = { fp: mround(result[result.length - 1].fp / 3, 5) };
  result[result.length] = { fp: mround(result[result.length - 1].fp / 4, 5) };
  result[result.length] = { fp: mround(result[result.length - 1].fp / 5, 5) };

  return result;
}

module.exports = {
  mround,
  generateReward,
};
