// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Registered at Cloudflare, 2026-08-02. Re-pointed from New York to
// Florida on 2026-09-06; the domain is geo-neutral so it carried over.
const SITE_URL = 'https://garage-door-fixers.com';

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
      // Conversion and legal pages are noindex, keep them out of the sitemap.
      filter: (page) =>
        !['/thank-you/', '/privacy/', '/es/gracias/', '/es/privacidad/'].some((p) =>
          page.endsWith(p),
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
