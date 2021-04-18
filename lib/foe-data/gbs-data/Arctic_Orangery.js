const ages = require("../ages.json");
const ageCost = require("../ages-cost/ArcticFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Arctic_Orangery",
  gbReward: {
    1: {
      critical_hit_chance: 4.87,
      strategy_points: 2,
    },
    2: {
      critical_hit_chance: 5.07,
      strategy_points: 2,
    },
    3: {
      critical_hit_chance: 5.28,
      strategy_points: 3,
    },
    4: {
      critical_hit_chance: 5.5,
      strategy_points: 4,
    },
    5: {
      critical_hit_chance: 5.73,
      strategy_points: 5,
    },
    6: {
      critical_hit_chance: 5.96,
      strategy_points: 6,
    },
    7: {
      critical_hit_chance: 6.2,
      strategy_points: 6,
    },
    8: {
      critical_hit_chance: 6.45,
      strategy_points: 7,
    },
    9: {
      critical_hit_chance: 6.71,
      strategy_points: 8,
    },
    10: {
      critical_hit_chance: 6.98,
      strategy_points: 10,
    },
    11: {
      critical_hit_chance: 7.39,
      strategy_points: 11,
    },
    12: {
      critical_hit_chance: 7.53,
      strategy_points: 12,
    },
    13: {
      critical_hit_chance: 7.67,
      strategy_points: 13,
    },
    14: {
      critical_hit_chance: 7.82,
      strategy_points: 14,
    },
    15: {
      critical_hit_chance: 7.96,
      strategy_points: 15,
    },
    16: {
      critical_hit_chance: 8.12,
      strategy_points: 16,
    },
    17: {
      critical_hit_chance: 8.27,
      strategy_points: 17,
    },
    18: {
      critical_hit_chance: 8.43,
      strategy_points: 18,
    },
    19: {
      critical_hit_chance: 8.59,
      strategy_points: 19,
    },
    20: {
      critical_hit_chance: 8.75,
      strategy_points: 20,
    },
    21: {
      critical_hit_chance: 8.91,
      strategy_points: 21,
    },
    22: {
      critical_hit_chance: 9.08,
      strategy_points: 22,
    },
    23: {
      critical_hit_chance: 9.25,
      strategy_points: 23,
    },
    24: {
      critical_hit_chance: 9.43,
      strategy_points: 24,
    },
    25: {
      critical_hit_chance: 9.6,
      strategy_points: 25,
    },
    26: {
      critical_hit_chance: 9.79,
      strategy_points: 26,
    },
    27: {
      critical_hit_chance: 9.97,
      strategy_points: 27,
    },
    28: {
      critical_hit_chance: 10.15,
      strategy_points: 28,
    },
    29: {
      critical_hit_chance: 10.34,
      strategy_points: 29,
    },
    30: {
      critical_hit_chance: 10.54,
      strategy_points: 30,
    },
    31: {
      critical_hit_chance: 10.73,
      strategy_points: 31,
    },
    32: {
      critical_hit_chance: 10.93,
      strategy_points: 32,
    },
    33: {
      critical_hit_chance: 11.13,
      strategy_points: 33,
    },
    34: {
      critical_hit_chance: 11.34,
      strategy_points: 34,
    },
    35: {
      critical_hit_chance: 11.54,
      strategy_points: 35,
    },
    36: {
      critical_hit_chance: 11.76,
      strategy_points: 36,
    },
    37: {
      critical_hit_chance: 11.97,
      strategy_points: 37,
    },
    38: {
      critical_hit_chance: 12.19,
      strategy_points: 38,
    },
    39: {
      critical_hit_chance: 12.41,
      strategy_points: 39,
    },
    40: {
      critical_hit_chance: 12.63,
      strategy_points: 40,
    },
    41: {
      critical_hit_chance: 12.86,
      strategy_points: 41,
    },
    42: {
      critical_hit_chance: 13.09,
      strategy_points: 42,
    },
    43: {
      critical_hit_chance: 13.32,
      strategy_points: 43,
    },
    44: {
      critical_hit_chance: 13.56,
      strategy_points: 44,
    },
    45: {
      critical_hit_chance: 13.79,
      strategy_points: 45,
    },
    46: {
      critical_hit_chance: 14.04,
      strategy_points: 46,
    },
    47: {
      critical_hit_chance: 14.28,
      strategy_points: 47,
    },
    48: {
      critical_hit_chance: 14.53,
      strategy_points: 48,
    },
    49: {
      critical_hit_chance: 14.78,
      strategy_points: 49,
    },
    50: {
      critical_hit_chance: 15.03,
      strategy_points: 50,
    },
    51: {
      critical_hit_chance: 15.29,
      strategy_points: 51,
    },
    52: {
      critical_hit_chance: 15.55,
      strategy_points: 52,
    },
    53: {
      critical_hit_chance: 15.81,
      strategy_points: 53,
    },
    54: {
      critical_hit_chance: 16.08,
      strategy_points: 54,
    },
    55: {
      critical_hit_chance: 16.35,
      strategy_points: 55,
    },
    56: {
      critical_hit_chance: 16.62,
      strategy_points: 56,
    },
    57: {
      critical_hit_chance: 16.89,
      strategy_points: 57,
    },
    58: {
      critical_hit_chance: 17.17,
      strategy_points: 58,
    },
    59: {
      critical_hit_chance: 17.45,
      strategy_points: 59,
    },
    60: {
      critical_hit_chance: 17.73,
      strategy_points: 60,
    },
    61: {
      critical_hit_chance: 18.02,
      strategy_points: 61,
    },
    62: {
      critical_hit_chance: 18.3,
      strategy_points: 62,
    },
    63: {
      critical_hit_chance: 18.59,
      strategy_points: 63,
    },
    64: {
      critical_hit_chance: 18.89,
      strategy_points: 64,
    },
    65: {
      critical_hit_chance: 19.18,
      strategy_points: 65,
    },
    66: {
      critical_hit_chance: 19.48,
      strategy_points: 66,
    },
    67: {
      critical_hit_chance: 19.77,
      strategy_points: 67,
    },
    68: {
      critical_hit_chance: 20.07,
      strategy_points: 68,
    },
    69: {
      critical_hit_chance: 20.38,
      strategy_points: 69,
    },
    70: {
      critical_hit_chance: 20.68,
      strategy_points: 70,
    },
    71: {
      critical_hit_chance: 20.99,
      strategy_points: 71,
    },
    72: {
      critical_hit_chance: 21.3,
      strategy_points: 72,
    },
    73: {
      critical_hit_chance: 21.61,
      strategy_points: 73,
    },
    74: {
      critical_hit_chance: 21.92,
      strategy_points: 74,
    },
    75: {
      critical_hit_chance: 22.23,
      strategy_points: 75,
    },
    76: {
      critical_hit_chance: 22.55,
      strategy_points: 76,
    },
    77: {
      critical_hit_chance: 22.86,
      strategy_points: 77,
    },
    78: {
      critical_hit_chance: 23.18,
      strategy_points: 78,
    },
    79: {
      critical_hit_chance: 23.5,
      strategy_points: 79,
    },
    80: {
      critical_hit_chance: 23.82,
      strategy_points: 80,
    },
    81: {
      critical_hit_chance: 24.14,
      strategy_points: 81,
    },
    82: {
      critical_hit_chance: 24.46,
      strategy_points: 82,
    },
    83: {
      critical_hit_chance: 24.78,
      strategy_points: 83,
    },
    84: {
      critical_hit_chance: 25.1,
      strategy_points: 84,
    },
    85: {
      critical_hit_chance: 25.43,
      strategy_points: 85,
    },
    86: {
      critical_hit_chance: 25.75,
      strategy_points: 86,
    },
    87: {
      critical_hit_chance: 26.08,
      strategy_points: 87,
    },
    88: {
      critical_hit_chance: 26.4,
      strategy_points: 88,
    },
    89: {
      critical_hit_chance: 26.73,
      strategy_points: 89,
    },
    90: {
      critical_hit_chance: 27.05,
      strategy_points: 90,
    },
    91: {
      critical_hit_chance: 27.37,
      strategy_points: 91,
    },
    92: {
      critical_hit_chance: 27.7,
      strategy_points: 92,
    },
    93: {
      critical_hit_chance: 28.02,
      strategy_points: 93,
    },
    94: {
      critical_hit_chance: 28.35,
      strategy_points: 94,
    },
    95: {
      critical_hit_chance: 28.67,
      strategy_points: 95,
    },
    96: {
      critical_hit_chance: 29,
      strategy_points: 96,
    },
    97: {
      critical_hit_chance: 29.32,
      strategy_points: 97,
    },
    98: {
      critical_hit_chance: 29.64,
      strategy_points: 98,
    },
    99: {
      critical_hit_chance: 29.96,
      strategy_points: 99,
    },
    100: {
      critical_hit_chance: 30.28,
      strategy_points: 100,
    },
    101: {
      critical_hit_chance: 30.6,
      strategy_points: 101,
    },
    102: {
      critical_hit_chance: 30.92,
      strategy_points: 102,
    },
    103: {
      critical_hit_chance: 31.24,
      strategy_points: 103,
    },
    104: {
      critical_hit_chance: 31.55,
      strategy_points: 104,
    },
    105: {
      critical_hit_chance: 31.87,
      strategy_points: 105,
    },
    106: {
      critical_hit_chance: 32.18,
      strategy_points: 106,
    },
    107: {
      critical_hit_chance: 32.49,
      strategy_points: 107,
    },
    108: {
      critical_hit_chance: 32.8,
      strategy_points: 108,
    },
    109: {
      critical_hit_chance: 33.11,
      strategy_points: 109,
    },
    110: {
      critical_hit_chance: 33.42,
      strategy_points: 110,
    },
    111: {
      critical_hit_chance: 33.72,
      strategy_points: 111,
    },
    112: {
      critical_hit_chance: 34.03,
      strategy_points: 112,
    },
    113: {
      critical_hit_chance: 34.33,
      strategy_points: 113,
    },
    114: {
      critical_hit_chance: 34.62,
      strategy_points: 114,
    },
    115: {
      critical_hit_chance: 34.92,
      strategy_points: 115,
    },
    116: {
      critical_hit_chance: 35.21,
      strategy_points: 116,
    },
    117: {
      critical_hit_chance: 35.51,
      strategy_points: 117,
    },
    118: {
      critical_hit_chance: 35.8,
      strategy_points: 118,
    },
    119: {
      critical_hit_chance: 36.08,
      strategy_points: 119,
    },
    120: {
      critical_hit_chance: 36.37,
      strategy_points: 120,
    },
    121: {
      critical_hit_chance: 36.65,
      strategy_points: 121,
    },
    122: {
      critical_hit_chance: 36.93,
      strategy_points: 122,
    },
    123: {
      critical_hit_chance: 37.21,
      strategy_points: 123,
    },
    124: {
      critical_hit_chance: 37.48,
      strategy_points: 124,
    },
    125: {
      critical_hit_chance: 37.75,
      strategy_points: 125,
    },
    126: {
      critical_hit_chance: 38.02,
      strategy_points: 126,
    },
    127: {
      critical_hit_chance: 38.29,
      strategy_points: 127,
    },
    128: {
      critical_hit_chance: 38.55,
      strategy_points: 128,
    },
    129: {
      critical_hit_chance: 38.81,
      strategy_points: 129,
    },
    130: {
      critical_hit_chance: 39.07,
      strategy_points: 130,
    },
    131: {
      critical_hit_chance: 39.32,
      strategy_points: 131,
    },
    132: {
      critical_hit_chance: 39.57,
      strategy_points: 132,
    },
    133: {
      critical_hit_chance: 39.82,
      strategy_points: 133,
    },
    134: {
      critical_hit_chance: 40.06,
      strategy_points: 134,
    },
    135: {
      critical_hit_chance: 40.31,
      strategy_points: 135,
    },
    136: {
      critical_hit_chance: 40.54,
      strategy_points: 136,
    },
    137: {
      critical_hit_chance: 40.78,
      strategy_points: 137,
    },
    138: {
      critical_hit_chance: 41.01,
      strategy_points: 138,
    },
    139: {
      critical_hit_chance: 41.24,
      strategy_points: 139,
    },
    140: {
      critical_hit_chance: 41.47,
      strategy_points: 140,
    },
    141: {
      critical_hit_chance: 41.69,
      strategy_points: 141,
    },
    142: {
      critical_hit_chance: 41.91,
      strategy_points: 142,
    },
    143: {
      critical_hit_chance: 42.13,
      strategy_points: 143,
    },
    144: {
      critical_hit_chance: 42.34,
      strategy_points: 144,
    },
    145: {
      critical_hit_chance: 42.56,
      strategy_points: 145,
    },
    146: {
      critical_hit_chance: 42.76,
      strategy_points: 146,
    },
    147: {
      critical_hit_chance: 42.97,
      strategy_points: 147,
    },
    148: {
      critical_hit_chance: 43.17,
      strategy_points: 148,
    },
    149: {
      critical_hit_chance: 43.37,
      strategy_points: 149,
    },
    150: {
      critical_hit_chance: 43.56,
      strategy_points: 150,
    },
    151: {
      critical_hit_chance: 43.76,
      strategy_points: 151,
    },
    152: {
      critical_hit_chance: 43.95,
      strategy_points: 152,
    },
    153: {
      critical_hit_chance: 44.13,
      strategy_points: 153,
    },
    154: {
      critical_hit_chance: 44.31,
      strategy_points: 154,
    },
    155: {
      critical_hit_chance: 44.5,
      strategy_points: 155,
    },
    156: {
      critical_hit_chance: 44.67,
      strategy_points: 156,
    },
    157: {
      critical_hit_chance: 44.85,
      strategy_points: 157,
    },
    158: {
      critical_hit_chance: 45.02,
      strategy_points: 158,
    },
    159: {
      critical_hit_chance: 45.19,
      strategy_points: 159,
    },
    160: {
      critical_hit_chance: 45.35,
      strategy_points: 160,
    },
    161: {
      critical_hit_chance: 45.51,
      strategy_points: 161,
    },
    162: {
      critical_hit_chance: 45.67,
      strategy_points: 162,
    },
    163: {
      critical_hit_chance: 45.83,
      strategy_points: 163,
    },
    164: {
      critical_hit_chance: 45.98,
      strategy_points: 164,
    },
    167: {
      critical_hit_chance: 46.43,
      strategy_points: 167,
    },
    168: {
      critical_hit_chance: 46.57,
      strategy_points: 168,
    },
    180: {
      critical_hit_chance: 48.09,
      strategy_points: 180,
    },
  },
  age: ages.ArcticFuture.key,
  levels: ageCost,
};
