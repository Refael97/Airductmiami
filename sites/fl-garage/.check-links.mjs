/**
 * Internal link check over the built site.
 *
 * Three things go wrong on a site this size and none of them shows up in
 * a build that succeeds:
 *
 *   1. A link to a page that does not exist. On this site the usual cause
 *      is a Spanish article linking to a Spanish slug that was never
 *      written, because article slugs are the one thing that differs
 *      between the two languages.
 *   2. A link without its trailing slash, which costs a 301 hop and gives
 *      Google a second URL form to consider. That cost site one thirty
 *      duplicate URL pairs in Search Console.
 *   3. A page whose hreflang points at a URL that is not on disk.
 *
 * Run after `npm run build`. Exits non-zero when anything is broken, so
 * it can gate a commit.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const DIST = resolve('dist');

/** Every built HTML file, as site-absolute paths. */
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

/** A URL path exists when dist has the matching index.html or the file. */
function exists(path) {
  const clean = path.split('#')[0].split('?')[0];
  if (clean.endsWith('/')) return existsSync(join(DIST, clean, 'index.html'));
  return existsSync(join(DIST, clean));
}

const files = walk(DIST);
const broken = new Map();
const slashless = new Map();
const badHreflang = new Map();

const record = (map, key, where) => {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(where);
};

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const from = file.replace(DIST, '') || '/';

  for (const m of html.matchAll(/href="(\/[^"#]*?)"/g)) {
    const href = m[1];
    // Skip assets, which are fingerprinted files rather than pages.
    if (/\.(css|js|png|jpe?g|webp|svg|xml|txt|json|ico|woff2?)$/.test(href)) continue;
    if (!href.endsWith('/')) record(slashless, href, from);
    if (!exists(href)) record(broken, href, from);
  }

  for (const m of html.matchAll(/<link rel="alternate" hreflang="[^"]*" href="https?:\/\/[^/]*(\/[^"]*)"/g)) {
    if (!exists(m[1])) record(badHreflang, m[1], from);
  }
}

const report = (label, map) => {
  if (map.size === 0) return 0;
  console.log(`\n${label}: ${map.size}`);
  for (const [target, sources] of [...map].sort()) {
    const list = [...sources];
    const shown = list.slice(0, 3).join(', ');
    console.log(`  ${target}`);
    console.log(`    from ${shown}${list.length > 3 ? ` and ${list.length - 3} more` : ''}`);
  }
  return map.size;
};

console.log(`Checked ${files.length} pages.`);
const total =
  report('Links to pages that do not exist', broken) +
  report('Links missing the trailing slash', slashless) +
  report('hreflang pointing at a missing page', badHreflang);

if (total === 0) console.log('No broken links, no slashless links, hreflang all resolves.');
process.exit(total === 0 ? 0 : 1);
