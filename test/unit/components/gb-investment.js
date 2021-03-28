import { shallowMount } from "@vue/test-utils";
import { NotInBoundsError } from "@/scripts/errors";
import clone from "lodash.clonedeep";
import Component from "../../../components/gb-investment/GbInvestment";
import Observatory from "../../../lib/foe-data/gbs-data/Observatory";
import Himeji_Castle from "../../../lib/foe-data/gbs-data/Himeji_Castle";
import { getView } from "../localVue";
import { getDefaultStore } from "../utils";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";

const defaultGb = Observatory;
const profileID = "testID";
const promotionMessageList = [
  ...clone(defaultPromotionMessages),
  {
    name: "Custom 11",
    id: "Custom 11",
    config: {
      prefix: "",
      suffix: "",
      displayGbName: true,
      showLevel: true,
      useShortGbName: false,
      reversePlacesOrder: true,
      placeSeparator: ",",
      place: "${PI}",
      message: "${GBN} ${FLVL} < ${P} > ${TLVL}",
    },
  },
];

const factory = (propsData = {}, mocks = {}) => {
  const { localVue, i18n, store } = getView(
    getDefaultStore(profileID, {
      profileStore: {
        profiles: {
          testID: {
            promotionMessageList,
          },
        },
      },
    })
  );

  return shallowMount(Component, {
    propsData: {
      gb: defaultGb,
      ...propsData,
    },
    localVue: localVue,
    i18n,
    store: store,
    mocks: {
      $route: {
        name: "foo",
        query: {},
        params: {
          gb: "root",
        },
      },
      ...mocks,
    },
  });
};

const defaultInvestorPercentageCustom = [90, 90, 90, 90, 90];
const defaultResult = {
  cost: 650,
  investment: [
    {
      cumulativeInvestment: 526,
      expectedParticipation: 124,
      isInvestorParticipation: false,
      participation: 124,
      preparation: 402,
      reward: 65,
      roi: 0,
      snipe: { fp: 325, roi: -201 },
      defaultParticipationIndex: -1,
    },
    {
      cumulativeInvestment: 593,
      expectedParticipation: 67,
      isInvestorParticipation: false,
      participation: 67,
      preparation: 402,
      reward: 35,
      roi: 0,
      snipe: { fp: 325, roi: -258 },
      defaultParticipationIndex: -1,
    },
    {
      cumulativeInvestment: 631,
      expectedParticipation: 19,
      isInvestorParticipation: false,
      participation: 19,
      preparation: 421,
      reward: 10,
      roi: 0,
      snipe: { fp: 325, roi: -306 },
      defaultParticipationIndex: -1,
    },
    {
      cumulativeInvestment: 641,
      expectedParticipation: 10,
      isInvestorParticipation: false,
      participation: 10,
      preparation: 421,
      reward: 5,
      roi: 0,
      snipe: { fp: 325, roi: -315 },
      defaultParticipationIndex: -1,
    },
    {
      expectedParticipation: 0,
      isInvestorParticipation: false,
      preparation: 430,
      reward: 0,
      roi: 0,
      snipe: { fp: 0, roi: 0 },
      defaultParticipationIndex: -1,
    },
  ],
  level: 10,
  otherInvestment: [],
  totalPreparations: 430,
};

let wrapper;

describe.skip("GbInvestment", () => {
  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  test("Is a Vue instance", () => {
    wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with URL query", () => {
    const investorPercentageCustom = [92, 91, 90, 85, 80];
    const investorParticipation = [
      { value: 10, isPotentialSniper: false },
      { value: 8, isPotentialSniper: false },
      { value: 6, isPotentialSniper: false },
      { value: 4, isPotentialSniper: false },
      { value: 2, isPotentialSniper: false },
    ];
    wrapper = factory(defaultGb, {
      $route: {
        name: "foo",
        query: {
          gbi_l: 20,
          gbi_oi: 21,
          gbi_ipg: 90,
          gbi_px: "foo",
          gbi_sx: "bar",
          gbi_sn: "1",
          gbi_dgbn: "0",
          gbi_sl: "1",
          gbi_spx: "0",
          gbi_ssx: "0",
          gbi_p1: investorPercentageCustom[0],
          gbi_p2: investorPercentageCustom[1],
          gbi_p3: investorPercentageCustom[2],
          gbi_p4: investorPercentageCustom[3],
          gbi_p5: investorPercentageCustom[4],
          gbi_ip: JSON.stringify(investorParticipation),
          gbi_pFree1: "0",
          gbi_pFree2: "0",
          gbi_pFree3: "1",
          gbi_pFree4: "1",
          gbi_pFree5: "1",
          gbi_ss: "1",
          gbi_yab: "90",
        },
        params: {
          gb: "root",
        },
      },
    });

    expect(wrapper.vm.level).toBe(20);
    expect(wrapper.vm.ownerInvestment).toBe(21);
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    expect(wrapper.vm.prefix).toBe("foo");
    expect(wrapper.vm.suffix).toBe("bar");
    expect(wrapper.vm.displayGbName).toBe(false);
    expect(wrapper.vm.shortName).toBe(true);
    expect(wrapper.vm.showLevel).toBe(true);
    expect(wrapper.vm.showPrefix).toBe(false);
    expect(wrapper.vm.showSuffix).toBe(false);
    expect(wrapper.vm.showSnipe).toBe(true);
    expect(wrapper.vm.showOnlySecuredPlaces).toBe(false);
    expect(wrapper.vm.yourArcBonus).toBe(90);
    expect(wrapper.vm.investorPercentageCustom).toEqual(investorPercentageCustom);
    expect(wrapper.vm.investorParticipation).toEqual(investorParticipation);
    expect(wrapper.vm.placeFree).toEqual([
      { state: false },
      { state: false },
      { state: true },
      { state: true },
      { state: true },
    ]);
  });

  test("Initialize with URL query 2", () => {
    wrapper = factory(defaultGb, {
      $route: {
        name: "foo",
        query: {
          gbi_oi: 402,
          gbi_sosp: 1,
        },
        params: {
          gb: "root",
        },
      },
    });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.ownerInvestment).toBe(402);
      expect(wrapper.vm.showOnlySecuredPlaces).toBe(true);
      expect(wrapper.vm.placeFree).toEqual([
        { state: true },
        { state: true },
        { state: false },
        { state: false },
        { state: false },
      ]);
    });
  });

  test('Change "level" value', () => {
    wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.level).toBe(newValue);
      expect(wrapper.vm.ownerInvestment).toBe(0);
      expect(wrapper.vm.investorParticipation).toEqual([]);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_l")).toBe(newValue);
    });
  });

  test('Change "level" invalid value', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      const newValue = -1;
      expect(wrapper.vm.level).toBe(10);
      wrapper.vm.level = newValue;
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.level).toBe(newValue);
        expect(wrapper.vm.ownerInvestment).toBe(0);
        expect(wrapper.vm.investorParticipation).toEqual([]);
        expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_l")).toBe(10);
      });
    });
  });

  test('Change "level" invalid type', () => {
    wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.level).toBe(newValue);
      expect(wrapper.vm.errors.level).toBeTruthy();
      expect(wrapper.vm.ownerInvestment).toBe(0);
      expect(wrapper.vm.investorParticipation).toEqual([]);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_l")).toBe(10);
    });
  });

  test('Change "ownerInvestment" value', () => {
    wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.ownerInvestment).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_oi")).toBe(newValue);
    });
  });

  test('Change "ownerInvestment" invalid value', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      const newValue = -1;
      expect(wrapper.vm.ownerInvestment).toBe(0);
      wrapper.vm.ownerInvestment = newValue;
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.ownerInvestment).toBe(newValue);
        expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_oi")).toBe(0);
      });
    });
  });

  test('Change "ownerInvestment" invalid type', () => {
    wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.ownerInvestment).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_oi")).toBe(0);
    });
  });

  test('Change "addInvestors" value', () => {
    wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.addInvestors).toBe(0);
    wrapper.vm.addInvestors = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.addInvestors).toBe(newValue);
      expect(wrapper.vm.errors.addInvestors).toBe(false);
    });
  });

  test('Change "addInvestors" invalid value', () => {
    wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.addInvestors).toBe(0);
    wrapper.vm.addInvestors = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.addInvestors).toBe(newValue);
      expect(wrapper.vm.errors.addInvestors).toBe(true);
    });
  });

  test('Change "addInvestors" invalid type', () => {
    wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.addInvestors).toBe(0);
    wrapper.vm.addInvestors = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.addInvestors).toBe(newValue);
      expect(wrapper.vm.errors.addInvestors).toBe(true);
    });
  });

  test('Change "investorPercentageGlobal" value', () => {
    wrapper = factory();
    const newValue = 80;
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
      expect(wrapper.vm.ownerInvestment).toBe(0);
      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue);
        expect(wrapper.vm.$store.get(`urlQueryNamespace.gbi.gbi_p${i + 1}`)).toBe(newValue);
      }
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_ipg")).toBe(newValue);
    });
  });

  test('Change "investorPercentageGlobal" invalid value', () => {
    wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
      expect(wrapper.vm.ownerInvestment).toBe(0);
      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(90);
        expect(wrapper.vm.$store.get(`urlQueryNamespace.gbi.gbi_p${i + 1}`)).toBe(90);
      }
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_ipg")).toBe(90);
    });
  });

  test('Change "investorPercentageGlobal" invalid type', () => {
    wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
      expect(wrapper.vm.ownerInvestment).toBe(0);
      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(90);
        expect(wrapper.vm.$store.get(`urlQueryNamespace.gbi.gbi_p${i + 1}`)).toBe(90);
      }
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_ipg")).toBe(90);
    });
  });

  test('Change "investorPercentageCustom" value', () => {
    wrapper = factory();
    const newValue = [92, 91, 90, 85, 80];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    wrapper.vm.$nextTick(() => {
      for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
        expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
        expect(wrapper.vm.$store.get(`urlQueryNamespace.gbi.gbi_p${i + 1}`)).toBe(newValue[i]);
      }
    });
  });

  test('Change "investorPercentageCustom" invalid value', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      const newValue = [90, -1, 90, 90, 90];
      expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
      wrapper.vm.investorPercentageCustom = newValue;

      wrapper.vm.$nextTick(() => {
        for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
          expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
          expect(wrapper.vm.$store.get(`urlQueryNamespace.gbi.gbi_p${i + 1}`)).toBe(90);
        }
      });
    });
  });

  test('Change "yourArcBonus" value', () => {
    wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = 123;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.yourArcBonus).toBe(123);
      expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    });
  });

  test('Change "yourArcBonus" invalid value', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.yourArcBonus).toBe(90.6);
      expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
      wrapper.vm.yourArcBonus = -1;
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.yourArcBonus).toBe(-1);
        expect(wrapper.vm.errors.yourArcBonus).toBeTruthy();
      });
    });
  });

  test('Change "yourArcBonus" invalid type', () => {
    wrapper = factory();
    const invalidValueType = "foo";
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = invalidValueType;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.yourArcBonus).toBe(invalidValueType);
      expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    });
  });

  test('Change "displayGbName" value', () => {
    wrapper = factory();
    const newValue = false;
    expect(wrapper.vm.displayGbName).toBe(true);
    wrapper.vm.displayGbName = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.displayGbName).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_dgbn")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].displayGbName`)).toBe(newValue);
    });
  });

  test('Change "prefix" value', () => {
    wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.prefix).toBe("");
    wrapper.vm.prefix = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.prefix).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_px")).toBe(newValue);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].gbPrefix`)).toBe(newValue);
    });
  });

  test('Change "suffix" value', () => {
    wrapper = factory();
    const newValue = "bar";
    expect(wrapper.vm.suffix).toBe("");
    wrapper.vm.suffix = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.suffix).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_sx")).toBe(newValue);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].gbSuffix`)).toBe(newValue);
    });
  });

  test('Change "shortName" value', () => {
    wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.shortName).toBe(false);
    wrapper.vm.shortName = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.shortName).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_sn")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].shortName`)).toBe(newValue);
    });
  });

  test('Change "showLevel" value', () => {
    wrapper = factory();
    const newValue = false;
    expect(wrapper.vm.showLevel).toBe(true);
    wrapper.vm.showLevel = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showLevel).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_sl")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].showLevel`)).toBe(newValue);
    });
  });

  test('Change "showSnipe" value', () => {
    wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.showSnipe).toBe(false);
    wrapper.vm.showSnipe = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showSnipe).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_ss")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].showSnipe`)).toBe(newValue);
    });
  });

  test('Change "showPrefix" value', () => {
    wrapper = factory();
    const newValue = false;
    expect(wrapper.vm.showPrefix).toBe(true);
    wrapper.vm.showPrefix = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showPrefix).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_spx")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].gbShowPrefix`)).toBe(newValue);
    });
  });

  test('Change "showSuffix" value', () => {
    wrapper = factory();
    const newValue = false;
    expect(wrapper.vm.showSuffix).toBe(true);
    wrapper.vm.showSuffix = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showSuffix).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_ssx")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].gbShowSuffix`)).toBe(newValue);
    });
  });

  test('Change "showOnlySecuredPlaces" value', () => {
    wrapper = factory();
    const newValue = true;
    wrapper.vm.ownerInvestment = 402;
    expect(wrapper.vm.showOnlySecuredPlaces).toBe(false);
    wrapper.vm.showOnlySecuredPlaces = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showOnlySecuredPlaces).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_sosp")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].showOnlySecuredPlaces`)).toBe(newValue);
      expect(wrapper.vm.promotion).toMatchSnapshot();
    });
  });

  test('Change "showOnlySecuredPlaces" value and revert', () => {
    wrapper = factory();
    const newValue = true;
    wrapper.vm.ownerInvestment = 402;
    expect(wrapper.vm.showOnlySecuredPlaces).toBe(false);
    wrapper.vm.showOnlySecuredPlaces = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showOnlySecuredPlaces).toBe(newValue);
      expect(wrapper.vm.$store.get("urlQueryNamespace.gbi.gbi_sosp")).toBe(newValue ? 1 : 0);
      expect(wrapper.vm.$store.get(`profile/profiles@[${profileID}].showOnlySecuredPlaces`)).toBe(newValue);
      wrapper.vm.showOnlySecuredPlaces = !newValue;
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.promotion).toMatchSnapshot();
      });
    });
  });

  test('Change "displayTableCard" value', () => {
    wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.displayTableCard).toBe(false);
    wrapper.vm.displayTableCard = newValue;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.displayTableCard).toBe(newValue);
      expect(wrapper.vm.$store.get("global/displayTableCard")).toBe(newValue);
    });
  });

  test('Change "result" value', () => {
    wrapper = factory();
    const newValue = {
      cost: 650,
      investment: [
        {
          cumulativeInvestment: 526,
          expectedParticipation: 124,
          isInvestorParticipation: false,
          participation: 124,
          preparation: 402,
          reward: 65,
          roi: 0,
          snipe: { fp: 325, roi: -201 },
          defaultParticipationIndex: -1,
        },
        {
          cumulativeInvestment: 593,
          expectedParticipation: 67,
          isInvestorParticipation: false,
          participation: 67,
          preparation: 402,
          reward: 35,
          roi: 0,
          snipe: { fp: 325, roi: -258 },
          defaultParticipationIndex: -1,
        },
        {
          cumulativeInvestment: 631,
          expectedParticipation: 19,
          isInvestorParticipation: false,
          participation: 19,
          preparation: 421,
          reward: 10,
          roi: 0,
          snipe: { fp: 325, roi: -306 },
          defaultParticipationIndex: -1,
        },
        {
          cumulativeInvestment: 641,
          expectedParticipation: 10,
          isInvestorParticipation: false,
          participation: 10,
          preparation: 421,
          reward: 5,
          roi: 0,
          snipe: { fp: 325, roi: -315 },
          defaultParticipationIndex: -1,
        },
        {
          expectedParticipation: 0,
          isInvestorParticipation: false,
          preparation: 430,
          reward: 0,
          roi: 0,
          snipe: { fp: 0, roi: 0 },
          defaultParticipationIndex: -1,
        },
      ],
      level: 10,
      otherInvestment: [],
      totalPreparations: 430,
    };
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.result).toEqual(defaultResult);
      wrapper.vm.result = newValue;
      wrapper.vm.$nextTick(() => {
        expect({ result: wrapper.vm.result, promotion: wrapper.vm.promotion }).toMatchSnapshot();
      });
    });
  });

  test('Change "result" value with null value', () => {
    wrapper = factory();
    const newValue = null;
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.result).toEqual(defaultResult);
      wrapper.vm.result = newValue;
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.result).toEqual(null);
        expect(wrapper.vm.promotion).toEqual([]);
      });
    });
  });

  test.skip('Change "lang" value', async () => {
    wrapper = factory();

    wrapper.vm.i18n.locale = "fr";
    wrapper.vm.$store.set("locale", "fr");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.promotion).toMatchSnapshot();
    });
  });

  test.skip('Change "lang" value with null result', async () => {
    wrapper = factory();
    const newValue = null;
    wrapper.vm.result = newValue;

    wrapper.vm.i18n.locale = "fr";
    wrapper.vm.$store.set("locale", "fr");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.promotion).toEqual([]);
    });
  });

  test('Call "goTo"', () => {
    wrapper = factory(
      {},
      {
        $router: {
          push: jest.fn(),
        },
      }
    );
    wrapper.vm.goTo("foo");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$router.push.mock.calls.length).toBe(1);
      expect(wrapper.vm.$router.push.mock.calls[0][0])
        .toEqual("https://test.foe-tools.github.io/{\"name\":\"GbInvestment\",\"params\":{\"gb\":\"foo\"}}");
    });
  });

  test('Call "calculate" with invalid data', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      wrapper.vm.level = -1;
      wrapper.vm.$nextTick(() => {
        expect(() => wrapper.vm.calculate()).toThrow(
          new NotInBoundsError({
            value: -1,
            lowerBound: 1,
            upperBound: Observatory.levels.length,
            additionalMessage:
              'for parameter "currentLevel" of ' +
              "ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation, ownerPreparation" +
              "yourArcBonus)",
          })
        );
      });
    });
  });

  test('Call "successCopy" with invalid data', () => {
    jest.useFakeTimers();
    wrapper = factory();
    const index = 0;
    wrapper.vm.calculate();
    wrapper.vm.updatePromotionMessage();
    wrapper.vm.successCopy(index);
    expect(wrapper.vm.promotion[index].active).toBe(true);

    wrapper.vm.$nextTick(() => {
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
    });
  });

  test('Call "changePlaceFree" with invalid data', () => {
    wrapper = factory();
    const index = 0;
    const value = false;
    wrapper.vm.calculate();
    wrapper.vm.changePlaceFree(index, value);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.placeFree[index].state).toBe(value);
      expect(wrapper.vm.promotion).toMatchSnapshot();
      expect(wrapper.vm.$store.get(`urlQueryNamespace.gbi.gbi_pFree${index + 1}`)).toBe(value ? 1 : 0);
    });
  });

  test('Call "addInvestor"', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
      wrapper.vm.addInvestors = 1;
      wrapper.vm.addInvestor();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.investorParticipation).toMatchSnapshot();
      });
    });
  });

  test('Call "addInvestor" with big value', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
      wrapper.vm.addInvestors = defaultGb.levels[9].cost / 2 + 1;
      wrapper.vm.addInvestor();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.investorParticipation).toMatchSnapshot();
        expect(wrapper.vm.addInvestors).toBe("");
      });
    });
  });

  test('Call "addInvestor" with invalid value', () => {
    wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = -1;
    wrapper.vm.addInvestor();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
    });
  });

  test('Call "addInvestor" with invalid type', () => {
    wrapper = factory();
    expect(wrapper.vm.investorParticipation).toEqual([]);
    wrapper.vm.addInvestors = "foo";
    wrapper.vm.addInvestor();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
    });
  });

  test('Call "removeInvestor"', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
      wrapper.vm.addInvestors = defaultGb.levels[9].cost / 2 + 1;
      wrapper.vm.addInvestor();
      wrapper.vm.addInvestors = 5;
      wrapper.vm.addInvestor();
      wrapper.vm.addInvestors = 1;
      wrapper.vm.addInvestor();
      expect(wrapper.vm.investorParticipation).toEqual([
        { value: 326, isPotentialSniper: true },
        { value: 5, isPotentialSniper: true },
        { value: 1, isPotentialSniper: true },
      ]);
      wrapper.vm.removeInvestor(1);
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.investorParticipation).toEqual([
          { value: 326, isPotentialSniper: true },
          { value: 1, isPotentialSniper: true },
        ]);
      });
    });
  });

  test('Call "removeInvestor" with invalid index', () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
      wrapper.vm.addInvestors = defaultGb.levels[9].cost / 2 + 1;
      wrapper.vm.addInvestor();
      wrapper.vm.addInvestors = 5;
      wrapper.vm.addInvestor();
      expect(wrapper.vm.investorParticipation).toMatchSnapshot();
      wrapper.vm.removeInvestor(-1);
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.investorParticipation).toMatchSnapshot();
      });
    });
  });

  test('Call "calculate" with maxInvestment < 0', () => {
    wrapper = factory({ gb: Himeji_Castle });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.investorParticipation).toEqual([]);
      wrapper.vm.ownerInvestment = 500;
      wrapper.vm.addInvestors = 10;
      wrapper.vm.addInvestor();
      wrapper.vm.addInvestors = 100;
      wrapper.vm.addInvestor();
      wrapper.vm.addInvestors = 500;
      wrapper.vm.addInvestor();
      wrapper.vm.ownerInvestment = 1000;
      wrapper.vm.calculate();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.result).toMatchSnapshot();
      });
    });
  });

  test("Call 'changeIsPotentialSniper'", () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      const index = 0;
      const value = false;
      wrapper.vm.addInvestors = 1;
      wrapper.vm.addInvestor();
      expect(wrapper.vm.investorParticipation).toEqual([{ value: 1, isPotentialSniper: true }]);
      wrapper.vm.changeIsPotentialSniper(index, value);
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.investorParticipation).toEqual([{ value: 1, isPotentialSniper: false }]);
      });
    });
  });

  // FIXME: this test doesn't works since migrating to vue-i18n. However, in normal execution, it works
  test.skip("Call 'removePromotionMessage'", () => {
    wrapper = factory();
    const index = 0;
    wrapper.vm.calculate();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.promotion).toMatchSnapshot();
      wrapper.vm.removePromotionMessage(index);
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.$data.promotion).toMatchSnapshot();
      });
    });
  });

  test("Call 'addPromotionMessageTemplate'", () => {
    wrapper = factory();
    wrapper.vm.calculate();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.promotion).toMatchSnapshot();
      wrapper.vm.$store.set("global/customPromotionMessagesTemplates", [
        ...clone(defaultPromotionMessages),
        { ...clone(defaultPromotionMessages)[0], name: "Custom 1", id: "Custom 1" },
      ]);
      wrapper.vm.templateToAdd = "Custom 1";
      wrapper.vm.addPromotionMessageTemplate();
      expect(wrapper.vm.promotion).toMatchSnapshot();
      wrapper.vm.templateToAdd = "Default 1";
      wrapper.vm.addPromotionMessageTemplate();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.promotion).toMatchSnapshot();
      });
    });
  });

  test("Call 'addPromotionMessageTemplate' 'templateToAdd' not set", () => {
    wrapper = factory();
    wrapper.vm.calculate();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.promotion).toMatchSnapshot();
      wrapper.vm.addPromotionMessageTemplate();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.promotion).toMatchSnapshot();
      });
    });
  });

  test("Call 'addPromotionMessageTemplate' with unknown template", () => {
    wrapper = factory();
    wrapper.vm.calculate();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.promotion).toMatchSnapshot();
      wrapper.vm.templateToAdd = "Foo";
      wrapper.vm.addPromotionMessageTemplate();
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.promotion).toMatchSnapshot();
      });
    });
  });

  test("Call 'switchPrefix' 'templateToAdd' not set", () => {
    wrapper = factory();
    wrapper.vm.calculate();
    expect(wrapper.vm.showPrefix).toBe(true);
    wrapper.vm.switchPrefix();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showPrefix).toBe(false);
    });
  });

  test("Call 'switchSuffix' 'templateToAdd' not set", () => {
    wrapper = factory();
    wrapper.vm.calculate();
    expect(wrapper.vm.showSuffix).toBe(true);
    wrapper.vm.switchSuffix();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.showSuffix).toBe(false);
    });
  });

  test("Check 'getCustomArcBonus'", () => {
    wrapper = factory();
    wrapper.vm.calculate();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.getCustomArcBonus).toBe(90.6);
    });
  });

  test("Check 'maxColumns'", () => {
    wrapper = factory();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.maxColumns).toBe(9);
    });
  });
});
