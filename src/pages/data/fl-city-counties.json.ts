/**
 * /data/fl-city-counties.json, generated at build time.
 *
 * The companion to fl-zip-cities.json, and the same reasoning: a separate
 * file rather than an import, so it costs nothing until a form is actually
 * being filled in. This one is far smaller, roughly 12KB before compression,
 * because it is one entry per city name rather than one per ZIP.
 *
 * Keys are already normalised the way lookupCity normalises them, so the
 * browser lowercases and strips the input and does a plain property lookup.
 * The dominance rule and the omission of ambiguous names both happen here,
 * on the server, which means the client cannot disagree with the server
 * about which county "kissimmee" is in.
 */
import type { APIRoute } from 'astro';
import { cityCountyIndex } from '../../data/flZips';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(cityCountyIndex()), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
