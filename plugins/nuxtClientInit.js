import { v4 as uuidv4 } from "uuid";

const defaultProfileName = "Default";

function dayNightMode(store, $clone, $moment, $colorMode) {
  const dayNightWatchdogTimeout = 60000;

  const updateDayNightMode = () => {
    if (store.get("global/dayNightMode") !== "auto") {
      dayNightWatchdog.stop();
      store.set("isDarkTheme", store.get("global/dayNightMode") === "night");
      $colorMode.preference = store.get("global/dayNightMode") === "night" ? "dark" : "light";
      return;
    } else {
      dayNightWatchdog.start();
    }
    const current = $moment().format("HH:mm");
    const dayStart = $clone(store.get("global/dayStart"));
    const nightStart = $clone(store.get("global/nightStart"));
    const isDay = current >= dayStart && current < nightStart;

    store.set("isDarkTheme", !isDay);
  };

  const dayNightWatchdog = (() => {
    let timeout;
    return {
      start: () => {
        if (!timeout) {
          timeout = setInterval(updateDayNightMode, dayNightWatchdogTimeout);
        }
      },
      stop: () => {
        clearInterval(timeout);
        timeout = undefined;
      },
    };
  })();

  const systemPreferendScheme = (event) => {
    store.set("isDarkTheme", event.matches);
  };

  store.subscribe((mutation) => {
    if (mutation.type === "global/SET_DAY_NIGHT_MODE") {
      switch (mutation.payload) {
        case "day":
          window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", systemPreferendScheme);
          dayNightWatchdog.stop();
          store.set("isDarkTheme", false);
          $colorMode.preference = "light";
          break;
        case "night":
          window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", systemPreferendScheme);
          dayNightWatchdog.stop();
          store.set("isDarkTheme", true);
          $colorMode.preference = "dark";
          break;
        case "system":
          window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", systemPreferendScheme);
          setTimeout(() => {
            store.set("isDarkTheme", window.matchMedia("(prefers-color-scheme: dark)").matches);
          }, 0);
          $colorMode.preference = "system";
          break;
        case "auto":
          window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", systemPreferendScheme);
          setTimeout(updateDayNightMode, 0);
          break;
      }
    } else if (["global/SET_NIGHT_START", "global/SET_DAY_START"].includes(mutation.type)) {
      updateDayNightMode();
    }
  });

  if (store.get("global/dayNightMode") === "auto") {
    dayNightWatchdog.start();
  } else if (store.get("global/dayNightMode") === "system" && window.matchMedia) {
    try {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", systemPreferendScheme);
      setTimeout(() => {
        store.set("isDarkTheme", window.matchMedia("(prefers-color-scheme: dark)").matches);
        $colorMode.preference = store.get("global/dayNightMode") === "night" ? "dark" : "light";
      }, 0);
    } catch (e) {
      // Feature "prefers-color-scheme" not implemented by the browser
    }
  }
  updateDayNightMode();
}

async function getSurvey(store, $axios) {
  let urlParam = "";

  if (store.get("global/survey").length) {
    urlParam = "?_id_nin=" + store.get("global/survey").join("&_id_nin=");
  }
  try {
    const { data } = await $axios.get(`${process.env.BACKEND_URL}/surveys${urlParam}`);
    if (data && Array.isArray(data)) {
      store.set("survey", data);
    }
  } catch (e) {
    // Probably Network Error
    // Survey is not critical, so this error can be ignored
  }
}

function initStore(store) {
  let currentProfileID;

  if (!store.get("global/profiles").length || !store.get("global/currentProfile")) {
    const ids = store.get("global/profiles").map((k) => k.key);
    do {
      currentProfileID = uuidv4();
    } while (ids.includes(currentProfileID));

    store.set("global/profiles", [{ id: currentProfileID, name: defaultProfileName }]);
    store.set("global/currentProfile", currentProfileID);
    store.commit("profile/addProfile", {
      key: currentProfileID,
      profile: store.get("profile/getDefaultProfile"),
    });
  }
}

function storeProfileSchemaUpdate(store, $clone) {
  for (const key of Object.keys(store.get("profile/profiles"))) {
    const defaultValue = store.get("profile/getDefaultProfile");
    const currentValue = $clone(store.get(`profile/profiles@[${key}]`));
    let changed = false;
    for (const defaultKey of Object.keys(defaultValue)) {
      if (!(defaultKey in currentValue)) {
        currentValue[defaultKey] = defaultValue[defaultKey];
        changed = true;
      }
    }
    if (changed) {
      store.set(`profile/profiles@[${key}]`, currentValue);
    }
  }
}

/**
 * Detect local to show dialog about incomplete translation if necessary
 * @param store Vuex
 * @param {Object} translationState Key: locale code, Value: translation percentage
 * @param {Object} $i18n Reference to the i18n object
 */
function checkLocaleNotCompleted(store, translationState, $i18n) {
  if (store.get("global/haveReadLocaleNotComplete")) {
    return;
  }

  const detectedLocale =
    navigator.language.replace("-", "_") in translationState
      ? navigator.language.replace("-", "_")
      : navigator.language.split("-")[0].toLowerCase() in translationState
      ? navigator.language.split("-")[0].toLowerCase()
      : false;
  const localesNotCompleted = [];
  if (detectedLocale && translationState[detectedLocale] < 80) {
    // case translation doesn't started
    localesNotCompleted.push(detectedLocale);
  }
  if (!localesNotCompleted.includes($i18n.locale) && translationState[$i18n.locale] < 80) {
    localesNotCompleted.push($i18n.locale);
  }
  store.set("localesNotCompleted", localesNotCompleted);
}

function getLocaleCompletion(store, $config, $i18n) {
  setTimeout(() => {
    store.set("translationState", $config.translationState);
    checkLocaleNotCompleted(store, $config.translationState, $i18n);
  }, 0);
}

async function initFoeData(store, $axios, $config) {
  const gbs = store.get("foe/gbs");
  if (!gbs || !Object.keys(gbs).length) {
    const result = await $axios.$get($config.FOE_DATA_API_GBS);
    store.set("foe/gbs", result);
  }
}

export default function ({ store, $clone, $moment, $axios, app, $colorMode, $config }) {
  initStore(store);
  storeProfileSchemaUpdate(store, $clone);
  dayNightMode(store, $clone, $moment, $colorMode);
  getSurvey(store, $axios);
  getLocaleCompletion(store, $config, app.i18n);
  initFoeData(store, $axios, $config);
}
