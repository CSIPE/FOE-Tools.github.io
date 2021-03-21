const ages = require("../ages.json");
const ageCost = require("../ages-cost/NoAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Temple_of_Relics",
  age: ages.NoAge.key,
  levels: ageCost,
};
