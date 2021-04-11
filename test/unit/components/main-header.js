import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/main-header/MainHeader";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";

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
      $router: {
        push: jest.fn().mockImplementation(_ => {}),
      },
      ...mocks,
    },
  });
};

let wrapper;

describe("Default", () => {
  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  test("Is a Vue instance", () => {
    wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Change route", () => {
    wrapper = factory();
    wrapper.vm.burgerMenuVisible = true;

    wrapper.vm.$route.path = "bar";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.burgerMenuVisible).toBe(false);
      done();
    });
  });

  test('Call "toggleMenu"', () => {
    wrapper = factory();
    expect(wrapper.vm.burgerMenuVisible).toBe(false);
    wrapper.vm.toggleMenu();
    expect(wrapper.vm.burgerMenuVisible).toBe(true);
  });

  test('Call "goTo"', () => {
    wrapper = factory();
    wrapper.vm.goTo("Observatory");

    expect(wrapper.vm.$router.push.mock.calls.length).toBe(1);
    expect(wrapper.vm.$router.push.mock.calls[0][0]).toBe("https://test.foe-tools.github.io/{\"name\":\"GbInvestment\",\"params\":{\"gb\":\"Observatory\"}}");
  });
});
