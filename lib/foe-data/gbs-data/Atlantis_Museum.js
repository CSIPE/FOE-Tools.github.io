const ages = require("../ages.json");
const ageCost = require("../ages-cost/OceanicFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Atlantis_Museum",
  gbReward: {
    1: {
      plunder_and_pillage: 12,
      random_goods: 10,
      random_goods_afterModern: 20,
    },
    2: {
      plunder_and_pillage: 13,
      random_goods: 12,
      random_goods_afterModern: 24,
    },
    3: {
      plunder_and_pillage: 14.25,
      random_goods: 14,
      random_goods_afterModern: 28,
    },
    4: {
      plunder_and_pillage: 15.4,
      random_goods: 15,
      random_goods_afterModern: 30,
    },
    5: {
      plunder_and_pillage: 16.6,
      random_goods: 17,
      random_goods_afterModern: 34,
    },
    6: {
      plunder_and_pillage: 17.8,
      random_goods: 19,
      random_goods_afterModern: 38,
    },
    7: {
      plunder_and_pillage: 19,
      random_goods: 21,
      random_goods_afterModern: 42,
    },
    8: {
      plunder_and_pillage: 20.25,
      random_goods: 44,
      random_goods_afterModern: 88,
    },
    9: {
      plunder_and_pillage: 21.5,
      random_goods: 24,
      random_goods_afterModern: 48,
    },
    10: {
      plunder_and_pillage: 22.75,
      random_goods: 26,
      random_goods_afterModern: 52,
    },
    11: {
      plunder_and_pillage: 23.86,
      random_goods: 27,
      random_goods_afterModern: 54,
    },
    12: {
      plunder_and_pillage: 24.24,
      random_goods: 28,
      random_goods_afterModern: 56,
    },
    13: {
      plunder_and_pillage: 24.62,
      random_goods: 29,
      random_goods_afterModern: 58,
    },
    14: {
      plunder_and_pillage: 25,
      random_goods: 30,
      random_goods_afterModern: 60,
    },
    15: {
      plunder_and_pillage: 25.38,
      random_goods: 31,
      random_goods_afterModern: 62,
    },
    16: {
      plunder_and_pillage: 25.76,
      random_goods: 32,
      random_goods_afterModern: 64,
    },
    17: {
      plunder_and_pillage: 26.14,
      random_goods: 33,
      random_goods_afterModern: 66,
    },
    18: {
      plunder_and_pillage: 26.51,
      random_goods: 34,
      random_goods_afterModern: 68,
    },
    19: {
      plunder_and_pillage: 26.89,
      random_goods: 35,
      random_goods_afterModern: 70,
    },
    20: {
      plunder_and_pillage: 27.27,
      random_goods: 36,
      random_goods_afterModern: 72,
    },
    21: {
      plunder_and_pillage: 27.64,
      random_goods: 37,
      random_goods_afterModern: 74,
    },
    22: {
      plunder_and_pillage: 28.02,
      random_goods: 38,
      random_goods_afterModern: 76,
    },
    23: {
      plunder_and_pillage: 28.39,
      random_goods: 39,
      random_goods_afterModern: 78,
    },
    24: {
      plunder_and_pillage: 28.76,
      random_goods: 40,
      random_goods_afterModern: 80,
    },
    25: {
      plunder_and_pillage: 29.13,
      random_goods: 41,
      random_goods_afterModern: 82,
    },
    26: {
      plunder_and_pillage: 29.5,
      random_goods: 42,
      random_goods_afterModern: 84,
    },
    27: {
      plunder_and_pillage: 29.86,
      random_goods: 43,
      random_goods_afterModern: 86,
    },
    28: {
      plunder_and_pillage: 30.22,
      random_goods: 44,
      random_goods_afterModern: 88,
    },
    29: {
      plunder_and_pillage: 30.59,
      random_goods: 45,
      random_goods_afterModern: 90,
    },
    30: {
      plunder_and_pillage: 30.94,
      random_goods: 46,
      random_goods_afterModern: 92,
    },
    31: {
      plunder_and_pillage: 31.3,
      random_goods: 47,
      random_goods_afterModern: 94,
    },
    32: {
      plunder_and_pillage: 31.65,
      random_goods: 48,
      random_goods_afterModern: 96,
    },
    33: {
      plunder_and_pillage: 32,
      random_goods: 49,
      random_goods_afterModern: 98,
    },
    34: {
      plunder_and_pillage: 32.35,
      random_goods: 50,
      random_goods_afterModern: 100,
    },
    35: {
      plunder_and_pillage: 32.7,
      random_goods: 51,
      random_goods_afterModern: 102,
    },
    36: {
      plunder_and_pillage: 33.04,
      random_goods: 52,
      random_goods_afterModern: 104,
    },
    37: {
      plunder_and_pillage: 33.38,
      random_goods: 53,
      random_goods_afterModern: 106,
    },
    38: {
      plunder_and_pillage: 33.71,
      random_goods: 54,
      random_goods_afterModern: 108,
    },
    39: {
      plunder_and_pillage: 34.04,
      random_goods: 55,
      random_goods_afterModern: 110,
    },
    40: {
      plunder_and_pillage: 34.37,
      random_goods: 56,
      random_goods_afterModern: 112,
    },
    41: {
      plunder_and_pillage: 34.69,
      random_goods: 57,
      random_goods_afterModern: 114,
    },
    42: {
      plunder_and_pillage: 35.01,
      random_goods: 58,
      random_goods_afterModern: 116,
    },
    43: {
      plunder_and_pillage: 35.33,
      random_goods: 59,
      random_goods_afterModern: 118,
    },
    44: {
      plunder_and_pillage: 35.64,
      random_goods: 60,
      random_goods_afterModern: 120,
    },
    45: {
      plunder_and_pillage: 35.95,
      random_goods: 61,
      random_goods_afterModern: 122,
    },
    46: {
      plunder_and_pillage: 36.25,
      random_goods: 62,
      random_goods_afterModern: 124,
    },
    47: {
      plunder_and_pillage: 36.55,
      random_goods: 63,
      random_goods_afterModern: 126,
    },
    48: {
      plunder_and_pillage: 36.85,
      random_goods: 64,
      random_goods_afterModern: 128,
    },
    49: {
      plunder_and_pillage: 37.14,
      random_goods: 65,
      random_goods_afterModern: 130,
    },
    50: {
      plunder_and_pillage: 37.43,
      random_goods: 66,
      random_goods_afterModern: 132,
    },
    51: {
      plunder_and_pillage: 37.71,
      random_goods: 67,
      random_goods_afterModern: 134,
    },
    52: {
      plunder_and_pillage: 37.99,
      random_goods: 68,
      random_goods_afterModern: 136,
    },
    53: {
      plunder_and_pillage: 38.26,
      random_goods: 69,
      random_goods_afterModern: 138,
    },
    54: {
      plunder_and_pillage: 38.53,
      random_goods: 70,
      random_goods_afterModern: 140,
    },
    55: {
      plunder_and_pillage: 38.8,
      random_goods: 71,
      random_goods_afterModern: 142,
    },
    56: {
      plunder_and_pillage: 39.06,
      random_goods: 72,
      random_goods_afterModern: 144,
    },
    57: {
      plunder_and_pillage: 39.32,
      random_goods: 73,
      random_goods_afterModern: 146,
    },
    58: {
      plunder_and_pillage: 39.57,
      random_goods: 74,
      random_goods_afterModern: 148,
    },
    59: {
      plunder_and_pillage: 39.82,
      random_goods: 75,
      random_goods_afterModern: 150,
    },
    60: {
      plunder_and_pillage: 40.06,
      random_goods: 76,
      random_goods_afterModern: 152,
    },
    61: {
      plunder_and_pillage: 40.3,
      random_goods: 77,
      random_goods_afterModern: 154,
    },
    62: {
      plunder_and_pillage: 40.53,
      random_goods: 78,
      random_goods_afterModern: 156,
    },
    63: {
      plunder_and_pillage: 40.77,
      random_goods: 79,
      random_goods_afterModern: 158,
    },
    64: {
      plunder_and_pillage: 40.99,
      random_goods: 80,
      random_goods_afterModern: 160,
    },
    65: {
      plunder_and_pillage: 41.21,
      random_goods: 81,
      random_goods_afterModern: 162,
    },
    66: {
      plunder_and_pillage: 41.43,
      random_goods: 82,
      random_goods_afterModern: 164,
    },
    67: {
      plunder_and_pillage: 41.64,
      random_goods: 83,
      random_goods_afterModern: 166,
    },
    68: {
      plunder_and_pillage: 41.85,
      random_goods: 84,
      random_goods_afterModern: 168,
    },
    69: {
      plunder_and_pillage: 42.06,
      random_goods: 85,
      random_goods_afterModern: 170,
    },
    70: {
      plunder_and_pillage: 42.26,
      random_goods: 86,
      random_goods_afterModern: 172,
    },
    71: {
      plunder_and_pillage: 42.45,
      random_goods: 87,
      random_goods_afterModern: 174,
    },
    72: {
      plunder_and_pillage: 42.65,
      random_goods: 88,
      random_goods_afterModern: 176,
    },
    73: {
      plunder_and_pillage: 42.83,
      random_goods: 89,
      random_goods_afterModern: 178,
    },
    74: {
      plunder_and_pillage: 43.02,
      random_goods: 90,
      random_goods_afterModern: 180,
    },
    76: {
      plunder_and_pillage: 43.37,
      random_goods: 92,
      random_goods_afterModern: 184,
    },
    77: {
      plunder_and_pillage: 43.55,
      random_goods: 93,
      random_goods_afterModern: 186,
    },
    78: {
      plunder_and_pillage: 43.71,
      random_goods: 94,
      random_goods_afterModern: 188,
    },
    79: {
      plunder_and_pillage: 43.88,
      random_goods: 95,
      random_goods_afterModern: 190,
    },
    80: {
      plunder_and_pillage: 44.04,
      random_goods: 96,
      random_goods_afterModern: 192,
    },
    81: {
      plunder_and_pillage: 44.2,
      random_goods: 97,
      random_goods_afterModern: 194,
    },
    82: {
      plunder_and_pillage: 44.35,
      random_goods: 98,
      random_goods_afterModern: 196,
    },
    83: {
      plunder_and_pillage: 44.5,
      random_goods: 99,
      random_goods_afterModern: 198,
    },
    84: {
      plunder_and_pillage: 44.65,
      random_goods: 100,
      random_goods_afterModern: 200,
    },
    85: {
      plunder_and_pillage: 44.79,
      random_goods: 101,
      random_goods_afterModern: 202,
    },
    86: {
      plunder_and_pillage: 44.93,
      random_goods: 102,
      random_goods_afterModern: 204,
    },
    87: {
      plunder_and_pillage: 45.07,
      random_goods: 103,
      random_goods_afterModern: 206,
    },
    88: {
      plunder_and_pillage: 45.2,
      random_goods: 104,
      random_goods_afterModern: 208,
    },
    89: {
      plunder_and_pillage: 45.33,
      random_goods: 105,
      random_goods_afterModern: 210,
    },
    90: {
      plunder_and_pillage: 45.46,
      random_goods: 106,
      random_goods_afterModern: 212,
    },
    91: {
      plunder_and_pillage: 45.58,
      random_goods: 107,
      random_goods_afterModern: 214,
    },
    93: {
      plunder_and_pillage: 45.82,
      random_goods: 109,
      random_goods_afterModern: 218,
    },
    94: {
      plunder_and_pillage: 45.93,
      random_goods: 110,
      random_goods_afterModern: 220,
    },
    100: {
      plunder_and_pillage: 46.56,
      random_goods: 116,
      random_goods_afterModern: 232,
    },
    101: {
      plunder_and_pillage: 46.66,
      random_goods: 117,
      random_goods_afterModern: 234,
    },
  },
  age: ages.OceanicFuture.key,
  levels: ageCost,
};
