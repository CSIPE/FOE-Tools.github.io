const ages = require("../ages.json");
const ageCost = require("../ages-cost/ContemporaryEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Lotus_Temple",
  gbReward: {
    1: {
      happiness: 2400,
      money: 10100,
    },
    2: {
      happiness: 2760,
      money: 11800,
    },
    3: {
      happiness: 3330,
      money: 13400,
    },
    4: {
      happiness: 4040,
      money: 19700,
    },
    5: {
      happiness: 4850,
      money: 21900,
    },
    6: {
      happiness: 5740,
      money: 29100,
    },
    7: {
      happiness: 6710,
      money: 32900,
    },
    8: {
      happiness: 7750,
      money: 42100,
    },
    9: {
      happiness: 8850,
      money: 46400,
    },
    10: {
      happiness: 10000,
      money: 50800,
    },
    11: {
      happiness: 10489,
      money: 57228,
    },
    12: {
      happiness: 10955,
      money: 63803,
    },
    13: {
      happiness: 11402,
      money: 70517,
    },
    14: {
      happiness: 11833,
      money: 77362,
    },
    15: {
      happiness: 12248,
      money: 84330,
    },
    16: {
      happiness: 12650,
      money: 91415,
    },
    17: {
      happiness: 13039,
      money: 98611,
    },
    18: {
      happiness: 13417,
      money: 105915,
    },
    19: {
      happiness: 13785,
      money: 113320,
    },
    20: {
      happiness: 14143,
      money: 120824,
    },
    21: {
      happiness: 14492,
      money: 128422,
    },
    22: {
      happiness: 14833,
      money: 136111,
    },
    23: {
      happiness: 15166,
      money: 143888,
    },
    24: {
      happiness: 15492,
      money: 151750,
    },
    25: {
      happiness: 15812,
      money: 159695,
    },
    26: {
      happiness: 16125,
      money: 167719,
    },
    27: {
      happiness: 16432,
      money: 175821,
    },
    28: {
      happiness: 16734,
      money: 183998,
    },
    29: {
      happiness: 17030,
      money: 192248,
    },
    30: {
      happiness: 17321,
      money: 200570,
    },
    31: {
      happiness: 17607,
      money: 208962,
    },
    32: {
      happiness: 17889,
      money: 217421,
    },
    33: {
      happiness: 18166,
      money: 225947,
    },
    34: {
      happiness: 18440,
      money: 234538,
    },
    35: {
      happiness: 18709,
      money: 243192,
    },
    36: {
      happiness: 18974,
      money: 251908,
    },
    37: {
      happiness: 19236,
      money: 260685,
    },
    38: {
      happiness: 19494,
      money: 269522,
    },
    39: {
      happiness: 19749,
      money: 278417,
    },
    40: {
      happiness: 20000,
      money: 287369,
    },
    41: {
      happiness: 20249,
      money: 296377,
    },
    42: {
      happiness: 20494,
      money: 305440,
    },
    43: {
      happiness: 20737,
      money: 314557,
    },
    44: {
      happiness: 20977,
      money: 323728,
    },
    45: {
      happiness: 21214,
      money: 332951,
    },
    46: {
      happiness: 21448,
      money: 342225,
    },
    47: {
      happiness: 21680,
      money: 351550,
    },
    48: {
      happiness: 21909,
      money: 360924,
    },
    49: {
      happiness: 22136,
      money: 370347,
    },
    50: {
      happiness: 22361,
      money: 379819,
    },
    51: {
      happiness: 22584,
      money: 389338,
    },
    52: {
      happiness: 22804,
      money: 398904,
    },
    53: {
      happiness: 23022,
      money: 408516,
    },
    56: {
      happiness: 23665,
      money: 437622,
    },
    57: {
      happiness: 23875,
      money: 447412,
    },
    59: {
      happiness: 24290,
      money: 467121,
    },
    64: {
      happiness: 25299,
      money: 517117,
    },
    66: {
      happiness: 25691,
      money: 537396,
    },
    68: {
      happiness: 26077,
      money: 557828,
    },
    69: {
      happiness: 26268,
      money: 568101,
    },
    70: {
      happiness: 26458,
      money: 578411,
    },
    71: {
      happiness: 26646,
      money: 588758,
    },
    72: {
      happiness: 26833,
      money: 599142,
    },
    73: {
      happiness: 27019,
      money: 609562,
    },
    74: {
      happiness: 27203,
      money: 620017,
    },
    75: {
      happiness: 27387,
      money: 630508,
    },
    76: {
      happiness: 27569,
      money: 641034,
    },
    77: {
      happiness: 27749,
      money: 651595,
    },
    78: {
      happiness: 27929,
      money: 662190,
    },
    79: {
      happiness: 28107,
      money: 672818,
    },
    80: {
      happiness: 28285,
      money: 683481,
    },
    81: {
      happiness: 28461,
      money: 694177,
    },
    82: {
      happiness: 28636,
      money: 704906,
    },
    83: {
      happiness: 28810,
      money: 715668,
    },
    84: {
      happiness: 28983,
      money: 726462,
    },
    85: {
      happiness: 29155,
      money: 737289,
    },
    86: {
      happiness: 29326,
      money: 748147,
    },
    87: {
      happiness: 29496,
      money: 759037,
    },
    88: {
      happiness: 29665,
      money: 769959,
    },
    89: {
      happiness: 29833,
      money: 780911,
    },
    90: {
      happiness: 30000,
      money: 791894,
    },
    112: {
      happiness: 33467,
      money: 1040846,
    },
    113: {
      happiness: 33616,
      money: 1052475,
    },
  },
  buildCost: {
    bionics_data: 450,
    electromagnets: 150,
    gas: 450,
    plastics: 500,
    robots: 200,
  },
  age: ages.ContemporaryEra.key,
  size: { length: 6, width: 6 },
  levels: ageCost,
};
