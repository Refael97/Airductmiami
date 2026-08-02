import { defineCollection, z } from 'astro:content';

/**
 * Articles. Every one is answer-first: `answer` is a short, quotable,
 * self-contained response that renders above the body and that an answer
 * engine can lift whole. `faq` becomes FAQPage structured data.
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** The quotable answer, rendered in the answer box at the top. */
    answer: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** cost | symptom | maintenance | safety | trust | product */
    cluster: z.enum(['cost', 'symptom', 'maintenance', 'safety', 'trust', 'product']),
    tags: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    /** Service slugs this article should link to. */
    relatedServices: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
