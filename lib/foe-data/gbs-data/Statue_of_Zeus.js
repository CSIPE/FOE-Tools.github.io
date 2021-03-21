const ages = require("../ages.json");
const ageCost = require("../ages-cost/BronzeAge");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Statue_of_Zeus",
  age: ages.BronzeAge.key,
  levels: ageCost,
};
