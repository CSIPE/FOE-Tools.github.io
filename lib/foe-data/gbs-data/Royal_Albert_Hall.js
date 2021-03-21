const ages = require("../ages.json");
const ageCost = require("../ages-cost/IndustrialAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Royal_Albert_Hall",
  age: ages.IndustrialAge.key,
  levels: ageCost,
};
