const ages = require("../ages.json");
const ageCost = require("../ages-cost/NoAge");
const defaultCost = require("../ages-cost/defaultCost");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Temple_of_Relics",
  gbReward: {
    1: {
      totem_drop: 12,
    },
    2: {
      totem_drop: 12.5,
    },
    3: {
      totem_drop: 13,
    },
    4: {
      totem_drop: 13.5,
    },
    5: {
      totem_drop: 14,
    },
    6: {
      totem_drop: 14.5,
    },
    7: {
      totem_drop: 14.75,
    },
    8: {
      totem_drop: 15.25,
    },
    9: {
      totem_drop: 15.75,
    },
    10: {
      totem_drop: 16.25,
    },
    11: {
      totem_drop: 16.75,
    },
    12: {
      totem_drop: 17,
    },
    13: {
      totem_drop: 17.5,
    },
    14: {
      totem_drop: 18,
    },
    15: {
      totem_drop: 18.25,
    },
    16: {
      totem_drop: 18.75,
    },
    17: {
      totem_drop: 19.25,
    },
    18: {
      totem_drop: 19.5,
    },
    19: {
      totem_drop: 20,
    },
    20: {
      totem_drop: 20.25,
    },
    21: {
      totem_drop: 20.75,
    },
    22: {
      totem_drop: 21,
    },
    23: {
      totem_drop: 21.5,
    },
    24: {
      totem_drop: 21.75,
    },
    25: {
      totem_drop: 22.25,
    },
    26: {
      totem_drop: 22.5,
    },
    27: {
      totem_drop: 22.75,
    },
    28: {
      totem_drop: 23.25,
    },
    29: {
      totem_drop: 23.5,
    },
    30: {
      totem_drop: 23.75,
    },
    31: {
      totem_drop: 24,
    },
    32: {
      totem_drop: 24.5,
    },
    33: {
      totem_drop: 24.75,
    },
    34: {
      totem_drop: 25,
    },
    35: {
      totem_drop: 25.25,
    },
    36: {
      totem_drop: 25.5,
    },
    37: {
      totem_drop: 25.75,
    },
    38: {
      totem_drop: 26,
    },
    39: {
      totem_drop: 26.25,
    },
    40: {
      totem_drop: 26.5,
    },
    41: {
      totem_drop: 26.75,
    },
    42: {
      totem_drop: 27,
    },
    43: {
      totem_drop: 27.25,
    },
    44: {
      totem_drop: 27.5,
    },
    45: {
      totem_drop: 27.75,
    },
    46: {
      totem_drop: 28,
    },
    47: {
      totem_drop: 28,
    },
    48: {
      totem_drop: 28.25,
    },
    49: {
      totem_drop: 28.5,
    },
    50: {
      totem_drop: 28.75,
    },
    51: {
      totem_drop: 29,
    },
    52: {
      totem_drop: 29,
    },
    53: {
      totem_drop: 29.25,
    },
    54: {
      totem_drop: 29.5,
    },
    55: {
      totem_drop: 29.5,
    },
    56: {
      totem_drop: 29.75,
    },
    57: {
      totem_drop: 30,
    },
    58: {
      totem_drop: 30,
    },
    59: {
      totem_drop: 30.25,
    },
    60: {
      totem_drop: 30.25,
    },
    61: {
      totem_drop: 30.5,
    },
    62: {
      totem_drop: 30.75,
    },
    63: {
      totem_drop: 30.75,
    },
    64: {
      totem_drop: 31,
    },
    65: {
      totem_drop: 31,
    },
    66: {
      totem_drop: 31.25,
    },
    67: {
      totem_drop: 31.25,
    },
    68: {
      totem_drop: 31.5,
    },
    69: {
      totem_drop: 31.5,
    },
    70: {
      totem_drop: 31.5,
    },
    71: {
      totem_drop: 31.75,
    },
    72: {
      totem_drop: 31.75,
    },
    73: {
      totem_drop: 32,
    },
    74: {
      totem_drop: 32,
    },
    75: {
      totem_drop: 32,
    },
    76: {
      totem_drop: 32.25,
    },
    77: {
      totem_drop: 32.25,
    },
    78: {
      totem_drop: 32.25,
    },
    79: {
      totem_drop: 32.5,
    },
    80: {
      totem_drop: 32.5,
    },
    81: {
      totem_drop: 32.5,
    },
    82: {
      totem_drop: 32.75,
    },
    83: {
      totem_drop: 32.75,
    },
    84: {
      totem_drop: 32.75,
    },
    85: {
      totem_drop: 33,
    },
    86: {
      totem_drop: 33,
    },
    87: {
      totem_drop: 33,
    },
    88: {
      totem_drop: 33,
    },
    89: {
      totem_drop: 33.25,
    },
    90: {
      totem_drop: 33.25,
    },
    91: {
      totem_drop: 33.25,
    },
    92: {
      totem_drop: 33.25,
    },
    93: {
      totem_drop: 33.5,
    },
    94: {
      totem_drop: 33.5,
    },
    95: {
      totem_drop: 33.5,
    },
    96: {
      totem_drop: 33.5,
    },
    97: {
      totem_drop: 33.5,
    },
    98: {
      totem_drop: 33.5,
    },
    99: {
      totem_drop: 33.75,
    },
    100: {
      totem_drop: 33.75,
    },
    101: {
      totem_drop: 33.75,
    },
    102: {
      totem_drop: 33.75,
    },
    103: {
      totem_drop: 33.75,
    },
    104: {
      totem_drop: 33.75,
    },
    105: {
      totem_drop: 34,
    },
    109: {
      totem_drop: 34,
    },
    110: {
      totem_drop: 34,
    },
    112: {
      totem_drop: 34.25,
    },
    117: {
      totem_drop: 34.25,
    },
  },
  age: ages.NoAge.key,
  levels: [...ageCost, ...defaultCost],
};
