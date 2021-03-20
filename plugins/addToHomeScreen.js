import Vue from "vue";
import AddToHomeScreen from "~/components/add-to-home-screen/AddToHomeScreen";

export default ({ store, $clone, $moment }) => {
  const setHaveReadInstallApp = (value) => {
    store.set(`global/haveReadInstallApp`, value);
  };
  const getHaveReadInstallApp = () => {
    return store.get(`global/haveReadInstallApp`);
  };

  let hasAcceptedCookieConsent = false;
  if ($moment().isAfter($moment($clone(store.get("global/cookieConsentExpirationDate")), "YYYY-MM-DD"))) {
    hasAcceptedCookieConsent = false;
  } else {
    hasAcceptedCookieConsent = true;
  }

  const elt = document.createElement("div");
  elt.id = "#addToHomeScreen";
  document.body.appendChild(elt);

  const DialogComponent = Vue.extend(AddToHomeScreen);
  const component = new DialogComponent({
    el: elt,
    propsData: {
      setHaveReadInstallApp,
      getHaveReadInstallApp,
      hasAcceptedCookieConsent,
    },
  });
  component.$forceUpdate();
};
