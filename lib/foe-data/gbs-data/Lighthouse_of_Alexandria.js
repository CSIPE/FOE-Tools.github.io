const ages = require("../ages.json");
const ageCost = require("../ages-cost/IronAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Lighthouse_of_Alexandria",
  age: ages.IronAge.key,
  levels: ageCost,
};
