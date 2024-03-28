import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://smkmetland.pages.dev",
  integrations: [sitemap()],
  redirects: {
    "/berita-sekolah/": "berita-sekolah/1",
  },
});
