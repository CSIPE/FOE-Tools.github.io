/**
 * Default language used on this site
 * @type {string}
 */
export const defaultLocale = "en";

/**
 * This constant is mainly used by nuxt/vue-i18n for supported locales.
 *
 * Use this site to find iso code: https://www.localeplanet.com/icu/iso639.html
 * Or some info here: https://appmakers.dev/bcp-47-language-codes-list/
 * @type {({code: string, file: string, iso: string})[]}
 */
export const locales = [
  { code: "cs", file: "cs.json", iso: "cs-CZ" },
  { code: "da", file: "da.json", iso: "da-DK" },
  { code: "de", file: "de.json", iso: "de-DE" },
  { code: "en", file: "en.json", iso: "en-US" },
  { code: "es", file: "es.json", iso: "es-ES" },
  { code: "fr", file: "fr.json", iso: "fr-FR" },
  { code: "hu", file: "hu.json", iso: "hu-HU" },
  { code: "it", file: "it.json", iso: "it-IT" },
  { code: "nl", file: "nl.json", iso: "nl-NL" },
  { code: "pl", file: "pl.json", iso: "pl-PL" },
  { code: "pt", file: "pt.json", iso: "pt-PT" },
  { code: "pt-BR", file: "pt-BR.json", iso: "pt-BR" },
  { code: "ru", file: "ru.json", iso: "ru-RU" },
  { code: "sk", file: "sk.json", iso: "sk-SK" },
  { code: "sv", file: "sv.json", iso: "sv-SE" },
  { code: "tr", file: "tr.json", iso: "tr-TR" },
];

/**
 * List of all supported languages used on this site.
 * @type {string[]} Return a liste of BCP-47 code (fr, en, pt-BR, etc.)
 */
export const supportedLocales = locales.map((elt) => elt.code);
