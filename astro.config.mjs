// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeYoutubeEmbed from './src/lib/rehype-youtube-embed.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://stocksummarizer.com',
  markdown: {
    rehypePlugins: [rehypeYoutubeEmbed],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
