import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://smkmetland.pages.dev",
  integrations: [sitemap(), icon()],
  redirects: {
    "/berita-sekolah/": "berita-sekolah/1",
  },
});

