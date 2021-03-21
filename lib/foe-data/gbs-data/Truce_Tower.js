const ages = require("../ages.json");
const ageCost = require("../ages-cost/Tomorrow");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Truce_Tower",
  age: ages.Tomorrow.key,
  levels: ageCost,
};
