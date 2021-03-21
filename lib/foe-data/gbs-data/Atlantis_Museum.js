const ages = require("../ages.json");
const ageCost = require("../ages-cost/OceanicFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Atlantis_Museum",
  age: ages.OceanicFuture.key,
  levels: ageCost,
};
