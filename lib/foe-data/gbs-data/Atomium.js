const ages = require("../ages.json");
const ageCost = require("../ages-cost/ModernEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Atomium",
  age: ages.ModernEra.key,
  levels: ageCost,
};
