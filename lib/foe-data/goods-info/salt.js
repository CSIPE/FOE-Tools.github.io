import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages.json";
moment.extend(duration);
const age = ageData.HighMiddleAges.key;

export default {
  key: "salt",
  age,
  building: {
    resources: {
      coins: 14000,
      supplies: 27000,
    },
    time: moment.duration({ hours: 7, minutes: 30 }),
    size: {
      length: 3,
      width: 4,
    },
    population: 460,
    connection: 1,
  },
  unrefined: null,
};
