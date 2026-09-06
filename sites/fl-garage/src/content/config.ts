import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Articles. Every one is answer-first: `answer` is a short, quotable,
 * self-contained response that renders above the body and that an answer
 * engine can lift whole. `faq` becomes FAQPage structured data.
 *
 * English lives in src/content/blog, Spanish in src/content/blog-es. A
 * Spanish article names the English one it mirrors in `enSlug`, which is
 * what wires the hreflang pair and the language switcher.
 */
const clusters = ['cost', 'symptom', 'maintenance', 'safety', 'trust', 'product', 'hurricane'] as const;

const article = {
  title: z.string(),
  description: z.string(),
  /** The quotable answer, rendered in the answer box at the top. */
  answer: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  cluster: z.enum(clusters),
  tags: z.array(z.string()).default([]),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .default([]),
  /** Service slugs this article should link to. */
  relatedServices: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object(article),
});

const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-es' }),
  schema: z.object({
    ...article,
    /** Slug of the English article this one mirrors. */
    enSlug: z.string(),
  }),
});

export const collections = { blog, blogEs };
