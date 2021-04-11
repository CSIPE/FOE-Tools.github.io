const ages = require("../ages.json");
const ageCost = require("../ages-cost/EarlyMiddleAges");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Hagia_Sophia",
  gbReward: {
    1: {
      happiness: 1700,
      strategy_points: 1,
    },
    2: {
      happiness: 1920,
      strategy_points: 1,
    },
    3: {
      happiness: 2280,
      strategy_points: 2,
    },
    4: {
      happiness: 2710,
      strategy_points: 2,
    },
    5: {
      happiness: 3220,
      strategy_points: 3,
    },
    6: {
      happiness: 3770,
      strategy_points: 3,
    },
    7: {
      happiness: 4370,
      strategy_points: 4,
    },
    8: {
      happiness: 5010,
      strategy_points: 4,
    },
    9: {
      happiness: 5690,
      strategy_points: 5,
    },
    10: {
      happiness: 6400,
      strategy_points: 6,
    },
    11: {
      happiness: 6713,
      strategy_points: 6,
    },
    12: {
      happiness: 7011,
      strategy_points: 7,
    },
    13: {
      happiness: 7298,
      strategy_points: 7,
    },
    14: {
      happiness: 7573,
      strategy_points: 8,
    },
    15: {
      happiness: 7839,
      strategy_points: 9,
    },
    16: {
      happiness: 8096,
      strategy_points: 9,
    },
    17: {
      happiness: 8345,
      strategy_points: 10,
    },
    18: {
      happiness: 8587,
      strategy_points: 10,
    },
    19: {
      happiness: 8822,
      strategy_points: 11,
    },
    20: {
      happiness: 9051,
      strategy_points: 12,
    },
    21: {
      happiness: 9275,
      strategy_points: 12,
    },
    22: {
      happiness: 9493,
      strategy_points: 13,
    },
    23: {
      happiness: 9707,
      strategy_points: 13,
    },
    24: {
      happiness: 9915,
      strategy_points: 14,
    },
    25: {
      happiness: 10120,
      strategy_points: 15,
    },
    26: {
      happiness: 10320,
      strategy_points: 15,
    },
    27: {
      happiness: 10517,
      strategy_points: 16,
    },
    28: {
      happiness: 10710,
      strategy_points: 16,
    },
    29: {
      happiness: 10899,
      strategy_points: 17,
    },
    30: {
      happiness: 11086,
      strategy_points: 18,
    },
    31: {
      happiness: 11269,
      strategy_points: 18,
    },
    32: {
      happiness: 11449,
      strategy_points: 19,
    },
    33: {
      happiness: 11627,
      strategy_points: 19,
    },
    34: {
      happiness: 11802,
      strategy_points: 20,
    },
    35: {
      happiness: 11974,
      strategy_points: 21,
    },
    36: {
      happiness: 12144,
      strategy_points: 21,
    },
    37: {
      happiness: 12311,
      strategy_points: 22,
    },
    38: {
      happiness: 12476,
      strategy_points: 22,
    },
    39: {
      happiness: 12639,
      strategy_points: 23,
    },
    40: {
      happiness: 12800,
      strategy_points: 24,
    },
    41: {
      happiness: 12960,
      strategy_points: 24,
    },
    42: {
      happiness: 13117,
      strategy_points: 25,
    },
    43: {
      happiness: 13272,
      strategy_points: 25,
    },
    44: {
      happiness: 13425,
      strategy_points: 26,
    },
    45: {
      happiness: 13577,
      strategy_points: 27,
    },
    46: {
      happiness: 13727,
      strategy_points: 27,
    },
    47: {
      happiness: 13875,
      strategy_points: 28,
    },
    48: {
      happiness: 14022,
      strategy_points: 28,
    },
    49: {
      happiness: 14168,
      strategy_points: 29,
    },
    50: {
      happiness: 14311,
      strategy_points: 30,
    },
    51: {
      happiness: 14454,
      strategy_points: 30,
    },
    52: {
      happiness: 14595,
      strategy_points: 31,
    },
    53: {
      happiness: 14734,
      strategy_points: 31,
    },
    54: {
      happiness: 14873,
      strategy_points: 32,
    },
    55: {
      happiness: 15010,
      strategy_points: 33,
    },
    56: {
      happiness: 15146,
      strategy_points: 33,
    },
    57: {
      happiness: 15280,
      strategy_points: 34,
    },
    58: {
      happiness: 15414,
      strategy_points: 34,
    },
    59: {
      happiness: 15546,
      strategy_points: 35,
    },
    60: {
      happiness: 15677,
      strategy_points: 36,
    },
    61: {
      happiness: 15807,
      strategy_points: 36,
    },
    62: {
      happiness: 15936,
      strategy_points: 37,
    },
    63: {
      happiness: 16064,
      strategy_points: 37,
    },
    64: {
      happiness: 16191,
      strategy_points: 38,
    },
    65: {
      happiness: 16317,
      strategy_points: 39,
    },
    66: {
      happiness: 16442,
      strategy_points: 39,
    },
    67: {
      happiness: 16566,
      strategy_points: 40,
    },
    68: {
      happiness: 16690,
      strategy_points: 40,
    },
    69: {
      happiness: 16812,
      strategy_points: 41,
    },
    70: {
      happiness: 16933,
      strategy_points: 42,
    },
    71: {
      happiness: 17054,
      strategy_points: 42,
    },
    72: {
      happiness: 17174,
      strategy_points: 43,
    },
    73: {
      happiness: 17292,
      strategy_points: 43,
    },
    74: {
      happiness: 17410,
      strategy_points: 44,
    },
    75: {
      happiness: 17528,
      strategy_points: 45,
    },
    76: {
      happiness: 17644,
      strategy_points: 45,
    },
    77: {
      happiness: 17760,
      strategy_points: 46,
    },
    78: {
      happiness: 17875,
      strategy_points: 46,
    },
    79: {
      happiness: 17989,
      strategy_points: 47,
    },
    80: {
      happiness: 18102,
      strategy_points: 48,
    },
    81: {
      happiness: 18215,
      strategy_points: 48,
    },
    82: {
      happiness: 18327,
      strategy_points: 49,
    },
    83: {
      happiness: 18439,
      strategy_points: 49,
    },
    84: {
      happiness: 18549,
      strategy_points: 50,
    },
    85: {
      happiness: 18660,
      strategy_points: 51,
    },
    86: {
      happiness: 18769,
      strategy_points: 51,
    },
    87: {
      happiness: 18878,
      strategy_points: 52,
    },
    88: {
      happiness: 18986,
      strategy_points: 52,
    },
    89: {
      happiness: 19094,
      strategy_points: 53,
    },
    90: {
      happiness: 19200,
      strategy_points: 54,
    },
    91: {
      happiness: 19307,
      strategy_points: 54,
    },
    92: {
      happiness: 19413,
      strategy_points: 55,
    },
    93: {
      happiness: 19518,
      strategy_points: 55,
    },
    94: {
      happiness: 19623,
      strategy_points: 56,
    },
    95: {
      happiness: 19727,
      strategy_points: 57,
    },
    96: {
      happiness: 19830,
      strategy_points: 57,
    },
    97: {
      happiness: 19933,
      strategy_points: 58,
    },
    98: {
      happiness: 20036,
      strategy_points: 58,
    },
    99: {
      happiness: 20138,
      strategy_points: 59,
    },
    100: {
      happiness: 20239,
      strategy_points: 60,
    },
    101: {
      happiness: 20340,
      strategy_points: 60,
    },
    102: {
      happiness: 20440,
      strategy_points: 61,
    },
    103: {
      happiness: 20540,
      strategy_points: 61,
    },
    104: {
      happiness: 20640,
      strategy_points: 62,
    },
    105: {
      happiness: 20739,
      strategy_points: 63,
    },
    106: {
      happiness: 20837,
      strategy_points: 63,
    },
    107: {
      happiness: 20935,
      strategy_points: 64,
    },
    108: {
      happiness: 21033,
      strategy_points: 64,
    },
    109: {
      happiness: 21130,
      strategy_points: 65,
    },
    110: {
      happiness: 21227,
      strategy_points: 66,
    },
    111: {
      happiness: 21323,
      strategy_points: 66,
    },
    112: {
      happiness: 21419,
      strategy_points: 67,
    },
    113: {
      happiness: 21514,
      strategy_points: 67,
    },
    114: {
      happiness: 21609,
      strategy_points: 68,
    },
    115: {
      happiness: 21704,
      strategy_points: 69,
    },
    116: {
      happiness: 21798,
      strategy_points: 69,
    },
    117: {
      happiness: 21892,
      strategy_points: 70,
    },
    118: {
      happiness: 21985,
      strategy_points: 70,
    },
    119: {
      happiness: 22078,
      strategy_points: 71,
    },
    120: {
      happiness: 22171,
      strategy_points: 72,
    },
    126: {
      happiness: 22718,
      strategy_points: 75,
    },
    127: {
      happiness: 22808,
      strategy_points: 76,
    },
    128: {
      happiness: 22898,
      strategy_points: 76,
    },
    129: {
      happiness: 22987,
      strategy_points: 77,
    },
  },
  age: ages.EarlyMiddleAges.key,
  levels: ageCost,
};
