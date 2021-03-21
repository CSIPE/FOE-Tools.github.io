const ages = require("../ages.json");
const ageCost = require("../ages-cost/SpaceAgeAsteroidBelt");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Space_Carrier",
  age: ages.SpaceAgeAsteroidBelt.key,
  levels: ageCost,
};
