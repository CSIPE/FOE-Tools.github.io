const ages = require("../ages.json");
const ageCost = require("../ages-cost/HighMiddleAges");
const defaultCost = require("../ages-cost/defaultCost");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Notre_Dame",
  gbReward: {
    1: {
      happiness: 1100,
      supplies: 1380,
    },
    2: {
      happiness: 1230,
      supplies: 1680,
    },
    3: {
      happiness: 1450,
      supplies: 2080,
    },
    4: {
      happiness: 1710,
      supplies: 2550,
    },
    5: {
      happiness: 2000,
      supplies: 3090,
    },
    6: {
      happiness: 2330,
      supplies: 3680,
    },
    7: {
      happiness: 2690,
      supplies: 4320,
    },
    8: {
      happiness: 3070,
      supplies: 5010,
    },
    9: {
      happiness: 3480,
      supplies: 5750,
    },
    10: {
      happiness: 3900,
      supplies: 7240,
    },
    11: {
      happiness: 4091,
      supplies: 8157,
    },
    12: {
      happiness: 4273,
      supplies: 9094,
    },
    13: {
      happiness: 4447,
      supplies: 10051,
    },
    14: {
      happiness: 4615,
      supplies: 11026,
    },
    15: {
      happiness: 4777,
      supplies: 12019,
    },
    16: {
      happiness: 4934,
      supplies: 13029,
    },
    17: {
      happiness: 5085,
      supplies: 14054,
    },
    18: {
      happiness: 5233,
      supplies: 15095,
    },
    19: {
      happiness: 5376,
      supplies: 16151,
    },
    20: {
      happiness: 5516,
      supplies: 17220,
    },
    21: {
      happiness: 5652,
      supplies: 18303,
    },
    22: {
      happiness: 5785,
      supplies: 19399,
    },
    23: {
      happiness: 5915,
      supplies: 20507,
    },
    24: {
      happiness: 6042,
      supplies: 21628,
    },
    25: {
      happiness: 6167,
      supplies: 22760,
    },
    26: {
      happiness: 6289,
      supplies: 23904,
    },
    27: {
      happiness: 6409,
      supplies: 25058,
    },
    28: {
      happiness: 6526,
      supplies: 26224,
    },
    29: {
      happiness: 6642,
      supplies: 27400,
    },
    30: {
      happiness: 6755,
      supplies: 28586,
    },
    31: {
      happiness: 6867,
      supplies: 29782,
    },
    32: {
      happiness: 6977,
      supplies: 30987,
    },
    33: {
      happiness: 7085,
      supplies: 32202,
    },
    34: {
      happiness: 7192,
      supplies: 33427,
    },
    35: {
      happiness: 7297,
      supplies: 34660,
    },
    36: {
      happiness: 7400,
      supplies: 35902,
    },
    37: {
      happiness: 7502,
      supplies: 37153,
    },
    38: {
      happiness: 7603,
      supplies: 38413,
    },
    39: {
      happiness: 7702,
      supplies: 39680,
    },
    40: {
      happiness: 7800,
      supplies: 40956,
    },
    41: {
      happiness: 7897,
      supplies: 42240,
    },
    42: {
      happiness: 7993,
      supplies: 43532,
    },
    43: {
      happiness: 8088,
      supplies: 44831,
    },
    44: {
      happiness: 8181,
      supplies: 46138,
    },
    45: {
      happiness: 8274,
      supplies: 47452,
    },
    46: {
      happiness: 8365,
      supplies: 48774,
    },
    47: {
      happiness: 8455,
      supplies: 50103,
    },
    48: {
      happiness: 8545,
      supplies: 51439,
    },
    49: {
      happiness: 8634,
      supplies: 52782,
    },
    50: {
      happiness: 8721,
      supplies: 54132,
    },
    51: {
      happiness: 8808,
      supplies: 55489,
    },
    52: {
      happiness: 8894,
      supplies: 56852,
    },
    53: {
      happiness: 8979,
      supplies: 58222,
    },
    54: {
      happiness: 9063,
      supplies: 59598,
    },
    55: {
      happiness: 9147,
      supplies: 60981,
    },
    56: {
      happiness: 9230,
      supplies: 62370,
    },
    57: {
      happiness: 9312,
      supplies: 63765,
    },
    58: {
      happiness: 9393,
      supplies: 65167,
    },
    59: {
      happiness: 9474,
      supplies: 66574,
    },
    60: {
      happiness: 9554,
      supplies: 67988,
    },
    61: {
      happiness: 9633,
      supplies: 69407,
    },
    62: {
      happiness: 9711,
      supplies: 70832,
    },
    63: {
      happiness: 9789,
      supplies: 72263,
    },
    71: {
      happiness: 10392,
      supplies: 83910,
    },
    81: {
      happiness: 11100,
      supplies: 98934,
    },
    82: {
      happiness: 11168,
      supplies: 100463,
    },
    83: {
      happiness: 11236,
      supplies: 101997,
    },
    84: {
      happiness: 11304,
      supplies: 103536,
    },
    85: {
      happiness: 11371,
      supplies: 105079,
    },
    86: {
      happiness: 11438,
      supplies: 106626,
    },
    87: {
      happiness: 11504,
      supplies: 108178,
    },
    88: {
      happiness: 11570,
      supplies: 109735,
    },
    89: {
      happiness: 11635,
      supplies: 111296,
    },
  },
  buildCost: {
    brick: 220,
    dried_herbs: 140,
    glass: 100,
    rope: 180,
    salt: 110,
  },
  age: ages.HighMiddleAges.key,
  size: { length: 4, width: 6 },
  levels: [...ageCost, ...defaultCost],
};
