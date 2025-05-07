import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const serviciosCards = defineCollection({
  schema: z.object({
    imagen: z.string(),
    alt: z.string(),
    titulo: z.string(),
  }),
})

export const collections = {
serviciosCards
};