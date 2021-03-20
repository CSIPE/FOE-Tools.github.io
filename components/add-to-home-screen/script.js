import viewGridAdd from "~/assets/view-grid-add.svg?inline";

export default {
  name: "AddToHomeScreen",
  props: {
    setHaveReadInstallApp: {
      type: Function,
      required: true,
    },
    getHaveReadInstallApp: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
      deferredPrompt: null,
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    toggleModal(value = undefined) {
      this.showDialog = value === undefined ? !this.showDialog : value;
      this.$props.setHaveReadInstallApp(true);
    },
    dismiss() {
      this.toggleModal(false);
      this.deferredPrompt = null;
    },
    async install() {
      this.toggleModal(false);
      await this.deferredPrompt.prompt();
    },
  },
  mounted() {
    if (!this.$props.getHaveReadInstallApp() && this.$cookieConsentManager.confirmed) {
      this.showDialog = true;
    }
  },
  components: {
    viewGridAdd,
  },
};
