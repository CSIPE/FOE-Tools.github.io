const ages = require("../ages.json");
const ageCost = require("../ages-cost/SpaceAgeAsteroidBelt");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Space_Carrier",
  gbReward: {
    1: {
      diplomatic_gifts: 7,
      special_goods: 10,
      trials: 4,
    },
    2: {
      diplomatic_gifts: 9,
      special_goods: 12,
      trials: 4,
    },
    3: {
      diplomatic_gifts: 11,
      special_goods: 14,
      trials: 4,
    },
    4: {
      diplomatic_gifts: 13,
      special_goods: 16,
      trials: 4,
    },
    5: {
      diplomatic_gifts: 15,
      special_goods: 17,
      trials: 5,
    },
    6: {
      diplomatic_gifts: 17,
      special_goods: 19,
      trials: 5,
    },
    7: {
      diplomatic_gifts: 19,
      special_goods: 21,
      trials: 5,
    },
    8: {
      diplomatic_gifts: 21,
      special_goods: 23,
      trials: 5,
    },
    9: {
      diplomatic_gifts: 23,
      special_goods: 24,
      trials: 5,
    },
    10: {
      diplomatic_gifts: 25,
      special_goods: 26,
      trials: 5,
    },
    11: {
      diplomatic_gifts: 25.62,
      special_goods: 28,
      trials: 5,
    },
    12: {
      diplomatic_gifts: 26.25,
      special_goods: 29,
      trials: 5,
    },
    13: {
      diplomatic_gifts: 26.87,
      special_goods: 30,
      trials: 5,
    },
    14: {
      diplomatic_gifts: 27.49,
      special_goods: 31,
      trials: 5,
    },
    15: {
      diplomatic_gifts: 28.11,
      special_goods: 32,
      trials: 5,
    },
    16: {
      diplomatic_gifts: 28.72,
      special_goods: 33,
      trials: 6,
    },
    17: {
      diplomatic_gifts: 29.33,
      special_goods: 34,
      trials: 6,
    },
    18: {
      diplomatic_gifts: 29.93,
      special_goods: 35,
      trials: 6,
    },
    19: {
      diplomatic_gifts: 30.53,
      special_goods: 36,
      trials: 6,
    },
    20: {
      diplomatic_gifts: 31.12,
      special_goods: 37,
      trials: 6,
    },
    21: {
      diplomatic_gifts: 31.71,
      special_goods: 38,
      trials: 6,
    },
    22: {
      diplomatic_gifts: 32.28,
      special_goods: 39,
      trials: 6,
    },
    23: {
      diplomatic_gifts: 32.85,
      special_goods: 40,
      trials: 6,
    },
    24: {
      diplomatic_gifts: 33.41,
      special_goods: 41,
      trials: 6,
    },
    25: {
      diplomatic_gifts: 33.96,
      special_goods: 42,
      trials: 6,
    },
    26: {
      diplomatic_gifts: 34.5,
      special_goods: 43,
      trials: 6,
    },
    27: {
      diplomatic_gifts: 35.03,
      special_goods: 44,
      trials: 6,
    },
    28: {
      diplomatic_gifts: 35.55,
      special_goods: 45,
      trials: 7,
    },
    29: {
      diplomatic_gifts: 36.06,
      special_goods: 46,
      trials: 7,
    },
    30: {
      diplomatic_gifts: 36.55,
      special_goods: 47,
      trials: 7,
    },
    31: {
      diplomatic_gifts: 37.04,
      special_goods: 48,
      trials: 7,
    },
    32: {
      diplomatic_gifts: 37.51,
      special_goods: 49,
      trials: 7,
    },
    33: {
      diplomatic_gifts: 37.98,
      special_goods: 50,
      trials: 7,
    },
    34: {
      diplomatic_gifts: 38.43,
      special_goods: 51,
      trials: 7,
    },
    35: {
      diplomatic_gifts: 38.86,
      special_goods: 52,
      trials: 7,
    },
    36: {
      diplomatic_gifts: 39.29,
      special_goods: 53,
      trials: 7,
    },
    37: {
      diplomatic_gifts: 39.71,
      special_goods: 53,
      trials: 7,
    },
    38: {
      diplomatic_gifts: 40.11,
      special_goods: 54,
      trials: 7,
    },
    39: {
      diplomatic_gifts: 40.5,
      special_goods: 55,
      trials: 7,
    },
    40: {
      diplomatic_gifts: 40.88,
      special_goods: 56,
      trials: 7,
    },
    41: {
      diplomatic_gifts: 41.25,
      special_goods: 57,
      trials: 8,
    },
    42: {
      diplomatic_gifts: 41.6,
      special_goods: 58,
      trials: 8,
    },
    43: {
      diplomatic_gifts: 41.94,
      special_goods: 58,
      trials: 8,
    },
    44: {
      diplomatic_gifts: 42.28,
      special_goods: 59,
      trials: 8,
    },
    45: {
      diplomatic_gifts: 42.6,
      special_goods: 60,
      trials: 8,
    },
    46: {
      diplomatic_gifts: 42.91,
      special_goods: 61,
      trials: 8,
    },
    47: {
      diplomatic_gifts: 43.21,
      special_goods: 61,
      trials: 8,
    },
    48: {
      diplomatic_gifts: 43.49,
      special_goods: 62,
      trials: 8,
    },
    49: {
      diplomatic_gifts: 43.77,
      special_goods: 63,
      trials: 8,
    },
    50: {
      diplomatic_gifts: 44.04,
      special_goods: 64,
      trials: 8,
    },
    51: {
      diplomatic_gifts: 44.3,
      special_goods: 64,
      trials: 8,
    },
    52: {
      diplomatic_gifts: 44.55,
      special_goods: 65,
      trials: 8,
    },
    53: {
      diplomatic_gifts: 44.78,
      special_goods: 65,
      trials: 8,
    },
    54: {
      diplomatic_gifts: 45.01,
      special_goods: 66,
      trials: 8,
    },
    55: {
      diplomatic_gifts: 45.23,
      special_goods: 67,
      trials: 8,
    },
    56: {
      diplomatic_gifts: 45.44,
      special_goods: 67,
      trials: 8,
    },
    57: {
      diplomatic_gifts: 45.65,
      special_goods: 68,
      trials: 8,
    },
    58: {
      diplomatic_gifts: 45.84,
      special_goods: 68,
      trials: 9,
    },
    59: {
      diplomatic_gifts: 46.03,
      special_goods: 69,
      trials: 9,
    },
    60: {
      diplomatic_gifts: 46.21,
      special_goods: 69,
      trials: 9,
    },
    61: {
      diplomatic_gifts: 46.38,
      special_goods: 70,
      trials: 9,
    },
    62: {
      diplomatic_gifts: 46.54,
      special_goods: 70,
      trials: 9,
    },
    63: {
      diplomatic_gifts: 46.7,
      special_goods: 70,
      trials: 9,
    },
    64: {
      diplomatic_gifts: 46.85,
      special_goods: 71,
      trials: 9,
    },
    65: {
      diplomatic_gifts: 47,
      special_goods: 71,
      trials: 9,
    },
    66: {
      diplomatic_gifts: 47.13,
      special_goods: 72,
      trials: 9,
    },
    67: {
      diplomatic_gifts: 47.27,
      special_goods: 72,
      trials: 9,
    },
    68: {
      diplomatic_gifts: 47.39,
      special_goods: 72,
      trials: 9,
    },
    69: {
      diplomatic_gifts: 47.51,
      special_goods: 73,
      trials: 9,
    },
    70: {
      diplomatic_gifts: 47.63,
      special_goods: 73,
      trials: 9,
    },
    71: {
      diplomatic_gifts: 47.74,
      special_goods: 73,
      trials: 9,
    },
    72: {
      diplomatic_gifts: 47.84,
      special_goods: 74,
      trials: 9,
    },
    73: {
      diplomatic_gifts: 47.95,
      special_goods: 74,
      trials: 9,
    },
    74: {
      diplomatic_gifts: 48.04,
      special_goods: 74,
      trials: 9,
    },
    75: {
      diplomatic_gifts: 48.13,
      special_goods: 74,
      trials: 9,
    },
    76: {
      diplomatic_gifts: 48.22,
      special_goods: 75,
      trials: 9,
    },
    77: {
      diplomatic_gifts: 48.31,
      special_goods: 75,
      trials: 9,
    },
    78: {
      diplomatic_gifts: 48.39,
      special_goods: 75,
      trials: 9,
    },
    79: {
      diplomatic_gifts: 48.46,
      special_goods: 75,
      trials: 9,
    },
    80: {
      diplomatic_gifts: 48.53,
      special_goods: 76,
      trials: 9,
    },
    81: {
      diplomatic_gifts: 48.6,
      special_goods: 76,
      trials: 9,
    },
    82: {
      diplomatic_gifts: 48.67,
      special_goods: 76,
      trials: 9,
    },
    83: {
      diplomatic_gifts: 48.73,
      special_goods: 76,
      trials: 9,
    },
    84: {
      diplomatic_gifts: 48.79,
      special_goods: 76,
      trials: 9,
    },
    85: {
      diplomatic_gifts: 48.85,
      special_goods: 77,
      trials: 9,
    },
    86: {
      diplomatic_gifts: 48.91,
      special_goods: 77,
      trials: 9,
    },
    87: {
      diplomatic_gifts: 48.96,
      special_goods: 77,
      trials: 9,
    },
    88: {
      diplomatic_gifts: 49.01,
      special_goods: 77,
      trials: 9,
    },
    89: {
      diplomatic_gifts: 49.06,
      special_goods: 77,
      trials: 9,
    },
    90: {
      diplomatic_gifts: 49.1,
      special_goods: 77,
      trials: 9,
    },
    91: {
      diplomatic_gifts: 49.14,
      special_goods: 77,
      trials: 10,
    },
    92: {
      diplomatic_gifts: 49.18,
      special_goods: 78,
      trials: 10,
    },
    93: {
      diplomatic_gifts: 49.22,
      special_goods: 78,
      trials: 10,
    },
    94: {
      diplomatic_gifts: 49.26,
      special_goods: 78,
      trials: 10,
    },
    95: {
      diplomatic_gifts: 49.3,
      special_goods: 78,
      trials: 10,
    },
    96: {
      diplomatic_gifts: 49.33,
      special_goods: 78,
      trials: 10,
    },
    97: {
      diplomatic_gifts: 49.36,
      special_goods: 78,
      trials: 10,
    },
    98: {
      diplomatic_gifts: 49.39,
      special_goods: 78,
      trials: 10,
    },
    99: {
      diplomatic_gifts: 49.42,
      special_goods: 78,
      trials: 10,
    },
    100: {
      diplomatic_gifts: 49.45,
      special_goods: 78,
      trials: 10,
    },
    101: {
      diplomatic_gifts: 49.48,
      special_goods: 78,
      trials: 10,
    },
    102: {
      diplomatic_gifts: 49.5,
      special_goods: 78,
      trials: 10,
    },
    103: {
      diplomatic_gifts: 49.53,
      special_goods: 79,
      trials: 10,
    },
    104: {
      diplomatic_gifts: 49.55,
      special_goods: 79,
      trials: 10,
    },
    105: {
      diplomatic_gifts: 49.57,
      special_goods: 79,
      trials: 10,
    },
    106: {
      diplomatic_gifts: 49.59,
      special_goods: 79,
      trials: 10,
    },
    107: {
      diplomatic_gifts: 49.61,
      special_goods: 79,
      trials: 10,
    },
    108: {
      diplomatic_gifts: 49.63,
      special_goods: 79,
      trials: 10,
    },
    109: {
      diplomatic_gifts: 49.65,
      special_goods: 79,
      trials: 10,
    },
  },
  buildCost: {
    nickel: 750,
    processed_materials: 750,
    compound_fluid: 750,
    bromine: 750,
    platinum_crystals: 750,
  },
  age: ages.SpaceAgeAsteroidBelt.key,
  size: { length: 7, width: 4 },
  levels: ageCost,
};
