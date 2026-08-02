// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// TODO: replace with the real domain once it is registered.
const SITE_URL = 'https://garagedoorfixers.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    mdx(),
    sitemap({
      // Conversion and legal pages are noindex, keep them out of the sitemap.
      filter: (page) => !['/thank-you/', '/privacy/'].some((p) => page.endsWith(p)),
    }),
  ],
});
