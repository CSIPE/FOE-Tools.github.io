import Vue from "vue";

export default async ({ app }) => {
  const workbox = await window.$workbox;

  if (!workbox) {
    // Workbox couldn't be loaded.
    return;
  }

  workbox.addEventListener("installed", (event) => {
    if (!event.isUpdate) {
      // The PWA is on the latest version.
      return;
    }

    window.onNuxtReady(() => {
      Vue.prototype.$toast({
        description: app.i18n.t("pwa_update.message"),
        isClosable: false,
        status: "info",
      });
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    });
  });
};
