const ages = require("../ages.json");
const ageCost = require("../ages-cost/ContemporaryEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Innovation_Tower",
  gbReward: {
    1: {
      population: 3600,
      strategy_points: 1,
    },
    2: {
      population: 4200,
      strategy_points: 1,
    },
    3: {
      population: 4800,
      strategy_points: 2,
    },
    4: {
      population: 6190,
      strategy_points: 2,
    },
    5: {
      population: 6880,
      strategy_points: 3,
    },
    6: {
      population: 8970,
      strategy_points: 3,
    },
    7: {
      population: 10140,
      strategy_points: 4,
    },
    8: {
      population: 12680,
      strategy_points: 4,
    },
    9: {
      population: 14000,
      strategy_points: 5,
    },
    10: {
      population: 15310,
      strategy_points: 6,
    },
    11: {
      population: 16058,
      strategy_points: 6,
    },
    12: {
      population: 16772,
      strategy_points: 7,
    },
    13: {
      population: 17457,
      strategy_points: 7,
    },
    14: {
      population: 18116,
      strategy_points: 8,
    },
    15: {
      population: 18751,
      strategy_points: 9,
    },
    16: {
      population: 19366,
      strategy_points: 9,
    },
    17: {
      population: 19962,
      strategy_points: 10,
    },
    18: {
      population: 20541,
      strategy_points: 10,
    },
    19: {
      population: 21104,
      strategy_points: 11,
    },
    20: {
      population: 21652,
      strategy_points: 12,
    },
    21: {
      population: 22187,
      strategy_points: 12,
    },
    22: {
      population: 22709,
      strategy_points: 13,
    },
    23: {
      population: 23219,
      strategy_points: 13,
    },
    24: {
      population: 23719,
      strategy_points: 14,
    },
    25: {
      population: 24208,
      strategy_points: 15,
    },
    26: {
      population: 24687,
      strategy_points: 15,
    },
    27: {
      population: 25157,
      strategy_points: 16,
    },
    28: {
      population: 25619,
      strategy_points: 16,
    },
    29: {
      population: 26072,
      strategy_points: 17,
    },
    30: {
      population: 26518,
      strategy_points: 18,
    },
    31: {
      population: 26957,
      strategy_points: 18,
    },
    32: {
      population: 27388,
      strategy_points: 19,
    },
    33: {
      population: 27812,
      strategy_points: 19,
    },
    34: {
      population: 28231,
      strategy_points: 20,
    },
    35: {
      population: 28643,
      strategy_points: 21,
    },
    36: {
      population: 29049,
      strategy_points: 21,
    },
    37: {
      population: 29450,
      strategy_points: 22,
    },
    38: {
      population: 29845,
      strategy_points: 22,
    },
    39: {
      population: 30235,
      strategy_points: 23,
    },
    40: {
      population: 30620,
      strategy_points: 24,
    },
    41: {
      population: 31001,
      strategy_points: 24,
    },
    42: {
      population: 31377,
      strategy_points: 25,
    },
    43: {
      population: 31748,
      strategy_points: 25,
    },
    44: {
      population: 32115,
      strategy_points: 26,
    },
    45: {
      population: 32478,
      strategy_points: 27,
    },
    46: {
      population: 32837,
      strategy_points: 27,
    },
    47: {
      population: 33192,
      strategy_points: 28,
    },
    48: {
      population: 33543,
      strategy_points: 28,
    },
    49: {
      population: 33891,
      strategy_points: 29,
    },
    50: {
      population: 34235,
      strategy_points: 30,
    },
    51: {
      population: 34575,
      strategy_points: 30,
    },
    52: {
      population: 34913,
      strategy_points: 31,
    },
    53: {
      population: 35247,
      strategy_points: 31,
    },
    54: {
      population: 35578,
      strategy_points: 32,
    },
    55: {
      population: 35906,
      strategy_points: 33,
    },
    56: {
      population: 36231,
      strategy_points: 33,
    },
    57: {
      population: 36553,
      strategy_points: 34,
    },
    58: {
      population: 36872,
      strategy_points: 34,
    },
    59: {
      population: 37188,
      strategy_points: 35,
    },
    60: {
      population: 37502,
      strategy_points: 36,
    },
    61: {
      population: 37813,
      strategy_points: 36,
    },
    62: {
      population: 38122,
      strategy_points: 37,
    },
    63: {
      population: 38428,
      strategy_points: 37,
    },
    64: {
      population: 38732,
      strategy_points: 38,
    },
    65: {
      population: 39033,
      strategy_points: 39,
    },
    66: {
      population: 39333,
      strategy_points: 39,
    },
    67: {
      population: 39629,
      strategy_points: 40,
    },
    68: {
      population: 39924,
      strategy_points: 40,
    },
    69: {
      population: 40217,
      strategy_points: 41,
    },
    70: {
      population: 40507,
      strategy_points: 42,
    },
    71: {
      population: 40795,
      strategy_points: 42,
    },
    72: {
      population: 41082,
      strategy_points: 43,
    },
    73: {
      population: 41366,
      strategy_points: 43,
    },
    74: {
      population: 41648,
      strategy_points: 44,
    },
    75: {
      population: 41929,
      strategy_points: 45,
    },
    76: {
      population: 42207,
      strategy_points: 45,
    },
    77: {
      population: 42484,
      strategy_points: 46,
    },
    78: {
      population: 42759,
      strategy_points: 46,
    },
    79: {
      population: 43032,
      strategy_points: 47,
    },
    80: {
      population: 43304,
      strategy_points: 48,
    },
    81: {
      population: 43574,
      strategy_points: 48,
    },
    82: {
      population: 43842,
      strategy_points: 49,
    },
    83: {
      population: 44108,
      strategy_points: 49,
    },
    84: {
      population: 44373,
      strategy_points: 50,
    },
    85: {
      population: 44636,
      strategy_points: 51,
    },
    86: {
      population: 44898,
      strategy_points: 51,
    },
    87: {
      population: 45159,
      strategy_points: 52,
    },
    88: {
      population: 45417,
      strategy_points: 52,
    },
    89: {
      population: 45675,
      strategy_points: 53,
    },
    90: {
      population: 45930,
      strategy_points: 54,
    },
    91: {
      population: 46185,
      strategy_points: 54,
    },
    92: {
      population: 46438,
      strategy_points: 55,
    },
    93: {
      population: 46690,
      strategy_points: 55,
    },
    94: {
      population: 46940,
      strategy_points: 56,
    },
    95: {
      population: 47189,
      strategy_points: 57,
    },
    96: {
      population: 47437,
      strategy_points: 57,
    },
    97: {
      population: 47683,
      strategy_points: 58,
    },
    98: {
      population: 47928,
      strategy_points: 58,
    },
    99: {
      population: 48172,
      strategy_points: 59,
    },
    100: {
      population: 48415,
      strategy_points: 60,
    },
    101: {
      population: 48656,
      strategy_points: 60,
    },
    102: {
      population: 48897,
      strategy_points: 61,
    },
    103: {
      population: 49136,
      strategy_points: 61,
    },
    104: {
      population: 49374,
      strategy_points: 62,
    },
    105: {
      population: 49611,
      strategy_points: 63,
    },
    106: {
      population: 49846,
      strategy_points: 63,
    },
    107: {
      population: 50081,
      strategy_points: 64,
    },
    108: {
      population: 50314,
      strategy_points: 64,
    },
    109: {
      population: 50547,
      strategy_points: 65,
    },
    110: {
      population: 50778,
      strategy_points: 66,
    },
    111: {
      population: 51008,
      strategy_points: 66,
    },
    112: {
      population: 51238,
      strategy_points: 67,
    },
    113: {
      population: 51466,
      strategy_points: 67,
    },
    114: {
      population: 51693,
      strategy_points: 68,
    },
    115: {
      population: 51919,
      strategy_points: 69,
    },
    117: {
      population: 52369,
      strategy_points: 70,
    },
    118: {
      population: 52592,
      strategy_points: 70,
    },
    119: {
      population: 52814,
      strategy_points: 71,
    },
    120: {
      population: 53036,
      strategy_points: 72,
    },
    121: {
      population: 53256,
      strategy_points: 72,
    },
  },
  age: ages.ContemporaryEra.key,
  levels: ageCost,
};
