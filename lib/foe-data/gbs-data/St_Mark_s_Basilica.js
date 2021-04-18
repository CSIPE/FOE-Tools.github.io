const ages = require("../ages.json");
const ageCost = require("../ages-cost/HighMiddleAges");
const defaultCost = require("../ages-cost/defaultCost");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "St_Mark_s_Basilica",
  gbReward: {
    1: {
      money_boost: 100,
      random_goods: 10,
      random_goods_afterModern: 20,
    },
    2: {
      money_boost: 120,
      random_goods: 12,
      random_goods_afterModern: 24,
    },
    3: {
      money_boost: 135,
      random_goods: 13,
      random_goods_afterModern: 26,
    },
    4: {
      money_boost: 150,
      random_goods: 15,
      random_goods_afterModern: 30,
    },
    5: {
      money_boost: 170,
      random_goods: 17,
      random_goods_afterModern: 34,
    },
    6: {
      money_boost: 185,
      random_goods: 18,
      random_goods_afterModern: 36,
    },
    7: {
      money_boost: 200,
      random_goods: 20,
      random_goods_afterModern: 40,
    },
    8: {
      money_boost: 220,
      random_goods: 22,
      random_goods_afterModern: 44,
    },
    9: {
      money_boost: 235,
      random_goods: 24,
      random_goods_afterModern: 48,
    },
    10: {
      money_boost: 250,
      random_goods: 25,
      random_goods_afterModern: 50,
    },
    11: {
      money_boost: 255,
      random_goods: 26,
      random_goods_afterModern: 52,
    },
    12: {
      money_boost: 260,
      random_goods: 27,
      random_goods_afterModern: 54,
    },
    13: {
      money_boost: 265,
      random_goods: 28,
      random_goods_afterModern: 56,
    },
    14: {
      money_boost: 270,
      random_goods: 29,
      random_goods_afterModern: 58,
    },
    15: {
      money_boost: 275,
      random_goods: 30,
      random_goods_afterModern: 60,
    },
    16: {
      money_boost: 280,
      random_goods: 31,
      random_goods_afterModern: 62,
    },
    17: {
      money_boost: 285,
      random_goods: 32,
      random_goods_afterModern: 64,
    },
    18: {
      money_boost: 290,
      random_goods: 33,
      random_goods_afterModern: 66,
    },
    19: {
      money_boost: 295,
      random_goods: 34,
      random_goods_afterModern: 68,
    },
    20: {
      money_boost: 300,
      random_goods: 35,
      random_goods_afterModern: 70,
    },
    21: {
      money_boost: 305,
      random_goods: 36,
      random_goods_afterModern: 72,
    },
    22: {
      money_boost: 310,
      random_goods: 37,
      random_goods_afterModern: 74,
    },
    23: {
      money_boost: 315,
      random_goods: 38,
      random_goods_afterModern: 76,
    },
    24: {
      money_boost: 320,
      random_goods: 39,
      random_goods_afterModern: 78,
    },
    25: {
      money_boost: 325,
      random_goods: 40,
      random_goods_afterModern: 80,
    },
    26: {
      money_boost: 330,
      random_goods: 41,
      random_goods_afterModern: 82,
    },
    27: {
      money_boost: 335,
      random_goods: 42,
      random_goods_afterModern: 84,
    },
    28: {
      money_boost: 340,
      random_goods: 43,
      random_goods_afterModern: 86,
    },
    29: {
      money_boost: 345,
      random_goods: 44,
      random_goods_afterModern: 88,
    },
    30: {
      money_boost: 350,
      random_goods: 45,
      random_goods_afterModern: 90,
    },
    31: {
      money_boost: 355,
      random_goods: 46,
      random_goods_afterModern: 92,
    },
    32: {
      money_boost: 360,
      random_goods: 47,
      random_goods_afterModern: 94,
    },
    33: {
      money_boost: 365,
      random_goods: 48,
      random_goods_afterModern: 96,
    },
    34: {
      money_boost: 370,
      random_goods: 49,
      random_goods_afterModern: 98,
    },
    35: {
      money_boost: 375,
      random_goods: 50,
      random_goods_afterModern: 100,
    },
    36: {
      money_boost: 380,
      random_goods: 51,
      random_goods_afterModern: 102,
    },
    37: {
      money_boost: 385,
      random_goods: 52,
      random_goods_afterModern: 104,
    },
    38: {
      money_boost: 390,
      random_goods: 53,
      random_goods_afterModern: 106,
    },
    39: {
      money_boost: 395,
      random_goods: 54,
      random_goods_afterModern: 108,
    },
    40: {
      money_boost: 400,
      random_goods: 55,
      random_goods_afterModern: 110,
    },
    41: {
      money_boost: 405,
      random_goods: 56,
      random_goods_afterModern: 112,
    },
    42: {
      money_boost: 410,
      random_goods: 57,
      random_goods_afterModern: 114,
    },
    43: {
      money_boost: 415,
      random_goods: 58,
      random_goods_afterModern: 116,
    },
    44: {
      money_boost: 420,
      random_goods: 59,
      random_goods_afterModern: 118,
    },
    45: {
      money_boost: 425,
      random_goods: 60,
      random_goods_afterModern: 120,
    },
    46: {
      money_boost: 430,
      random_goods: 61,
      random_goods_afterModern: 122,
    },
    47: {
      money_boost: 435,
      random_goods: 62,
      random_goods_afterModern: 124,
    },
    48: {
      money_boost: 440,
      random_goods: 63,
      random_goods_afterModern: 126,
    },
    49: {
      money_boost: 445,
      random_goods: 64,
      random_goods_afterModern: 128,
    },
    50: {
      money_boost: 450,
      random_goods: 65,
      random_goods_afterModern: 130,
    },
    51: {
      money_boost: 455,
      random_goods: 66,
      random_goods_afterModern: 132,
    },
    52: {
      money_boost: 460,
      random_goods: 67,
      random_goods_afterModern: 134,
    },
    53: {
      money_boost: 465,
      random_goods: 68,
      random_goods_afterModern: 136,
    },
    54: {
      money_boost: 470,
      random_goods: 69,
      random_goods_afterModern: 138,
    },
    55: {
      money_boost: 475,
      random_goods: 70,
      random_goods_afterModern: 140,
    },
    56: {
      money_boost: 480,
      random_goods: 71,
      random_goods_afterModern: 142,
    },
    57: {
      money_boost: 485,
      random_goods: 72,
      random_goods_afterModern: 144,
    },
    58: {
      money_boost: 490,
      random_goods: 73,
      random_goods_afterModern: 146,
    },
    59: {
      money_boost: 495,
      random_goods: 74,
      random_goods_afterModern: 148,
    },
    60: {
      money_boost: 500,
      random_goods: 75,
      random_goods_afterModern: 150,
    },
    61: {
      money_boost: 505,
      random_goods: 76,
      random_goods_afterModern: 152,
    },
    62: {
      money_boost: 510,
      random_goods: 77,
      random_goods_afterModern: 154,
    },
    63: {
      money_boost: 515,
      random_goods: 78,
      random_goods_afterModern: 156,
    },
    64: {
      money_boost: 520,
      random_goods: 158,
      random_goods_afterModern: 316,
    },
    65: {
      money_boost: 525,
      random_goods: 80,
      random_goods_afterModern: 160,
    },
    66: {
      money_boost: 530,
      random_goods: 81,
      random_goods_afterModern: 162,
    },
    67: {
      money_boost: 535,
      random_goods: 82,
      random_goods_afterModern: 164,
    },
    68: {
      money_boost: 540,
      random_goods: 83,
      random_goods_afterModern: 166,
    },
    69: {
      money_boost: 545,
      random_goods: 84,
      random_goods_afterModern: 168,
    },
    70: {
      money_boost: 550,
      random_goods: 85,
      random_goods_afterModern: 170,
    },
    71: {
      money_boost: 555,
      random_goods: 86,
      random_goods_afterModern: 172,
    },
    72: {
      money_boost: 560,
      random_goods: 87,
      random_goods_afterModern: 174,
    },
    73: {
      money_boost: 565,
      random_goods: 88,
      random_goods_afterModern: 176,
    },
    74: {
      money_boost: 570,
      random_goods: 89,
      random_goods_afterModern: 178,
    },
    75: {
      money_boost: 575,
      random_goods: 90,
      random_goods_afterModern: 180,
    },
    76: {
      money_boost: 580,
      random_goods: 91,
      random_goods_afterModern: 182,
    },
    77: {
      money_boost: 585,
      random_goods: 92,
      random_goods_afterModern: 184,
    },
    78: {
      money_boost: 590,
      random_goods: 93,
      random_goods_afterModern: 186,
    },
    79: {
      money_boost: 595,
      random_goods: 94,
      random_goods_afterModern: 188,
    },
    80: {
      money_boost: 600,
      random_goods: 95,
      random_goods_afterModern: 190,
    },
    81: {
      money_boost: 605,
      random_goods: 96,
      random_goods_afterModern: 192,
    },
    82: {
      money_boost: 610,
      random_goods: 97,
      random_goods_afterModern: 194,
    },
    83: {
      money_boost: 615,
      random_goods: 98,
      random_goods_afterModern: 196,
    },
    84: {
      money_boost: 620,
      random_goods: 99,
      random_goods_afterModern: 198,
    },
    85: {
      money_boost: 625,
      random_goods: 100,
      random_goods_afterModern: 200,
    },
    86: {
      money_boost: 630,
      random_goods: 101,
      random_goods_afterModern: 202,
    },
    87: {
      money_boost: 635,
      random_goods: 102,
      random_goods_afterModern: 204,
    },
    88: {
      money_boost: 640,
      random_goods: 103,
      random_goods_afterModern: 206,
    },
    89: {
      money_boost: 645,
      random_goods: 104,
      random_goods_afterModern: 208,
    },
    90: {
      money_boost: 650,
      random_goods: 105,
      random_goods_afterModern: 210,
    },
    91: {
      money_boost: 655,
      random_goods: 106,
      random_goods_afterModern: 212,
    },
    92: {
      money_boost: 660,
      random_goods: 107,
      random_goods_afterModern: 214,
    },
    93: {
      money_boost: 665,
      random_goods: 108,
      random_goods_afterModern: 216,
    },
    94: {
      money_boost: 670,
      random_goods: 109,
      random_goods_afterModern: 218,
    },
    95: {
      money_boost: 675,
      random_goods: 110,
      random_goods_afterModern: 220,
    },
    96: {
      money_boost: 680,
      random_goods: 222,
      random_goods_afterModern: 444,
    },
    97: {
      money_boost: 685,
      random_goods: 112,
      random_goods_afterModern: 224,
    },
    98: {
      money_boost: 690,
      random_goods: 113,
      random_goods_afterModern: 226,
    },
    99: {
      money_boost: 695,
      random_goods: 114,
      random_goods_afterModern: 228,
    },
    100: {
      money_boost: 700,
      random_goods: 115,
      random_goods_afterModern: 230,
    },
    101: {
      money_boost: 705,
      random_goods: 116,
      random_goods_afterModern: 232,
    },
    102: {
      money_boost: 710,
      random_goods: 117,
      random_goods_afterModern: 234,
    },
    103: {
      money_boost: 715,
      random_goods: 118,
      random_goods_afterModern: 236,
    },
    104: {
      money_boost: 720,
      random_goods: 119,
      random_goods_afterModern: 238,
    },
    106: {
      money_boost: 730,
      random_goods: 121,
      random_goods_afterModern: 242,
    },
    107: {
      money_boost: 735,
      random_goods: 122,
      random_goods_afterModern: 244,
    },
    108: {
      money_boost: 740,
      random_goods: 123,
      random_goods_afterModern: 246,
    },
    109: {
      money_boost: 745,
      random_goods: 124,
      random_goods_afterModern: 248,
    },
    110: {
      money_boost: 750,
      random_goods: 125,
      random_goods_afterModern: 250,
    },
    111: {
      money_boost: 755,
      random_goods: 126,
      random_goods_afterModern: 252,
    },
    112: {
      money_boost: 760,
      random_goods: 127,
      random_goods_afterModern: 254,
    },
    113: {
      money_boost: 765,
      random_goods: 128,
      random_goods_afterModern: 256,
    },
    114: {
      money_boost: 770,
      random_goods: 129,
      random_goods_afterModern: 258,
    },
    115: {
      money_boost: 775,
      random_goods: 130,
      random_goods_afterModern: 260,
    },
    122: {
      money_boost: 810,
      random_goods: 137,
      random_goods_afterModern: 274,
    },
  },
  age: ages.HighMiddleAges.key,
  levels: [...ageCost, ...defaultCost],
};
