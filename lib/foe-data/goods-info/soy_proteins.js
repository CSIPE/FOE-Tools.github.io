import moment from "dayjs";
import duration from "dayjs/plugin/duration";
import ageData from "../ages.json";
moment.extend(duration);
const age = ageData.SpaceAgeVenus.key;

export default {
  key: "soy_proteins",
  age,
  building: {
    resources: {
      coins: 4251000,
      supplies: 4959500,
    },
    time: moment.duration(2, "hours"),
    size: {
      length: 5,
      width: 4,
    },
    connection: 1,
  },
  unrefined: null,
};
