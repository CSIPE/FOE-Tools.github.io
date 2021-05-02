const ages = require("../ages.json");
const ageCost = require("../ages-cost/ProgressiveEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Alcatraz",
  gbReward: {
    1: {
      happiness: 2700,
      penal_unit: 4,
    },
    2: {
      happiness: 3100,
      penal_unit: 5,
    },
    3: {
      happiness: 3750,
      penal_unit: 5,
    },
    4: {
      happiness: 4550,
      penal_unit: 5,
    },
    5: {
      happiness: 5470,
      penal_unit: 6,
    },
    6: {
      happiness: 6480,
      penal_unit: 6,
    },
    7: {
      happiness: 7580,
      penal_unit: 6,
    },
    8: {
      happiness: 8750,
      penal_unit: 7,
    },
    9: {
      happiness: 10000,
      penal_unit: 8,
    },
    10: {
      happiness: 11300,
      penal_unit: 9,
    },
    11: {
      happiness: 11852,
      penal_unit: 10,
    },
    12: {
      happiness: 12379,
      penal_unit: 11,
    },
    13: {
      happiness: 12884,
      penal_unit: 12,
    },
    14: {
      happiness: 13371,
      penal_unit: 13,
    },
    15: {
      happiness: 13840,
      penal_unit: 14,
    },
    16: {
      happiness: 14294,
      penal_unit: 15,
    },
    17: {
      happiness: 14734,
      penal_unit: 16,
    },
    18: {
      happiness: 15161,
      penal_unit: 17,
    },
    19: {
      happiness: 15576,
      penal_unit: 18,
    },
    20: {
      happiness: 15981,
      penal_unit: 19,
    },
    21: {
      happiness: 16376,
      penal_unit: 20,
    },
    22: {
      happiness: 16761,
      penal_unit: 21,
    },
    23: {
      happiness: 17138,
      penal_unit: 22,
    },
    24: {
      happiness: 17506,
      penal_unit: 23,
    },
    25: {
      happiness: 17867,
      penal_unit: 24,
    },
    26: {
      happiness: 18221,
      penal_unit: 25,
    },
    27: {
      happiness: 18568,
      penal_unit: 26,
    },
    28: {
      happiness: 18909,
      penal_unit: 27,
    },
    29: {
      happiness: 19244,
      penal_unit: 28,
    },
    30: {
      happiness: 19573,
      penal_unit: 29,
    },
    31: {
      happiness: 19896,
      penal_unit: 30,
    },
    32: {
      happiness: 20215,
      penal_unit: 31,
    },
    33: {
      happiness: 20528,
      penal_unit: 32,
    },
    34: {
      happiness: 20837,
      penal_unit: 33,
    },
    35: {
      happiness: 21141,
      penal_unit: 34,
    },
    36: {
      happiness: 21441,
      penal_unit: 35,
    },
    37: {
      happiness: 21736,
      penal_unit: 36,
    },
    38: {
      happiness: 22028,
      penal_unit: 37,
    },
    39: {
      happiness: 22316,
      penal_unit: 38,
    },
    40: {
      happiness: 22600,
      penal_unit: 39,
    },
    41: {
      happiness: 22881,
      penal_unit: 40,
    },
    42: {
      happiness: 23159,
      penal_unit: 41,
    },
    43: {
      happiness: 23433,
      penal_unit: 42,
    },
    44: {
      happiness: 23704,
      penal_unit: 43,
    },
    45: {
      happiness: 23971,
      penal_unit: 44,
    },
    46: {
      happiness: 24236,
      penal_unit: 45,
    },
    47: {
      happiness: 24498,
      penal_unit: 46,
    },
    48: {
      happiness: 24758,
      penal_unit: 47,
    },
    49: {
      happiness: 25014,
      penal_unit: 48,
    },
    50: {
      happiness: 25268,
      penal_unit: 49,
    },
    51: {
      happiness: 25519,
      penal_unit: 50,
    },
    52: {
      happiness: 25768,
      penal_unit: 51,
    },
    53: {
      happiness: 26015,
      penal_unit: 52,
    },
    54: {
      happiness: 26259,
      penal_unit: 53,
    },
    55: {
      happiness: 26501,
      penal_unit: 54,
    },
    56: {
      happiness: 26741,
      penal_unit: 55,
    },
    57: {
      happiness: 26979,
      penal_unit: 56,
    },
    58: {
      happiness: 27215,
      penal_unit: 57,
    },
    59: {
      happiness: 27448,
      penal_unit: 58,
    },
    60: {
      happiness: 27680,
      penal_unit: 59,
    },
    61: {
      happiness: 27909,
      penal_unit: 60,
    },
    62: {
      happiness: 28137,
      penal_unit: 61,
    },
    63: {
      happiness: 28363,
      penal_unit: 62,
    },
    64: {
      happiness: 28587,
      penal_unit: 63,
    },
    65: {
      happiness: 28810,
      penal_unit: 64,
    },
    66: {
      happiness: 29031,
      penal_unit: 65,
    },
    67: {
      happiness: 29250,
      penal_unit: 66,
    },
    68: {
      happiness: 29467,
      penal_unit: 67,
    },
    69: {
      happiness: 29683,
      penal_unit: 68,
    },
    70: {
      happiness: 29897,
      penal_unit: 69,
    },
    71: {
      happiness: 30110,
      penal_unit: 70,
    },
    72: {
      happiness: 30322,
      penal_unit: 71,
    },
    73: {
      happiness: 30531,
      penal_unit: 72,
    },
    74: {
      happiness: 30740,
      penal_unit: 73,
    },
    75: {
      happiness: 30947,
      penal_unit: 74,
    },
    76: {
      happiness: 31152,
      penal_unit: 75,
    },
    77: {
      happiness: 31357,
      penal_unit: 76,
    },
    78: {
      happiness: 31560,
      penal_unit: 77,
    },
    79: {
      happiness: 31761,
      penal_unit: 78,
    },
    80: {
      happiness: 31962,
      penal_unit: 79,
    },
    81: {
      happiness: 32161,
      penal_unit: 80,
    },
    82: {
      happiness: 32359,
      penal_unit: 81,
    },
    83: {
      happiness: 32555,
      penal_unit: 82,
    },
    84: {
      happiness: 32751,
      penal_unit: 83,
    },
    85: {
      happiness: 32945,
      penal_unit: 84,
    },
    86: {
      happiness: 33139,
      penal_unit: 85,
    },
    87: {
      happiness: 33331,
      penal_unit: 86,
    },
    88: {
      happiness: 33522,
      penal_unit: 87,
    },
    89: {
      happiness: 33712,
      penal_unit: 88,
    },
    90: {
      happiness: 33900,
      penal_unit: 89,
    },
    91: {
      happiness: 34088,
      penal_unit: 90,
    },
    92: {
      happiness: 34275,
      penal_unit: 91,
    },
    93: {
      happiness: 34461,
      penal_unit: 92,
    },
    94: {
      happiness: 34646,
      penal_unit: 93,
    },
    95: {
      happiness: 34829,
      penal_unit: 94,
    },
    96: {
      happiness: 35012,
      penal_unit: 95,
    },
    97: {
      happiness: 35194,
      penal_unit: 96,
    },
    98: {
      happiness: 35375,
      penal_unit: 97,
    },
    99: {
      happiness: 35555,
      penal_unit: 98,
    },
    100: {
      happiness: 35734,
      penal_unit: 99,
    },
    101: {
      happiness: 35912,
      penal_unit: 100,
    },
    102: {
      happiness: 36090,
      penal_unit: 101,
    },
    103: {
      happiness: 36266,
      penal_unit: 102,
    },
    104: {
      happiness: 36442,
      penal_unit: 103,
    },
    105: {
      happiness: 36617,
      penal_unit: 104,
    },
    106: {
      happiness: 36791,
      penal_unit: 105,
    },
    107: {
      happiness: 36964,
      penal_unit: 106,
    },
    108: {
      happiness: 37136,
      penal_unit: 107,
    },
    109: {
      happiness: 37308,
      penal_unit: 108,
    },
    110: {
      happiness: 37478,
      penal_unit: 109,
    },
    111: {
      happiness: 37648,
      penal_unit: 110,
    },
    112: {
      happiness: 37818,
      penal_unit: 111,
    },
    113: {
      happiness: 37986,
      penal_unit: 112,
    },
    114: {
      happiness: 38154,
      penal_unit: 113,
    },
    115: {
      happiness: 38321,
      penal_unit: 114,
    },
    116: {
      happiness: 38487,
      penal_unit: 115,
    },
    117: {
      happiness: 38652,
      penal_unit: 116,
    },
    118: {
      happiness: 38817,
      penal_unit: 117,
    },
    119: {
      happiness: 38981,
      penal_unit: 118,
    },
    120: {
      happiness: 39145,
      penal_unit: 119,
    },
    121: {
      happiness: 39308,
      penal_unit: 120,
    },
    122: {
      happiness: 39470,
      penal_unit: 121,
    },
    123: {
      happiness: 39631,
      penal_unit: 122,
    },
    124: {
      happiness: 39792,
      penal_unit: 123,
    },
    125: {
      happiness: 39952,
      penal_unit: 124,
    },
    126: {
      happiness: 40112,
      penal_unit: 125,
    },
    127: {
      happiness: 40270,
      penal_unit: 126,
    },
    128: {
      happiness: 40429,
      penal_unit: 127,
    },
    129: {
      happiness: 40586,
      penal_unit: 128,
    },
    130: {
      happiness: 40743,
      penal_unit: 129,
    },
    131: {
      happiness: 40900,
      penal_unit: 130,
    },
    132: {
      happiness: 41055,
      penal_unit: 131,
    },
    133: {
      happiness: 41211,
      penal_unit: 132,
    },
    134: {
      happiness: 41365,
      penal_unit: 133,
    },
    135: {
      happiness: 41519,
      penal_unit: 134,
    },
    136: {
      happiness: 41673,
      penal_unit: 135,
    },
    137: {
      happiness: 41826,
      penal_unit: 136,
    },
    138: {
      happiness: 41978,
      penal_unit: 137,
    },
    139: {
      happiness: 42130,
      penal_unit: 138,
    },
    140: {
      happiness: 42281,
      penal_unit: 139,
    },
    141: {
      happiness: 42432,
      penal_unit: 140,
    },
    142: {
      happiness: 42582,
      penal_unit: 141,
    },
    143: {
      happiness: 42732,
      penal_unit: 142,
    },
    144: {
      happiness: 42881,
      penal_unit: 143,
    },
    145: {
      happiness: 43030,
      penal_unit: 144,
    },
    146: {
      happiness: 43178,
      penal_unit: 145,
    },
    147: {
      happiness: 43325,
      penal_unit: 146,
    },
    148: {
      happiness: 43472,
      penal_unit: 147,
    },
    149: {
      happiness: 43619,
      penal_unit: 148,
    },
    150: {
      happiness: 43765,
      penal_unit: 149,
    },
    151: {
      happiness: 43911,
      penal_unit: 150,
    },
    152: {
      happiness: 44056,
      penal_unit: 151,
    },
    153: {
      happiness: 44201,
      penal_unit: 152,
    },
    158: {
      happiness: 44917,
      penal_unit: 156,
    },
    159: {
      happiness: 45059,
      penal_unit: 158,
    },
    160: {
      happiness: 45200,
      penal_unit: 159,
    },
    163: {
      happiness: 45622,
      penal_unit: 161,
    },
    164: {
      happiness: 45762,
      penal_unit: 162,
    },
    165: {
      happiness: 45901,
      penal_unit: 164,
    },
    166: {
      happiness: 46040,
      penal_unit: 165,
    },
    167: {
      happiness: 46179,
      penal_unit: 166,
    },
    173: {
      happiness: 47001,
      penal_unit: 171,
    },
    175: {
      happiness: 47272,
      penal_unit: 173,
    },
    176: {
      happiness: 47407,
      penal_unit: 174,
    },
    177: {
      happiness: 47541,
      penal_unit: 176,
    },
  },
  age: ages.ProgressiveEra.key,
  size: { length: 10, width: 7 },
  levels: ageCost,
  buildCost: {
    asbestos: 250,
    explosives: 400,
    gasoline: 350,
    machine_parts: 500,
    tinplate: 250,
  },
};
