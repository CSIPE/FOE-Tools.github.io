import Vue from "vue";
import AddToHomeScreen from "~/components/add-to-home-screen/AddToHomeScreen";

export default ({ store }) => {
  const setHaveReadInstallApp = (value) => {
    store.set(`global/haveReadInstallApp`, value);
  };
  const getHaveReadInstallApp = () => {
    return store.get(`global/haveReadInstallApp`);
  };

  const elt = document.createElement("div");
  elt.id = "#addToHomeScreen";
  document.body.appendChild(elt);

  const DialogComponent = Vue.extend(AddToHomeScreen);
  const component = new DialogComponent({
    el: elt,
    propsData: {
      setHaveReadInstallApp,
      getHaveReadInstallApp,
    },
  });
  component.$forceUpdate();
};
