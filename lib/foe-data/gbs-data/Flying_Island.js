const ages = require("../ages.json");
const ageCost = require("../ages-cost/SpaceAgeVenus");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Flying_Island",
  gbReward: {
    1: {
      mysterious_shards: 1,
      trials: "19,08",
    },
    2: {
      mysterious_shards: 1.5,
      trials: "19,39",
    },
    3: {
      mysterious_shards: 2,
      trials: "19,7",
    },
    4: {
      mysterious_shards: 2.5,
      trials: "20,01",
    },
    5: {
      mysterious_shards: 3,
      trials: "20,32",
    },
    6: {
      mysterious_shards: 3.5,
      trials: "20,64",
    },
    7: {
      mysterious_shards: 4,
      trials: "20,95",
    },
    8: {
      mysterious_shards: 4.5,
      trials: "21,27",
    },
    9: {
      mysterious_shards: 5,
      trials: "21,59",
    },
    10: {
      mysterious_shards: 5.5,
      trials: "21,91",
    },
    11: {
      mysterious_shards: 5.88,
      trials: "22,23",
    },
    12: {
      mysterious_shards: 6.09,
      trials: "22,55",
    },
    13: {
      mysterious_shards: 6.3,
      trials: "22,88",
    },
    14: {
      mysterious_shards: 6.51,
      trials: "23,2",
    },
    15: {
      mysterious_shards: 6.72,
      trials: "23,53",
    },
    16: {
      mysterious_shards: 6.93,
      trials: "23,86",
    },
    17: {
      mysterious_shards: 7.14,
      trials: "24,19",
    },
    18: {
      mysterious_shards: 7.34,
      trials: "24,52",
    },
    19: {
      mysterious_shards: 7.55,
      trials: "24,85",
    },
    20: {
      mysterious_shards: 7.75,
      trials: "25,18",
    },
    21: {
      mysterious_shards: 7.95,
      trials: "25,51",
    },
    22: {
      mysterious_shards: 8.16,
      trials: "25,84",
    },
    23: {
      mysterious_shards: 8.36,
      trials: "26,17",
    },
    24: {
      mysterious_shards: 8.56,
      trials: "26,5",
    },
    25: {
      mysterious_shards: 8.76,
      trials: "26,83",
    },
    26: {
      mysterious_shards: 8.95,
      trials: "27,16",
    },
    27: {
      mysterious_shards: 9.15,
      trials: "27,49",
    },
    28: {
      mysterious_shards: 9.35,
      trials: "27,82",
    },
    29: {
      mysterious_shards: 9.54,
      trials: "28,15",
    },
    30: {
      mysterious_shards: 9.74,
      trials: "28,48",
    },
    31: {
      mysterious_shards: 9.93,
      trials: "28,81",
    },
    32: {
      mysterious_shards: 10.12,
      trials: "29,14",
    },
    33: {
      mysterious_shards: 10.31,
      trials: "29,47",
    },
    34: {
      mysterious_shards: 10.5,
      trials: "29,8",
    },
    35: {
      mysterious_shards: 10.69,
      trials: "30,12",
    },
    36: {
      mysterious_shards: 10.88,
      trials: "30,45",
    },
    37: {
      mysterious_shards: 11.06,
      trials: "30,77",
    },
    38: {
      mysterious_shards: 11.25,
      trials: "31,09",
    },
    39: {
      mysterious_shards: 11.43,
      trials: "31,41",
    },
    40: {
      mysterious_shards: 11.61,
      trials: "31,73",
    },
    41: {
      mysterious_shards: 11.8,
      trials: "32,05",
    },
    42: {
      mysterious_shards: 11.98,
      trials: "32,36",
    },
    43: {
      mysterious_shards: 12.16,
      trials: "32,68",
    },
    44: {
      mysterious_shards: 12.33,
      trials: "32,99",
    },
    45: {
      mysterious_shards: 12.51,
      trials: "33,3",
    },
    46: {
      mysterious_shards: 12.69,
      trials: "33,61",
    },
    47: {
      mysterious_shards: 12.86,
      trials: "33,92",
    },
    48: {
      mysterious_shards: 13.04,
      trials: "34,22",
    },
    49: {
      mysterious_shards: 13.21,
      trials: "34,52",
    },
    50: {
      mysterious_shards: 13.38,
      trials: "34,82",
    },
    51: {
      mysterious_shards: 13.55,
      trials: "35,12",
    },
    52: {
      mysterious_shards: 13.72,
      trials: "35,41",
    },
    53: {
      mysterious_shards: 13.89,
      trials: "35,71",
    },
    54: {
      mysterious_shards: 14.06,
      trials: 36,
    },
    55: {
      mysterious_shards: 14.23,
      trials: "36,28",
    },
    56: {
      mysterious_shards: 14.39,
      trials: "36,57",
    },
    57: {
      mysterious_shards: 14.56,
      trials: "36,85",
    },
    58: {
      mysterious_shards: 14.72,
      trials: "37,13",
    },
    59: {
      mysterious_shards: 14.88,
      trials: "37,41",
    },
    60: {
      mysterious_shards: 15.04,
      trials: "37,68",
    },
    61: {
      mysterious_shards: 15.2,
      trials: "37,95",
    },
    62: {
      mysterious_shards: 15.36,
      trials: "38,22",
    },
    63: {
      mysterious_shards: 15.52,
      trials: "38,48",
    },
    64: {
      mysterious_shards: 15.68,
      trials: "38,75",
    },
    65: {
      mysterious_shards: 15.83,
      trials: "39,01",
    },
    66: {
      mysterious_shards: 15.99,
      trials: "39,26",
    },
    67: {
      mysterious_shards: 16.14,
      trials: "39,51",
    },
    68: {
      mysterious_shards: 16.29,
      trials: "39,76",
    },
    69: {
      mysterious_shards: 16.44,
      trials: "40,01",
    },
    70: {
      mysterious_shards: 16.59,
      trials: "40,25",
    },
    71: {
      mysterious_shards: 16.74,
      trials: "40,49",
    },
    72: {
      mysterious_shards: 16.89,
      trials: "40,73",
    },
    73: {
      mysterious_shards: 17.04,
      trials: "40,97",
    },
    74: {
      mysterious_shards: 17.19,
      trials: "41,2",
    },
    75: {
      mysterious_shards: 17.33,
      trials: "41,42",
    },
    76: {
      mysterious_shards: 17.47,
      trials: "41,65",
    },
    77: {
      mysterious_shards: 17.62,
      trials: "41,87",
    },
    78: {
      mysterious_shards: 17.76,
      trials: "42,09",
    },
    79: {
      mysterious_shards: 17.9,
      trials: "42,3",
    },
    80: {
      mysterious_shards: 18.04,
      trials: "42,52",
    },
    81: {
      mysterious_shards: 18.18,
      trials: "42,72",
    },
    82: {
      mysterious_shards: 18.32,
      trials: "42,93",
    },
    83: {
      mysterious_shards: 18.45,
      trials: "43,13",
    },
    84: {
      mysterious_shards: 18.59,
      trials: "43,33",
    },
    85: {
      mysterious_shards: 18.72,
      trials: "43,53",
    },
    86: {
      mysterious_shards: 18.86,
      trials: "43,72",
    },
    87: {
      mysterious_shards: 18.99,
      trials: "43,91",
    },
    88: {
      mysterious_shards: 19.12,
      trials: "44,1",
    },
    89: {
      mysterious_shards: 19.25,
      trials: "44,28",
    },
    90: {
      mysterious_shards: 19.38,
      trials: "44,46",
    },
    91: {
      mysterious_shards: 19.51,
      trials: "44,64",
    },
    92: {
      mysterious_shards: 19.64,
      trials: "44,81",
    },
    93: {
      mysterious_shards: 19.76,
      trials: "44,98",
    },
    94: {
      mysterious_shards: 19.89,
      trials: "45,15",
    },
    95: {
      mysterious_shards: 20.01,
      trials: "45,32",
    },
    96: {
      mysterious_shards: 20.14,
      trials: "45,48",
    },
    97: {
      mysterious_shards: 20.26,
      trials: "45,64",
    },
    98: {
      mysterious_shards: 20.38,
      trials: "45,8",
    },
    99: {
      mysterious_shards: 20.5,
      trials: "45,95",
    },
    100: {
      mysterious_shards: 20.62,
      trials: "46,1",
    },
    101: {
      mysterious_shards: 20.74,
      trials: "46,25",
    },
    102: {
      mysterious_shards: 20.86,
      trials: "46,4",
    },
  },
  buildCost: {
    glowing_seaweed: 900,
    herbal_snack: 900,
    microgreen_supplement: 900,
    soy_proteins: 900,
    sugar_crystals: 900,
  },
  age: ages.SpaceAgeVenus.key,
  size: { length: 4, width: 6 },
  levels: ageCost,
};
