import { defineCollection, z } from "astro:content";

const servicios = defineCollection({
  schema: z.object({
    titulo: z.string(),
    imagen: z.string(),
  }), 
});

const clientes = defineCollection({
  schema: z.object({
    nombre: z.string(),
    alt: z.string(),
    imagen: z.string(),
  }), 
});

export const collections = { servicios, clientes };