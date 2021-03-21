const ages = require("../ages.json");
const ageCost = require("../ages-cost/EarlyMiddleAges");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Cathedral_of_Aachen",
  age: ages.EarlyMiddleAges.key,
  levels: ageCost,
};
