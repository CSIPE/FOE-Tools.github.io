const ages = require("../ages.json");
const ageCost = require("../ages-cost/TheFuture");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "The_Arc",
  age: ages.TheFuture.key,
  levels: ageCost,
};
