const ages = require("../ages.json");
const ageCost = require("../ages-cost/VirtualFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Himeji_Castle",
  gbReward: {
    1: {
      spoils_of_war: 7,
      supplies: 102500,
    },
    2: {
      spoils_of_war: 9,
      supplies: 108900,
    },
    3: {
      spoils_of_war: 11,
      supplies: 115300,
    },
    4: {
      spoils_of_war: 13,
      supplies: 136800,
    },
    5: {
      spoils_of_war: 15,
      supplies: 144000,
    },
    6: {
      spoils_of_war: 17,
      supplies: 169300,
    },
    7: {
      spoils_of_war: 19,
      supplies: 177400,
    },
    8: {
      spoils_of_war: 21,
      supplies: 203700,
    },
    9: {
      spoils_of_war: 23,
      supplies: 212500,
    },
    10: {
      spoils_of_war: 25,
      supplies: 243000,
    },
    11: {
      spoils_of_war: 25.62,
      supplies: 273746,
    },
    12: {
      spoils_of_war: 26.25,
      supplies: 305199,
    },
    13: {
      spoils_of_war: 26.87,
      supplies: 337315,
    },
    14: {
      spoils_of_war: 27.49,
      supplies: 370056,
    },
    15: {
      spoils_of_war: 28.11,
      supplies: 403386,
    },
    16: {
      spoils_of_war: 28.72,
      supplies: 437277,
    },
    17: {
      spoils_of_war: 29.33,
      supplies: 471702,
    },
    18: {
      spoils_of_war: 29.93,
      supplies: 506638,
    },
    19: {
      spoils_of_war: 30.53,
      supplies: 542062,
    },
    20: {
      spoils_of_war: 31.12,
      supplies: 577955,
    },
    21: {
      spoils_of_war: 31.71,
      supplies: 614300,
    },
    22: {
      spoils_of_war: 32.28,
      supplies: 651081,
    },
    23: {
      spoils_of_war: 32.85,
      supplies: 688282,
    },
    24: {
      spoils_of_war: 33.41,
      supplies: 725890,
    },
    25: {
      spoils_of_war: 33.96,
      supplies: 763891,
    },
    26: {
      spoils_of_war: 34.5,
      supplies: 802275,
    },
    27: {
      spoils_of_war: 35.03,
      supplies: 841030,
    },
    28: {
      spoils_of_war: 35.55,
      supplies: 880145,
    },
    29: {
      spoils_of_war: 36.06,
      supplies: 919611,
    },
    30: {
      spoils_of_war: 36.55,
      supplies: 959418,
    },
    31: {
      spoils_of_war: 37.04,
      supplies: 999559,
    },
    32: {
      spoils_of_war: 37.51,
      supplies: 1040025,
    },
    33: {
      spoils_of_war: 37.98,
      supplies: 1080809,
    },
    34: {
      spoils_of_war: 38.43,
      supplies: 1121902,
    },
    35: {
      spoils_of_war: 38.86,
      supplies: 1163299,
    },
    36: {
      spoils_of_war: 39.29,
      supplies: 1204993,
    },
    37: {
      spoils_of_war: 39.71,
      supplies: 1246977,
    },
    38: {
      spoils_of_war: 40.11,
      supplies: 1289246,
    },
    39: {
      spoils_of_war: 40.5,
      supplies: 1331794,
    },
    40: {
      spoils_of_war: 40.88,
      supplies: 1374616,
    },
    41: {
      spoils_of_war: 41.25,
      supplies: 1417706,
    },
    42: {
      spoils_of_war: 41.6,
      supplies: 1461060,
    },
    43: {
      spoils_of_war: 41.94,
      supplies: 1504673,
    },
    44: {
      spoils_of_war: 42.28,
      supplies: 1548539,
    },
    45: {
      spoils_of_war: 42.6,
      supplies: 1592656,
    },
    46: {
      spoils_of_war: 42.91,
      supplies: 1637019,
    },
    47: {
      spoils_of_war: 43.21,
      supplies: 1681623,
    },
    48: {
      spoils_of_war: 43.49,
      supplies: 1726466,
    },
    49: {
      spoils_of_war: 43.77,
      supplies: 1771542,
    },
    50: {
      spoils_of_war: 44.04,
      supplies: 1816849,
    },
    51: {
      spoils_of_war: 44.3,
      supplies: 1862383,
    },
    52: {
      spoils_of_war: 44.55,
      supplies: 1908141,
    },
    53: {
      spoils_of_war: 44.78,
      supplies: 1954120,
    },
    54: {
      spoils_of_war: 45.01,
      supplies: 2000316,
    },
    55: {
      spoils_of_war: 45.23,
      supplies: 2046726,
    },
    56: {
      spoils_of_war: 45.44,
      supplies: 2093348,
    },
    57: {
      spoils_of_war: 45.65,
      supplies: 2140178,
    },
    58: {
      spoils_of_war: 45.84,
      supplies: 2187214,
    },
    59: {
      spoils_of_war: 46.03,
      supplies: 2234454,
    },
    60: {
      spoils_of_war: 46.21,
      supplies: 2281894,
    },
    61: {
      spoils_of_war: 46.38,
      supplies: 2329532,
    },
    62: {
      spoils_of_war: 46.54,
      supplies: 2377366,
    },
    63: {
      spoils_of_war: 46.7,
      supplies: 2425393,
    },
    64: {
      spoils_of_war: 46.85,
      supplies: 2473611,
    },
    65: {
      spoils_of_war: 47,
      supplies: 2522017,
    },
    66: {
      spoils_of_war: 47.13,
      supplies: 2570611,
    },
    67: {
      spoils_of_war: 47.27,
      supplies: 2619388,
    },
    68: {
      spoils_of_war: 47.39,
      supplies: 2668348,
    },
    69: {
      spoils_of_war: 47.51,
      supplies: 2717489,
    },
    70: {
      spoils_of_war: 47.63,
      supplies: 2766807,
    },
    71: {
      spoils_of_war: 47.74,
      supplies: 2816302,
    },
    72: {
      spoils_of_war: 47.84,
      supplies: 2865972,
    },
    73: {
      spoils_of_war: 47.95,
      supplies: 2915815,
    },
    74: {
      spoils_of_war: 48.04,
      supplies: 2965828,
    },
    75: {
      spoils_of_war: 48.13,
      supplies: 3016011,
    },
    76: {
      spoils_of_war: 48.22,
      supplies: 3066361,
    },
    77: {
      spoils_of_war: 48.31,
      supplies: 3116878,
    },
    78: {
      spoils_of_war: 48.39,
      supplies: 3167558,
    },
    79: {
      spoils_of_war: 48.46,
      supplies: 3218401,
    },
    80: {
      spoils_of_war: 48.53,
      supplies: 3269406,
    },
    81: {
      spoils_of_war: 48.6,
      supplies: 3320570,
    },
    82: {
      spoils_of_war: 48.67,
      supplies: 3371892,
    },
    83: {
      spoils_of_war: 48.73,
      supplies: 3423371,
    },
    84: {
      spoils_of_war: 48.79,
      supplies: 3475005,
    },
    85: {
      spoils_of_war: 48.85,
      supplies: 3526793,
    },
    86: {
      spoils_of_war: 48.91,
      supplies: 3578734,
    },
    87: {
      spoils_of_war: 48.96,
      supplies: 3630826,
    },
    88: {
      spoils_of_war: 49.01,
      supplies: 3683067,
    },
    89: {
      spoils_of_war: 49.06,
      supplies: 3735458,
    },
    90: {
      spoils_of_war: 49.1,
      supplies: 3787996,
    },
    91: {
      spoils_of_war: 49.14,
      supplies: 3840680,
    },
    92: {
      spoils_of_war: 49.18,
      supplies: 3893508,
    },
    93: {
      spoils_of_war: 49.22,
      supplies: 3946481,
    },
    94: {
      spoils_of_war: 49.26,
      supplies: 3999596,
    },
    95: {
      spoils_of_war: 49.3,
      supplies: 4052853,
    },
    96: {
      spoils_of_war: 49.33,
      supplies: 4106250,
    },
    97: {
      spoils_of_war: 49.36,
      supplies: 4159786,
    },
    98: {
      spoils_of_war: 49.39,
      supplies: 4213460,
    },
    99: {
      spoils_of_war: 49.42,
      supplies: 4267272,
    },
    100: {
      spoils_of_war: 49.45,
      supplies: 4321219,
    },
    101: {
      spoils_of_war: 49.48,
      supplies: 4375302,
    },
    102: {
      spoils_of_war: 49.5,
      supplies: 4429519,
    },
    103: {
      spoils_of_war: 49.53,
      supplies: 4483868,
    },
    104: {
      spoils_of_war: 49.55,
      supplies: 4538350,
    },
    105: {
      spoils_of_war: 49.57,
      supplies: 4592963,
    },
    106: {
      spoils_of_war: 49.59,
      supplies: 4647706,
    },
    107: {
      spoils_of_war: 49.61,
      supplies: 4702578,
    },
    108: {
      spoils_of_war: 49.63,
      supplies: 4757579,
    },
    109: {
      spoils_of_war: 49.65,
      supplies: 4812707,
    },
    110: {
      spoils_of_war: 49.67,
      supplies: 4867962,
    },
    111: {
      spoils_of_war: 49.68,
      supplies: 4923342,
    },
    112: {
      spoils_of_war: 49.7,
      supplies: 4978848,
    },
    113: {
      spoils_of_war: 49.71,
      supplies: 5034477,
    },
    114: {
      spoils_of_war: 49.73,
      supplies: 5090230,
    },
    115: {
      spoils_of_war: 49.74,
      supplies: 5146105,
    },
    116: {
      spoils_of_war: 49.75,
      supplies: 5202101,
    },
    117: {
      spoils_of_war: 49.76,
      supplies: 5258219,
    },
    118: {
      spoils_of_war: 49.78,
      supplies: 5314456,
    },
    132: {
      spoils_of_war: 49.89,
      supplies: 6113976,
    },
    133: {
      spoils_of_war: 49.89,
      supplies: 6171928,
    },
    134: {
      spoils_of_war: 49.9,
      supplies: 6229989,
    },
    135: {
      spoils_of_war: 49.9,
      supplies: 6288159,
    },
    143: {
      spoils_of_war: 49.94,
      supplies: 6757349,
    },
  },
  age: ages.VirtualFuture.key,
  levels: ageCost,
};
