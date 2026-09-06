/**
 * Localised views of the data files.
 *
 * English data is canonical. Spanish lives in `.es.ts` mirrors keyed by
 * the same slug; these helpers merge the two so a template asks for
 * `svc(lang, service)` and gets the right language without knowing where
 * it came from. A slug with no Spanish entry yet falls back to English,
 * so a half-written mirror renders rather than breaks the build.
 */
import type { Locale } from '../data/ui';
import type {
  Service,
  City,
  Region,
  DoorMaterial,
  OpenerType,
  Brand,
  PageCopy,
} from '../data/types';
import { serviceEs } from '../data/services.es';
import { cityEs } from '../data/cities.es';
import { regionEs } from '../data/regions.es';
import { materialEs, openerEs, brandEs } from '../data/products.es';
import { copyEn } from '../data/copy.en';
import { copyEs } from '../data/copy.es';

export function svc(lang: Locale, s: Service): Service {
  const es = lang === 'es' ? serviceEs[s.slug] : undefined;
  return es ? { ...s, ...es } : s;
}

export function city(lang: Locale, c: City): City {
  const es = lang === 'es' ? cityEs[c.slug] : undefined;
  return es ? { ...c, ...es, name: es.name ?? c.name } : c;
}

export function region(lang: Locale, r: Region): Region {
  const es = lang === 'es' ? regionEs[r.slug] : undefined;
  return es ? { ...r, ...es } : r;
}

export function material(lang: Locale, m: DoorMaterial): DoorMaterial {
  const es = lang === 'es' ? materialEs[m.slug] : undefined;
  return es ? { ...m, ...es } : m;
}

export function opener(lang: Locale, o: OpenerType): OpenerType {
  const es = lang === 'es' ? openerEs[o.slug] : undefined;
  return es ? { ...o, ...es, noise: es.noise ?? o.noise } : o;
}

export function brand(lang: Locale, b: Brand): Brand {
  const es = lang === 'es' ? brandEs[b.slug] : undefined;
  return es ? { ...b, ...es } : b;
}

/** Core page copy. Spanish sections fall back to English one by one. */
export function copy(lang: Locale): PageCopy {
  if (lang === 'en') return copyEn;
  return { ...copyEn, ...copyEs } as PageCopy;
}
