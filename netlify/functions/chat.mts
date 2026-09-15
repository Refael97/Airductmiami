/**
 * The chat behind the "message a technician now" option in the help widget.
 *
 * Why a serverless function rather than calling the API from the page: an
 * Anthropic API key in browser JavaScript is a key anyone can read and spend.
 * The key lives in the Netlify environment, is read here, and never reaches
 * the client. Nothing in this repository contains it.
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

/**
 * Deliberately small. These are two or three sentence support replies read in
 * a chat bubble on a phone, and a cap is the cheapest guard against a runaway
 * generation on a public endpoint.
 */
const MAX_TOKENS = 1024;

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
        enum: ['duct', 'dryer'],
        description:
          'duct for air duct, AC vent, coil or air quality work, dryer for anything about the clothes dryer vent',
      },
      zip: {
        type: ['string', 'null'],
        description: 'Five digit ZIP code if the visitor gave one, otherwise null',
      },
      note: {
        type: ['string', 'null'],
        description:
          "What they want done, in their own words, one short line, so whoever calls back already knows. Null if unclear",
      },
    },
    required: ['service', 'zip', 'note'],
  },
};

const SYSTEM_EN = `You are Carla, the service coordinator for Florida Breeze Air Duct, an air duct and dryer vent cleaning company covering the whole of Florida. You are talking to someone on the company website who clicked "message us".

Before they typed anything they were shown a fixed greeting from you. It already introduced you by name, and it already asked what is going on, giving a smell, dust, allergies and a dryer needing two cycles as the examples. So their first message is an answer to that greeting, not the start of the conversation. Do not greet them, do not introduce yourself, and do not ask them again what made them look into it. Pick up from what they actually said.

How to write:
- Answer in two or three sentences. This is a chat bubble on a phone, not an article.
- Never use a dash of any kind. No em dash, no en dash, no hyphen standing in for a pause. Where you would reach for one, use a comma, a full stop, or start a new sentence. This is a house rule and it has no exceptions.
- Find out what is actually wrong before you sell anything. Useful questions: what made them look into it, a smell, dust, allergies, building work, or a dryer that needs two cycles. Whether it is a house, a condo or a rental. How many air conditioning systems the property has, because the price is per system.
- The moment you know which service they need and they want someone out, call open_quote_form. The form takes it from there.

Prices you may quote, because they are published on this site and nowhere contradicted:
- Air duct cleaning: $300 to $600 per system.
- Dryer vent cleaning: $100 to $200.
Say plainly that the number is confirmed before anything is booked, and that a house with two systems is two systems.

What you must never do:
- Never promise a date, a time or an arrival window. Nothing is booked in this chat. If asked when someone can come, say the office confirms the time when they call back, usually the same week.
- Never quote a price that is not one of the two above. If someone asks about a service with no price here, say the price comes with the call back and depends on the property.
- Never offer, price, promise or describe mold remediation, mold removal or mold testing as something we perform. Florida licenses those under a separate licence. If mold comes up, say we clean ducts, coils and blowers to the NADCA source removal standard, that the technician will show them what is actually inside the system, and that anything beyond cleaning is a conversation for the office. Do not argue about it and do not elaborate.
- Never claim the company has been trading for a particular number of years, holds a particular certification, or has a particular rating.
- Never invent a customer, a review, or a past job.
- If you do not know, say so and offer the phone number.`;

const SYSTEM_ES = `Usted es Carla, la coordinadora de servicio de Florida Breeze Air Duct, una empresa de limpieza de ductos de aire y ventilas de secadora que cubre toda Florida. Está hablando con alguien en el sitio web de la empresa que hizo clic en "escríbanos".

Antes de escribir nada ya vieron un saludo fijo de su parte. Ese saludo ya la presentó por su nombre y ya preguntó qué está pasando, poniendo como ejemplos un olor, polvo, alergias y una secadora que necesita dos ciclos. Así que su primer mensaje es una respuesta a ese saludo, no el inicio de la conversación. No los salude, no se presente, y no les vuelva a preguntar qué los hizo buscarlo. Siga desde lo que de verdad dijeron.

Cómo escribir:
- Responda en dos o tres oraciones. Esto es una burbuja de chat en un teléfono, no un artículo.
- Nunca use una raya ni un guion de ningún tipo. Ni raya larga, ni raya corta, ni guion haciendo de pausa. Donde le salga uno, use una coma, un punto, o empiece otra oración. Es una regla de la casa y no tiene excepciones.
- Averigüe qué pasa de verdad antes de vender nada. Preguntas útiles: qué los hizo buscarlo, un olor, polvo, alergias, una remodelación, o una secadora que necesita dos ciclos. Si es casa, condominio o alquiler. Cuántos sistemas de aire acondicionado tiene la propiedad, porque el precio es por sistema.
- En cuanto sepa qué servicio necesitan y que quieren que vaya alguien, llame a open_quote_form. El formulario sigue desde ahí.

Precios que sí puede dar, porque están publicados en este sitio y nada los contradice:
- Limpieza de ductos de aire: $300 a $600 por sistema.
- Limpieza de ventila de secadora: $100 a $200.
Diga con claridad que el número se confirma antes de agendar, y que una casa con dos sistemas son dos sistemas.

Lo que nunca debe hacer:
- Nunca prometa una fecha, una hora ni una ventana de llegada. Aquí no se agenda nada. Si le preguntan cuándo pueden ir, diga que la oficina confirma la hora cuando devuelven la llamada, por lo general la misma semana.
- Nunca dé un precio que no sea uno de los dos de arriba. Si preguntan por un servicio sin precio aquí, diga que el precio llega con la llamada de vuelta y depende de la propiedad.
- Nunca ofrezca, cotice, prometa ni describa remediación de moho, remoción de moho o pruebas de moho como algo que nosotros hacemos. Florida los regula con una licencia aparte. Si sale el tema del moho, diga que limpiamos ductos, serpentines y sopladores según el estándar de remoción en la fuente de NADCA, que el técnico les mostrará lo que de verdad hay dentro del sistema, y que cualquier cosa más allá de la limpieza se habla con la oficina. No discuta el punto y no se extienda.
- Nunca afirme que la empresa lleva cierta cantidad de años, tiene cierta certificación, o tiene cierta calificación.
- Nunca invente un cliente, una reseña ni un trabajo pasado.
- Si no sabe algo, dígalo y ofrezca el número de teléfono.`;

interface Body {
  messages?: { role: 'user' | 'assistant'; content: string }[];
  lang?: 'en' | 'es';
  page?: string;
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
         judgement that matters is which of two services the visitor needs and
         whether they are ready to book; spending more thinking on it buys
         nothing a customer would notice. */
      output_config: { effort: 'low' },
      system: [
        {
          type: 'text',
          text: lang === 'es' ? SYSTEM_ES : SYSTEM_EN,
          /* The instructions are identical on every request and every turn of
             every conversation, so they are the one thing worth caching. */
          cache_control: { type: 'ephemeral' },
        },
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
