import { shallowMount } from "@vue/test-utils";

import Component from "~/components/language-selector/LanguageSelector";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";

const factory = () => {
  const { localVue, store, i18n } = getView(getDefaultStore());
  return shallowMount(Component, {
    localVue,
    store,
    i18n,
  });
};

let wrapper;

describe("LanguageSelector", () => {
  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  test("Is a Vue instance", () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });

  test("Change current lang", () => {
    wrapper = factory();
    window.location.reload = jest.fn();
    const newValue = "fr";

    expect(wrapper.vm.$store.get("locale")).toBe("en");
    expect(wrapper.vm.$store.get("global/locale")).toBe("en");

    wrapper.vm.currentLang = newValue;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$store.get("locale")).toBe("fr");
      expect(wrapper.vm.$store.get("global/locale")).toBe(newValue);
      expect(window.location.reload.mock.calls.length).toBe(1);
    });
  });

  test('Call "getCurrentCountry" with a non special locale', () => {
    wrapper = factory();
    window.location.reload = jest.fn();

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.getCurrentCountry("en")).toBe("en");
    });
  });

  test('Call "getCurrentCountry" with a special locale', () => {
    wrapper = factory();
    window.location.reload = jest.fn();

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.getCurrentCountry("sv")).toBe("se");
    });
  });
});
