const ages = require("../ages.json");
const ageCost = require("../ages-cost/VirtualFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Terracotta_Army",
  age: ages.VirtualFuture.key,
  levels: ageCost,
};
