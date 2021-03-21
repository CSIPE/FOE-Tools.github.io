const ages = require("../ages.json");
const ageCost = require("../ages-cost/ContemporaryEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Lotus_Temple",
  age: ages.ContemporaryEra.key,
  levels: ageCost,
};
