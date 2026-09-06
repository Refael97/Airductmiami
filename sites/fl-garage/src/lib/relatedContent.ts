/**
 * Reverse index from services to articles, per language.
 *
 * Articles declare `relatedServices` in their frontmatter, which gives us
 * article -> service. These helpers give service -> article and city ->
 * article, so the strongest pages on the site (services and cities) link
 * into the guides, which cannot rank without internal links from pages
 * that already carry authority.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../data/ui';

export type Post = CollectionEntry<'blog'>;
export type PostEs = CollectionEntry<'blogEs'>;
export type AnyPost = Post | PostEs;

export async function livePosts(lang: Locale): Promise<AnyPost[]> {
  const posts: AnyPost[] =
    lang === 'es'
      ? await getCollection('blogEs', ({ data }) => !data.draft)
      : await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Articles that name this service in their frontmatter. */
export async function guidesForService(lang: Locale, slug: string, limit = 6): Promise<AnyPost[]> {
  const posts = await livePosts(lang);
  return posts.filter((p) => p.data.relatedServices.includes(slug)).slice(0, limit);
}

/**
 * Guides worth surfacing on a city page. City pages serve local repair
 * intent, so the useful guides are the ones a person with a broken door
 * reads: symptoms first, then what it costs, then how not to be ripped
 * off, then the Florida question every homeowner has. A fixed editorial
 * pick rather than "most recent", so the link targets stay stable.
 */
const CITY_GUIDE_SLUGS = [
  'garage-door-wont-open',
  'what-to-do-broken-spring',
  'garage-door-repair-cost-florida',
  'garage-door-off-track',
  'hurricane-rated-garage-door-cost',
  'how-to-choose-garage-door-company',
] as const;

export async function guidesForCity(lang: Locale, limit = 6): Promise<AnyPost[]> {
  const posts = await livePosts(lang);
  /* Spanish posts are found through the English slug they mirror. */
  const key = (p: AnyPost) => ('enSlug' in p.data ? (p.data as { enSlug: string }).enSlug : p.id);
  const bySlug = new Map(posts.map((p) => [key(p), p]));
  return CITY_GUIDE_SLUGS.map((s) => bySlug.get(s))
    .filter((p): p is AnyPost => Boolean(p))
    .slice(0, limit);
}

/** Same cluster as this article, minus itself. */
export async function guidesInCluster(
  lang: Locale,
  cluster: string,
  excludeId: string,
  limit = 4,
): Promise<AnyPost[]> {
  const posts = await livePosts(lang);
  return posts.filter((p) => p.data.cluster === cluster && p.id !== excludeId).slice(0, limit);
}

/**
 * The other language's version of an article, for hreflang and the
 * switcher. English -> Spanish looks up by enSlug; Spanish -> English is
 * the enSlug itself, checked to exist.
 */
export async function translationOf(lang: Locale, post: AnyPost): Promise<string | undefined> {
  if (lang === 'en') {
    const es = await getCollection('blogEs', ({ data }) => !data.draft && data.enSlug === post.id);
    return es[0]?.id;
  }
  const enSlug = (post.data as { enSlug: string }).enSlug;
  const en = await getCollection('blog', ({ data, id }) => !data.draft && id === enSlug);
  return en[0]?.id;
}
