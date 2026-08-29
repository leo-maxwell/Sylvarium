export const routeLocales = ["en", "sc"] as const;

export type RouteLocale = (typeof routeLocales)[number];

export const defaultRouteLocale: RouteLocale = "en";

export const htmlLangByRouteLocale = {
  en: "en",
  sc: "zh-Hans",
} as const satisfies Record<RouteLocale, string>;

export function isRouteLocale(
  locale: string | undefined
): locale is RouteLocale {
  return routeLocales.some(routeLocale => routeLocale === locale);
}
