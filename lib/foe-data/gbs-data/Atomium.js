const ages = require("../ages.json");
const ageCost = require("../ages-cost/ModernEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Atomium",
  gbReward: {
    1: {
      happiness: 2400,
      clan_goods: 30,
    },
    2: {
      happiness: 2740,
      clan_goods: 35,
    },
    3: {
      happiness: 3290,
      clan_goods: 40,
    },
    4: {
      happiness: 3970,
      clan_goods: 45,
    },
    5: {
      happiness: 4750,
      clan_goods: 55,
    },
    6: {
      happiness: 5610,
      clan_goods: 60,
    },
    7: {
      happiness: 6540,
      clan_goods: 65,
    },
    8: {
      happiness: 7540,
      clan_goods: 70,
    },
    9: {
      happiness: 8600,
      clan_goods: 75,
    },
    10: {
      happiness: 9700,
      clan_goods: 85,
    },
    11: {
      happiness: 10174,
      clan_goods: 95,
    },
    12: {
      happiness: 10626,
      clan_goods: 105,
    },
    13: {
      happiness: 11060,
      clan_goods: 115,
    },
    14: {
      happiness: 11478,
      clan_goods: 125,
    },
    15: {
      happiness: 11881,
      clan_goods: 135,
    },
    16: {
      happiness: 12270,
      clan_goods: 145,
    },
    17: {
      happiness: 12648,
      clan_goods: 155,
    },
    18: {
      happiness: 13014,
      clan_goods: 165,
    },
    19: {
      happiness: 13371,
      clan_goods: 175,
    },
    20: {
      happiness: 13718,
      clan_goods: 185,
    },
    21: {
      happiness: 14057,
      clan_goods: 195,
    },
    22: {
      happiness: 14388,
      clan_goods: 205,
    },
    23: {
      happiness: 14711,
      clan_goods: 215,
    },
    24: {
      happiness: 15028,
      clan_goods: 225,
    },
    25: {
      happiness: 15338,
      clan_goods: 235,
    },
    26: {
      happiness: 15641,
      clan_goods: 245,
    },
    27: {
      happiness: 15939,
      clan_goods: 255,
    },
    28: {
      happiness: 16232,
      clan_goods: 265,
    },
    29: {
      happiness: 16519,
      clan_goods: 275,
    },
    30: {
      happiness: 16801,
      clan_goods: 285,
    },
    31: {
      happiness: 17079,
      clan_goods: 295,
    },
    32: {
      happiness: 17352,
      clan_goods: 305,
    },
    33: {
      happiness: 17621,
      clan_goods: 315,
    },
    34: {
      happiness: 17886,
      clan_goods: 325,
    },
    35: {
      happiness: 18148,
      clan_goods: 335,
    },
    36: {
      happiness: 18405,
      clan_goods: 345,
    },
    37: {
      happiness: 18659,
      clan_goods: 355,
    },
    38: {
      happiness: 18909,
      clan_goods: 365,
    },
    39: {
      happiness: 19156,
      clan_goods: 375,
    },
    40: {
      happiness: 19400,
      clan_goods: 385,
    },
    41: {
      happiness: 19642,
      clan_goods: 395,
    },
    42: {
      happiness: 19880,
      clan_goods: 405,
    },
    43: {
      happiness: 20115,
      clan_goods: 415,
    },
    44: {
      happiness: 20347,
      clan_goods: 425,
    },
    45: {
      happiness: 20577,
      clan_goods: 435,
    },
    46: {
      happiness: 20805,
      clan_goods: 445,
    },
    47: {
      happiness: 21030,
      clan_goods: 455,
    },
    48: {
      happiness: 21252,
      clan_goods: 465,
    },
    49: {
      happiness: 21472,
      clan_goods: 475,
    },
    50: {
      happiness: 21690,
      clan_goods: 485,
    },
    51: {
      happiness: 21906,
      clan_goods: 495,
    },
    52: {
      happiness: 22120,
      clan_goods: 505,
    },
    53: {
      happiness: 22332,
      clan_goods: 515,
    },
    54: {
      happiness: 22541,
      clan_goods: 525,
    },
    55: {
      happiness: 22749,
      clan_goods: 535,
    },
    56: {
      happiness: 22955,
      clan_goods: 545,
    },
    57: {
      happiness: 23159,
      clan_goods: 555,
    },
    58: {
      happiness: 23361,
      clan_goods: 565,
    },
    59: {
      happiness: 23562,
      clan_goods: 575,
    },
    60: {
      happiness: 23761,
      clan_goods: 585,
    },
    61: {
      happiness: 23958,
      clan_goods: 595,
    },
    62: {
      happiness: 24153,
      clan_goods: 605,
    },
    63: {
      happiness: 24347,
      clan_goods: 615,
    },
    64: {
      happiness: 24540,
      clan_goods: 625,
    },
    65: {
      happiness: 24731,
      clan_goods: 635,
    },
    66: {
      happiness: 24920,
      clan_goods: 645,
    },
    67: {
      happiness: 25108,
      clan_goods: 655,
    },
    68: {
      happiness: 25295,
      clan_goods: 665,
    },
    69: {
      happiness: 25480,
      clan_goods: 675,
    },
    70: {
      happiness: 25664,
      clan_goods: 685,
    },
    71: {
      happiness: 25847,
      clan_goods: 695,
    },
    72: {
      happiness: 26028,
      clan_goods: 705,
    },
    73: {
      happiness: 26208,
      clan_goods: 715,
    },
    74: {
      happiness: 26387,
      clan_goods: 725,
    },
    75: {
      happiness: 26565,
      clan_goods: 735,
    },
    76: {
      happiness: 26742,
      clan_goods: 745,
    },
    77: {
      happiness: 26917,
      clan_goods: 755,
    },
    78: {
      happiness: 27091,
      clan_goods: 765,
    },
    79: {
      happiness: 27264,
      clan_goods: 775,
    },
    80: {
      happiness: 27436,
      clan_goods: 785,
    },
    81: {
      happiness: 27607,
      clan_goods: 795,
    },
    82: {
      happiness: 27777,
      clan_goods: 805,
    },
    83: {
      happiness: 27946,
      clan_goods: 815,
    },
    84: {
      happiness: 28114,
      clan_goods: 825,
    },
    85: {
      happiness: 28281,
      clan_goods: 835,
    },
    86: {
      happiness: 28446,
      clan_goods: 845,
    },
    87: {
      happiness: 28611,
      clan_goods: 855,
    },
    88: {
      happiness: 28775,
      clan_goods: 865,
    },
    89: {
      happiness: 28938,
      clan_goods: 875,
    },
    90: {
      happiness: 29100,
      clan_goods: 885,
    },
    91: {
      happiness: 29262,
      clan_goods: 895,
    },
    92: {
      happiness: 29422,
      clan_goods: 905,
    },
    93: {
      happiness: 29582,
      clan_goods: 915,
    },
    94: {
      happiness: 29740,
      clan_goods: 925,
    },
    95: {
      happiness: 29898,
      clan_goods: 935,
    },
    96: {
      happiness: 30055,
      clan_goods: 945,
    },
    97: {
      happiness: 30211,
      clan_goods: 955,
    },
    98: {
      happiness: 30366,
      clan_goods: 965,
    },
    99: {
      happiness: 30521,
      clan_goods: 975,
    },
    100: {
      happiness: 30675,
      clan_goods: 985,
    },
    101: {
      happiness: 30828,
      clan_goods: 995,
    },
    102: {
      happiness: 30980,
      clan_goods: 1005,
    },
    103: {
      happiness: 31131,
      clan_goods: 1015,
    },
    104: {
      happiness: 31282,
      clan_goods: 1025,
    },
    105: {
      happiness: 31432,
      clan_goods: 1035,
    },
    106: {
      happiness: 31581,
      clan_goods: 1045,
    },
    107: {
      happiness: 31730,
      clan_goods: 1055,
    },
    108: {
      happiness: 31878,
      clan_goods: 1065,
    },
    109: {
      happiness: 32025,
      clan_goods: 1075,
    },
    110: {
      happiness: 32172,
      clan_goods: 1085,
    },
    111: {
      happiness: 32318,
      clan_goods: 1095,
    },
    112: {
      happiness: 32463,
      clan_goods: 1105,
    },
    113: {
      happiness: 32608,
      clan_goods: 1115,
    },
  },
  age: ages.ModernEra.key,
  levels: ageCost,
};
