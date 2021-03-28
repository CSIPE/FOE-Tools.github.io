const ages = require("../ages.json");
const ageCost = require("../ages-cost/NoAge");
const defaultCost = require("../ages-cost/defaultCost");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Observatory",
  gbReward: {
    1: {
      support_boost: 10,
      clan_goods: 15,
    },
    2: {
      support_boost: 20,
      clan_goods: 20,
    },
    3: {
      support_boost: 30,
      clan_goods: 20,
    },
    4: {
      support_boost: 40,
      clan_goods: 25,
    },
    5: {
      support_boost: 50,
      clan_goods: 30,
    },
    6: {
      support_boost: 60,
      clan_goods: 30,
    },
    7: {
      support_boost: 70,
      clan_goods: 35,
    },
    8: {
      support_boost: 80,
      clan_goods: 35,
    },
    9: {
      support_boost: 90,
      clan_goods: 40,
    },
    10: {
      support_boost: 100,
      clan_goods: 40,
    },
    11: {
      support_boost: 103,
      clan_goods: 50,
    },
    12: {
      support_boost: 106,
      clan_goods: 60,
    },
    13: {
      support_boost: 109,
      clan_goods: 70,
    },
    14: {
      support_boost: 112,
      clan_goods: 80,
    },
    15: {
      support_boost: 115,
      clan_goods: 90,
    },
    16: {
      support_boost: 118,
      clan_goods: 100,
    },
    17: {
      support_boost: 121,
      clan_goods: 110,
    },
    18: {
      support_boost: 124,
      clan_goods: 120,
    },
    19: {
      support_boost: 127,
      clan_goods: 130,
    },
    20: {
      support_boost: 130,
      clan_goods: 140,
    },
    21: {
      support_boost: 133,
      clan_goods: 150,
    },
    22: {
      support_boost: 136,
      clan_goods: 160,
    },
    23: {
      support_boost: 139,
      clan_goods: 170,
    },
    24: {
      support_boost: 142,
      clan_goods: 180,
    },
    25: {
      support_boost: 145,
      clan_goods: 190,
    },
    26: {
      support_boost: 148,
      clan_goods: 200,
    },
    27: {
      support_boost: 151,
      clan_goods: 210,
    },
    28: {
      support_boost: 154,
      clan_goods: 220,
    },
    29: {
      support_boost: 157,
      clan_goods: 230,
    },
    30: {
      support_boost: 160,
      clan_goods: 240,
    },
    31: {
      support_boost: 163,
      clan_goods: 250,
    },
    32: {
      support_boost: 166,
      clan_goods: 260,
    },
    33: {
      support_boost: 169,
      clan_goods: 270,
    },
    34: {
      support_boost: 172,
      clan_goods: 280,
    },
    35: {
      support_boost: 175,
      clan_goods: 290,
    },
    36: {
      support_boost: 178,
      clan_goods: 300,
    },
    37: {
      support_boost: 181,
      clan_goods: 310,
    },
    38: {
      support_boost: 184,
      clan_goods: 320,
    },
    39: {
      support_boost: 187,
      clan_goods: 330,
    },
    40: {
      support_boost: 190,
      clan_goods: 340,
    },
    41: {
      support_boost: 193,
      clan_goods: 350,
    },
    42: {
      support_boost: 196,
      clan_goods: 360,
    },
    43: {
      support_boost: 199,
      clan_goods: 370,
    },
    44: {
      support_boost: 202,
      clan_goods: 380,
    },
    45: {
      support_boost: 205,
      clan_goods: 390,
    },
    46: {
      support_boost: 208,
      clan_goods: 400,
    },
    47: {
      support_boost: 211,
      clan_goods: 410,
    },
    48: {
      support_boost: 214,
      clan_goods: 420,
    },
    49: {
      support_boost: 217,
      clan_goods: 430,
    },
    50: {
      support_boost: 220,
      clan_goods: 440,
    },
    51: {
      support_boost: 223,
      clan_goods: 450,
    },
    52: {
      support_boost: 226,
      clan_goods: 460,
    },
    53: {
      support_boost: 229,
      clan_goods: 470,
    },
    54: {
      support_boost: 232,
      clan_goods: 480,
    },
    55: {
      support_boost: 235,
      clan_goods: 490,
    },
    56: {
      support_boost: 238,
      clan_goods: 500,
    },
    57: {
      support_boost: 241,
      clan_goods: 510,
    },
    58: {
      support_boost: 244,
      clan_goods: 520,
    },
    59: {
      support_boost: 247,
      clan_goods: 530,
    },
    60: {
      support_boost: 250,
      clan_goods: 540,
    },
    61: {
      support_boost: 253,
      clan_goods: 550,
    },
    62: {
      support_boost: 256,
      clan_goods: 560,
    },
    63: {
      support_boost: 259,
      clan_goods: 570,
    },
    64: {
      support_boost: 262,
      clan_goods: 580,
    },
    65: {
      support_boost: 265,
      clan_goods: 590,
    },
    66: {
      support_boost: 268,
      clan_goods: 600,
    },
    67: {
      support_boost: 271,
      clan_goods: 610,
    },
    68: {
      support_boost: 274,
      clan_goods: 620,
    },
    69: {
      support_boost: 277,
      clan_goods: 630,
    },
    70: {
      support_boost: 280,
      clan_goods: 640,
    },
    71: {
      support_boost: 283,
      clan_goods: 650,
    },
    72: {
      support_boost: 286,
      clan_goods: 660,
    },
    73: {
      support_boost: 289,
      clan_goods: 670,
    },
    74: {
      support_boost: 292,
      clan_goods: 680,
    },
    75: {
      support_boost: 295,
      clan_goods: 690,
    },
    76: {
      support_boost: 298,
      clan_goods: 700,
    },
    77: {
      support_boost: 301,
      clan_goods: 710,
    },
    78: {
      support_boost: 304,
      clan_goods: 720,
    },
    79: {
      support_boost: 307,
      clan_goods: 730,
    },
    80: {
      support_boost: 310,
      clan_goods: 740,
    },
    81: {
      support_boost: 313,
      clan_goods: 750,
    },
    82: {
      support_boost: 316,
      clan_goods: 760,
    },
    83: {
      support_boost: 319,
      clan_goods: 770,
    },
    84: {
      support_boost: 322,
      clan_goods: 780,
    },
    85: {
      support_boost: 325,
      clan_goods: 790,
    },
    86: {
      support_boost: 328,
      clan_goods: 800,
    },
    87: {
      support_boost: 331,
      clan_goods: 810,
    },
    88: {
      support_boost: 334,
      clan_goods: 820,
    },
    89: {
      support_boost: 337,
      clan_goods: 830,
    },
    90: {
      support_boost: 340,
      clan_goods: 840,
    },
    91: {
      support_boost: 343,
      clan_goods: 850,
    },
    92: {
      support_boost: 346,
      clan_goods: 860,
    },
    93: {
      support_boost: 349,
      clan_goods: 870,
    },
    94: {
      support_boost: 352,
      clan_goods: 880,
    },
    95: {
      support_boost: 355,
      clan_goods: 890,
    },
    96: {
      support_boost: 358,
      clan_goods: 900,
    },
    97: {
      support_boost: 361,
      clan_goods: 910,
    },
    98: {
      support_boost: 364,
      clan_goods: 920,
    },
    99: {
      support_boost: 367,
      clan_goods: 930,
    },
    100: {
      support_boost: 370,
      clan_goods: 940,
    },
    101: {
      support_boost: 373,
      clan_goods: 950,
    },
    102: {
      support_boost: 376,
      clan_goods: 960,
    },
    103: {
      support_boost: 379,
      clan_goods: 970,
    },
    104: {
      support_boost: 382,
      clan_goods: 980,
    },
    105: {
      support_boost: 385,
      clan_goods: 990,
    },
    106: {
      support_boost: 388,
      clan_goods: 1000,
    },
    107: {
      support_boost: 391,
      clan_goods: 1010,
    },
    108: {
      support_boost: 394,
      clan_goods: 1020,
    },
    109: {
      support_boost: 397,
      clan_goods: 1030,
    },
    110: {
      support_boost: 400,
      clan_goods: 1040,
    },
    111: {
      support_boost: 403,
      clan_goods: 1050,
    },
    112: {
      support_boost: 406,
      clan_goods: 1060,
    },
    113: {
      support_boost: 409,
      clan_goods: 1070,
    },
    114: {
      support_boost: 412,
      clan_goods: 1080,
    },
    115: {
      support_boost: 415,
      clan_goods: 220,
    },
    116: {
      support_boost: 418,
      clan_goods: 222,
    },
    117: {
      support_boost: 421,
      clan_goods: 224,
    },
    118: {
      support_boost: 424,
      clan_goods: 226,
    },
    119: {
      support_boost: 427,
      clan_goods: 228,
    },
  },
  age: ages.NoAge.key,
  levels: [...ageCost, ...defaultCost],
};
