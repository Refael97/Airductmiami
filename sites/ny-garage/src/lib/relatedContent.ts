/**
 * Reverse index from services to articles.
 *
 * Articles declare `relatedServices` in their frontmatter, which gives us
 * article -> service. Nothing gave us service -> article, so ten service
 * pages and forty one city pages, which are the strongest pages on the
 * site, linked to none of the fifty six guides. This closes that.
 *
 * See docs/KEYWORD-RESEARCH.md for why it matters: the guides exist to
 * catch symptom and cost searches, and they cannot rank without internal
 * links from pages that already carry authority.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

const live = async (): Promise<Post[]> =>
  (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

/** Articles that name this service in their frontmatter. */
export async function guidesForService(slug: string, limit = 6): Promise<Post[]> {
  const posts = await live();
  return posts.filter((p) => p.data.relatedServices.includes(slug)).slice(0, limit);
}

/**
 * Guides worth surfacing on a city page. City pages serve local repair
 * intent, so the useful guides are the ones a person with a broken door
 * reads: symptoms first, then what it costs, then how not to be ripped off.
 * Deliberately a fixed editorial pick rather than "most recent", so the
 * link targets stay stable instead of churning every time an article ships.
 */
const CITY_GUIDE_SLUGS = [
  'garage-door-wont-open',
  'garage-door-wont-close',
  'what-to-do-broken-spring',
  'garage-door-repair-cost-new-york',
  'garage-door-off-track',
  'how-to-choose-garage-door-company',
] as const;

export async function guidesForCity(limit = 6): Promise<Post[]> {
  const posts = await live();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  return CITY_GUIDE_SLUGS.map((s) => bySlug.get(s))
    .filter((p): p is Post => Boolean(p))
    .slice(0, limit);
}

/** Same cluster as this article, minus itself. Fills thin related sections. */
export async function guidesInCluster(
  cluster: Post['data']['cluster'],
  excludeSlug: string,
  limit = 4,
): Promise<Post[]> {
  const posts = await live();
  return posts
    .filter((p) => p.data.cluster === cluster && p.slug !== excludeSlug)
    .slice(0, limit);
}
