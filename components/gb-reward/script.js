import bonus from "~/lib/foe-data/bonus";

const i18nPrefix = "components.gb_data.";
export default {
  name: "GbReward",
  props: {
    rewards: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      i18nPrefix,
    };
  },
  computed: {
    missingValues() {
      return Object.keys(this.rewards).length === 0;
    },
    icon() {
      return `/img/foe/gb_rewards/${this.missingValues ? "5" : "1"}.png`;
    },
    bonus() {
      return this.$clone(bonus.bonus);
    },
  },
  methods: {
    getValue(key, value) {
      if (["guild_goods"].includes(key)) {
        return value / 5;
      }
      return value;
    },
  },
};
