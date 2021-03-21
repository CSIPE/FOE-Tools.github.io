const ages = require("../ages.json");
const ageCost = require("../ages-cost/ProgressiveEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Alcatraz",
  age: ages.ProgressiveEra.key,
  levels: ageCost,
};
