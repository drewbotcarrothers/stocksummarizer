# StockSummarizer

Plain-English stock, sector, and market briefs for DIY investors.

**Site:** [stocksummarizer.com](https://stocksummarizer.com)  
**Stack:** [Astro](https://astro.build) + TypeScript + Tailwind CSS + MDX content collections

## Local development

Requirements: Node.js **22.12+**

```bash
npm install
npm run dev
```

Open the URL printed by the Astro dev server (usually `http://localhost:4321`).

## Build

```bash
npm run build
npm run preview   # optional: serve the production build locally
```

Output is written to `dist/`.

## Content

Stock briefs live in `src/content/briefs/` as Markdown/MDX with frontmatter validated by `src/content.config.ts`.

Routes for briefs are generated at `/summaries/[id]/`.

## Deploy

This is a static Astro site (`astro build` → `dist/`). Point your host’s publish directory at `dist`, and set the production domain to **stocksummarizer.com**.

### Cloudflare Pages

1. Connect this GitHub repo in Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: `22` (set `NODE_VERSION=22` in environment variables if needed)
5. Custom domain: add `stocksummarizer.com` (and `www` if desired) in Pages → Custom domains, then update DNS at your registrar to Cloudflare’s records.

### Netlify

1. New site from Git → this repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Node: set `NODE_VERSION=22` in Netlify env.
5. Domain management → add `stocksummarizer.com` and follow DNS instructions.

### Vercel

1. Import the repo in Vercel.
2. Framework preset: Astro (or Other).
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add domain `stocksummarizer.com` under Project → Domains.

### Pointing stocksummarizer.com

After the first successful deploy on any host:

1. Add the custom domain in the host dashboard.
2. Create the DNS records they provide (often an apex `A`/`ALIAS`/`CNAME` flattening and a `www` CNAME).
3. Wait for TLS provisioning.
4. Confirm `https://stocksummarizer.com` loads and that `/sitemap-index.xml` and `/robots.txt` are reachable.

`astro.config.mjs` sets `site: 'https://stocksummarizer.com'` so canonical URLs and the sitemap use the production domain.

## Project routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/summaries/` | Stock summaries index |
| `/summaries/[id]/` | Individual brief |
| `/sectors/` | Sector Snapshots (placeholder) |
| `/market-wrap/` | Market Wrap (placeholder) |
| `/investing/` | Investing Literacy (placeholder) |
| `/ebooks/` | Ebooks & Guides |
| `/about/` | About |
| `/disclosures/` | Disclosures (advice, affiliates, ads) |

## Monetization notes

- Free briefs are not paywalled.
- Ad slot placeholders (`AdSlot`) and disclosed affiliate CTA areas are ready for inventory.
- Ebook product cards are stubs until products launch.

## License

All rights reserved unless otherwise noted.
