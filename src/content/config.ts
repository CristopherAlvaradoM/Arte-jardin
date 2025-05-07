import { defineCollection, z } from "astro:content";

const servicios = defineCollection({
  schema: z.object({
    titulo: z.string(),
    imagen: z.string(),
  }), 
});


export const collections = { servicios };