const ages = require("../ages.json");
const ageCost = require("../ages-cost/SpaceAgeMars");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "The_Virgo_Project",
  gbReward: {
    1: {
      missile_launch: 20,
      money: 20000,
    },
    2: {
      missile_launch: 22,
      money: 23300,
    },
    3: {
      missile_launch: 24,
      money: 26700,
    },
    4: {
      missile_launch: 26,
      money: 39100,
    },
    5: {
      missile_launch: 28,
      money: 43400,
    },
    6: {
      missile_launch: 30,
      money: 57800,
    },
    7: {
      missile_launch: 32,
      money: 65300,
    },
    8: {
      missile_launch: 34,
      money: 83500,
    },
    9: {
      missile_launch: 36,
      money: 92200,
    },
    10: {
      missile_launch: 38,
      money: 100800,
    },
    11: {
      missile_launch: 39.18,
      money: 113554,
    },
    12: {
      missile_launch: 40.32,
      money: 126601,
    },
    13: {
      missile_launch: 41.46,
      money: 139924,
    },
    14: {
      missile_launch: 42.58,
      money: 153505,
    },
    15: {
      missile_launch: 43.68,
      money: 167331,
    },
    16: {
      missile_launch: 44.77,
      money: 181389,
    },
    17: {
      missile_launch: 45.83,
      money: 195669,
    },
    18: {
      missile_launch: 46.88,
      money: 210161,
    },
    19: {
      missile_launch: 47.9,
      money: 224855,
    },
    20: {
      missile_launch: 48.89,
      money: 239745,
    },
    21: {
      missile_launch: 49.86,
      money: 254821,
    },
    22: {
      missile_launch: 50.8,
      money: 270078,
    },
    23: {
      missile_launch: 51.72,
      money: 285510,
    },
    24: {
      missile_launch: 52.61,
      money: 301110,
    },
    25: {
      missile_launch: 53.46,
      money: 316874,
    },
    26: {
      missile_launch: 54.29,
      money: 332796,
    },
    27: {
      missile_launch: 55.09,
      money: 348872,
    },
    28: {
      missile_launch: 55.85,
      money: 365097,
    },
    29: {
      missile_launch: 56.59,
      money: 381468,
    },
    30: {
      missile_launch: 57.3,
      money: 397981,
    },
    31: {
      missile_launch: 57.98,
      money: 414632,
    },
    32: {
      missile_launch: 58.63,
      money: 431418,
    },
    33: {
      missile_launch: 59.25,
      money: 448336,
    },
    34: {
      missile_launch: 59.84,
      money: 465382,
    },
    35: {
      missile_launch: 60.41,
      money: 482554,
    },
    36: {
      missile_launch: 60.95,
      money: 499849,
    },
    37: {
      missile_launch: 61.46,
      money: 517265,
    },
    38: {
      missile_launch: 61.95,
      money: 534799,
    },
    39: {
      missile_launch: 62.41,
      money: 552448,
    },
    40: {
      missile_launch: 62.85,
      money: 570211,
    },
    41: {
      missile_launch: 63.26,
      money: 588086,
    },
    42: {
      missile_launch: 63.66,
      money: 606070,
    },
    43: {
      missile_launch: 64.03,
      money: 624161,
    },
    44: {
      missile_launch: 64.39,
      money: 642357,
    },
    45: {
      missile_launch: 64.72,
      money: 660658,
    },
    46: {
      missile_launch: 65.04,
      money: 679060,
    },
    47: {
      missile_launch: 65.34,
      money: 697563,
    },
    48: {
      missile_launch: 65.62,
      money: 716164,
    },
    49: {
      missile_launch: 65.89,
      money: 734862,
    },
    50: {
      missile_launch: 66.14,
      money: 753656,
    },
    51: {
      missile_launch: 66.37,
      money: 772545,
    },
    52: {
      missile_launch: 66.59,
      money: 791526,
    },
    53: {
      missile_launch: 66.8,
      money: 810598,
    },
    54: {
      missile_launch: 67,
      money: 829761,
    },
    55: {
      missile_launch: 67.19,
      money: 849013,
    },
    56: {
      missile_launch: 67.36,
      money: 868352,
    },
    57: {
      missile_launch: 67.53,
      money: 887778,
    },
    58: {
      missile_launch: 67.68,
      money: 907289,
    },
    59: {
      missile_launch: 67.83,
      money: 926885,
    },
    60: {
      missile_launch: 67.96,
      money: 946564,
    },
    61: {
      missile_launch: 68.09,
      money: 966325,
    },
    62: {
      missile_launch: 68.21,
      money: 986167,
    },
    63: {
      missile_launch: 68.32,
      money: 1006089,
    },
    64: {
      missile_launch: 68.43,
      money: 1026091,
    },
    65: {
      missile_launch: 68.53,
      money: 1046170,
    },
    66: {
      missile_launch: 68.62,
      money: 1066328,
    },
    67: {
      missile_launch: 68.71,
      money: 1086561,
    },
    68: {
      missile_launch: 68.79,
      money: 1106871,
    },
    69: {
      missile_launch: 68.87,
      money: 1127255,
    },
    70: {
      missile_launch: 68.94,
      money: 1147713,
    },
    71: {
      missile_launch: 69.01,
      money: 1168244,
    },
    72: {
      missile_launch: 69.07,
      money: 1188848,
    },
    73: {
      missile_launch: 69.13,
      money: 1209523,
    },
    74: {
      missile_launch: 69.18,
      money: 1230270,
    },
    75: {
      missile_launch: 69.24,
      money: 1251086,
    },
    76: {
      missile_launch: 69.28,
      money: 1271972,
    },
    77: {
      missile_launch: 69.33,
      money: 1292927,
    },
    78: {
      missile_launch: 69.37,
      money: 1313950,
    },
    79: {
      missile_launch: 69.41,
      money: 1335041,
    },
    80: {
      missile_launch: 69.45,
      money: 1356198,
    },
    81: {
      missile_launch: 69.49,
      money: 1377422,
    },
    82: {
      missile_launch: 69.52,
      money: 1398711,
    },
    83: {
      missile_launch: 69.55,
      money: 1420065,
    },
    85: {
      missile_launch: 69.61,
      money: 1462966,
    },
    89: {
      missile_launch: 69.7,
      money: 1549524,
    },
    90: {
      missile_launch: 69.72,
      money: 1571317,
    },
    91: {
      missile_launch: 69.74,
      money: 1593171,
    },
    92: {
      missile_launch: 69.75,
      money: 1615085,
    },
    95: {
      missile_launch: 69.8,
      money: 1681184,
    },
    96: {
      missile_launch: 69.81,
      money: 1703334,
    },
    97: {
      missile_launch: 69.82,
      money: 1725541,
    },
    99: {
      missile_launch: 69.84,
      money: 1770128,
    },
    100: {
      missile_launch: 69.85,
      money: 1792506,
    },
    101: {
      missile_launch: 69.86,
      money: 1814940,
    },
    102: {
      missile_launch: 69.87,
      money: 1837430,
    },
  },
  age: ages.SpaceAgeMars.key,
  levels: ageCost,
};
