const ages = require("../ages.json");
const ageCost = require("../ages-cost/OceanicFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "The_Kraken",
  gbReward: {
    1: {
      first_strike: 20,
      strategy_points: 1,
      trials: 10,
    },
    2: {
      first_strike: 21,
      strategy_points: 1,
      trials: 10,
    },
    3: {
      first_strike: 22,
      strategy_points: 3,
      trials: 10,
    },
    4: {
      first_strike: 23,
      strategy_points: 3,
      trials: 11,
    },
    5: {
      first_strike: 25,
      strategy_points: 4,
      trials: 11,
    },
    6: {
      first_strike: 27,
      strategy_points: 4,
      trials: 11,
    },
    7: {
      first_strike: 28,
      strategy_points: 5,
      trials: 11,
    },
    8: {
      first_strike: 29,
      strategy_points: 5,
      trials: 12,
    },
    9: {
      first_strike: 31,
      strategy_points: 6,
      trials: 12,
    },
    10: {
      first_strike: 32,
      strategy_points: 8,
      trials: 12,
    },
    11: {
      first_strike: 33.92,
      strategy_points: 8,
      trials: 12,
    },
    12: {
      first_strike: 35.43,
      strategy_points: 9,
      trials: 13,
    },
    13: {
      first_strike: 36.97,
      strategy_points: 10,
      trials: 13,
    },
    14: {
      first_strike: 38.54,
      strategy_points: 11,
      trials: 13,
    },
    15: {
      first_strike: 40.13,
      strategy_points: 12,
      trials: 13,
    },
    16: {
      first_strike: 41.74,
      strategy_points: 12,
      trials: 13,
    },
    17: {
      first_strike: 43.37,
      strategy_points: 13,
      trials: 14,
    },
    18: {
      first_strike: 45.02,
      strategy_points: 14,
      trials: 14,
    },
    19: {
      first_strike: 46.67,
      strategy_points: 15,
      trials: 14,
    },
    20: {
      first_strike: 48.33,
      strategy_points: 16,
      trials: 14,
    },
    21: {
      first_strike: 50,
      strategy_points: 16,
      trials: 15,
    },
    22: {
      first_strike: 51.67,
      strategy_points: 17,
      trials: 15,
    },
    23: {
      first_strike: 53.33,
      strategy_points: 18,
      trials: 15,
    },
    24: {
      first_strike: 54.98,
      strategy_points: 19,
      trials: 15,
    },
    25: {
      first_strike: 56.63,
      strategy_points: 20,
      trials: 16,
    },
    26: {
      first_strike: 58.26,
      strategy_points: 20,
      trials: 16,
    },
    27: {
      first_strike: 59.87,
      strategy_points: 21,
      trials: 16,
    },
    28: {
      first_strike: 61.46,
      strategy_points: 22,
      trials: 16,
    },
    29: {
      first_strike: 63.03,
      strategy_points: 23,
      trials: 17,
    },
    30: {
      first_strike: 64.57,
      strategy_points: 24,
      trials: 17,
    },
    31: {
      first_strike: 66.08,
      strategy_points: 24,
      trials: 17,
    },
    32: {
      first_strike: 67.55,
      strategy_points: 25,
      trials: 17,
    },
    33: {
      first_strike: 69,
      strategy_points: 26,
      trials: 17,
    },
    34: {
      first_strike: 70.41,
      strategy_points: 27,
      trials: 18,
    },
    35: {
      first_strike: 71.78,
      strategy_points: 28,
      trials: 18,
    },
    36: {
      first_strike: 73.11,
      strategy_points: 28,
      trials: 18,
    },
    37: {
      first_strike: 74.4,
      strategy_points: 29,
      trials: 18,
    },
    38: {
      first_strike: 75.65,
      strategy_points: 30,
      trials: 18,
    },
    39: {
      first_strike: 76.85,
      strategy_points: 31,
      trials: 19,
    },
    40: {
      first_strike: 78.02,
      strategy_points: 32,
      trials: 19,
    },
    41: {
      first_strike: 79.14,
      strategy_points: 32,
      trials: 19,
    },
    42: {
      first_strike: 80.22,
      strategy_points: 33,
      trials: 19,
    },
    43: {
      first_strike: 81.26,
      strategy_points: 34,
      trials: 19,
    },
    44: {
      first_strike: 82.25,
      strategy_points: 35,
      trials: 20,
    },
    45: {
      first_strike: 83.2,
      strategy_points: 36,
      trials: 20,
    },
    46: {
      first_strike: 84.11,
      strategy_points: 36,
      trials: 20,
    },
    47: {
      first_strike: 84.98,
      strategy_points: 37,
      trials: 20,
    },
    48: {
      first_strike: 85.81,
      strategy_points: 38,
      trials: 20,
    },
    49: {
      first_strike: 86.61,
      strategy_points: 39,
      trials: 20,
    },
    50: {
      first_strike: 87.36,
      strategy_points: 40,
      trials: 21,
    },
    51: {
      first_strike: 88.08,
      strategy_points: 40,
      trials: 21,
    },
    52: {
      first_strike: 88.76,
      strategy_points: 41,
      trials: 21,
    },
    53: {
      first_strike: 89.41,
      strategy_points: 42,
      trials: 21,
    },
    54: {
      first_strike: 90.02,
      strategy_points: 43,
      trials: 21,
    },
    55: {
      first_strike: 90.61,
      strategy_points: 44,
      trials: 21,
    },
    56: {
      first_strike: 91.16,
      strategy_points: 44,
      trials: 21,
    },
    57: {
      first_strike: 91.68,
      strategy_points: 45,
      trials: 21,
    },
    58: {
      first_strike: 92.18,
      strategy_points: 46,
      trials: 22,
    },
    59: {
      first_strike: 92.64,
      strategy_points: 47,
      trials: 22,
    },
    60: {
      first_strike: 93.09,
      strategy_points: 48,
      trials: 22,
    },
    61: {
      first_strike: 93.5,
      strategy_points: 48,
      trials: 22,
    },
    62: {
      first_strike: 93.9,
      strategy_points: 49,
      trials: 22,
    },
    63: {
      first_strike: 94.27,
      strategy_points: 50,
      trials: 22,
    },
    64: {
      first_strike: 94.62,
      strategy_points: 51,
      trials: 22,
    },
    65: {
      first_strike: 94.95,
      strategy_points: 52,
      trials: 22,
    },
    66: {
      first_strike: 95.26,
      strategy_points: 52,
      trials: 22,
    },
    67: {
      first_strike: 95.55,
      strategy_points: 53,
      trials: 23,
    },
    68: {
      first_strike: 95.82,
      strategy_points: 54,
      trials: 23,
    },
    69: {
      first_strike: 96.08,
      strategy_points: 55,
      trials: 23,
    },
    70: {
      first_strike: 96.33,
      strategy_points: 56,
      trials: 23,
    },
    71: {
      first_strike: 96.56,
      strategy_points: 56,
      trials: 23,
    },
    72: {
      first_strike: 96.77,
      strategy_points: 57,
      trials: 23,
    },
    73: {
      first_strike: 96.97,
      strategy_points: 58,
      trials: 23,
    },
    74: {
      first_strike: 97.16,
      strategy_points: 59,
      trials: 23,
    },
    75: {
      first_strike: 97.34,
      strategy_points: 60,
      trials: 23,
    },
    76: {
      first_strike: 97.51,
      strategy_points: 60,
      trials: 23,
    },
    77: {
      first_strike: 97.66,
      strategy_points: 61,
      trials: 23,
    },
    78: {
      first_strike: 97.81,
      strategy_points: 62,
      trials: 23,
    },
    79: {
      first_strike: 97.95,
      strategy_points: 63,
      trials: 23,
    },
    80: {
      first_strike: 98.08,
      strategy_points: 64,
      trials: 23,
    },
    81: {
      first_strike: 98.2,
      strategy_points: 64,
      trials: 24,
    },
    82: {
      first_strike: 98.32,
      strategy_points: 65,
      trials: 24,
    },
    83: {
      first_strike: 98.42,
      strategy_points: 66,
      trials: 24,
    },
    84: {
      first_strike: 98.52,
      strategy_points: 67,
      trials: 24,
    },
    85: {
      first_strike: 98.62,
      strategy_points: 68,
      trials: 24,
    },
    86: {
      first_strike: 98.7,
      strategy_points: 68,
      trials: 24,
    },
    87: {
      first_strike: 98.79,
      strategy_points: 69,
      trials: 24,
    },
    88: {
      first_strike: 98.86,
      strategy_points: 70,
      trials: 24,
    },
    89: {
      first_strike: 98.94,
      strategy_points: 71,
      trials: 24,
    },
    90: {
      first_strike: 99,
      strategy_points: 72,
      trials: 24,
    },
    91: {
      first_strike: 99.07,
      strategy_points: 72,
      trials: 24,
    },
    92: {
      first_strike: 99.13,
      strategy_points: 73,
      trials: 24,
    },
    93: {
      first_strike: 99.18,
      strategy_points: 74,
      trials: 24,
    },
    94: {
      first_strike: 99.24,
      strategy_points: 75,
      trials: 24,
    },
    95: {
      first_strike: 99.28,
      strategy_points: 76,
      trials: 24,
    },
    96: {
      first_strike: 99.33,
      strategy_points: 76,
      trials: 24,
    },
    97: {
      first_strike: 99.37,
      strategy_points: 77,
      trials: 24,
    },
    98: {
      first_strike: 99.41,
      strategy_points: 78,
      trials: 24,
    },
    99: {
      first_strike: 99.45,
      strategy_points: 79,
      trials: 24,
    },
    100: {
      first_strike: 99.49,
      strategy_points: 80,
      trials: 24,
    },
    101: {
      first_strike: 99.52,
      strategy_points: 80,
      trials: 24,
    },
    102: {
      first_strike: 99.55,
      strategy_points: 81,
      trials: 24,
    },
    103: {
      first_strike: 99.58,
      strategy_points: 82,
      trials: 24,
    },
    104: {
      first_strike: 99.61,
      strategy_points: 83,
      trials: 24,
    },
    105: {
      first_strike: 99.63,
      strategy_points: 84,
      trials: 24,
    },
    106: {
      first_strike: 99.66,
      strategy_points: 84,
      trials: 24,
    },
    107: {
      first_strike: 99.68,
      strategy_points: 85,
      trials: 24,
    },
    108: {
      first_strike: 99.7,
      strategy_points: 86,
      trials: 24,
    },
    109: {
      first_strike: 99.72,
      strategy_points: 87,
      trials: 24,
    },
    110: {
      first_strike: 99.74,
      strategy_points: 88,
      trials: 25,
    },
    111: {
      first_strike: 99.75,
      strategy_points: 88,
      trials: 25,
    },
    112: {
      first_strike: 99.77,
      strategy_points: 89,
      trials: 25,
    },
    113: {
      first_strike: 99.78,
      strategy_points: 90,
      trials: 25,
    },
    114: {
      first_strike: 99.8,
      strategy_points: 91,
      trials: 25,
    },
    115: {
      first_strike: 99.81,
      strategy_points: 92,
      trials: 25,
    },
    116: {
      first_strike: 99.82,
      strategy_points: 92,
      trials: 25,
    },
    117: {
      first_strike: 99.83,
      strategy_points: 93,
      trials: 25,
    },
    118: {
      first_strike: 99.84,
      strategy_points: 94,
      trials: 25,
    },
    119: {
      first_strike: 99.85,
      strategy_points: 95,
      trials: 25,
    },
    120: {
      first_strike: 99.86,
      strategy_points: 96,
      trials: 25,
    },
    121: {
      first_strike: 99.87,
      strategy_points: 96,
      trials: 25,
    },
    122: {
      first_strike: 99.88,
      strategy_points: 97,
      trials: 25,
    },
    123: {
      first_strike: 99.89,
      strategy_points: 98,
      trials: 25,
    },
    124: {
      first_strike: 99.9,
      strategy_points: 99,
      trials: 25,
    },
    125: {
      first_strike: 99.9,
      strategy_points: 100,
      trials: 25,
    },
    126: {
      first_strike: 99.91,
      strategy_points: 100,
      trials: 25,
    },
    127: {
      first_strike: 99.91,
      strategy_points: 101,
      trials: 25,
    },
    128: {
      first_strike: 99.92,
      strategy_points: 102,
      trials: 25,
    },
    129: {
      first_strike: 99.93,
      strategy_points: 103,
      trials: 25,
    },
    130: {
      first_strike: 99.93,
      strategy_points: 104,
      trials: 25,
    },
    131: {
      first_strike: 99.93,
      strategy_points: 104,
      trials: 25,
    },
    132: {
      first_strike: 99.94,
      strategy_points: 105,
      trials: 25,
    },
    133: {
      first_strike: 99.94,
      strategy_points: 106,
      trials: 25,
    },
    134: {
      first_strike: 99.95,
      strategy_points: 107,
      trials: 25,
    },
  },
  buildCost: {
    artificial_scales: 550,
    biolight: 500,
    corals: 450,
    pearls: 300,
    plankton: 350,
  },
  age: ages.OceanicFuture.key,
  size: { length: 5, width: 5 },
  levels: ageCost,
};
