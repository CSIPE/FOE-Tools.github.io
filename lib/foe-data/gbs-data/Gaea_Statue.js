const ages = require("../ages.json");
const ageCost = require("../ages-cost/ArcticFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Gaea_Statue",
  gbReward: {
    1: {
      happiness: 4000,
      medals: 127,
    },
    2: {
      happiness: 4390,
      medals: 139,
    },
    3: {
      happiness: 5020,
      medals: 155,
    },
    4: {
      happiness: 5790,
      medals: 173,
    },
    5: {
      happiness: 6670,
      medals: 194,
    },
    6: {
      happiness: 7650,
      medals: 217,
    },
    7: {
      happiness: 8710,
      medals: 242,
    },
    8: {
      happiness: 9840,
      medals: 269,
    },
    9: {
      happiness: 11040,
      medals: 298,
    },
    10: {
      happiness: 12300,
      medals: 367,
    },
    11: {
      happiness: 12901,
      medals: 397,
    },
    12: {
      happiness: 13474,
      medals: 425,
    },
    13: {
      happiness: 14025,
      medals: 453,
    },
    14: {
      happiness: 14554,
      medals: 481,
    },
    15: {
      happiness: 15065,
      medals: 508,
    },
    16: {
      happiness: 15559,
      medals: 535,
    },
    17: {
      happiness: 16038,
      medals: 562,
    },
    18: {
      happiness: 16503,
      medals: 588,
    },
    19: {
      happiness: 16955,
      medals: 614,
    },
    20: {
      happiness: 17395,
      medals: 639,
    },
    21: {
      happiness: 17825,
      medals: 665,
    },
    22: {
      happiness: 18244,
      medals: 690,
    },
    23: {
      happiness: 18654,
      medals: 715,
    },
    24: {
      happiness: 19056,
      medals: 740,
    },
    25: {
      happiness: 19449,
      medals: 764,
    },
    26: {
      happiness: 19834,
      medals: 789,
    },
    27: {
      happiness: 20211,
      medals: 813,
    },
    28: {
      happiness: 20582,
      medals: 837,
    },
    29: {
      happiness: 20947,
      medals: 861,
    },
    30: {
      happiness: 21305,
      medals: 884,
    },
    31: {
      happiness: 21657,
      medals: 908,
    },
    32: {
      happiness: 22003,
      medals: 931,
    },
    33: {
      happiness: 22345,
      medals: 954,
    },
    34: {
      happiness: 22681,
      medals: 977,
    },
    35: {
      happiness: 23012,
      medals: 1000,
    },
    36: {
      happiness: 23338,
      medals: 1023,
    },
    37: {
      happiness: 23660,
      medals: 1046,
    },
    38: {
      happiness: 23978,
      medals: 1068,
    },
    39: {
      happiness: 24291,
      medals: 1091,
    },
    40: {
      happiness: 24600,
      medals: 1113,
    },
    41: {
      happiness: 24906,
      medals: 1135,
    },
    42: {
      happiness: 25208,
      medals: 1157,
    },
    43: {
      happiness: 25506,
      medals: 1179,
    },
    44: {
      happiness: 25801,
      medals: 1201,
    },
    45: {
      happiness: 26093,
      medals: 1223,
    },
    46: {
      happiness: 26381,
      medals: 1245,
    },
    47: {
      happiness: 26666,
      medals: 1266,
    },
    48: {
      happiness: 26948,
      medals: 1288,
    },
    49: {
      happiness: 27228,
      medals: 1309,
    },
    50: {
      happiness: 27504,
      medals: 1330,
    },
    51: {
      happiness: 27778,
      medals: 1352,
    },
    52: {
      happiness: 28049,
      medals: 1373,
    },
    53: {
      happiness: 28317,
      medals: 1394,
    },
    54: {
      happiness: 28583,
      medals: 1415,
    },
    55: {
      happiness: 28847,
      medals: 1436,
    },
    56: {
      happiness: 29108,
      medals: 1457,
    },
    57: {
      happiness: 29366,
      medals: 1477,
    },
    58: {
      happiness: 29623,
      medals: 1498,
    },
    59: {
      happiness: 29877,
      medals: 1519,
    },
    60: {
      happiness: 30129,
      medals: 1539,
    },
    61: {
      happiness: 30379,
      medals: 1560,
    },
    62: {
      happiness: 30627,
      medals: 1580,
    },
    63: {
      happiness: 30873,
      medals: 1601,
    },
    64: {
      happiness: 31117,
      medals: 1621,
    },
    65: {
      happiness: 31359,
      medals: 1641,
    },
    66: {
      happiness: 31600,
      medals: 1661,
    },
    67: {
      happiness: 31838,
      medals: 1681,
    },
    68: {
      happiness: 32075,
      medals: 1701,
    },
    69: {
      happiness: 32310,
      medals: 1721,
    },
    70: {
      happiness: 32543,
      medals: 1741,
    },
    71: {
      happiness: 32775,
      medals: 1761,
    },
    72: {
      happiness: 33005,
      medals: 1781,
    },
    73: {
      happiness: 33233,
      medals: 1801,
    },
    74: {
      happiness: 33685,
      medals: 1840,
    },
    76: {
      happiness: 33909,
      medals: 1860,
    },
    80: {
      happiness: 34790,
      medals: 1938,
    },
    81: {
      happiness: 35007,
      medals: 1957,
    },
    88: {
      happiness: 36488,
      medals: 2091,
    },
    89: {
      happiness: 36695,
      medals: 2110,
    },
  },
  buildCost: {
    ai_data: 400,
    bioplastics: 400,
    nanowire: 400,
    paper_batteries: 400,
    transester_gas: 400,
  },
  age: ages.ArcticFuture.key,
  size: { length: 6, width: 4 },
  levels: ageCost,
};
