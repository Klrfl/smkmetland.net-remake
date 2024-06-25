import { defineCollection, z } from "astro:content";

const programKeahlianCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    iconClasses: z.string(),
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
