const ages = require("../ages.json");
const ageCost = require("../ages-cost/PostmodernEra");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "The_Habitat",
  age: ages.PostmodernEra.key,
  levels: ageCost,
};
