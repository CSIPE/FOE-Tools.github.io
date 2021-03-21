const ages = require("../ages.json");
const ageCost = require("../ages-cost/Galata");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Galata_Tower",
  age: ages.NoAge.key,
  levels: ageCost,
};
