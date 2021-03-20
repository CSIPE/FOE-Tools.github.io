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
  const cookieConsentExpirationDate = $clone(store.get("global/cookieConsentExpirationDate"));
  hasAcceptedCookieConsent = !(
    !cookieConsentExpirationDate.length || $moment().isAfter($moment(cookieConsentExpirationDate), "YYYY-MM-DD")
  );

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
