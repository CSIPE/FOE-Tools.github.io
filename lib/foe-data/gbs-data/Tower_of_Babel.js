const ages = require("../ages.json");
const ageCost = require("../ages-cost/BronzeAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Tower_of_Babel",
  age: ages.BronzeAge.key,
  levels: ageCost,
};
