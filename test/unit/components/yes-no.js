import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/yes-no/YesNo";
import { getView } from "../localVue";

const value = true;
const factory = () => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      label: "Hello World",
      value: value,
    },
    localVue,
    store,
  });
};

let wrapper;

describe("YesNo", () => {
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

  test("Can select no", () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$data.newValue).toBe(true);

      wrapper.find("div div.control div.inline-flex button:nth-child(1)").trigger("click");
      wrapper.vm.$nextTick(() => {
        expect(wrapper.emitted().input).toBeTruthy();
        expect(wrapper.emitted().input[0]).toEqual([false]);
        expect(wrapper.vm.$data.newValue).toBe(false);
      });
    });
  });

  test("Update props affect newValue", () => {
    wrapper = factory();
    expect(wrapper.vm.$data.newValue).toBe(true);

    wrapper.setProps({ value: false });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$data.newValue).toBe(false);
    });
  });
});
