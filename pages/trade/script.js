import SimpleTrade from "~/components/simple-trade/SimpleTrade";
import ComplexTrade from "~/components/trade/Trade";
import { TradeArrayType, fairTradeArray, simpleTradeArray } from "~/scripts/trade";

const i18nPrefix = "routes.trade.";

export default {
  name: "Trade",
  head() {
    this.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
    });

    return { title: this.$t(i18nPrefix + "title") };
  },
  async fetch({ app, store }) {
    if (!Object.keys(store.get("foe/goods")).length) {
      const goodsResult = await app.$axios.$get(app.$config.FOE_DATA_API_GOODS);
      store.set("foe/goods", goodsResult);
    }
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
      TradeArrayType: this.$clone(TradeArrayType),
      tab: 1,
      fairTradeArray: this.$clone(fairTradeArray),
      simpleTradeArray: this.$clone(simpleTradeArray),
    };
  },
  components: {
    SimpleTrade,
    ComplexTrade,
  },
};
