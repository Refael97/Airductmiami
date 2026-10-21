import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection, educational articles authored as Markdown
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
      'Dryer Vent Cleaning',
      'Fire Safety',
      'Installation & Code',
      'Costs & Buying Guides',
      'Condos & Buildings',
    ]),
    tags: z.array(z.string()).default([]),
    /** Article-level FAQ → rendered on page and emitted as FAQPage schema. */
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
  }),
});

/**
 * Spanish blog collection, mirrors the English one, loaded from
 * src/content/blog-es. Categories are in Spanish. Content is written in a
 * natural, human voice with no dashes.
 */
const blogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    answer: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'Limpieza de Ventilas',
      'Prevención de Incendios',
      'Instalación y Código',
      'Costos y Guías',
      'Condominios y Edificios',
    ]),
    tags: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, blogEs };
