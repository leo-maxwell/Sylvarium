import type { UIStrings } from "./types";
import {
  requireRouteLocale,
  type RouteLocale,
} from "./locales";
import en from "./lang/en";
import sc from "./lang/sc";
export { tplStr } from "./format";

const translations = {
  en,
  sc,
} satisfies Record<RouteLocale, UIStrings>;

export function useTranslations(locale: string | undefined): UIStrings {
  return translations[requireRouteLocale(locale)];
}

// abandoned temporarily
// const modules = import.meta.glob<{ default: UIStrings }>("./lang/*.ts", {
//   eager: true,
// });

// const translations: Record<string, UIStrings> = {};
// for (const [path, mod] of Object.entries(modules)) {
//   const locale = path.slice("./lang/".length, -".ts".length);
//   translations[locale] = mod.default;
// }

// /** Returns UI strings for the given locale, falling back to English. */
// export function useTranslations(locale: string = "en"): UIStrings {
//   return translations[locale] ?? translations["en"];
// }
