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
    // Featured image = the post's YouTube thumbnail, web-optimised into public/images/summaries/
    // (tools/blog_featured_image.py). Root-relative .jpg path; a .webp and -640 variants sit beside it.
    image: z.string().startsWith('/images/').optional(),
    imageAlt: z.string().optional(),
    // Company logo (the one the video used), normalised into public/images/logos/<ticker>.png
    // (trimmed, fits 96x96, transparent, dark-on-light). Shown on the homepage "All stock summaries" cards.
    logo: z.string().startsWith('/images/logos/').optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { briefs };
