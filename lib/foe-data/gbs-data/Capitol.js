const ages = require("../ages.json");
const ageCost = require("../ages-cost/IndustrialAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Capitol",
  gbReward: {
    1: {
      population: 2450,
      supplies: 3900,
    },
    2: {
      population: 2880,
      supplies: 4600,
    },
    3: {
      population: 3440,
      supplies: 5400,
    },
    4: {
      population: 4100,
      supplies: 6400,
    },
    5: {
      population: 4850,
      supplies: 7500,
    },
    6: {
      population: 5680,
      supplies: 8800,
    },
    7: {
      population: 6580,
      supplies: 10100,
    },
    8: {
      population: 7550,
      supplies: 11500,
    },
    9: {
      population: 8580,
      supplies: 13100,
    },
    10: {
      population: 10530,
      supplies: 15800,
    },
    11: {
      population: 11044,
      supplies: 17800,
    },
    12: {
      population: 11536,
      supplies: 19845,
    },
    13: {
      population: 12007,
      supplies: 21933,
    },
    14: {
      population: 12460,
      supplies: 24062,
    },
    15: {
      population: 12897,
      supplies: 26229,
    },
    16: {
      population: 13320,
      supplies: 28432,
    },
    17: {
      population: 13730,
      supplies: 30671,
    },
    18: {
      population: 14128,
      supplies: 32942,
    },
    19: {
      population: 14515,
      supplies: 35246,
    },
    20: {
      population: 14892,
      supplies: 37579,
    },
    21: {
      population: 15260,
      supplies: 39943,
    },
    22: {
      population: 15619,
      supplies: 42334,
    },
    23: {
      population: 15970,
      supplies: 44753,
    },
    24: {
      population: 16314,
      supplies: 47198,
    },
    25: {
      population: 16650,
      supplies: 49669,
    },
    26: {
      population: 16980,
      supplies: 52165,
    },
    27: {
      population: 17303,
      supplies: 54685,
    },
    28: {
      population: 17621,
      supplies: 57228,
    },
    29: {
      population: 17932,
      supplies: 59794,
    },
    30: {
      population: 18239,
      supplies: 62382,
    },
    31: {
      population: 18540,
      supplies: 64992,
    },
    32: {
      population: 18837,
      supplies: 67624,
    },
    33: {
      population: 19129,
      supplies: 70275,
    },
    34: {
      population: 19417,
      supplies: 72947,
    },
    35: {
      population: 19700,
      supplies: 75639,
    },
    36: {
      population: 19980,
      supplies: 78350,
    },
    37: {
      population: 20255,
      supplies: 81080,
    },
    38: {
      population: 20527,
      supplies: 83828,
    },
    39: {
      population: 20796,
      supplies: 86595,
    },
    40: {
      population: 21060,
      supplies: 89379,
    },
    41: {
      population: 21322,
      supplies: 92181,
    },
    42: {
      population: 21581,
      supplies: 94999,
    },
    43: {
      population: 21836,
      supplies: 97835,
    },
    44: {
      population: 22088,
      supplies: 100687,
    },
    45: {
      population: 22338,
      supplies: 103556,
    },
    46: {
      population: 22585,
      supplies: 106440,
    },
    47: {
      population: 22829,
      supplies: 109341,
    },
    51: {
      population: 23781,
      supplies: 121094,
    },
    52: {
      population: 24013,
      supplies: 124069,
    },
    53: {
      population: 24242,
      supplies: 127058,
    },
    54: {
      population: 24470,
      supplies: 130062,
    },
    57: {
      population: 25141,
      supplies: 139156,
    },
    60: {
      population: 25794,
      supplies: 148371,
    },
    61: {
      population: 26008,
      supplies: 151468,
    },
    64: {
      population: 26640,
      supplies: 160836,
    },
    65: {
      population: 26847,
      supplies: 163983,
    },
    71: {
      population: 28059,
      supplies: 183118,
    },
    75: {
      population: 28838,
      supplies: 196103,
    },
    81: {
      population: 29969,
      supplies: 215906,
    },
    82: {
      population: 30154,
      supplies: 219243,
    },
    83: {
      population: 30337,
      supplies: 222590,
    },
    84: {
      population: 30519,
      supplies: 225947,
    },
    85: {
      population: 30700,
      supplies: 229315,
    },
    86: {
      population: 30881,
      supplies: 232692,
    },
    89: {
      population: 31415,
      supplies: 242882,
    },
  },
  buildCost: {
    coke: 240,
    fertilizer: 500,
    rubber: 400,
    textiles: 180,
    whale_oil: 180,
  },
  age: ages.IndustrialAge.key,
  size: { length: 7, width: 5 },
  levels: ageCost,
};
