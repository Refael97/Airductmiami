import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection — 50 educational, AI-optimized articles authored as Markdown
 * in src/content/blog. The `answer` and `faq` fields power answer-first intros
 * and FAQPage structured data that AI engines can cite.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** One-sentence, quotable direct answer shown at the top of the article. */
    answer: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Air Duct Cleaning',
      'Dryer Vent Safety',
      'Indoor Air Quality',
      'Mold & Humidity',
      'HVAC Efficiency',
      'Costs & Buying Guides',
    ]),
    tags: z.array(z.string()).default([]),
    /** Article-level FAQ → rendered on page and emitted as FAQPage schema. */
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
