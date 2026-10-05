import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { defaultRouteLocale, routeLocales } from "./src/i18n/locales";

export default defineConfig({
  site: "https://blog.leo-maxwell.com/",
  output: "static",
  trailingSlash: "always",

  // i18n governed by files under ./src/i18n/
  i18n: {
    locales: [...routeLocales],
    defaultLocale: defaultRouteLocale,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
