const ages = require("../ages.json");
const ageCost = require("../ages-cost/SpaceAgeVenus");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Flying_Island",
  gbReward: {},
  age: ages.SpaceAgeVenus.key,
  levels: ageCost,
};
