const i18nPrefix = "components.gb_patron_data.";
export default {
  name: "GbPatronReward",
  props: {
    iconIndex: {
      type: Number,
      required: true,
    },
    rewards: {
      type: Object,
      required: true,
    },
    arcBonus: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      i18nPrefix,
    };
  },
  computed: {
    rewardIcon() {
      return `/img/foe/gb_rewards/${this.iconIndex + 1}.png`;
    },
    arcBonusNormalized() {
      return 1 + this.arcBonus / 100;
    },
  },
};
