const ages = require("../ages.json");
const ageCost = require("../ages-cost/ProgressiveEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Chateau_Frontenac",
  gbReward: {
    1: {
      quest_boost: 50,
      money: 7670,
    },
    2: {
      quest_boost: 60,
      money: 8950,
    },
    3: {
      quest_boost: 70,
      money: 10860,
    },
    4: {
      quest_boost: 80,
      money: 14310,
    },
    5: {
      quest_boost: 90,
      money: 15900,
    },
    6: {
      quest_boost: 100,
      money: 22000,
    },
    7: {
      quest_boost: 105,
      money: 24000,
    },
    8: {
      quest_boost: 115,
      money: 33850,
    },
    9: {
      quest_boost: 125,
      money: 36460,
    },
    10: {
      quest_boost: 150,
      money: 51260,
    },
    11: {
      quest_boost: 155,
      money: 57746,
    },
    12: {
      quest_boost: 160,
      money: 64381,
    },
    13: {
      quest_boost: 165,
      money: 71156,
    },
    14: {
      quest_boost: 170,
      money: 78062,
    },
    15: {
      quest_boost: 175,
      money: 85093,
    },
    16: {
      quest_boost: 180,
      money: 92242,
    },
    17: {
      quest_boost: 185,
      money: 99504,
    },
    18: {
      quest_boost: 190,
      money: 106874,
    },
    19: {
      quest_boost: 195,
      money: 114346,
    },
    20: {
      quest_boost: 200,
      money: 121918,
    },
    21: {
      quest_boost: 205,
      money: 129585,
    },
    22: {
      quest_boost: 210,
      money: 137344,
    },
    23: {
      quest_boost: 215,
      money: 145191,
    },
    24: {
      quest_boost: 220,
      money: 153124,
    },
    25: {
      quest_boost: 225,
      money: 161141,
    },
    26: {
      quest_boost: 230,
      money: 169237,
    },
    27: {
      quest_boost: 235,
      money: 177413,
    },
    28: {
      quest_boost: 240,
      money: 185664,
    },
    29: {
      quest_boost: 245,
      money: 193989,
    },
    30: {
      quest_boost: 250,
      money: 202386,
    },
    31: {
      quest_boost: 255,
      money: 210854,
    },
    32: {
      quest_boost: 260,
      money: 219390,
    },
    33: {
      quest_boost: 265,
      money: 227993,
    },
    34: {
      quest_boost: 270,
      money: 236662,
    },
    35: {
      quest_boost: 275,
      money: 245394,
    },
    36: {
      quest_boost: 280,
      money: 254189,
    },
    37: {
      quest_boost: 285,
      money: 263046,
    },
    38: {
      quest_boost: 290,
      money: 271962,
    },
    39: {
      quest_boost: 295,
      money: 280938,
    },
    40: {
      quest_boost: 300,
      money: 289971,
    },
    41: {
      quest_boost: 305,
      money: 299061,
    },
    42: {
      quest_boost: 310,
      money: 308206,
    },
    43: {
      quest_boost: 315,
      money: 317406,
    },
    44: {
      quest_boost: 320,
      money: 326659,
    },
    45: {
      quest_boost: 325,
      money: 335966,
    },
    46: {
      quest_boost: 330,
      money: 345324,
    },
    47: {
      quest_boost: 335,
      money: 354733,
    },
    48: {
      quest_boost: 340,
      money: 364192,
    },
    49: {
      quest_boost: 345,
      money: 373701,
    },
    50: {
      quest_boost: 350,
      money: 383258,
    },
    51: {
      quest_boost: 355,
      money: 392864,
    },
    52: {
      quest_boost: 360,
      money: 402516,
    },
    53: {
      quest_boost: 365,
      money: 412215,
    },
    54: {
      quest_boost: 370,
      money: 421960,
    },
    55: {
      quest_boost: 375,
      money: 431750,
    },
    56: {
      quest_boost: 380,
      money: 441585,
    },
    57: {
      quest_boost: 385,
      money: 451464,
    },
    58: {
      quest_boost: 390,
      money: 461386,
    },
    59: {
      quest_boost: 395,
      money: 471351,
    },
    60: {
      quest_boost: 400,
      money: 481358,
    },
    61: {
      quest_boost: 405,
      money: 491407,
    },
    62: {
      quest_boost: 410,
      money: 501497,
    },
    63: {
      quest_boost: 415,
      money: 511628,
    },
    64: {
      quest_boost: 420,
      money: 521800,
    },
    65: {
      quest_boost: 425,
      money: 532011,
    },
    66: {
      quest_boost: 430,
      money: 542262,
    },
    67: {
      quest_boost: 435,
      money: 552551,
    },
    68: {
      quest_boost: 440,
      money: 562879,
    },
    69: {
      quest_boost: 445,
      money: 573245,
    },
    70: {
      quest_boost: 450,
      money: 583649,
    },
    71: {
      quest_boost: 455,
      money: 594090,
    },
    72: {
      quest_boost: 460,
      money: 604567,
    },
    73: {
      quest_boost: 465,
      money: 615081,
    },
    74: {
      quest_boost: 470,
      money: 625631,
    },
    75: {
      quest_boost: 475,
      money: 636217,
    },
    76: {
      quest_boost: 480,
      money: 646839,
    },
    77: {
      quest_boost: 485,
      money: 657495,
    },
    78: {
      quest_boost: 490,
      money: 668186,
    },
    79: {
      quest_boost: 495,
      money: 678911,
    },
    80: {
      quest_boost: 500,
      money: 689670,
    },
    81: {
      quest_boost: 505,
      money: 700463,
    },
    82: {
      quest_boost: 510,
      money: 711289,
    },
    83: {
      quest_boost: 515,
      money: 722149,
    },
    84: {
      quest_boost: 520,
      money: 733041,
    },
    85: {
      quest_boost: 525,
      money: 743965,
    },
    86: {
      quest_boost: 530,
      money: 754922,
    },
    87: {
      quest_boost: 535,
      money: 765910,
    },
    88: {
      quest_boost: 540,
      money: 776931,
    },
    89: {
      quest_boost: 545,
      money: 787982,
    },
    90: {
      quest_boost: 550,
      money: 799065,
    },
    91: {
      quest_boost: 555,
      money: 810178,
    },
    92: {
      quest_boost: 560,
      money: 821322,
    },
    93: {
      quest_boost: 565,
      money: 832497,
    },
    94: {
      quest_boost: 570,
      money: 843701,
    },
    95: {
      quest_boost: 575,
      money: 854936,
    },
    96: {
      quest_boost: 580,
      money: 866199,
    },
    97: {
      quest_boost: 585,
      money: 877493,
    },
    98: {
      quest_boost: 590,
      money: 888815,
    },
    99: {
      quest_boost: 595,
      money: 900166,
    },
    100: {
      quest_boost: 600,
      money: 911547,
    },
    101: {
      quest_boost: 605,
      money: 922955,
    },
    102: {
      quest_boost: 610,
      money: 934392,
    },
    103: {
      quest_boost: 615,
      money: 945857,
    },
    104: {
      quest_boost: 620,
      money: 957349,
    },
    105: {
      quest_boost: 625,
      money: 968870,
    },
    106: {
      quest_boost: 630,
      money: 980418,
    },
    107: {
      quest_boost: 635,
      money: 991993,
    },
    108: {
      quest_boost: 640,
      money: 1003595,
    },
    109: {
      quest_boost: 645,
      money: 1015224,
    },
    110: {
      quest_boost: 650,
      money: 1026880,
    },
    111: {
      quest_boost: 655,
      money: 1038562,
    },
    112: {
      quest_boost: 660,
      money: 1050271,
    },
    113: {
      quest_boost: 665,
      money: 1062006,
    },
    114: {
      quest_boost: 670,
      money: 1073767,
    },
    115: {
      quest_boost: 675,
      money: 1085553,
    },
    116: {
      quest_boost: 680,
      money: 1097365,
    },
    117: {
      quest_boost: 685,
      money: 1109203,
    },
    118: {
      quest_boost: 690,
      money: 1121066,
    },
    119: {
      quest_boost: 695,
      money: 1132955,
    },
    120: {
      quest_boost: 700,
      money: 1144868,
    },
    121: {
      quest_boost: 705,
      money: 1156806,
    },
    122: {
      quest_boost: 710,
      money: 1168769,
    },
    123: {
      quest_boost: 715,
      money: 1180756,
    },
    124: {
      quest_boost: 720,
      money: 1192768,
    },
    125: {
      quest_boost: 725,
      money: 1204804,
    },
    126: {
      quest_boost: 730,
      money: 1216864,
    },
    127: {
      quest_boost: 735,
      money: 1228948,
    },
    128: {
      quest_boost: 740,
      money: 1241056,
    },
    129: {
      quest_boost: 745,
      money: 1253187,
    },
    130: {
      quest_boost: 750,
      money: 1265342,
    },
    131: {
      quest_boost: 755,
      money: 1277521,
    },
    132: {
      quest_boost: 760,
      money: 1289722,
    },
    133: {
      quest_boost: 765,
      money: 1301947,
    },
    134: {
      quest_boost: 770,
      money: 1314195,
    },
    135: {
      quest_boost: 775,
      money: 1326466,
    },
    136: {
      quest_boost: 780,
      money: 1338759,
    },
    137: {
      quest_boost: 785,
      money: 1351075,
    },
    138: {
      quest_boost: 790,
      money: 1363414,
    },
    139: {
      quest_boost: 795,
      money: 1375775,
    },
    140: {
      quest_boost: 800,
      money: 1388158,
    },
    141: {
      quest_boost: 805,
      money: 1400563,
    },
    142: {
      quest_boost: 810,
      money: 1412990,
    },
    143: {
      quest_boost: 815,
      money: 1425440,
    },
    144: {
      quest_boost: 820,
      money: 1437911,
    },
    145: {
      quest_boost: 825,
      money: 1450403,
    },
    146: {
      quest_boost: 830,
      money: 1462917,
    },
    147: {
      quest_boost: 835,
      money: 1475453,
    },
    148: {
      quest_boost: 840,
      money: 1488010,
    },
    149: {
      quest_boost: 845,
      money: 1500588,
    },
    150: {
      quest_boost: 850,
      money: 1513188,
    },
    151: {
      quest_boost: 855,
      money: 1525808,
    },
    152: {
      quest_boost: 860,
      money: 1538449,
    },
    153: {
      quest_boost: 865,
      money: 1551112,
    },
    154: {
      quest_boost: 870,
      money: 1563794,
    },
    155: {
      quest_boost: 875,
      money: 1576498,
    },
    156: {
      quest_boost: 880,
      money: 1589222,
    },
    157: {
      quest_boost: 885,
      money: 1601966,
    },
    158: {
      quest_boost: 890,
      money: 1614731,
    },
    159: {
      quest_boost: 895,
      money: 1627516,
    },
    160: {
      quest_boost: 900,
      money: 1640320,
    },
    161: {
      quest_boost: 905,
      money: 1653145,
    },
    162: {
      quest_boost: 910,
      money: 1665990,
    },
    163: {
      quest_boost: 915,
      money: 1678855,
    },
    164: {
      quest_boost: 920,
      money: 1691740,
    },
    165: {
      quest_boost: 925,
      money: 1704644,
    },
    166: {
      quest_boost: 930,
      money: 1717568,
    },
    167: {
      quest_boost: 935,
      money: 1730511,
    },
    168: {
      quest_boost: 940,
      money: 1743473,
    },
    169: {
      quest_boost: 945,
      money: 1756455,
    },
    170: {
      quest_boost: 950,
      money: 1769456,
    },
    171: {
      quest_boost: 955,
      money: 1782477,
    },
    172: {
      quest_boost: 960,
      money: 1795516,
    },
    173: {
      quest_boost: 965,
      money: 1808574,
    },
    174: {
      quest_boost: 970,
      money: 1821651,
    },
    175: {
      quest_boost: 975,
      money: 1834747,
    },
    176: {
      quest_boost: 980,
      money: 1847862,
    },
    177: {
      quest_boost: 985,
      money: 1860995,
    },
    178: {
      quest_boost: 990,
      money: 1874147,
    },
    179: {
      quest_boost: 995,
      money: 1887318,
    },
    180: {
      quest_boost: 1000,
      money: 1900506,
    },
    181: {
      quest_boost: 1005,
      money: 1913714,
    },
    182: {
      quest_boost: 1010,
      money: 1926939,
    },
    183: {
      quest_boost: 1015,
      money: 1940182,
    },
    184: {
      quest_boost: 1020,
      money: 1953444,
    },
    185: {
      quest_boost: 1025,
      money: 1966724,
    },
    186: {
      quest_boost: 1030,
      money: 1980021,
    },
    187: {
      quest_boost: 1035,
      money: 1993337,
    },
    188: {
      quest_boost: 1040,
      money: 2006670,
    },
    189: {
      quest_boost: 1045,
      money: 2020021,
    },
    190: {
      quest_boost: 1050,
      money: 2033390,
    },
    191: {
      quest_boost: 1055,
      money: 2046776,
    },
    192: {
      quest_boost: 1060,
      money: 2060180,
    },
    193: {
      quest_boost: 1065,
      money: 2073602,
    },
    198: {
      quest_boost: 1090,
      money: 2140968,
    },
    201: {
      quest_boost: 1105,
      money: 2181593,
    },
    202: {
      quest_boost: 1110,
      money: 2195169,
    },
  },
  buildCost: {
    asbestos: 450,
    explosives: 300,
    gasoline: 350,
    machine_parts: 200,
    tinplate: 450,
  },
  age: ages.ProgressiveEra.key,
  size: { length: 5, width: 6 },
  levels: ageCost,
};
