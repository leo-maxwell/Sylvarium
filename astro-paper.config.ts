import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.leo-maxwell.com/",
    title: "Sylvarium",
    description: "A personal blog by Leo Maxwell.",
    author: "Leo Maxwell",
    profile: "https://leo-maxwell.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Australia/Adelaide",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: false,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/leo-maxwell",
    },
  ],
  shareLinks: [],
});
