import { shallowMount } from "@vue/test-utils";
import Component from "../../layouts/_default/Default";
import { getView } from "./localVue";
import { getDefaultStore } from "./utils";

const factory = (mocks = {}) => {
  const { localVue, store } = getView(getDefaultStore());
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    stubs: ["nuxt"],
    mocks: {
      $route: {
        name: "foo",
        path: "foo",
      },
      ...mocks,
    },
  });
};

const i18nPrefix = "routes.secure_position.";

let wrapper;

describe("Store", () => {
  test('Call "SET_HERO"', () => {
    wrapper = factory();
    expect(wrapper.vm.$store.get("hero")).toEqual({
      title: "components.site_layout.hero.title",
      subtitle: "components.site_layout.hero.slogan_html",
      titleConfig: {},
    });
    wrapper.vm.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
      titleConfig: {},
    });
    expect(wrapper.vm.$store.get("hero")).toEqual({
      title: "routes.secure_position.hero.title",
      subtitle: "routes.secure_position.hero.subtitle",
      titleConfig: {},
    });
  });

  test('Call "RESTORE_HERO"', () => {
    wrapper = factory();
    expect(wrapper.vm.$store.get("hero")).toEqual({
      title: "components.site_layout.hero.title",
      subtitle: "components.site_layout.hero.slogan_html",
      titleConfig: {},
    });
    wrapper.vm.$store.set("hero", {
      title: i18nPrefix + "hero.title",
      subtitle: i18nPrefix + "hero.subtitle",
      titleConfig: {},
    });
    expect(wrapper.vm.$store.get("hero")).toEqual({
      title: "routes.secure_position.hero.title",
      subtitle: "routes.secure_position.hero.subtitle",
      titleConfig: {},
    });
    wrapper.vm.$store.commit("RESTORE_HERO");
    expect(wrapper.vm.$store.get("hero")).toEqual({
      title: "components.site_layout.hero.title",
      subtitle: "components.site_layout.hero.slogan_html",
      titleConfig: {},
    });
  });

  test('Call "getUrlQuery"', () => {
    wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    expect(wrapper.vm.$store.getters.getUrlQuery()).toEqual({ foo: "bar" });
  });

  /* FIXME: Nuxt bug
   * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
   * See: https://github.com/nuxt/nuxt.js/issues/4757
   */
  test('Throw error when call "ADD_URL_QUERY" with invalid key', () => {
    wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    // expect(() => wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" })).toThrow(
    //   new Errors.KeyAlreadyExistsInUrlQueryException({ key: "foo" })
    // );
  });

  /* FIXME: Nuxt bug
   * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
   * See: https://github.com/nuxt/nuxt.js/issues/4757
   */
  test('Throw error when call "ADD_URL_QUERY" with invalid key in namespace', () => {
    wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar", ns: "baz" });
    // expect(() => wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar", ns: "baz" })).toThrow(
    //   new Errors.KeyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException({ key: "foo" })
    // );
  });

  /* FIXME: Nuxt bug
   * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
   * See: https://github.com/nuxt/nuxt.js/issues/4757
   */
  test('Throw error when call "UPDATE_URL_QUERY" with invalid namespace', () => {
    wrapper = factory();
    wrapper.vm.$store.commit("ADD_URL_QUERY", { key: "foo", value: "bar" });
    wrapper.vm.$store.commit("UPDATE_URL_QUERY", { key: "foo", value: "bar", ns: "baz" });
    // expect(() => wrapper.vm.$store.commit("UPDATE_URL_QUERY", { key: "foo", value: "bar", ns: "baz" })).toThrow(
    //   new Errors.NamespaceNotFoundException({ key: "baz" })
    // );
  });

  test('Call "IS_DARK_THEME"', () => {
    wrapper = factory();
    expect(wrapper.vm.$store.get("isDarkTheme")).toEqual(false);
    wrapper.vm.$store.set("isDarkTheme", true);
    expect(wrapper.vm.$store.get("isDarkTheme")).toEqual(true);
  });
});
