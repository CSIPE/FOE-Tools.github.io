const ages = require("../ages.json");
const ageCost = require("../ages-cost/IndustrialAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Royal_Albert_Hall",
  gbReward: {
    1: {
      supplies_boost: 70,
      random_goods: 11,
      random_goods_afterModern: 22,
    },
    2: {
      supplies_boost: 85,
      random_goods: 12,
      random_goods_afterModern: 24,
    },
    3: {
      supplies_boost: 95,
      random_goods: 28,
      random_goods_afterModern: 56,
    },
    4: {
      supplies_boost: 110,
      random_goods: 16,
      random_goods_afterModern: 32,
    },
    5: {
      supplies_boost: 120,
      random_goods: 18,
      random_goods_afterModern: 36,
    },
    6: {
      supplies_boost: 130,
      random_goods: 20,
      random_goods_afterModern: 40,
    },
    7: {
      supplies_boost: 145,
      random_goods: 21,
      random_goods_afterModern: 42,
    },
    8: {
      supplies_boost: 160,
      random_goods: 23,
      random_goods_afterModern: 46,
    },
    9: {
      supplies_boost: 175,
      random_goods: 25,
      random_goods_afterModern: 50,
    },
    10: {
      supplies_boost: 200,
      random_goods: 27,
      random_goods_afterModern: 54,
    },
    11: {
      supplies_boost: 205,
      random_goods: 28,
      random_goods_afterModern: 56,
    },
    12: {
      supplies_boost: 210,
      random_goods: 29,
      random_goods_afterModern: 58,
    },
    13: {
      supplies_boost: 215,
      random_goods: 30,
      random_goods_afterModern: 60,
    },
    14: {
      supplies_boost: 220,
      random_goods: 31,
      random_goods_afterModern: 62,
    },
    15: {
      supplies_boost: 225,
      random_goods: 32,
      random_goods_afterModern: 64,
    },
    16: {
      supplies_boost: 230,
      random_goods: 33,
      random_goods_afterModern: 66,
    },
    17: {
      supplies_boost: 235,
      random_goods: 34,
      random_goods_afterModern: 68,
    },
    18: {
      supplies_boost: 240,
      random_goods: 35,
      random_goods_afterModern: 70,
    },
    19: {
      supplies_boost: 245,
      random_goods: 36,
      random_goods_afterModern: 72,
    },
    20: {
      supplies_boost: 250,
      random_goods: 37,
      random_goods_afterModern: 74,
    },
    21: {
      supplies_boost: 255,
      random_goods: 38,
      random_goods_afterModern: 76,
    },
    22: {
      supplies_boost: 260,
      random_goods: 39,
      random_goods_afterModern: 78,
    },
    23: {
      supplies_boost: 265,
      random_goods: 40,
      random_goods_afterModern: 80,
    },
    24: {
      supplies_boost: 270,
      random_goods: 41,
      random_goods_afterModern: 82,
    },
    25: {
      supplies_boost: 275,
      random_goods: 42,
      random_goods_afterModern: 84,
    },
    26: {
      supplies_boost: 280,
      random_goods: 43,
      random_goods_afterModern: 86,
    },
    27: {
      supplies_boost: 285,
      random_goods: 44,
      random_goods_afterModern: 88,
    },
    28: {
      supplies_boost: 290,
      random_goods: 90,
      random_goods_afterModern: 180,
    },
    29: {
      supplies_boost: 295,
      random_goods: 46,
      random_goods_afterModern: 92,
    },
    30: {
      supplies_boost: 300,
      random_goods: 47,
      random_goods_afterModern: 94,
    },
    31: {
      supplies_boost: 305,
      random_goods: 48,
      random_goods_afterModern: 96,
    },
    32: {
      supplies_boost: 310,
      random_goods: 49,
      random_goods_afterModern: 98,
    },
    33: {
      supplies_boost: 315,
      random_goods: 50,
      random_goods_afterModern: 100,
    },
    34: {
      supplies_boost: 320,
      random_goods: 51,
      random_goods_afterModern: 102,
    },
    35: {
      supplies_boost: 325,
      random_goods: 52,
      random_goods_afterModern: 104,
    },
    36: {
      supplies_boost: 330,
      random_goods: 53,
      random_goods_afterModern: 106,
    },
    37: {
      supplies_boost: 335,
      random_goods: 54,
      random_goods_afterModern: 108,
    },
    38: {
      supplies_boost: 340,
      random_goods: 55,
      random_goods_afterModern: 110,
    },
    39: {
      supplies_boost: 345,
      random_goods: 56,
      random_goods_afterModern: 112,
    },
    40: {
      supplies_boost: 350,
      random_goods: 57,
      random_goods_afterModern: 114,
    },
    41: {
      supplies_boost: 355,
      random_goods: 58,
      random_goods_afterModern: 116,
    },
    42: {
      supplies_boost: 360,
      random_goods: 59,
      random_goods_afterModern: 118,
    },
    43: {
      supplies_boost: 365,
      random_goods: 60,
      random_goods_afterModern: 120,
    },
    44: {
      supplies_boost: 370,
      random_goods: 61,
      random_goods_afterModern: 122,
    },
    45: {
      supplies_boost: 375,
      random_goods: 62,
      random_goods_afterModern: 124,
    },
    46: {
      supplies_boost: 380,
      random_goods: 63,
      random_goods_afterModern: 126,
    },
    47: {
      supplies_boost: 385,
      random_goods: 64,
      random_goods_afterModern: 128,
    },
    48: {
      supplies_boost: 390,
      random_goods: 65,
      random_goods_afterModern: 130,
    },
    49: {
      supplies_boost: 395,
      random_goods: 66,
      random_goods_afterModern: 132,
    },
    50: {
      supplies_boost: 400,
      random_goods: 67,
      random_goods_afterModern: 134,
    },
    51: {
      supplies_boost: 405,
      random_goods: 68,
      random_goods_afterModern: 136,
    },
    52: {
      supplies_boost: 410,
      random_goods: 69,
      random_goods_afterModern: 138,
    },
    53: {
      supplies_boost: 415,
      random_goods: 70,
      random_goods_afterModern: 140,
    },
    54: {
      supplies_boost: 420,
      random_goods: 71,
      random_goods_afterModern: 142,
    },
    55: {
      supplies_boost: 425,
      random_goods: 72,
      random_goods_afterModern: 144,
    },
    56: {
      supplies_boost: 430,
      random_goods: 73,
      random_goods_afterModern: 146,
    },
    57: {
      supplies_boost: 435,
      random_goods: 74,
      random_goods_afterModern: 148,
    },
    58: {
      supplies_boost: 440,
      random_goods: 75,
      random_goods_afterModern: 150,
    },
    59: {
      supplies_boost: 445,
      random_goods: 76,
      random_goods_afterModern: 152,
    },
    60: {
      supplies_boost: 450,
      random_goods: 77,
      random_goods_afterModern: 154,
    },
    61: {
      supplies_boost: 455,
      random_goods: 78,
      random_goods_afterModern: 156,
    },
    62: {
      supplies_boost: 460,
      random_goods: 79,
      random_goods_afterModern: 158,
    },
    63: {
      supplies_boost: 465,
      random_goods: 80,
      random_goods_afterModern: 160,
    },
    64: {
      supplies_boost: 470,
      random_goods: 81,
      random_goods_afterModern: 162,
    },
    65: {
      supplies_boost: 475,
      random_goods: 82,
      random_goods_afterModern: 164,
    },
    66: {
      supplies_boost: 480,
      random_goods: 83,
      random_goods_afterModern: 166,
    },
    67: {
      supplies_boost: 485,
      random_goods: 84,
      random_goods_afterModern: 168,
    },
    68: {
      supplies_boost: 490,
      random_goods: 85,
      random_goods_afterModern: 170,
    },
    69: {
      supplies_boost: 495,
      random_goods: 86,
      random_goods_afterModern: 172,
    },
    70: {
      supplies_boost: 500,
      random_goods: 87,
      random_goods_afterModern: 174,
    },
    71: {
      supplies_boost: 505,
      random_goods: 88,
      random_goods_afterModern: 176,
    },
    72: {
      supplies_boost: 510,
      random_goods: 89,
      random_goods_afterModern: 178,
    },
    73: {
      supplies_boost: 515,
      random_goods: 90,
      random_goods_afterModern: 180,
    },
    74: {
      supplies_boost: 520,
      random_goods: 91,
      random_goods_afterModern: 182,
    },
    75: {
      supplies_boost: 525,
      random_goods: 92,
      random_goods_afterModern: 184,
    },
    76: {
      supplies_boost: 530,
      random_goods: 93,
      random_goods_afterModern: 186,
    },
    77: {
      supplies_boost: 535,
      random_goods: 94,
      random_goods_afterModern: 188,
    },
    78: {
      supplies_boost: 540,
      random_goods: 95,
      random_goods_afterModern: 190,
    },
    79: {
      supplies_boost: 545,
      random_goods: 96,
      random_goods_afterModern: 192,
    },
    80: {
      supplies_boost: 550,
      random_goods: 97,
      random_goods_afterModern: 194,
    },
    81: {
      supplies_boost: 555,
      random_goods: 98,
      random_goods_afterModern: 196,
    },
    82: {
      supplies_boost: 560,
      random_goods: 99,
      random_goods_afterModern: 198,
    },
    83: {
      supplies_boost: 565,
      random_goods: 100,
      random_goods_afterModern: 200,
    },
    84: {
      supplies_boost: 570,
      random_goods: 101,
      random_goods_afterModern: 202,
    },
    85: {
      supplies_boost: 575,
      random_goods: 102,
      random_goods_afterModern: 204,
    },
    86: {
      supplies_boost: 580,
      random_goods: 103,
      random_goods_afterModern: 206,
    },
    87: {
      supplies_boost: 585,
      random_goods: 104,
      random_goods_afterModern: 208,
    },
    88: {
      supplies_boost: 590,
      random_goods: 105,
      random_goods_afterModern: 210,
    },
    89: {
      supplies_boost: 595,
      random_goods: 106,
      random_goods_afterModern: 212,
    },
    90: {
      supplies_boost: 600,
      random_goods: 107,
      random_goods_afterModern: 214,
    },
    91: {
      supplies_boost: 605,
      random_goods: 108,
      random_goods_afterModern: 216,
    },
    92: {
      supplies_boost: 610,
      random_goods: 109,
      random_goods_afterModern: 218,
    },
    94: {
      supplies_boost: 620,
      random_goods: 111,
      random_goods_afterModern: 222,
    },
    95: {
      supplies_boost: 625,
      random_goods: 112,
      random_goods_afterModern: 224,
    },
    96: {
      supplies_boost: 630,
      random_goods: 113,
      random_goods_afterModern: 226,
    },
    97: {
      supplies_boost: 635,
      random_goods: 114,
      random_goods_afterModern: 228,
    },
    98: {
      supplies_boost: 640,
      random_goods: 115,
      random_goods_afterModern: 230,
    },
    99: {
      supplies_boost: 645,
      random_goods: 116,
      random_goods_afterModern: 232,
    },
    100: {
      supplies_boost: 650,
      random_goods: 117,
      random_goods_afterModern: 234,
    },
    111: {
      supplies_boost: 705,
      random_goods: 128,
      random_goods_afterModern: 256,
    },
    113: {
      supplies_boost: 715,
      random_goods: 130,
      random_goods_afterModern: 260,
    },
  },
  age: ages.IndustrialAge.key,
  levels: ageCost,
};
