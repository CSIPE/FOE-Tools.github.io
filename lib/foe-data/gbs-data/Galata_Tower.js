const ages = require("../ages.json");
const ageCost = require("../ages-cost/Galata");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Galata_Tower",
  gbReward: {
    1: {
      plunder_repel: 16,
      random_goods: 5,
      random_goods_afterModern: 10,
    },
    2: {
      plunder_repel: 18,
      random_goods: 5,
      random_goods_afterModern: 10,
    },
    3: {
      plunder_repel: 20,
      random_goods: 6,
      random_goods_afterModern: 12,
    },
    4: {
      plunder_repel: 22,
      random_goods: 7,
      random_goods_afterModern: 14,
    },
    5: {
      plunder_repel: 23,
      random_goods: 8,
      random_goods_afterModern: 16,
    },
    6: {
      plunder_repel: 24,
      random_goods: 8,
      random_goods_afterModern: 16,
    },
    7: {
      plunder_repel: 25,
      random_goods: 9,
      random_goods_afterModern: 18,
    },
    8: {
      plunder_repel: 26,
      random_goods: 10,
      random_goods_afterModern: 20,
    },
    9: {
      plunder_repel: 27,
      random_goods: 11,
      random_goods_afterModern: 22,
    },
    10: {
      plunder_repel: 28,
      random_goods: 12,
      random_goods_afterModern: 24,
    },
    11: {
      plunder_repel: 28.73,
      random_goods: 13,
      random_goods_afterModern: 26,
    },
    12: {
      plunder_repel: 29.06,
      random_goods: 14,
      random_goods_afterModern: 28,
    },
    13: {
      plunder_repel: 29.38,
      random_goods: 15,
      random_goods_afterModern: 30,
    },
    14: {
      plunder_repel: 29.71,
      random_goods: 16,
      random_goods_afterModern: 32,
    },
    15: {
      plunder_repel: 30.04,
      random_goods: 17,
      random_goods_afterModern: 34,
    },
    16: {
      plunder_repel: 30.37,
      random_goods: 18,
      random_goods_afterModern: 36,
    },
    17: {
      plunder_repel: 30.69,
      random_goods: 38,
      random_goods_afterModern: 76,
    },
    18: {
      plunder_repel: 31.02,
      random_goods: 20,
      random_goods_afterModern: 40,
    },
    19: {
      plunder_repel: 31.35,
      random_goods: 21,
      random_goods_afterModern: 42,
    },
    20: {
      plunder_repel: 31.68,
      random_goods: 22,
      random_goods_afterModern: 44,
    },
    21: {
      plunder_repel: 32.01,
      random_goods: 23,
      random_goods_afterModern: 46,
    },
    22: {
      plunder_repel: 32.34,
      random_goods: 24,
      random_goods_afterModern: 48,
    },
    23: {
      plunder_repel: 32.67,
      random_goods: 25,
      random_goods_afterModern: 50,
    },
    24: {
      plunder_repel: 33,
      random_goods: 26,
      random_goods_afterModern: 52,
    },
    25: {
      plunder_repel: 33.33,
      random_goods: 27,
      random_goods_afterModern: 54,
    },
    26: {
      plunder_repel: 33.66,
      random_goods: 28,
      random_goods_afterModern: 56,
    },
    27: {
      plunder_repel: 33.99,
      random_goods: 29,
      random_goods_afterModern: 58,
    },
    28: {
      plunder_repel: 34.32,
      random_goods: 30,
      random_goods_afterModern: 60,
    },
    29: {
      plunder_repel: 34.65,
      random_goods: 31,
      random_goods_afterModern: 62,
    },
    30: {
      plunder_repel: 34.98,
      random_goods: 32,
      random_goods_afterModern: 64,
    },
    31: {
      plunder_repel: 35.31,
      random_goods: 33,
      random_goods_afterModern: 66,
    },
    32: {
      plunder_repel: 35.63,
      random_goods: 34,
      random_goods_afterModern: 68,
    },
    33: {
      plunder_repel: 35.96,
      random_goods: 35,
      random_goods_afterModern: 70,
    },
    34: {
      plunder_repel: 36.29,
      random_goods: 36,
      random_goods_afterModern: 72,
    },
    35: {
      plunder_repel: 36.62,
      random_goods: 37,
      random_goods_afterModern: 74,
    },
    36: {
      plunder_repel: 36.94,
      random_goods: 38,
      random_goods_afterModern: 76,
    },
    37: {
      plunder_repel: 37.27,
      random_goods: 39,
      random_goods_afterModern: 78,
    },
    38: {
      plunder_repel: 37.59,
      random_goods: 40,
      random_goods_afterModern: 80,
    },
    39: {
      plunder_repel: 37.91,
      random_goods: 41,
      random_goods_afterModern: 82,
    },
    40: {
      plunder_repel: 38.24,
      random_goods: 42,
      random_goods_afterModern: 84,
    },
    41: {
      plunder_repel: 38.56,
      random_goods: 43,
      random_goods_afterModern: 86,
    },
    42: {
      plunder_repel: 38.88,
      random_goods: 44,
      random_goods_afterModern: 88,
    },
    43: {
      plunder_repel: 39.2,
      random_goods: 45,
      random_goods_afterModern: 90,
    },
    44: {
      plunder_repel: 39.51,
      random_goods: 46,
      random_goods_afterModern: 92,
    },
    45: {
      plunder_repel: 39.83,
      random_goods: 47,
      random_goods_afterModern: 94,
    },
    46: {
      plunder_repel: 40.15,
      random_goods: 48,
      random_goods_afterModern: 96,
    },
    47: {
      plunder_repel: 40.46,
      random_goods: 49,
      random_goods_afterModern: 98,
    },
    48: {
      plunder_repel: 40.77,
      random_goods: 50,
      random_goods_afterModern: 100,
    },
    49: {
      plunder_repel: 41.08,
      random_goods: 51,
      random_goods_afterModern: 102,
    },
    50: {
      plunder_repel: 41.39,
      random_goods: 52,
      random_goods_afterModern: 104,
    },
    51: {
      plunder_repel: 41.7,
      random_goods: 53,
      random_goods_afterModern: 106,
    },
    52: {
      plunder_repel: 42.01,
      random_goods: 54,
      random_goods_afterModern: 108,
    },
    53: {
      plunder_repel: 42.31,
      random_goods: 55,
      random_goods_afterModern: 110,
    },
    54: {
      plunder_repel: 42.61,
      random_goods: 56,
      random_goods_afterModern: 112,
    },
    55: {
      plunder_repel: 42.91,
      random_goods: 57,
      random_goods_afterModern: 114,
    },
    56: {
      plunder_repel: 43.21,
      random_goods: 58,
      random_goods_afterModern: 116,
    },
    57: {
      plunder_repel: 43.51,
      random_goods: 59,
      random_goods_afterModern: 118,
    },
    58: {
      plunder_repel: 43.81,
      random_goods: 60,
      random_goods_afterModern: 120,
    },
    59: {
      plunder_repel: 44.1,
      random_goods: 61,
      random_goods_afterModern: 122,
    },
    60: {
      plunder_repel: 44.39,
      random_goods: 62,
      random_goods_afterModern: 124,
    },
    61: {
      plunder_repel: 44.68,
      random_goods: 63,
      random_goods_afterModern: 126,
    },
    62: {
      plunder_repel: 44.97,
      random_goods: 64,
      random_goods_afterModern: 128,
    },
    63: {
      plunder_repel: 45.25,
      random_goods: 65,
      random_goods_afterModern: 130,
    },
    64: {
      plunder_repel: 45.54,
      random_goods: 66,
      random_goods_afterModern: 132,
    },
    65: {
      plunder_repel: 45.82,
      random_goods: 67,
      random_goods_afterModern: 134,
    },
    66: {
      plunder_repel: 46.1,
      random_goods: 68,
      random_goods_afterModern: 136,
    },
    67: {
      plunder_repel: 46.38,
      random_goods: 69,
      random_goods_afterModern: 138,
    },
    68: {
      plunder_repel: 46.65,
      random_goods: 70,
      random_goods_afterModern: 140,
    },
    69: {
      plunder_repel: 46.92,
      random_goods: 71,
      random_goods_afterModern: 142,
    },
    70: {
      plunder_repel: 47.19,
      random_goods: 72,
      random_goods_afterModern: 144,
    },
    71: {
      plunder_repel: 47.46,
      random_goods: 73,
      random_goods_afterModern: 146,
    },
    72: {
      plunder_repel: 47.73,
      random_goods: 74,
      random_goods_afterModern: 148,
    },
    73: {
      plunder_repel: 47.99,
      random_goods: 75,
      random_goods_afterModern: 150,
    },
    74: {
      plunder_repel: 48.25,
      random_goods: 76,
      random_goods_afterModern: 152,
    },
    75: {
      plunder_repel: 48.51,
      random_goods: 77,
      random_goods_afterModern: 154,
    },
    76: {
      plunder_repel: 48.76,
      random_goods: 78,
      random_goods_afterModern: 156,
    },
    77: {
      plunder_repel: 49.02,
      random_goods: 79,
      random_goods_afterModern: 158,
    },
    78: {
      plunder_repel: 49.27,
      random_goods: 80,
      random_goods_afterModern: 160,
    },
    79: {
      plunder_repel: 49.52,
      random_goods: 81,
      random_goods_afterModern: 162,
    },
    80: {
      plunder_repel: 49.76,
      random_goods: 82,
      random_goods_afterModern: 164,
    },
    81: {
      plunder_repel: 50.01,
      random_goods: 83,
      random_goods_afterModern: 166,
    },
    82: {
      plunder_repel: 50.25,
      random_goods: 84,
      random_goods_afterModern: 168,
    },
    83: {
      plunder_repel: 50.49,
      random_goods: 85,
      random_goods_afterModern: 170,
    },
    84: {
      plunder_repel: 50.72,
      random_goods: 86,
      random_goods_afterModern: 172,
    },
    85: {
      plunder_repel: 50.96,
      random_goods: 87,
      random_goods_afterModern: 174,
    },
    86: {
      plunder_repel: 51.19,
      random_goods: 88,
      random_goods_afterModern: 176,
    },
    87: {
      plunder_repel: 51.42,
      random_goods: 89,
      random_goods_afterModern: 178,
    },
    88: {
      plunder_repel: 51.64,
      random_goods: 90,
      random_goods_afterModern: 180,
    },
    89: {
      plunder_repel: 51.87,
      random_goods: 91,
      random_goods_afterModern: 182,
    },
    90: {
      plunder_repel: 52.09,
      random_goods: 92,
      random_goods_afterModern: 184,
    },
    91: {
      plunder_repel: 52.3,
      random_goods: 93,
      random_goods_afterModern: 186,
    },
    92: {
      plunder_repel: 52.52,
      random_goods: 94,
      random_goods_afterModern: 188,
    },
    93: {
      plunder_repel: 52.73,
      random_goods: 95,
      random_goods_afterModern: 190,
    },
    94: {
      plunder_repel: 52.94,
      random_goods: 96,
      random_goods_afterModern: 192,
    },
    95: {
      plunder_repel: 53.15,
      random_goods: 97,
      random_goods_afterModern: 194,
    },
    96: {
      plunder_repel: 53.36,
      random_goods: 98,
      random_goods_afterModern: 196,
    },
    97: {
      plunder_repel: 53.56,
      random_goods: 99,
      random_goods_afterModern: 198,
    },
    98: {
      plunder_repel: 53.76,
      random_goods: 100,
      random_goods_afterModern: 200,
    },
    99: {
      plunder_repel: 53.96,
      random_goods: 101,
      random_goods_afterModern: 202,
    },
    100: {
      plunder_repel: 54.16,
      random_goods: 102,
      random_goods_afterModern: 204,
    },
    101: {
      plunder_repel: 54.35,
      random_goods: 103,
      random_goods_afterModern: 206,
    },
    102: {
      plunder_repel: 54.54,
      random_goods: 104,
      random_goods_afterModern: 208,
    },
    103: {
      plunder_repel: 54.73,
      random_goods: 105,
      random_goods_afterModern: 210,
    },
    104: {
      plunder_repel: 54.91,
      random_goods: 106,
      random_goods_afterModern: 212,
    },
    105: {
      plunder_repel: 55.1,
      random_goods: 107,
      random_goods_afterModern: 214,
    },
    106: {
      plunder_repel: 55.28,
      random_goods: 108,
      random_goods_afterModern: 216,
    },
    107: {
      plunder_repel: 55.46,
      random_goods: 109,
      random_goods_afterModern: 218,
    },
    108: {
      plunder_repel: 55.63,
      random_goods: 110,
      random_goods_afterModern: 220,
    },
    109: {
      plunder_repel: 55.81,
      random_goods: 111,
      random_goods_afterModern: 222,
    },
    110: {
      plunder_repel: 55.98,
      random_goods: 112,
      random_goods_afterModern: 224,
    },
    111: {
      plunder_repel: 56.15,
      random_goods: 113,
      random_goods_afterModern: 226,
    },
    114: {
      plunder_repel: 56.64,
      random_goods: 116,
      random_goods_afterModern: 232,
    },
    115: {
      plunder_repel: 56.8,
      random_goods: 117,
      random_goods_afterModern: 234,
    },
    116: {
      plunder_repel: 56.95,
      random_goods: 118,
      random_goods_afterModern: 236,
    },
    117: {
      plunder_repel: 57.11,
      random_goods: 119,
      random_goods_afterModern: 238,
    },
    118: {
      plunder_repel: 57.26,
      random_goods: 120,
      random_goods_afterModern: 240,
    },
    119: {
      plunder_repel: 57.41,
      random_goods: 121,
      random_goods_afterModern: 242,
    },
    120: {
      plunder_repel: 57.56,
      random_goods: 122,
      random_goods_afterModern: 244,
    },
    121: {
      plunder_repel: 57.71,
      random_goods: 123,
      random_goods_afterModern: 246,
    },
    125: {
      plunder_repel: 58.27,
      random_goods: 127,
      random_goods_afterModern: 254,
    },
  },
  age: ages.NoAge.key,
  size: { length: 4, width: 6 },
  levels: ageCost,
};
