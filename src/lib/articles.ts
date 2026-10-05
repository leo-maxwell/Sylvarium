import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import type { RouteLocale } from "@/i18n/locales";

export async function getPublishedArticles() {
  const now = new Date();

  const articles = await getCollection("articles", ({ data }) => { return !data.draft && data.pubDatetime <= now });

  return articles.sort(
    (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
  );
}

export function getArticleUrl(id: string, locale: RouteLocale) {
  const path = id
    .split("/")
    .map(segment => encodeURIComponent(segment))
    .join("/");

  return getRelativeLocaleUrl(locale, `articles/${path}/`);
}
