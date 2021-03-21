const ages = require("../ages.json");
const ageCost = require("../ages-cost/ArcticFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Gaea_Statue",
  age: ages.ArcticFuture.key,
  levels: ageCost,
};
