import type { UIStrings } from "./types";
import {
  requireRouteLocale,
  type RouteLocale,
} from "./locales";
import enAU from "./lang/en-au";
import zhHans from "./lang/zh-hans";
export { tplStr } from "./format";

const translations = {
  "en-au": enAU,
  "zh-hans": zhHans,
} satisfies Record<RouteLocale, UIStrings>;

export function useTranslations(locale: string | undefined): UIStrings {
  return translations[requireRouteLocale(locale)];
}
