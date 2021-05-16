const ages = require("../ages.json");
const ageCost = require("../ages-cost/ModernEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Space_Needle",
  gbReward: {
    1: {
      happiness: 1200,
      money: 11600,
    },
    2: {
      happiness: 1370,
      money: 13500,
    },
    3: {
      happiness: 1640,
      money: 15400,
    },
    4: {
      happiness: 1980,
      money: 21800,
    },
    5: {
      happiness: 2360,
      money: 24200,
    },
    6: {
      happiness: 2790,
      money: 34700,
    },
    7: {
      happiness: 3250,
      money: 37900,
    },
    8: {
      happiness: 3740,
      money: 48400,
    },
    9: {
      happiness: 4260,
      money: 53000,
    },
    10: {
      happiness: 4800,
      money: 69100,
    },
    11: {
      happiness: 5035,
      money: 77843,
    },
    12: {
      happiness: 5259,
      money: 86787,
    },
    13: {
      happiness: 5473,
      money: 95920,
    },
    14: {
      happiness: 5680,
      money: 105230,
    },
    15: {
      happiness: 5879,
      money: 114708,
    },
    16: {
      happiness: 6072,
      money: 124345,
    },
    17: {
      happiness: 6259,
      money: 134135,
    },
    18: {
      happiness: 6440,
      money: 144069,
    },
    19: {
      happiness: 6617,
      money: 154142,
    },
    20: {
      happiness: 6789,
      money: 164349,
    },
    21: {
      happiness: 6956,
      money: 174684,
    },
    22: {
      happiness: 7120,
      money: 185143,
    },
    23: {
      happiness: 7280,
      money: 195722,
    },
    24: {
      happiness: 7437,
      money: 206416,
    },
    25: {
      happiness: 7590,
      money: 217222,
    },
    26: {
      happiness: 7740,
      money: 228137,
    },
    27: {
      happiness: 7888,
      money: 239157,
    },
    28: {
      happiness: 8032,
      money: 250280,
    },
    29: {
      happiness: 8175,
      money: 261503,
    },
    30: {
      happiness: 8314,
      money: 272823,
    },
    31: {
      happiness: 8452,
      money: 284237,
    },
    34: {
      happiness: 8851,
      money: 319027,
    },
    35: {
      happiness: 8980,
      money: 330799,
    },
    36: {
      happiness: 9108,
      money: 342655,
    },
    43: {
      happiness: 9954,
      money: 427872,
    },
    44: {
      happiness: 10069,
      money: 440346,
    },
    45: {
      happiness: 10183,
      money: 452891,
    },
    46: {
      happiness: 10295,
      money: 465507,
    },
    47: {
      happiness: 10407,
      money: 478190,
    },
    61: {
      happiness: 11856,
      money: 662431,
    },
    62: {
      happiness: 11952,
      money: 676033,
    },
    72: {
      happiness: 12880,
      money: 814974,
    },
    76: {
      happiness: 13233,
      money: 871957,
    },
    77: {
      happiness: 13320,
      money: 886322,
    },
    78: {
      happiness: 13406,
      money: 900734,
    },
    79: {
      happiness: 13492,
      money: 915192,
    },
    80: {
      happiness: 13577,
      money: 929696,
    },
  },
  buildCost: {
    convenience_food: 500,
    ferroconcrete: 500,
    flavorants: 450,
    luxury_materials: 200,
    packaging: 100,
  },
  age: ages.ModernEra.key,
  size: { length: 6, width: 5 },
  levels: ageCost,
};
