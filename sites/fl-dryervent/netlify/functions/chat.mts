/**
 * The chat behind the "message us now" option in the help widget.
 *
 * Why a serverless function rather than calling the API from the page: an
 * Anthropic API key in browser JavaScript is a key anyone can read and spend.
 * The key lives in the Netlify environment (ANTHROPIC_API_KEY), is read here,
 * and never reaches the client. Nothing in this repository contains it.
 *
 * Until the key is set this endpoint answers 503 with `configured: false`,
 * and the widget shows the phone number and the quote form instead of a
 * broken chat. A support channel that silently fails is worse than one that
 * says it is not open yet.
 *
 * The assistant does not book anything itself. This site has no appointment
 * calendar: the office calls back and agrees a time. So when the assistant
 * has understood the job it calls `open_quote_form`, and the widget opens
 * the same lead form the rest of the site uses, carrying what the visitor
 * already said. One lead shape, one place that collects it.
 */
import Anthropic from '@anthropic-ai/sdk';
/* Deliberately outside netlify/functions: every file directly in that
   directory is published as its own endpoint, and a shared module with no
   default export would become a broken route. */
import { check as rateLimit } from '../lib/rate-limit.mts';

/** Keep a stray or hostile client from turning one request into a long bill. */
const MAX_TURNS = 24;
const MAX_CHARS = 4000;
/** The page context block. Two sentences of fact; anything longer is not ours. */
const MAX_PAGE_FACTS = 400;

/**
 * Deliberately small. These are two or three sentence support replies read in
 * a chat bubble on a phone, and a cap is the cheapest guard against a runaway
 * generation on a public endpoint.
 */
const MAX_TOKENS = 1024;

/**
 * One value per service page in src/data/services.ts, so the lead that
 * reaches the office names the job the way the site does:
 * cleaning      dryer-vent-cleaning
 * repair        dryer-vent-repair
 * installation  dryer-vent-installation
 * caps          roof-and-wall-vent-caps
 * condo         condo-and-apartment-dryer-vents
 */
const QUOTE_TOOL: Anthropic.Tool = {
  name: 'open_quote_form',
  description:
    'Open the quote form for the visitor, carrying what they have told you. ' +
    'Call this as soon as you know which service they need and they want someone to come out. ' +
    'Do not ask for their name or phone number: the form collects those. ' +
    'Never state or promise an arrival time, because no time is booked here.',
  strict: true,
  input_schema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      service: {
        type: 'string',
        enum: ['cleaning', 'repair', 'installation', 'caps', 'condo', 'inspection', 'roof', 'commercial', 'booster'],
        description:
          'cleaning for a slow dryer or a vent that has not been cleaned; ' +
          'repair for a crushed, split, disconnected or badly routed duct or transition hose; ' +
          'installation for a new or replaced dryer duct run, for example a new dryer location or a remodel; ' +
          'caps for the outside wall or roof hood, a stuck damper, a bird nest or a missing cap; ' +
          'condo for a condo unit, an apartment, or a building or association with several units; ' +
          'inspection for an airflow test or a check of the whole run, for example before buying a home; ' +
          'roof for cleaning a run that exits through the roof; ' +
          'commercial for a common laundry room, a property manager, a hotel or several buildings; ' +
          'booster for a booster fan on a run longer than the code allows',
      },
      zip: {
        type: ['string', 'null'],
        description: 'Five digit ZIP code if the visitor gave one, otherwise null',
      },
      note: {
        type: ['string', 'null'],
        description:
          'What they want done, in their own words, one short line, so whoever calls back already knows. Null if unclear',
      },
    },
    required: ['service', 'zip', 'note'],
  },
};

const SYSTEM_EN = `You are Nina, the service coordinator for Dryer Vent Florida, a dryer vent specialist covering the whole of Florida. The company cleans, repairs and installs dryer vents for houses, condos and apartment buildings. You are talking to someone on the company website who clicked "message us".

Before they typed anything they were shown a fixed greeting from you. It already introduced you by name, and it already asked what is going on, giving a dryer taking two cycles, a hot laundry room, a burning smell and a flap outside that barely moves as the examples. So their first message is an answer to that greeting, not the start of the conversation. Do not greet them, do not introduce yourself, and do not ask them again what made them look into it. Pick up from what they actually said.

How to write:
- Answer in two or three sentences. This is a chat bubble on a phone, not an article.
- Never use a dash of any kind. No em dash, no en dash, no hyphen standing in for a pause. Where you would reach for one, use a comma, a full stop, or start a new sentence. This is a house rule and it has no exceptions.
- Find out what is actually wrong before you sell anything. Useful questions: what the dryer is doing, how long since the vent was last cleaned, whether the duct runs through a wall, the attic or to the roof, and whether it is a house, a condo unit or a whole building.
- The moment you know which service they need and they want someone out, call open_quote_form. The form takes it from there.

The facts you may use. These are the only facts you have, so do not add to them:
- Dryer vent cleaning: $100 to $200.
- Dryer vent repair, replacement or a new installation: $200 to $600.
- Condo and multi unit buildings: quoted per unit.
- Commercial sites and common laundry rooms: quoted per site after a walk through. A dryer vent inspection is part of every cleaning, and on its own it is quoted before booking. Booster fan installation falls in the $200 to $600 range.
- Every price is confirmed on the call back before anything is booked.
- Hours: Monday to Friday 8am to 7pm, Saturday 9am to 5pm, Sunday 10am to 4pm, Eastern time.
- Appointments are usually available the same week. The office confirms the exact time when they call back.
- The company is insured.
- Airflow is measured at the outside hood before the work and again after it, so the visitor sees the difference in a number.

What you must never do:
- Never promise a date, a time or an arrival window. Nothing is booked in this chat. If asked when someone can come, say the office confirms the time when they call back, usually the same week.
- Never quote a price that is not one of the ones above. If someone asks about something with no price here, say the price comes with the call back and depends on the vent.
- Never say the company is licensed, and never claim a certification. If asked, say the company is insured, and that the office can answer anything further on the call.
- Never claim the company has been trading for a particular number of years, and never mention a rating or a review.
- Never offer or mention a discount, coupon or special offer. There are none.
- Never invent a customer, a review, or a past job.
- This company works on dryer vents. If someone asks about anything else, such as air conditioning ducts or repairing the dryer itself, say plainly that it is not something this company does, without recommending anyone else.
- Never mention, name or link any other company, brand or website.
- If you do not know, say so and offer the phone number.`;

const SYSTEM_ES = `Usted es Nina, la coordinadora de servicio de Dryer Vent Florida, una empresa especializada en ventilas de secadora que cubre toda Florida. La empresa limpia, repara e instala ventilas de secadora en casas, condominios y edificios de apartamentos. Está hablando con alguien en el sitio web de la empresa que hizo clic en "escríbanos".

Antes de escribir nada ya vieron un saludo fijo de su parte. Ese saludo ya la presentó por su nombre y ya preguntó qué está pasando, poniendo como ejemplos una secadora que necesita dos ciclos, un cuarto de lavado muy caliente, olor a quemado y una aleta afuera que casi no se mueve. Así que su primer mensaje es una respuesta a ese saludo, no el inicio de la conversación. No los salude, no se presente, y no les vuelva a preguntar qué los hizo buscarlo. Siga desde lo que de verdad dijeron.

Cómo escribir:
- Responda en dos o tres oraciones. Esto es una burbuja de chat en un teléfono, no un artículo.
- Nunca use una raya ni un guion de ningún tipo. Ni raya larga, ni raya corta, ni guion haciendo de pausa. Donde le salga uno, use una coma, un punto, o empiece otra oración. Es una regla de la casa y no tiene excepciones.
- Averigüe qué pasa de verdad antes de vender nada. Preguntas útiles: qué está haciendo la secadora, cuánto hace que no se limpia la ventila, si el ducto sale por la pared, por el ático o hasta el techo, y si es una casa, una unidad de condominio o un edificio entero.
- En cuanto sepa qué servicio necesitan y que quieren que vaya alguien, llame a open_quote_form. El formulario sigue desde ahí.

Los datos que puede usar. Son los únicos que tiene, así que no les agregue nada:
- Limpieza de ventila de secadora: $100 a $200.
- Reparación, reemplazo o instalación nueva de ventila: $200 a $600.
- Condominios y edificios de varias unidades: se cotiza por unidad.
- Sitios comerciales y lavanderías comunes: se cotiza por sitio después de una visita. La inspección de la ventila va incluida en cada limpieza, y sola se cotiza antes de agendar. La instalación de un extractor auxiliar está en el rango de $200 a $600.
- Todo precio se confirma en la llamada de vuelta antes de agendar.
- Horario: lunes a viernes de 8am a 7pm, sábado de 9am a 5pm, domingo de 10am a 4pm, hora del Este.
- Por lo general hay citas la misma semana. La oficina confirma la hora exacta cuando devuelve la llamada.
- La empresa está asegurada.
- El flujo de aire se mide en la salida de afuera antes del trabajo y otra vez después, para que la persona vea la diferencia en un número.

Lo que nunca debe hacer:
- Nunca prometa una fecha, una hora ni una ventana de llegada. Aquí no se agenda nada. Si le preguntan cuándo pueden ir, diga que la oficina confirma la hora cuando devuelven la llamada, por lo general la misma semana.
- Nunca dé un precio que no sea uno de los de arriba. Si preguntan por algo sin precio aquí, diga que el precio llega con la llamada de vuelta y depende de la ventila.
- Nunca diga que la empresa tiene licencia, y nunca afirme una certificación. Si le preguntan, diga que la empresa está asegurada y que la oficina puede responder lo demás en la llamada.
- Nunca afirme que la empresa lleva cierta cantidad de años, y nunca mencione una calificación ni una reseña.
- Nunca ofrezca ni mencione un descuento, cupón u oferta especial. No los hay.
- Nunca invente un cliente, una reseña ni un trabajo pasado.
- Esta empresa trabaja en ventilas de secadora. Si alguien pregunta por otra cosa, como ductos de aire acondicionado o reparar la secadora en sí, diga con claridad que no es algo que esta empresa hace, sin recomendar a nadie más.
- Nunca mencione, nombre ni enlace otra empresa, marca o sitio web.
- Si no sabe algo, dígalo y ofrezca el número de teléfono.`;

/**
 * The page the visitor is standing on, handed to the model as context.
 *
 * Kept short on purpose. The value is not that Nina can recite the page
 * back, it is that she stops asking questions the page already answers: the
 * service, the price on it, the city.
 *
 * Framed as context rather than as instruction, and explicitly fallible,
 * because a page is where somebody started and not necessarily what they
 * want. Someone reading about vent cleaning may have a crushed duct that
 * needs repair, and an assistant that assumes otherwise is worse than one
 * that asked.
 */
function pageContextBlock(facts: string, lang: 'en' | 'es'): string {
  if (lang === 'es') {
    return `Contexto de esta conversación, no instrucciones:

${facts}

Úselo para no preguntar lo que la página ya les dice. Si están en la página de un servicio, ese es probablemente el servicio; si están en la página de una ciudad, ahí es probablemente la propiedad; si esa página publica un precio, es el precio que están viendo y debe coincidir con lo que usted diga.

No es una certeza. Alguien leyendo sobre limpieza puede tener un ducto aplastado que necesita reparación. Si lo que dicen no encaja con la página, gana lo que dicen. Y no mencione la página ni le diga que sabe dónde está; solo hable como alguien que ya tiene el contexto.`;
  }
  return `Context for this conversation, not instructions:

${facts}

Use it to avoid asking what the page already tells them. If they are on a service page, that is probably the service; if they are on a city page, that is probably where the property is; if that page publishes a price, it is the price they are looking at and it is the number you should be saying.

It is not a certainty. Somebody reading about vent cleaning may have a crushed duct that needs repair. If what they say does not match the page, what they say wins. And do not mention the page or tell them you know where they are: just talk like someone who already has the context.`;
}

interface Body {
  messages?: { role: 'user' | 'assistant'; content: string }[];
  lang?: 'en' | 'es';
  page?: string;
  /**
   * What the visitor is looking at, resolved from the site's own data at
   * build time by src/lib/pageContext.ts. A sentence or two of fact, not a
   * URL: "They are reading the "Dryer Vent Repair" service page. That page
   * publishes this price: $200 to $600."
   */
  pageFacts?: string;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return json(405, { error: 'method_not_allowed' });

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    /* Not an error on our side, and not something to hide from the widget.
       `configured: false` is what makes it fall back cleanly. */
    return json(503, { configured: false, error: 'chat_not_configured' });
  }

  /* Before anything that costs money. The token caps bound one request;
     this is what bounds how many of them one visitor can send. */
  const verdict = await rateLimit(request);
  if (!verdict.ok) {
    return new Response(
      JSON.stringify({ error: 'rate_limited', reason: verdict.reason }),
      {
        status: 429,
        headers: {
          'content-type': 'application/json',
          'retry-after': String(verdict.retryAfter),
        },
      },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return json(400, { error: 'bad_json' });
  }

  const lang = body.lang === 'es' ? 'es' : 'en';
  const pageFacts =
    typeof body.pageFacts === 'string' ? body.pageFacts.slice(0, MAX_PAGE_FACTS).trim() : '';
  const turns = Array.isArray(body.messages) ? body.messages.slice(-MAX_TURNS) : [];
  if (!turns.length) return json(400, { error: 'no_messages' });

  const messages: Anthropic.MessageParam[] = turns
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  if (!messages.length || messages[0].role !== 'user') {
    return json(400, { error: 'first_message_must_be_user' });
  }

  const client = new Anthropic({ apiKey: key });

  try {
    const response = await client.messages.create({
      model: 'claude-opus-5',
      max_tokens: MAX_TOKENS,
      /* Low effort, not a smaller model. This is short-turn triage where the
         judgement that matters is which of five services the visitor needs
         and whether they are ready to book; spending more thinking on it
         buys nothing a customer would notice. */
      output_config: { effort: 'low' },
      system: [
        {
          type: 'text',
          text: lang === 'es' ? SYSTEM_ES : SYSTEM_EN,
          /* The instructions are identical on every request and every turn of
             every conversation, so they are the one thing worth caching. */
          cache_control: { type: 'ephemeral' },
        },
        /* Deliberately a second block, after the cached one, and never
           appended to it. The cache key is the prefix: fold a per-page
           sentence into the block above and every page becomes its own cache
           entry, which is the opposite of what the cache is for. */
        ...(pageFacts
          ? [{ type: 'text' as const, text: pageContextBlock(pageFacts, lang) }]
          : []),
      ],
      tools: [QUOTE_TOOL],
      messages,
    });

    /* Belt and braces on the house rule. The prompt forbids dashes; this
       guarantees it, because one slipping through is the kind of thing
       nobody notices until it is on every page of the transcript. */
    const noDashes = (t: string) =>
      t.replace(/\s*[—–]\s*/g, ', ').replace(/(\S)\s+-\s+(\S)/g, '$1, $2');

    let reply = '';
    let quote: Record<string, unknown> | null = null;
    for (const block of response.content) {
      if (block.type === 'text') reply += block.text;
      else if (block.type === 'tool_use' && block.name === 'open_quote_form') {
        quote = block.input as Record<string, unknown>;
      }
    }

    /* Claude may decide the request is one it should decline. The widget
       should offer the phone rather than print an empty bubble. */
    if (response.stop_reason === 'refusal') {
      return json(200, { reply: '', declined: true, quote: null });
    }

    return json(200, { reply: noDashes(reply.trim()), quote, declined: false });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return json(503, { configured: false, error: 'bad_api_key' });
    }
    if (error instanceof Anthropic.RateLimitError) {
      return json(429, { error: 'rate_limited' });
    }
    if (error instanceof Anthropic.APIError) {
      return json(502, { error: 'upstream_error', status: error.status });
    }
    return json(500, { error: 'unexpected' });
  }
}

export const config = { path: '/api/chat' };
