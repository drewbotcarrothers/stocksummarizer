import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const briefs = defineCollection({
  loader: glob({ base: './src/content/briefs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ticker: z.string(),
    company: z.string(),
    market: z.string(),
    sector: z.string(),
    pubDate: z.coerce.date(),
    price: z.string().optional(),
    change: z.string().optional(),
    marketCap: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { briefs };
