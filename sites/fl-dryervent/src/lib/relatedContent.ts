/**
 * Which articles to show on which pages. Hand written rather than inferred,
 * because a wrong pairing wastes the click.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type PostEs = CollectionEntry<'blogEs'>;

const SERVICE_CATEGORIES: Record<string, string[]> = {
  'dryer-vent-cleaning': ['Dryer Vent Cleaning', 'Costs & Buying Guides', 'Fire Safety'],
  'dryer-vent-repair': ['Installation & Code', 'Costs & Buying Guides'],
  'dryer-vent-installation': ['Installation & Code', 'Costs & Buying Guides'],
  'roof-and-wall-vent-caps': ['Dryer Vent Cleaning', 'Installation & Code'],
  'condo-and-apartment-dryer-vents': ['Condos & Buildings', 'Dryer Vent Cleaning'],
};

const SERVICE_CATEGORIES_ES: Record<string, string[]> = {
  'dryer-vent-cleaning': ['Limpieza de Ventilas', 'Costos y Guías', 'Prevención de Incendios'],
  'dryer-vent-repair': ['Instalación y Código', 'Costos y Guías'],
  'dryer-vent-installation': ['Instalación y Código', 'Costos y Guías'],
  'roof-and-wall-vent-caps': ['Limpieza de Ventilas', 'Instalación y Código'],
  'condo-and-apartment-dryer-vents': ['Condominios y Edificios', 'Limpieza de Ventilas'],
};

const byDate = <T extends { data: { pubDate: Date } }>(a: T, b: T) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

const liveEn = async (): Promise<Post[]> => (await getCollection('blog')).sort(byDate);
const liveEs = async (): Promise<PostEs[]> => (await getCollection('blogEs')).sort(byDate);

export async function guidesForService(slug: string, limit = 5): Promise<Post[]> {
  const cats = SERVICE_CATEGORIES[slug] ?? [];
  return (await liveEn()).filter((p) => cats.includes(p.data.category)).slice(0, limit);
}

export async function guidesForServiceEs(slug: string, limit = 5): Promise<PostEs[]> {
  const cats = SERVICE_CATEGORIES_ES[slug] ?? [];
  return (await liveEs()).filter((p) => cats.includes(p.data.category)).slice(0, limit);
}

/** What a homeowner deciding whether to book reads: cost, frequency, signs, fire. */
const CITY_GUIDE_SLUGS = [
  'dryer-vent-cleaning-cost-florida',
  'how-often-clean-dryer-vent',
  'signs-of-a-clogged-dryer-vent',
  'dryer-vent-fire-risk',
];
const CITY_GUIDE_SLUGS_ES = [
  'costo-limpieza-ventila-secadora-florida',
  'cada-cuanto-limpiar-ventila-secadora',
  'senales-ventila-secadora-tapada',
  'incendios-por-secadora',
];

async function pick<T extends { id: string }>(all: T[], wanted: string[], limit: number): Promise<T[]> {
  const key = (e: T) => e.id.replace(/\.md$/, '');
  const bySlug = new Map(all.map((e) => [key(e), e]));
  const chosen = wanted.map((s) => bySlug.get(s)).filter((e): e is T => Boolean(e));
  const seen = new Set(chosen.map(key));
  return [...chosen, ...all.filter((e) => !seen.has(key(e)))].slice(0, limit);
}

export async function guidesForCity(limit = 4): Promise<Post[]> {
  return pick(await liveEn(), CITY_GUIDE_SLUGS, limit);
}

export async function guidesForCityEs(limit = 4): Promise<PostEs[]> {
  return pick(await liveEs(), CITY_GUIDE_SLUGS_ES, limit);
}
