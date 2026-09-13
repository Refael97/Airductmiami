/**
 * /data/fl-zip-cities.json, generated at build time.
 *
 * The lead form fetches this the moment the popup opens so that a ZIP the
 * visitor types can be turned into a city and county before the form is
 * submitted. It is deliberately a separate file rather than an import: at
 * 41KB it would otherwise be bundled into the JavaScript of every page on
 * the site, to serve the small fraction of visits that open the form. Here
 * it costs nothing until somebody is actually filling something in, and
 * Netlify compresses it to roughly 8KB on the way out.
 *
 * Flat and already expanded, one entry per ZIP, so the browser does a plain
 * property lookup. The ranged form in src/data/flZips.ts is the compact
 * storage; this is the fast form. Keeping the expansion here means there is
 * exactly one implementation of it and the client cannot disagree with the
 * server about what 33019 means.
 */
import type { APIRoute } from 'astro';
import { zipIndex } from '../../data/flZips';

export const GET: APIRoute = () => {
  const flat: Record<string, string> = {};
  for (const [zip, place] of Object.entries(zipIndex())) {
    flat[zip] = `${place.city}|${place.county}`;
  }
  return new Response(JSON.stringify(flat), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
