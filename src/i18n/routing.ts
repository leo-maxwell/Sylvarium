import { getRelativeLocaleUrl } from "astro:i18n";
import {
  routeLocales,
  htmlLangByRouteLocale,
  localeLabels,
  type RouteLocale,
} from "./locales"

export function getLanguageLinks(
  pathname: string,
  currentLocale: RouteLocale
) {
  const prefix = getRelativeLocaleUrl(currentLocale, "");

  if (!pathname.startsWith(prefix)) {
    throw new Error(`Unexpected locale path: ${pathname}`)
  }

  const pagePath = pathname.slice(prefix.length);

  return routeLocales.map(locale => ({
    locale,
    label: localeLabels[locale],
    lang: htmlLangByRouteLocale[locale],
    href: getRelativeLocaleUrl(locale, pagePath),
  }));
}
