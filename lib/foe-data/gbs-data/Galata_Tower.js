const ages = require("../ages.json");
const ageCost = require("../ages-cost/Galata");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Galata_Tower",
  gbReward: {
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
      random_goods: 19,
      random_goods_afterModern: 38,
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
    47: {
      plunder_repel: 40.46,
      random_goods: 49,
      random_goods_afterModern: 98,
    },
    54: {
      plunder_repel: 42.61,
      random_goods: 56,
      random_goods_afterModern: 112,
    },
    56: {
      plunder_repel: 43.21,
      random_goods: 58,
      random_goods_afterModern: 116,
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
    62: {
      plunder_repel: 44.97,
      random_goods: 64,
      random_goods_afterModern: 128,
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
    74: {
      plunder_repel: 48.25,
      random_goods: 76,
      random_goods_afterModern: 152,
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
    96: {
      plunder_repel: 53.36,
      random_goods: 98,
      random_goods_afterModern: 196,
    },
  },
  age: ages.NoAge.key,
  levels: ageCost,
};
