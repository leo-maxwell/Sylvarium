import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const ARTICLES_PATH = "src/content/articles"

const articles = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${ARTICLES_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string().trim().min(1),
      subtitle: z.string(),
      category: z.string().trim().min(1),
      tags: z.array(z.string()).default(["others"]),
      cover: image().optional(),
      draft: z.boolean().default(false),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      timezone: z.string().optional(),
    }),
});

export const collections = { articles };
