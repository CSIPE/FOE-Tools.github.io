const ages = require("../ages.json");
const ageCost = require("../ages-cost/Oracle");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = {
  key: "Oracle_of_Delphi",
  age: ages.NoAge.key,
  levels: ageCost,
};
