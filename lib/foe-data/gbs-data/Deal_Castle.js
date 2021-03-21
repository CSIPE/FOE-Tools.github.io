const ages = require("../ages.json");
const ageCost = require("../ages-cost/ColonialAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Deal_Castle",
  age: ages.ColonialAge.key,
  levels: ageCost,
};
