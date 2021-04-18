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
    },
    2: {
      diplomatic_gifts: 9,
      special_goods: 12,
    },
    3: {
      diplomatic_gifts: 11,
      special_goods: 14,
    },
    4: {
      diplomatic_gifts: 13,
      special_goods: 16,
    },
    5: {
      diplomatic_gifts: 15,
      special_goods: 17,
    },
    6: {
      diplomatic_gifts: 17,
      special_goods: 19,
    },
    7: {
      diplomatic_gifts: 19,
      special_goods: 21,
    },
    8: {
      diplomatic_gifts: 21,
      special_goods: 23,
    },
    9: {
      diplomatic_gifts: 23,
      special_goods: 24,
    },
    10: {
      diplomatic_gifts: 25,
      special_goods: 26,
    },
    11: {
      diplomatic_gifts: 25.62,
      special_goods: 28,
    },
    12: {
      diplomatic_gifts: 26.25,
      special_goods: 29,
    },
    13: {
      diplomatic_gifts: 26.87,
      special_goods: 30,
    },
    14: {
      diplomatic_gifts: 27.49,
      special_goods: 31,
    },
    15: {
      diplomatic_gifts: 28.11,
      special_goods: 32,
    },
    16: {
      diplomatic_gifts: 28.72,
      special_goods: 33,
    },
    17: {
      diplomatic_gifts: 29.33,
      special_goods: 34,
    },
    18: {
      diplomatic_gifts: 29.93,
      special_goods: 35,
    },
    19: {
      diplomatic_gifts: 30.53,
      special_goods: 36,
    },
    20: {
      diplomatic_gifts: 31.12,
      special_goods: 37,
    },
    21: {
      diplomatic_gifts: 31.71,
      special_goods: 38,
    },
    22: {
      diplomatic_gifts: 32.28,
      special_goods: 39,
    },
    23: {
      diplomatic_gifts: 32.85,
      special_goods: 40,
    },
    24: {
      diplomatic_gifts: 33.41,
      special_goods: 41,
    },
    25: {
      diplomatic_gifts: 33.96,
      special_goods: 42,
    },
    26: {
      diplomatic_gifts: 34.5,
      special_goods: 43,
    },
    27: {
      diplomatic_gifts: 35.03,
      special_goods: 44,
    },
    28: {
      diplomatic_gifts: 35.55,
      special_goods: 45,
    },
    29: {
      diplomatic_gifts: 36.06,
      special_goods: 46,
    },
    30: {
      diplomatic_gifts: 36.55,
      special_goods: 47,
    },
    31: {
      diplomatic_gifts: 37.04,
      special_goods: 48,
    },
    32: {
      diplomatic_gifts: 37.51,
      special_goods: 49,
    },
    33: {
      diplomatic_gifts: 37.98,
      special_goods: 50,
    },
    34: {
      diplomatic_gifts: 38.43,
      special_goods: 51,
    },
    35: {
      diplomatic_gifts: 38.86,
      special_goods: 52,
    },
    36: {
      diplomatic_gifts: 39.29,
      special_goods: 53,
    },
    37: {
      diplomatic_gifts: 39.71,
      special_goods: 53,
    },
    38: {
      diplomatic_gifts: 40.11,
      special_goods: 54,
    },
    39: {
      diplomatic_gifts: 40.5,
      special_goods: 55,
    },
    40: {
      diplomatic_gifts: 40.88,
      special_goods: 56,
    },
    41: {
      diplomatic_gifts: 41.25,
      special_goods: 57,
    },
    42: {
      diplomatic_gifts: 41.6,
      special_goods: 58,
    },
    43: {
      diplomatic_gifts: 41.94,
      special_goods: 58,
    },
    44: {
      diplomatic_gifts: 42.28,
      special_goods: 59,
    },
    45: {
      diplomatic_gifts: 42.6,
      special_goods: 60,
    },
    46: {
      diplomatic_gifts: 42.91,
      special_goods: 61,
    },
    47: {
      diplomatic_gifts: 43.21,
      special_goods: 61,
    },
    48: {
      diplomatic_gifts: 43.49,
      special_goods: 62,
    },
    49: {
      diplomatic_gifts: 43.77,
      special_goods: 63,
    },
    50: {
      diplomatic_gifts: 44.04,
      special_goods: 64,
    },
    51: {
      diplomatic_gifts: 44.3,
      special_goods: 64,
    },
    52: {
      diplomatic_gifts: 44.55,
      special_goods: 65,
    },
    53: {
      diplomatic_gifts: 44.78,
      special_goods: 65,
    },
    54: {
      diplomatic_gifts: 45.01,
      special_goods: 66,
    },
    55: {
      diplomatic_gifts: 45.23,
      special_goods: 67,
    },
    56: {
      diplomatic_gifts: 45.44,
      special_goods: 67,
    },
    57: {
      diplomatic_gifts: 45.65,
      special_goods: 68,
    },
    58: {
      diplomatic_gifts: 45.84,
      special_goods: 68,
    },
    59: {
      diplomatic_gifts: 46.03,
      special_goods: 69,
    },
    60: {
      diplomatic_gifts: 46.21,
      special_goods: 69,
    },
    61: {
      diplomatic_gifts: 46.38,
      special_goods: 70,
    },
    62: {
      diplomatic_gifts: 46.54,
      special_goods: 70,
    },
    63: {
      diplomatic_gifts: 46.7,
      special_goods: 70,
    },
    64: {
      diplomatic_gifts: 46.85,
      special_goods: 71,
    },
    65: {
      diplomatic_gifts: 47,
      special_goods: 71,
    },
    66: {
      diplomatic_gifts: 47.13,
      special_goods: 72,
    },
    67: {
      diplomatic_gifts: 47.27,
      special_goods: 72,
    },
    68: {
      diplomatic_gifts: 47.39,
      special_goods: 72,
    },
    69: {
      diplomatic_gifts: 47.51,
      special_goods: 73,
    },
    70: {
      diplomatic_gifts: 47.63,
      special_goods: 73,
    },
    71: {
      diplomatic_gifts: 47.74,
      special_goods: 73,
    },
    72: {
      diplomatic_gifts: 47.84,
      special_goods: 74,
    },
    73: {
      diplomatic_gifts: 47.95,
      special_goods: 74,
    },
    74: {
      diplomatic_gifts: 48.04,
      special_goods: 74,
    },
    75: {
      diplomatic_gifts: 48.13,
      special_goods: 74,
    },
    76: {
      diplomatic_gifts: 48.22,
      special_goods: 75,
    },
    77: {
      diplomatic_gifts: 48.31,
      special_goods: 75,
    },
    78: {
      diplomatic_gifts: 48.39,
      special_goods: 75,
    },
    79: {
      diplomatic_gifts: 48.46,
      special_goods: 75,
    },
    80: {
      diplomatic_gifts: 48.53,
      special_goods: 76,
    },
    81: {
      diplomatic_gifts: 48.6,
      special_goods: 76,
    },
    82: {
      diplomatic_gifts: 48.67,
      special_goods: 76,
    },
    83: {
      diplomatic_gifts: 48.73,
      special_goods: 76,
    },
    84: {
      diplomatic_gifts: 48.79,
      special_goods: 76,
    },
    85: {
      diplomatic_gifts: 48.85,
      special_goods: 77,
    },
    86: {
      diplomatic_gifts: 48.91,
      special_goods: 77,
    },
    87: {
      diplomatic_gifts: 48.96,
      special_goods: 77,
    },
    88: {
      diplomatic_gifts: 49.01,
      special_goods: 77,
    },
    89: {
      diplomatic_gifts: 49.06,
      special_goods: 77,
    },
    90: {
      diplomatic_gifts: 49.1,
      special_goods: 77,
    },
    91: {
      diplomatic_gifts: 49.14,
      special_goods: 77,
    },
    92: {
      diplomatic_gifts: 49.18,
      special_goods: 78,
    },
    93: {
      diplomatic_gifts: 49.22,
      special_goods: 78,
    },
    94: {
      diplomatic_gifts: 49.26,
      special_goods: 78,
    },
    95: {
      diplomatic_gifts: 49.3,
      special_goods: 78,
    },
    96: {
      diplomatic_gifts: 49.33,
      special_goods: 78,
    },
    97: {
      diplomatic_gifts: 49.36,
      special_goods: 78,
    },
    98: {
      diplomatic_gifts: 49.39,
      special_goods: 78,
    },
    99: {
      diplomatic_gifts: 49.42,
      special_goods: 78,
    },
    100: {
      diplomatic_gifts: 49.45,
      special_goods: 78,
    },
    101: {
      diplomatic_gifts: 49.48,
      special_goods: 78,
    },
    102: {
      diplomatic_gifts: 49.5,
      special_goods: 78,
    },
    103: {
      diplomatic_gifts: 49.53,
      special_goods: 79,
    },
    104: {
      diplomatic_gifts: 49.55,
      special_goods: 79,
    },
    105: {
      diplomatic_gifts: 49.57,
      special_goods: 79,
    },
    106: {
      diplomatic_gifts: 49.59,
      special_goods: 79,
    },
  },
  age: ages.SpaceAgeAsteroidBelt.key,
  levels: ageCost,
};
