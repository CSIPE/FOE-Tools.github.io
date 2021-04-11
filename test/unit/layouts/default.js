import { shallowMount } from "@vue/test-utils";
import Component from "../../../layouts/_default/Default";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";

const factory = () => {
  const { localVue, store } = getView(getDefaultStore());
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    stubs: ["nuxt"],
  });
};

let wrapper;

describe("Default", () => {
  test("Is a Vue instance", () => {
    wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
