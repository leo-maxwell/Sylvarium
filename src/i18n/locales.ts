export const routeLocales = ["en-au", "zh-hans"] as const;

export type RouteLocale = (typeof routeLocales)[number];

export const defaultRouteLocale: RouteLocale = "en-au";

export const htmlLangByRouteLocale = {
  "en-au": "en-AU",
  "zh-hans": "zh-Hans",
} as const satisfies Record<RouteLocale, string>;

export function isRouteLocale(
  locale: string | undefined
): locale is RouteLocale {
  return routeLocales.some(routeLocale => routeLocale === locale);
}

export function requireRouteLocale(
  locale: string | undefined
): RouteLocale {
  if (!isRouteLocale(locale)) {
    throw new Error(`Unsupported route locale: ${locale ?? "undefined"}`);
  }

  return locale;
}
