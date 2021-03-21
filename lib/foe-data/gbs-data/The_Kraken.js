const ages = require("../ages.json");
const ageCost = require("../ages-cost/OceanicFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "The_Kraken",
  age: ages.OceanicFuture.key,
  levels: ageCost,
};
