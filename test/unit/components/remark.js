import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/remark/Remark";
import { getView } from "../localVue";

let wrapper;

const factory = (md = undefined) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      markdown: md ? md : "",
    },
    localVue,
    store,
  });
};

describe("Remark", () => {
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

  test("Valid value", () => {
    wrapper = factory("# Hello World :tada:");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted()["md-update"][0][0]).toMatchSnapshot();
    });
  });

  test("Update markdown", () => {
    wrapper = factory();
    expect(wrapper.html()).toEqual("<div></div>");
    wrapper.setProps({ markdown: "# Hello World :tada:" });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
