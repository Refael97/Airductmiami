/**
 * English article slug to its Spanish counterpart. Drives the language
 * switcher and the hreflang tags on articles, so a Spanish reader landing on
 * an English guide is one click from the same guide in Spanish.
 */
export const blogPairs: Record<string, string> = {
  'dryer-vent-cleaning-cost-florida': 'costo-limpieza-ventila-secadora-florida',
  'how-often-clean-dryer-vent': 'cada-cuanto-limpiar-ventila-secadora',
  'florida-dryer-vent-code': 'codigo-florida-ventila-secadora',
  'foil-vs-rigid-dryer-duct': 'ducto-de-aluminio-flexible-o-rigido',
  'dryer-vent-fire-risk': 'incendios-por-secadora',
  'diy-dryer-vent-cleaning': 'limpiar-ventila-secadora-usted-mismo',
  'bird-nest-in-dryer-vent': 'nido-de-pajaro-en-la-ventila',
  'dryer-takes-two-cycles-to-dry': 'secadora-tarda-mucho-en-secar',
  'signs-of-a-clogged-dryer-vent': 'senales-ventila-secadora-tapada',
  'condo-dryer-vent-responsibility': 'ventila-secadora-en-condominio',
  'dryer-vent-booster-fan': 'extractor-auxiliar-ventila-secadora',
  'roof-vs-wall-dryer-vent': 'ventila-secadora-techo-o-pared',
  'ventless-dryers-florida-condos': 'secadoras-sin-ventila-condominios-florida',
  'dryer-vent-for-tight-spaces': 'ventila-secadora-espacios-reducidos',
  'soffit-dryer-vents': 'ventila-secadora-en-el-alero',
  'dryer-check-vent-warning': 'aviso-revisar-ventila-secadora',
  'dryer-vent-clogged-in-wall': 'ventila-secadora-tapada-en-la-pared',
};

const reverse: Record<string, string> = Object.fromEntries(
  Object.entries(blogPairs).map(([en, es]) => [es, en]),
);

export const esAltFor = (enSlug: string) => (blogPairs[enSlug] ? `/es/blog/${blogPairs[enSlug]}/` : undefined);
export const enAltFor = (esSlug: string) => (reverse[esSlug] ? `/blog/${reverse[esSlug]}/` : undefined);
