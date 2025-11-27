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

const proyectos = defineCollection({
  schema: z.object({
    title: z.string(),
    heroImage: z.string(),
    vision: z.object({
      title: z.string(),
      body: z.string(),
    }),
    philosophy: z.object({
      title: z.string(),
      body: z.string(),
    }),
    challenge: z.object({
      title: z.string(),
      intro: z.object({
        title: z.string(),
        body: z.string(),
      }),
      items: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
        })
      ),
      conclusion: z.string(),
    }),
    gallery: z.object({
      title: z.string(),
      images: z.array(z.string()),
    }),
  }),
});

export const collections = { servicios, clientes, proyectos };