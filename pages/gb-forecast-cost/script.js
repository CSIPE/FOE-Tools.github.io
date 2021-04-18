import gbForecastCost from "~/components/gb-forecast-cost/GbForecastCost";

const i18nPrefix = "routes.gb_forecast_cost.";

export default {
  name: "GbForecastCost",
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/gbs")).length) {
      const result = await app.$axios.$get(app.$config.FOE_DATA_API_GBS);
      store.set("foe/gbs", result);
    }
  },
  data() {
    return {};
  },
  components: {
    gbForecastCost,
  },
};
