const ages = require("../ages.json");
const ageCost = require("../ages-cost/IronAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Lighthouse_of_Alexandria",
  gbReward: {
    1: {
      supplies_boost: 60,
      random_goods: 8,
      random_goods_afterModern: 16,
    },
    2: {
      supplies_boost: 65,
      random_goods: 9,
      random_goods_afterModern: 18,
    },
    3: {
      supplies_boost: 75,
      random_goods: 10,
      random_goods_afterModern: 20,
    },
    4: {
      supplies_boost: 85,
      random_goods: 12,
      random_goods_afterModern: 24,
    },
    5: {
      supplies_boost: 95,
      random_goods: 13,
      random_goods_afterModern: 26,
    },
    6: {
      supplies_boost: 105,
      random_goods: 14,
      random_goods_afterModern: 28,
    },
    7: {
      supplies_boost: 115,
      random_goods: 15,
      random_goods_afterModern: 30,
    },
    8: {
      supplies_boost: 125,
      random_goods: 17,
      random_goods_afterModern: 34,
    },
    9: {
      supplies_boost: 135,
      random_goods: 18,
      random_goods_afterModern: 36,
    },
    10: {
      supplies_boost: 145,
      random_goods: 19,
      random_goods_afterModern: 38,
    },
    11: {
      supplies_boost: 150,
      random_goods: 20,
      random_goods_afterModern: 40,
    },
    12: {
      supplies_boost: 155,
      random_goods: 21,
      random_goods_afterModern: 42,
    },
    13: {
      supplies_boost: 160,
      random_goods: 22,
      random_goods_afterModern: 44,
    },
    14: {
      supplies_boost: 165,
      random_goods: 23,
      random_goods_afterModern: 46,
    },
    15: {
      supplies_boost: 170,
      random_goods: 24,
      random_goods_afterModern: 48,
    },
    16: {
      supplies_boost: 175,
      random_goods: 25,
      random_goods_afterModern: 50,
    },
    17: {
      supplies_boost: 180,
      random_goods: 26,
      random_goods_afterModern: 52,
    },
    18: {
      supplies_boost: 185,
      random_goods: 27,
      random_goods_afterModern: 54,
    },
    19: {
      supplies_boost: 190,
      random_goods: 28,
      random_goods_afterModern: 56,
    },
    20: {
      supplies_boost: 195,
      random_goods: 29,
      random_goods_afterModern: 58,
    },
    21: {
      supplies_boost: 200,
      random_goods: 30,
      random_goods_afterModern: 60,
    },
    22: {
      supplies_boost: 205,
      random_goods: 31,
      random_goods_afterModern: 62,
    },
    23: {
      supplies_boost: 210,
      random_goods: 32,
      random_goods_afterModern: 64,
    },
    24: {
      supplies_boost: 215,
      random_goods: 33,
      random_goods_afterModern: 66,
    },
    25: {
      supplies_boost: 220,
      random_goods: 34,
      random_goods_afterModern: 68,
    },
    26: {
      supplies_boost: 225,
      random_goods: 35,
      random_goods_afterModern: 70,
    },
    27: {
      supplies_boost: 230,
      random_goods: 36,
      random_goods_afterModern: 72,
    },
    28: {
      supplies_boost: 235,
      random_goods: 37,
      random_goods_afterModern: 74,
    },
    29: {
      supplies_boost: 240,
      random_goods: 76,
      random_goods_afterModern: 152,
    },
    30: {
      supplies_boost: 245,
      random_goods: 39,
      random_goods_afterModern: 78,
    },
    31: {
      supplies_boost: 250,
      random_goods: 40,
      random_goods_afterModern: 80,
    },
    32: {
      supplies_boost: 255,
      random_goods: 41,
      random_goods_afterModern: 82,
    },
    33: {
      supplies_boost: 260,
      random_goods: 42,
      random_goods_afterModern: 84,
    },
    34: {
      supplies_boost: 265,
      random_goods: 43,
      random_goods_afterModern: 86,
    },
    35: {
      supplies_boost: 270,
      random_goods: 44,
      random_goods_afterModern: 88,
    },
    36: {
      supplies_boost: 275,
      random_goods: 45,
      random_goods_afterModern: 90,
    },
    37: {
      supplies_boost: 280,
      random_goods: 46,
      random_goods_afterModern: 92,
    },
    38: {
      supplies_boost: 285,
      random_goods: 47,
      random_goods_afterModern: 94,
    },
    39: {
      supplies_boost: 290,
      random_goods: 48,
      random_goods_afterModern: 96,
    },
    40: {
      supplies_boost: 295,
      random_goods: 49,
      random_goods_afterModern: 98,
    },
    41: {
      supplies_boost: 300,
      random_goods: 50,
      random_goods_afterModern: 100,
    },
    42: {
      supplies_boost: 305,
      random_goods: 51,
      random_goods_afterModern: 102,
    },
    43: {
      supplies_boost: 310,
      random_goods: 52,
      random_goods_afterModern: 104,
    },
    44: {
      supplies_boost: 315,
      random_goods: 53,
      random_goods_afterModern: 106,
    },
    45: {
      supplies_boost: 320,
      random_goods: 54,
      random_goods_afterModern: 108,
    },
    46: {
      supplies_boost: 325,
      random_goods: 55,
      random_goods_afterModern: 110,
    },
    47: {
      supplies_boost: 330,
      random_goods: 56,
      random_goods_afterModern: 112,
    },
    48: {
      supplies_boost: 335,
      random_goods: 57,
      random_goods_afterModern: 114,
    },
    49: {
      supplies_boost: 340,
      random_goods: 58,
      random_goods_afterModern: 116,
    },
    50: {
      supplies_boost: 345,
      random_goods: 59,
      random_goods_afterModern: 118,
    },
    51: {
      supplies_boost: 350,
      random_goods: 60,
      random_goods_afterModern: 120,
    },
    52: {
      supplies_boost: 355,
      random_goods: 61,
      random_goods_afterModern: 122,
    },
    53: {
      supplies_boost: 360,
      random_goods: 62,
      random_goods_afterModern: 124,
    },
    54: {
      supplies_boost: 365,
      random_goods: 63,
      random_goods_afterModern: 126,
    },
    55: {
      supplies_boost: 370,
      random_goods: 64,
      random_goods_afterModern: 128,
    },
    56: {
      supplies_boost: 375,
      random_goods: 65,
      random_goods_afterModern: 130,
    },
    57: {
      supplies_boost: 380,
      random_goods: 66,
      random_goods_afterModern: 132,
    },
    58: {
      supplies_boost: 385,
      random_goods: 67,
      random_goods_afterModern: 134,
    },
    59: {
      supplies_boost: 390,
      random_goods: 68,
      random_goods_afterModern: 136,
    },
    60: {
      supplies_boost: 395,
      random_goods: 69,
      random_goods_afterModern: 138,
    },
    61: {
      supplies_boost: 400,
      random_goods: 70,
      random_goods_afterModern: 140,
    },
    62: {
      supplies_boost: 405,
      random_goods: 71,
      random_goods_afterModern: 142,
    },
    63: {
      supplies_boost: 410,
      random_goods: 72,
      random_goods_afterModern: 144,
    },
    64: {
      supplies_boost: 415,
      random_goods: 73,
      random_goods_afterModern: 146,
    },
    65: {
      supplies_boost: 420,
      random_goods: 74,
      random_goods_afterModern: 148,
    },
    66: {
      supplies_boost: 425,
      random_goods: 75,
      random_goods_afterModern: 150,
    },
    67: {
      supplies_boost: 430,
      random_goods: 76,
      random_goods_afterModern: 152,
    },
    68: {
      supplies_boost: 435,
      random_goods: 77,
      random_goods_afterModern: 154,
    },
    69: {
      supplies_boost: 440,
      random_goods: 78,
      random_goods_afterModern: 156,
    },
    70: {
      supplies_boost: 445,
      random_goods: 79,
      random_goods_afterModern: 158,
    },
    71: {
      supplies_boost: 450,
      random_goods: 80,
      random_goods_afterModern: 160,
    },
    72: {
      supplies_boost: 455,
      random_goods: 81,
      random_goods_afterModern: 162,
    },
    73: {
      supplies_boost: 460,
      random_goods: 82,
      random_goods_afterModern: 164,
    },
    74: {
      supplies_boost: 465,
      random_goods: 83,
      random_goods_afterModern: 166,
    },
    75: {
      supplies_boost: 470,
      random_goods: 84,
      random_goods_afterModern: 168,
    },
    76: {
      supplies_boost: 475,
      random_goods: 85,
      random_goods_afterModern: 170,
    },
    77: {
      supplies_boost: 480,
      random_goods: 86,
      random_goods_afterModern: 172,
    },
    78: {
      supplies_boost: 485,
      random_goods: 87,
      random_goods_afterModern: 174,
    },
    79: {
      supplies_boost: 490,
      random_goods: 88,
      random_goods_afterModern: 176,
    },
    80: {
      supplies_boost: 495,
      random_goods: 89,
      random_goods_afterModern: 178,
    },
    81: {
      supplies_boost: 500,
      random_goods: 90,
      random_goods_afterModern: 180,
    },
    82: {
      supplies_boost: 505,
      random_goods: 91,
      random_goods_afterModern: 182,
    },
    83: {
      supplies_boost: 510,
      random_goods: 92,
      random_goods_afterModern: 184,
    },
    84: {
      supplies_boost: 515,
      random_goods: 93,
      random_goods_afterModern: 186,
    },
    85: {
      supplies_boost: 520,
      random_goods: 94,
      random_goods_afterModern: 188,
    },
    86: {
      supplies_boost: 525,
      random_goods: 95,
      random_goods_afterModern: 190,
    },
    87: {
      supplies_boost: 530,
      random_goods: 96,
      random_goods_afterModern: 192,
    },
    88: {
      supplies_boost: 535,
      random_goods: 97,
      random_goods_afterModern: 194,
    },
    89: {
      supplies_boost: 540,
      random_goods: 98,
      random_goods_afterModern: 196,
    },
    90: {
      supplies_boost: 545,
      random_goods: 198,
      random_goods_afterModern: 396,
    },
    91: {
      supplies_boost: 550,
      random_goods: 100,
      random_goods_afterModern: 200,
    },
    92: {
      supplies_boost: 555,
      random_goods: 101,
      random_goods_afterModern: 202,
    },
    93: {
      supplies_boost: 560,
      random_goods: 102,
      random_goods_afterModern: 204,
    },
    94: {
      supplies_boost: 565,
      random_goods: 103,
      random_goods_afterModern: 206,
    },
    95: {
      supplies_boost: 570,
      random_goods: 104,
      random_goods_afterModern: 208,
    },
    96: {
      supplies_boost: 575,
      random_goods: 105,
      random_goods_afterModern: 210,
    },
    97: {
      supplies_boost: 580,
      random_goods: 106,
      random_goods_afterModern: 212,
    },
    98: {
      supplies_boost: 585,
      random_goods: 107,
      random_goods_afterModern: 214,
    },
    99: {
      supplies_boost: 590,
      random_goods: 108,
      random_goods_afterModern: 216,
    },
    100: {
      supplies_boost: 595,
      random_goods: 109,
      random_goods_afterModern: 218,
    },
    101: {
      supplies_boost: 600,
      random_goods: 110,
      random_goods_afterModern: 220,
    },
    102: {
      supplies_boost: 605,
      random_goods: 111,
      random_goods_afterModern: 222,
    },
    107: {
      supplies_boost: 630,
      random_goods: 116,
      random_goods_afterModern: 232,
    },
    111: {
      supplies_boost: 650,
      random_goods: 120,
      random_goods_afterModern: 240,
    },
    112: {
      supplies_boost: 655,
      random_goods: 121,
      random_goods_afterModern: 242,
    },
  },
  age: ages.IronAge.key,
  levels: ageCost,
};
