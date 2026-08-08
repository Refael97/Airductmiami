/**
 * Reverse index from services and locations to articles.
 *
 * Search Console showed the problem: 107 articles across both languages,
 * and zero internal links to any of them from the eleven service pages or
 * the forty city pages, which are the strongest pages on the site. Articles
 * that nothing links to do not rank, however well written they are.
 *
 * The Spanish side matters most here. GSC has Spanish pages sitting at
 * positions 2 to 9 with click through rates between 5 and 50 percent, while
 * the English equivalents sit at 22 to 60 with rates near 1 percent. Feeding
 * the Spanish cluster internal links is the highest return action available
 * on this site.
 *
 * The blog schema carries `category`, not a service reference, so the map
 * below is the bridge. It is deliberately hand written rather than inferred,
 * because a wrong pairing sends a reader from a dryer vent page to a mold
 * article and wastes the click.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type PostEs = CollectionEntry<'blogEs'>;

/** Service slug to the article categories that genuinely serve that page. */
const SERVICE_CATEGORIES: Record<string, string[]> = {
  'air-duct-cleaning': ['Air Duct Cleaning', 'Costs & Buying Guides'],
  'dryer-vent-cleaning': ['Dryer Vent Safety', 'Costs & Buying Guides'],
  'dryer-vent-installation': ['Dryer Vent Safety'],
  'hvac-cleaning': ['HVAC Efficiency', 'Air Duct Cleaning'],
  'air-duct-repair': ['HVAC Efficiency', 'Costs & Buying Guides'],
  'mold-remediation': ['Mold & Humidity', 'Indoor Air Quality'],
  'air-duct-sanitizing': ['Mold & Humidity', 'Indoor Air Quality'],
  'commercial-air-duct-cleaning': ['Air Duct Cleaning', 'Indoor Air Quality'],
  'uv-light-installation': ['Indoor Air Quality', 'Mold & Humidity'],
  'indoor-air-quality-testing': ['Indoor Air Quality', 'Mold & Humidity'],
  'attic-insulation': ['HVAC Efficiency', 'Costs & Buying Guides'],
};

const SERVICE_CATEGORIES_ES: Record<string, string[]> = {
  'air-duct-cleaning': ['Limpieza de Ductos', 'Costos y Guías'],
  'dryer-vent-cleaning': ['Seguridad del Secador', 'Costos y Guías'],
  'dryer-vent-installation': ['Seguridad del Secador'],
  'hvac-cleaning': ['Eficiencia del Aire Acondicionado', 'Limpieza de Ductos'],
  'air-duct-repair': ['Eficiencia del Aire Acondicionado', 'Costos y Guías'],
  'mold-remediation': ['Moho y Humedad', 'Calidad del Aire Interior'],
  'air-duct-sanitizing': ['Moho y Humedad', 'Calidad del Aire Interior'],
  'commercial-air-duct-cleaning': ['Limpieza de Ductos', 'Calidad del Aire Interior'],
  'uv-light-installation': ['Calidad del Aire Interior', 'Moho y Humedad'],
  'indoor-air-quality-testing': ['Calidad del Aire Interior', 'Moho y Humedad'],
  'attic-insulation': ['Eficiencia del Aire Acondicionado', 'Costos y Guías'],
};

const liveEn = async (): Promise<Post[]> =>
  (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

const liveEs = async (): Promise<PostEs[]> =>
  (await getCollection('blogEs')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

export async function guidesForService(slug: string, limit = 6): Promise<Post[]> {
  const cats = SERVICE_CATEGORIES[slug] ?? [];
  if (cats.length === 0) return [];
  const posts = await liveEn();
  return posts.filter((p) => cats.includes(p.data.category)).slice(0, limit);
}

export async function guidesForServiceEs(slug: string, limit = 6): Promise<PostEs[]> {
  const cats = SERVICE_CATEGORIES_ES[slug] ?? [];
  if (cats.length === 0) return [];
  const posts = await liveEs();
  return posts.filter((p) => cats.includes(p.data.category)).slice(0, limit);
}

/**
 * Guides worth surfacing on a city page. City pages serve local buying
 * intent, so the useful set is what a homeowner deciding whether to book
 * actually reads: what it costs, how often, whether the mould is real, and
 * how not to be taken by a bait price.
 *
 * A fixed editorial pick rather than "most recent", so link targets stay
 * stable instead of churning every time an article ships.
 */
const CITY_GUIDE_SLUGS = [
  'air-duct-cleaning-cost-florida',
  'how-often-clean-air-ducts',
  'air-duct-cleaning-scams',
  'black-mold-air-vents',
  'signs-you-need-air-duct-cleaning',
  'dryer-vent-cleaning-cost',
];

const CITY_GUIDE_SLUGS_ES = [
  'costo-limpieza-ductos-florida',
  'cada-cuanto-limpiar-ductos',
  'estafas-limpieza-de-ductos',
  'moho-negro-en-ventilas',
  'senales-necesita-limpieza-ductos',
  'humedad-ideal-interior-florida',
];

/** Falls back to the newest articles when an editorial slug is missing. */
async function pick<T extends { id: string }>(all: T[], wanted: string[], limit: number): Promise<T[]> {
  const key = (e: T) => e.id.replace(/\.md$/, '');
  const bySlug = new Map(all.map((e) => [key(e), e]));
  const chosen = wanted.map((s) => bySlug.get(s)).filter((e): e is T => Boolean(e));
  if (chosen.length >= limit) return chosen.slice(0, limit);
  const seen = new Set(chosen.map(key));
  return [...chosen, ...all.filter((e) => !seen.has(key(e)))].slice(0, limit);
}

export async function guidesForCity(limit = 6): Promise<Post[]> {
  return pick(await liveEn(), CITY_GUIDE_SLUGS, limit);
}

export async function guidesForCityEs(limit = 6): Promise<PostEs[]> {
  return pick(await liveEs(), CITY_GUIDE_SLUGS_ES, limit);
}
