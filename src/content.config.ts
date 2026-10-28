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

/** Living sector deep-dives at /sectors/<slug>/ (Andrew format lock 2026-10-27). */
const sectors = defineCollection({
  loader: glob({ base: './src/content/sectors', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sector: z.string(),
    thesis: z.string(),
    updatedDate: z.coerce.date(),
    screenerDate: z.coerce.date(),
    // Featured image under public/images/sectors/<slug>.jpg, with .webp and -640
    // siblings (same 1280×720 / 640×360 contract as summary thumbnails).
    image: z.string().startsWith('/images/').optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('Andrew'),
  }),
});

/** Daily Canadian/TSX session notes at /market-wrap/<id>/. */
const marketWrap = defineCollection({
  loader: glob({ base: './src/content/market-wrap', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    sessionLabel: z.string(),
    tsxClose: z.string(),
    tsxChange: z.string(),
    // Required on every published wrap (Andrew, 2026-10-28). Root-relative JPEG
    // under public/images/market-wrap/, with .webp and -640 siblings (same
    // 1280×720 / 640×360 contract as summary and sector thumbnails).
    image: z.string().startsWith('/images/'),
    imageAlt: z.string().min(1),
    imageCredit: z.string().min(1),
    draft: z.boolean().default(false),
    author: z.string().default('Andrew'),
  }),
});

/**
 * Investing Literacy evergreen posts at /investing/<category>/<slug>/
 * (Andrew evergreen plan 2026-10-28). Nested under src/content/investing/<category>/.
 */
const investing = defineCollection({
  loader: glob({ base: './src/content/investing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'analyze',
      'valuation',
      'dividends',
      'indexes-etfs',
      'sectors',
      'process',
      'accounts',
      'brokers-tools',
      'glossary',
      'primers',
      'pathways',
      'frameworks',
    ]),
    role: z.enum(['Hub', 'Spoke']).default('Spoke'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().startsWith('/images/').optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    draft: z.boolean().default(false),
    author: z.string().default('Andrew'),
    /** Soft monetization hint for editorial (not rendered as UI chrome). */
    monetization: z.enum(['affiliate', 'ebook', 'ads', 'mixed']).optional(),
  }),
});

export const collections = { briefs, sectors, marketWrap, investing };
