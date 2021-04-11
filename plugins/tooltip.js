import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.component("Tippy", TippyComponent);
Vue.use(VueTippy, {
  directive: "tippy", // => v-tippy
  theme: "custom",
  flipDuration: 0,
  arrow: true,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: true,
      },
    },
  },
});
