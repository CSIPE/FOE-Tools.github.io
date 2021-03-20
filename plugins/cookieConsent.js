import Vue from "vue";
import CookieConsent from "klaro/dist/cm";
import CookieConsentDialog from "~/components/cookie-consent/CookieConsent";

export default ({ store, $moment, $clone }) => {
  window.onNuxtReady(() => {
    const updateExpirationDate = () => {
      store.set("global/cookieConsentExpirationDate", $moment().add(1, "year").format("YYYY-MM-DD"));
    };

    const config = {
      elementID: "cookieConsent",
      cookieName: "cookieConsent",
      storageMethod: "localStorage",
      privacyPolicy: `https://${process.env.prodUrl}/privacy-policy`,
      services: [
        {
          name: "foe-tools",
          title: "FOE-Tools",
          purposes: ["functional"],
          required: true,
        },
        {
          name: "sentry",
          title: "Sentry",
          purposes: ["functional"],
          required: true,
        },
        // {
        //   name: "advertising",
        //   title: "Advertising",
        //   purposes: ["advertising"],
        // },
      ],
      purposes: [],
    };
    const s = new Set();
    for (const elt of config.services) {
      for (const purpose of elt.purposes) {
        s.add(purpose);
      }
    }
    config.purposes = Array.from(s);
    const cm = new CookieConsent(config);

    if ($moment().isAfter($moment($clone(store.get("global/cookieConsentExpirationDate")), "YYYY-MM-DD"))) {
      cm.resetConsents();
    }

    const elt = document.createElement("div");
    elt.id = "#cookieConsent";
    document.body.appendChild(elt);

    const DialogComponent = Vue.extend(CookieConsentDialog);
    const component = new DialogComponent({
      el: elt,
      propsData: {
        cm,
        updateExpirationDate,
      },
    });
    Vue.prototype.$cookieConsentManager = cm;
    component.$forceUpdate();
  });
};
