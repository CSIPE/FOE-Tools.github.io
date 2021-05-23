import Vue from "vue";

export default async ({ app, store }) => {
  const workbox = await window.$workbox;

  const lastVisitVersion = store.get("global/lastVisitVersion");

  if (!workbox) {
    // Workbox couldn't be loaded.
    return;
  }

  workbox.addEventListener("installed", (event) => {
    if (!event.isUpdate) {
      // The PWA is on the latest version.
      return;
    }

    Vue.prototype.$toast({
      description: app.i18n.t("pwa_update.message"),
      isClosable: false,
      status: "info",
    });
    setTimeout(() => {
      store.set("global/lastVisitVersion", lastVisitVersion);
      window.location.reload();
    }, 5000);
  });
};
