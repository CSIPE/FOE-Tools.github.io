const ages = require("../ages.json");
const ageCost = require("../ages-cost/ModernEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Space_Needle",
  age: ages.ModernEra.key,
  levels: ageCost,
};
