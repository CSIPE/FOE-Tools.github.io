const ages = require("../ages.json");
const ageCost = require("../ages-cost/SpaceAgeMars");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Star_Gazer",
  age: ages.SpaceAgeMars.key,
  levels: ageCost,
};
