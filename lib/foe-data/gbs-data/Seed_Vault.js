const ages = require("../ages.json");
const ageCost = require("../ages-cost/ArcticFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Seed_Vault",
  gbReward: {
    1: {
      helping_hands: 2,
      supplies: 21400,
    },
    2: {
      helping_hands: 2.1,
      supplies: 22700,
    },
    3: {
      helping_hands: 2.2,
      supplies: 24000,
    },
    4: {
      helping_hands: 2.3,
      supplies: 28500,
    },
    5: {
      helping_hands: 2.4,
      supplies: 30000,
    },
    6: {
      helping_hands: 2.5,
      supplies: 35300,
    },
    7: {
      helping_hands: 2.6,
      supplies: 37000,
    },
    8: {
      helping_hands: 2.7,
      supplies: 42400,
    },
    9: {
      helping_hands: 2.8,
      supplies: 44300,
    },
    10: {
      helping_hands: 2.9,
      supplies: 50600,
    },
    11: {
      helping_hands: 3.06,
      supplies: 57003,
    },
    12: {
      helping_hands: 3.13,
      supplies: 63552,
    },
    13: {
      helping_hands: 3.21,
      supplies: 70240,
    },
    14: {
      helping_hands: 3.29,
      supplies: 77057,
    },
    15: {
      helping_hands: 3.38,
      supplies: 83998,
    },
    16: {
      helping_hands: 3.46,
      supplies: 91055,
    },
    17: {
      helping_hands: 3.55,
      supplies: 98223,
    },
    18: {
      helping_hands: 3.63,
      supplies: 105498,
    },
    19: {
      helping_hands: 3.72,
      supplies: 112874,
    },
    20: {
      helping_hands: 3.82,
      supplies: 120348,
    },
    21: {
      helping_hands: 3.91,
      supplies: 127916,
    },
    22: {
      helping_hands: 4,
      supplies: 135575,
    },
    23: {
      helping_hands: 4.1,
      supplies: 143322,
    },
    24: {
      helping_hands: 4.2,
      supplies: 151153,
    },
    25: {
      helping_hands: 4.3,
      supplies: 159066,
    },
    26: {
      helping_hands: 4.4,
      supplies: 167058,
    },
    27: {
      helping_hands: 4.51,
      supplies: 175128,
    },
    28: {
      helping_hands: 4.61,
      supplies: 183273,
    },
    29: {
      helping_hands: 4.72,
      supplies: 191491,
    },
    30: {
      helping_hands: 4.83,
      supplies: 199781,
    },
    31: {
      helping_hands: 4.95,
      supplies: 208139,
    },
    32: {
      helping_hands: 5.06,
      supplies: 216565,
    },
    33: {
      helping_hands: 5.18,
      supplies: 225058,
    },
    34: {
      helping_hands: 5.29,
      supplies: 233615,
    },
    35: {
      helping_hands: 5.41,
      supplies: 242235,
    },
    36: {
      helping_hands: 5.54,
      supplies: 250917,
    },
    37: {
      helping_hands: 5.66,
      supplies: 259659,
    },
    38: {
      helping_hands: 5.79,
      supplies: 268461,
    },
    39: {
      helping_hands: 5.91,
      supplies: 277321,
    },
    40: {
      helping_hands: 6.04,
      supplies: 286237,
    },
    41: {
      helping_hands: 6.18,
      supplies: 295210,
    },
    42: {
      helping_hands: 6.31,
      supplies: 304238,
    },
    43: {
      helping_hands: 6.45,
      supplies: 313319,
    },
    44: {
      helping_hands: 6.58,
      supplies: 322453,
    },
    45: {
      helping_hands: 6.72,
      supplies: 331640,
    },
    46: {
      helping_hands: 6.86,
      supplies: 340878,
    },
    47: {
      helping_hands: 7.01,
      supplies: 350166,
    },
    48: {
      helping_hands: 7.15,
      supplies: 359503,
    },
    49: {
      helping_hands: 7.3,
      supplies: 368889,
    },
    50: {
      helping_hands: 7.45,
      supplies: 378324,
    },
    51: {
      helping_hands: 7.6,
      supplies: 387805,
    },
    52: {
      helping_hands: 7.75,
      supplies: 397334,
    },
    53: {
      helping_hands: 7.9,
      supplies: 406908,
    },
    54: {
      helping_hands: 8.06,
      supplies: 416527,
    },
    55: {
      helping_hands: 8.22,
      supplies: 426191,
    },
    56: {
      helping_hands: 8.37,
      supplies: 435899,
    },
    57: {
      helping_hands: 8.53,
      supplies: 445651,
    },
    58: {
      helping_hands: 8.7,
      supplies: 455445,
    },
    59: {
      helping_hands: 8.86,
      supplies: 465282,
    },
    60: {
      helping_hands: 9.02,
      supplies: 475160,
    },
    61: {
      helping_hands: 9.19,
      supplies: 485080,
    },
    62: {
      helping_hands: 9.35,
      supplies: 495040,
    },
    63: {
      helping_hands: 9.52,
      supplies: 505041,
    },
    64: {
      helping_hands: 9.69,
      supplies: 515081,
    },
    65: {
      helping_hands: 9.86,
      supplies: 525161,
    },
    66: {
      helping_hands: 10.03,
      supplies: 535280,
    },
    67: {
      helping_hands: 10.2,
      supplies: 545437,
    },
    68: {
      helping_hands: 10.38,
      supplies: 555632,
    },
    69: {
      helping_hands: 10.55,
      supplies: 565864,
    },
    70: {
      helping_hands: 10.73,
      supplies: 576134,
    },
    71: {
      helping_hands: 10.9,
      supplies: 586440,
    },
    72: {
      helping_hands: 11.08,
      supplies: 596783,
    },
    73: {
      helping_hands: 11.25,
      supplies: 607162,
    },
    74: {
      helping_hands: 11.43,
      supplies: 617576,
    },
    75: {
      helping_hands: 11.61,
      supplies: 628026,
    },
    76: {
      helping_hands: 11.79,
      supplies: 638510,
    },
    77: {
      helping_hands: 11.96,
      supplies: 649029,
    },
    78: {
      helping_hands: 12.14,
      supplies: 659582,
    },
    79: {
      helping_hands: 12.32,
      supplies: 670170,
    },
    80: {
      helping_hands: 12.5,
      supplies: 680790,
    },
    81: {
      helping_hands: 12.68,
      supplies: 691444,
    },
    82: {
      helping_hands: 12.86,
      supplies: 702131,
    },
    83: {
      helping_hands: 13.04,
      supplies: 712850,
    },
    84: {
      helping_hands: 13.21,
      supplies: 723602,
    },
    85: {
      helping_hands: 13.39,
      supplies: 734386,
    },
    86: {
      helping_hands: 13.57,
      supplies: 745202,
    },
    87: {
      helping_hands: 13.75,
      supplies: 756049,
    },
    88: {
      helping_hands: 13.92,
      supplies: 766927,
    },
    89: {
      helping_hands: 14.1,
      supplies: 777836,
    },
    90: {
      helping_hands: 14.27,
      supplies: 788776,
    },
    91: {
      helping_hands: 14.45,
      supplies: 799747,
    },
    92: {
      helping_hands: 14.62,
      supplies: 810747,
    },
    93: {
      helping_hands: 14.8,
      supplies: 821778,
    },
    94: {
      helping_hands: 14.97,
      supplies: 832838,
    },
    95: {
      helping_hands: 15.14,
      supplies: 843928,
    },
    96: {
      helping_hands: 15.31,
      supplies: 855047,
    },
    97: {
      helping_hands: 15.48,
      supplies: 866195,
    },
    98: {
      helping_hands: 15.65,
      supplies: 877371,
    },
    99: {
      helping_hands: 15.81,
      supplies: 888576,
    },
    100: {
      helping_hands: 15.98,
      supplies: 899810,
    },
    101: {
      helping_hands: 16.14,
      supplies: 911072,
    },
    102: {
      helping_hands: 16.3,
      supplies: 922361,
    },
    103: {
      helping_hands: 16.47,
      supplies: 933678,
    },
    104: {
      helping_hands: 16.63,
      supplies: 945023,
    },
    105: {
      helping_hands: 16.78,
      supplies: 956395,
    },
    107: {
      helping_hands: 17.1,
      supplies: 979220,
    },
    109: {
      helping_hands: 17.4,
      supplies: 1002153,
    },
    110: {
      helping_hands: 17.55,
      supplies: 1013658,
    },
    111: {
      helping_hands: 17.7,
      supplies: 1025190,
    },
    112: {
      helping_hands: 17.85,
      supplies: 1036748,
    },
    113: {
      helping_hands: 17.99,
      supplies: 1048332,
    },
    114: {
      helping_hands: 18.14,
      supplies: 1059941,
    },
    115: {
      helping_hands: 18.28,
      supplies: 1071576,
    },
    116: {
      helping_hands: 18.42,
      supplies: 1083236,
    },
    117: {
      helping_hands: 18.55,
      supplies: 1094922,
    },
    118: {
      helping_hands: 18.69,
      supplies: 1106632,
    },
    119: {
      helping_hands: 18.82,
      supplies: 1118367,
    },
    120: {
      helping_hands: 18.96,
      supplies: 1130127,
    },
    124: {
      helping_hands: 19.46,
      supplies: 1177410,
    },
    125: {
      helping_hands: 19.59,
      supplies: 1189291,
    },
    126: {
      helping_hands: 19.71,
      supplies: 1201196,
    },
  },
  age: ages.ArcticFuture.key,
  size: { length: 5, width: 6 },
  levels: ageCost,
  buildCost: {
    ai_data: 250,
    bioplastics: 500,
    nanowire: 550,
    paper_batteries: 450,
    transester_gas: 250,
  },
};
