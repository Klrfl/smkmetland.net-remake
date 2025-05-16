import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const programKeahlianCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/program-keahlian",
  }),
  schema: z.object({
    title: z.string(),
    iconClasses: z.string(),
    image: z
      .object({
        url: z.string().url().optional(),
        alt: z.string().optional(),
      })
      .optional(),
  }),
});

const kurikulumCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  "program-keahlian": programKeahlianCollection,
  kurikulum: kurikulumCollection,
};
