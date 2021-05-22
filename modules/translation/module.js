import axios from "axios";

module.exports = async function () {
  let url = `${process.env.TRANSLATION_URL}/statistics/`;
  const obj = {};
  do {
    const localesStatistics = await axios.get(url);
    for (const elt of localesStatistics.data.results) {
      obj[elt.code] = elt.translated_percent;
    }
    url = localesStatistics.data.next;
  } while (url);

  this.nuxt.options.publicRuntimeConfig.translationState = obj;
};
