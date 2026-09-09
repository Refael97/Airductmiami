/**
 * The chat behind the "message a technician now" option in the help widget.
 *
 * Why a serverless function rather than calling the API from the page: an
 * Anthropic API key in browser JavaScript is a key anyone can read and spend.
 * The key lives in the Netlify environment, is read here, and never reaches
 * the client. Nothing in this repository contains it.
 *
 * Until the key is set this endpoint answers 503 with `configured: false`,
 * and the widget shows the phone number and the booking button instead of a
 * broken chat. A support channel that silently fails is worse than one that
 * says it is not open yet.
 *
 * The assistant does not book anything itself. When it has understood the
 * job it calls `open_booking`, and the widget opens the same four step
 * booking form the rest of the site uses, prefilled with what the visitor
 * already said. One booking implementation, one appointment grid, one lead
 * shape. An assistant inventing its own appointment would be a second source
 * of truth about when a technician arrives, which is exactly the thing that
 * turns a booking into a broken promise.
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

const BOOKING_TOOL: Anthropic.Tool = {
  name: 'open_booking',
  description:
    'Open the booking form for the visitor, prefilled with what they have told you. ' +
    'Call this as soon as you know what kind of job it is and they want a technician. ' +
    'Do not ask for their name, phone number or a time: the form collects those and ' +
    'shows the real appointment windows. Never state an appointment time yourself.',
  strict: true,
  input_schema: {
    type: 'object',
    additionalProperties: false,
    properties: {
      job_type: {
        type: 'string',
        enum: ['repair', 'new_door', 'opener'],
        description: 'repair for anything broken, new_door for a replacement, opener for the motor',
      },
      zip: {
        type: ['string', 'null'],
        description: 'Five digit ZIP code if the visitor gave one, otherwise null',
      },
      symptom: {
        type: ['string', 'null'],
        description: "The fault in the visitor's own words, one short line, or null",
      },
    },
    required: ['job_type', 'zip', 'symptom'],
  },
};

const SYSTEM_EN = `You are Sofia, the service coordinator for Garage Door Fixers, a garage door repair and installation company covering Florida. You are talking to someone on the company website who clicked "message a technician". Introduce yourself by name once, in your first reply, and not again.

How to write:
- Answer in two or three sentences. This is a chat bubble on a phone, not an article.
- Never use a dash of any kind. No em dash, no en dash, no hyphen standing in for a pause. Where you would reach for one, use a comma, a full stop, or start a new sentence. This is a house rule and it has no exceptions.
- Diagnose before you sell. Ask what the door is doing, what it sounded like, whether it moves at all.
- If someone describes a snapped torsion spring, a cable off the drum, or a door hanging crooked, tell them plainly not to operate it and not to try to fix it themselves. Those carry enough stored energy to injure someone badly.
- The moment you know the job type and they want someone to come out, call open_booking. The form takes it from there.

What you must never do:
- Never state or promise an appointment time, arrival window, or date. Only the booking form knows what is actually available. If asked when someone can come, say the booking form shows the real windows and open it.
- Never quote a price you were not given below. Say the price range comes with the callback and depends on what the technician finds.
- Never claim the company has been trading for a particular number of years, hold a particular certification, or has a particular rating.
- Never invent a customer, a review, or a past job.
- If you do not know, say so and offer the phone number.`;

const SYSTEM_ES = `Usted es Sofía, la coordinadora de servicio de Garage Door Fixers, una empresa de reparación e instalación de puertas de garaje que cubre Florida. Está hablando con alguien en el sitio web de la empresa que hizo clic en "escribirle a un técnico". Preséntese por su nombre una sola vez, en su primera respuesta, y no vuelva a hacerlo.

Cómo escribir:
- Responda en dos o tres oraciones. Esto es una burbuja de chat en un teléfono, no un artículo.
- Nunca use una raya ni un guion de ningún tipo. Ni raya larga, ni raya corta, ni guion haciendo de pausa. Donde le salga uno, use una coma, un punto, o empiece otra oración. Es una regla de la casa y no tiene excepciones.
- Diagnostique antes de vender. Pregunte qué hace la puerta, qué sonido hizo, si se mueve o no.
- Si alguien describe un resorte de torsión roto, un cable salido del tambor, o una puerta colgando torcida, dígale claramente que no la opere y que no intente arreglarla. Esas piezas guardan suficiente energía para lesionar gravemente a una persona.
- En cuanto sepa el tipo de trabajo y que quieren que vaya alguien, llame a open_booking. El formulario sigue desde ahí.

Lo que nunca debe hacer:
- Nunca indique ni prometa una hora, una ventana de llegada ni una fecha. Solo el formulario de reserva sabe qué hay disponible de verdad. Si le preguntan cuándo pueden ir, diga que el formulario muestra las ventanas reales y ábralo.
- Nunca dé un precio que no se le haya dado. Diga que el rango de precio llega con la llamada de vuelta y depende de lo que encuentre el técnico.
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
         judgement that matters is which of three things the visitor needs;
         spending more thinking on it buys nothing a customer would notice. */
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
      tools: [BOOKING_TOOL],
      messages,
    });

    /* Belt and braces on the house rule. The prompt forbids dashes; this
       guarantees it, because one slipping through is the kind of thing
       nobody notices until it is on every page of the transcript. */
    const noDashes = (t: string) =>
      t.replace(/\s*[\u2014\u2013]\s*/g, ', ').replace(/(\S)\s+-\s+(\S)/g, '$1, $2');

    let reply = '';
    let booking: Record<string, unknown> | null = null;
    for (const block of response.content) {
      if (block.type === 'text') reply += block.text;
      else if (block.type === 'tool_use' && block.name === 'open_booking') {
        booking = block.input as Record<string, unknown>;
      }
    }

    /* Claude may decide the request is one it should decline. The widget
       should offer the phone rather than print an empty bubble. */
    if (response.stop_reason === 'refusal') {
      return json(200, { reply: '', declined: true, booking: null });
    }

    return json(200, { reply: noDashes(reply.trim()), booking, declined: false });
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
