/**
 * Link parity between the English and Spanish guides.
 *
 * The Spanish mirror was written by several people at once, and each of
 * them dropped cross-article links rather than guess at a slug a peer was
 * still creating. That was the right call while the mirror was landing,
 * but it left the Spanish guides with fewer internal links than their
 * English counterparts, and internal links to articles are the single
 * largest structural gap the 8 August audit found on the sibling site.
 *
 * This reports, per Spanish article, which of its English counterpart's
 * article links have no Spanish equivalent. It reads by enSlug, so it
 * does not care that the two languages use different article slugs.
 *
 * Run with `--list` to print every missing link, otherwise it prints the
 * per-file summary only. Exits non-zero while any are missing.
 */
import { readdirSync, readFileSync } from 'node:fs';

const EN_DIR = 'src/content/blog';
const ES_DIR = 'src/content/blog-es';
const verbose = process.argv.includes('--list');

const frontmatter = (body, key) => {
  const m = body.match(new RegExp(`^${key}:\\s*["']?([a-z0-9-]+)`, 'm'));
  return m ? m[1] : undefined;
};

/** enSlug -> Spanish slug, and the reverse. */
const esBySlugEn = new Map();
for (const file of readdirSync(ES_DIR)) {
  const en = frontmatter(readFileSync(`${ES_DIR}/${file}`, 'utf8'), 'enSlug');
  if (en) esBySlugEn.set(en, file.replace(/\.md$/, ''));
}

let missingTotal = 0;
const rows = [];

for (const file of readdirSync(ES_DIR)) {
  const esSlug = file.replace(/\.md$/, '');
  const esBody = readFileSync(`${ES_DIR}/${file}`, 'utf8');
  const enSlug = frontmatter(esBody, 'enSlug');
  if (!enSlug) continue;

  let enBody;
  try {
    enBody = readFileSync(`${EN_DIR}/${enSlug}.md`, 'utf8');
  } catch {
    continue;
  }

  /** Article links the English makes, minus self-links. */
  const enLinks = new Set(
    [...enBody.matchAll(/\]\(\/blog\/([a-z0-9-]+)\//g)].map((m) => m[1]).filter((s) => s !== enSlug),
  );
  /** Article links the Spanish already makes, expressed as English slugs. */
  const esLinks = new Set(
    [...esBody.matchAll(/\]\(\/es\/blog\/([a-z0-9-]+)\//g)].map((m) => {
      for (const [en, es] of esBySlugEn) if (es === m[1]) return en;
      return m[1];
    }),
  );

  const missing = [...enLinks].filter((s) => !esLinks.has(s) && esBySlugEn.has(s));
  if (missing.length === 0) continue;

  missingTotal += missing.length;
  rows.push({ esSlug, enSlug, missing });
}

rows.sort((a, b) => b.missing.length - a.missing.length);

for (const r of rows) {
  console.log(`${r.esSlug}  (${r.missing.length} missing)`);
  if (verbose) {
    for (const en of r.missing) console.log(`    /es/blog/${esBySlugEn.get(en)}/   <- English links to /blog/${en}/`);
  }
}

console.log(
  `\n${rows.length} Spanish guides are missing ${missingTotal} links their English counterpart makes.`,
);
process.exit(missingTotal === 0 ? 0 : 1);
