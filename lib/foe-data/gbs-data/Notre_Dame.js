const ages = require("../ages.json");
const ageCost = require("../ages-cost/HighMiddleAges");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Notre_Dame",
  age: ages.HighMiddleAges.key,
  levels: ageCost,
};
