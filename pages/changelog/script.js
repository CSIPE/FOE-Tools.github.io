import Remark from "~/components/remark/Remark";
import changelog from "~/CHANGELOG.md";

const i18nPrefix = "routes.changelog.";

export default {
  name: "Changelog",
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("RESTORE_HERO");

    return {
      markdown: changelog,
    };
  },
  components: {
    Remark,
  },
};
