const ages = require("../ages.json");
const ageCost = require("../ages-cost/Oracle");
const defaultCost = require("../ages-cost/defaultCost");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Oracle_of_Delphi",
  gbReward: {
    1: {
      happiness: 300,
      supplies: 550,
    },
    2: {
      happiness: 370,
      supplies: 860,
    },
    3: {
      happiness: 480,
      supplies: 1260,
    },
    4: {
      happiness: 610,
      supplies: 1730,
    },
    5: {
      happiness: 750,
      supplies: 2270,
    },
    6: {
      happiness: 920,
      supplies: 2860,
    },
    7: {
      happiness: 1100,
      supplies: 3510,
    },
    8: {
      happiness: 1290,
      supplies: 4200,
    },
    9: {
      happiness: 1490,
      supplies: 4940,
    },
    10: {
      happiness: 1700,
      supplies: 6990,
    },
    11: {
      happiness: 1783,
      supplies: 7875,
    },
    12: {
      happiness: 1863,
      supplies: 8780,
    },
    13: {
      happiness: 1939,
      supplies: 9704,
    },
    14: {
      happiness: 2012,
      supplies: 10645,
    },
    15: {
      happiness: 2083,
      supplies: 11604,
    },
    16: {
      happiness: 2151,
      supplies: 12579,
    },
    17: {
      happiness: 2217,
      supplies: 13569,
    },
    18: {
      happiness: 2281,
      supplies: 14574,
    },
    19: {
      happiness: 2344,
      supplies: 15593,
    },
    20: {
      happiness: 2405,
      supplies: 16626,
    },
    21: {
      happiness: 2464,
      supplies: 17671,
    },
    22: {
      happiness: 2522,
      supplies: 18729,
    },
    23: {
      happiness: 2579,
      supplies: 19799,
    },
    24: {
      happiness: 2634,
      supplies: 20881,
    },
    25: {
      happiness: 2688,
      supplies: 21974,
    },
    26: {
      happiness: 2742,
      supplies: 23078,
    },
    27: {
      happiness: 2794,
      supplies: 24193,
    },
    28: {
      happiness: 2845,
      supplies: 25318,
    },
    29: {
      happiness: 2895,
      supplies: 26453,
    },
    30: {
      happiness: 2945,
      supplies: 27599,
    },
    31: {
      happiness: 2994,
      supplies: 28753,
    },
    32: {
      happiness: 3042,
      supplies: 29917,
    },
    33: {
      happiness: 3089,
      supplies: 31090,
    },
    34: {
      happiness: 3135,
      supplies: 32272,
    },
    35: {
      happiness: 3181,
      supplies: 33463,
    },
    36: {
      happiness: 3226,
      supplies: 34663,
    },
    37: {
      happiness: 3271,
      supplies: 35870,
    },
    38: {
      happiness: 3314,
      supplies: 37086,
    },
    39: {
      happiness: 3358,
      supplies: 38310,
    },
    40: {
      happiness: 3400,
      supplies: 39542,
    },
    41: {
      happiness: 3443,
      supplies: 40781,
    },
    42: {
      happiness: 3484,
      supplies: 42029,
    },
    43: {
      happiness: 3526,
      supplies: 43283,
    },
    44: {
      happiness: 3566,
      supplies: 44545,
    },
    45: {
      happiness: 3607,
      supplies: 45814,
    },
    46: {
      happiness: 3647,
      supplies: 47090,
    },
    47: {
      happiness: 3686,
      supplies: 48373,
    },
    48: {
      happiness: 3725,
      supplies: 49663,
    },
    49: {
      happiness: 3764,
      supplies: 50960,
    },
    50: {
      happiness: 3802,
      supplies: 52263,
    },
    51: {
      happiness: 3840,
      supplies: 53573,
    },
    52: {
      happiness: 3877,
      supplies: 54889,
    },
    53: {
      happiness: 3914,
      supplies: 56212,
    },
    54: {
      happiness: 3951,
      supplies: 57540,
    },
    55: {
      happiness: 3987,
      supplies: 58875,
    },
    56: {
      happiness: 4023,
      supplies: 60217,
    },
    57: {
      happiness: 4059,
      supplies: 61564,
    },
    58: {
      happiness: 4095,
      supplies: 62917,
    },
    59: {
      happiness: 4130,
      supplies: 64276,
    },
    60: {
      happiness: 4165,
      supplies: 65640,
    },
    61: {
      happiness: 4199,
      supplies: 67010,
    },
    62: {
      happiness: 4233,
      supplies: 68386,
    },
    63: {
      happiness: 4267,
      supplies: 69768,
    },
    64: {
      happiness: 4301,
      supplies: 71155,
    },
    65: {
      happiness: 4335,
      supplies: 72547,
    },
    66: {
      happiness: 4368,
      supplies: 73945,
    },
    67: {
      happiness: 4401,
      supplies: 75348,
    },
    68: {
      happiness: 4434,
      supplies: 76757,
    },
    69: {
      happiness: 4466,
      supplies: 78170,
    },
    70: {
      happiness: 4498,
      supplies: 79589,
    },
    71: {
      happiness: 4530,
      supplies: 81013,
    },
    72: {
      happiness: 4562,
      supplies: 82441,
    },
    73: {
      happiness: 4594,
      supplies: 83875,
    },
    74: {
      happiness: 4625,
      supplies: 85314,
    },
    75: {
      happiness: 4656,
      supplies: 86757,
    },
    76: {
      happiness: 4687,
      supplies: 88206,
    },
    77: {
      happiness: 4718,
      supplies: 89659,
    },
    78: {
      happiness: 4748,
      supplies: 91117,
    },
    79: {
      happiness: 4779,
      supplies: 92579,
    },
    80: {
      happiness: 4809,
      supplies: 94046,
    },
    81: {
      happiness: 4839,
      supplies: 95518,
    },
    82: {
      happiness: 4869,
      supplies: 96994,
    },
    83: {
      happiness: 4898,
      supplies: 98475,
    },
    84: {
      happiness: 4928,
      supplies: 99961,
    },
    85: {
      happiness: 4957,
      supplies: 101450,
    },
    86: {
      happiness: 4986,
      supplies: 102944,
    },
    87: {
      happiness: 5015,
      supplies: 104443,
    },
    88: {
      happiness: 5044,
      supplies: 105946,
    },
    89: {
      happiness: 5072,
      supplies: 107453,
    },
    90: {
      happiness: 5100,
      supplies: 108964,
    },
    91: {
      happiness: 5129,
      supplies: 110479,
    },
    92: {
      happiness: 5157,
      supplies: 111999,
    },
    93: {
      happiness: 5185,
      supplies: 113523,
    },
    94: {
      happiness: 5213,
      supplies: 115051,
    },
    95: {
      happiness: 5240,
      supplies: 116583,
    },
    96: {
      happiness: 5268,
      supplies: 118119,
    },
    97: {
      happiness: 5295,
      supplies: 119659,
    },
    98: {
      happiness: 5322,
      supplies: 121202,
    },
    99: {
      happiness: 5349,
      supplies: 122750,
    },
    100: {
      happiness: 5376,
      supplies: 124302,
    },
    101: {
      happiness: 5403,
      supplies: 125858,
    },
    102: {
      happiness: 5430,
      supplies: 127418,
    },
    103: {
      happiness: 5456,
      supplies: 128981,
    },
    104: {
      happiness: 5483,
      supplies: 130548,
    },
    105: {
      happiness: 5509,
      supplies: 132119,
    },
    106: {
      happiness: 5535,
      supplies: 133694,
    },
    107: {
      happiness: 5561,
      supplies: 135272,
    },
  },
  buildCost: {},
  age: ages.NoAge.key,
  size: { length: 3, width: 3 },
  levels: [...ageCost, ...defaultCost],
};
