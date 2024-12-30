import { defineCollection, z } from 'astro:content';

const activities = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    schedule: z.string(),
    instructor: z.string(),
    image: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  activities,
  blog,
};