const ages = require("../ages.json");
const ageCost = require("../ages-cost/ProgressiveEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Chateau_Frontenac",
  age: ages.ProgressiveEra.key,
  levels: ageCost,
};
