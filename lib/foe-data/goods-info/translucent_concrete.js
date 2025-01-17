import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages.json";
moment.extend(duration);
const age = ageData.Tomorrow.key;

export default {
  key: "translucent_concrete",
  age,
  building: {
    resources: {
      coins: 153000,
      supplies: 353000,
    },
    time: moment.duration(15, "hours"),
    size: {
      length: 5,
      width: 4,
    },
    population: 2180,
    connection: 2,
  },
  unrefined: "ferroconcrete",
};
