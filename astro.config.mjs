// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// The production URL. Update this to the real domain before launch.
// Used for canonical URLs, sitemap, and structured data.
const SITE_URL = 'https://floridabreezeairduct.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // English stays at root, Spanish under /es/
    },
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Keep noindex utility pages out of the sitemap (they contradict noindex).
      filter: (page) =>
        !['/thank-you/', '/es/gracias/', '/privacy/', '/es/privacidad/'].some(
          (p) => page.endsWith(p)
        ),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
