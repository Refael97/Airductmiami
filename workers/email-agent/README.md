# Email agent

Receives mail sent to `info@floridabreezeairduct.com` and
`info@garage-door-fixers.com` (and any other address on those two domains
routed to it) and copies it:

1. to the owner's Gmail, always and first;
2. to `COPY_TO`, the Resend receiving inbox the owner's own Grok bot reads.
   The bot answers from the real info@ address through Resend sending, which
   is verified on both main domains.

```
customer ─► info@ (Cloudflare Email Routing) ─► this Worker
                                                  ├─► owner's Gmail
                                                  └─► agent@inbox.floridabreezeairduct.com (Resend receiving)
                                                         └─► owner's Grok bot ─► reply from info@ via Resend
```

Why a subdomain: a domain's mail goes to one place, its MX record. The main
domains keep Cloudflare's MX so Gmail delivery never depends on Resend or
the bot. Only `inbox.floridabreezeairduct.com` gets Resend's MX. Copies for
both businesses go there; the original `To:` header says which business the
customer wrote to.

### Setup for the copy (current mode)

1. **Resend:** Domains → Add domain → `inbox.floridabreezeairduct.com`,
   turn on **Receiving**, Auto configure with Cloudflare (it adds one MX
   record on `inbox`). Nothing on the main domains changes.
2. **Deploy this Worker:** Cloudflare → Workers & Pages → Create → Import a
   repository → `Refael97/Airductmiami`, root directory `workers/email-agent`.
3. **Secret:** Worker → Settings → Variables and Secrets → `FORWARD_TO` = the
   Gmail address info@ forwards to today. `COPY_TO` is already set in
   `wrangler.toml`.
4. **Verify the copy address:** Cloudflare → floridabreezeairduct.com → Email
   → Email Routing → Destination addresses → add
   `agent@inbox.floridabreezeairduct.com`. Cloudflare emails a confirmation
   link to it; open it in Resend (received emails) and click it.
5. **Route the mail:** on each main domain, Email Routing → Routes → edit
   `info@` → **Send to a Worker** → `email-agent`.
6. **Test:** email info@ from a personal address. It should appear in Gmail
   and in Resend's received emails.

**To switch it off:** set the route back to *Send to an email*.

### Rules for the bot that replies

- Reply only to the customer's address (`From:` of the copy), from the
  info@ the customer wrote to (`To:` of the copy), and set `In-Reply-To` and
  `References` to the original `Message-ID` so it threads.
- Never reply to `noreply`, `mailer-daemon`, out of office replies
  (`Auto-Submitted` other than `no`), newsletters (`List-Unsubscribe`), or
  anything from the two business domains. That keeps two robots from writing
  to each other forever.
- Netlify form notifications come from `@netlify.com`: the customer's email
  is in the form fields, not in `From:`.

## Built-in drafting (optional, off by default)

The Worker can also draft replies itself with Grok and ask for approval on
Telegram before sending through Resend. It is off unless `XAI_API_KEY` is
set. Prices and rules it may use are in `src/brands.ts`, copied from the
sites' data files.

### Setup for built-in drafting

1. **Telegram bot.** In Telegram, open @BotFather, send `/newbot`, follow the
   prompts, keep the token.
2. **Deploy.** Cloudflare dashboard → Workers & Pages → Create → Import a
   repository → `Refael97/Airductmiami`, root directory `workers/email-agent`.
   (Or locally: `cd workers/email-agent && npm install && npx wrangler deploy`.)
3. **Secrets.** In the Worker → Settings → Variables and Secrets, add as
   *Secret*:
   - `XAI_API_KEY` from console.x.ai
   - `RESEND_API_KEY` from Resend → API keys, sending access only
   - `TELEGRAM_BOT_TOKEN` from step 1
   - `TELEGRAM_WEBHOOK_SECRET` any long random string you make up
   - `FORWARD_TO` the Gmail address info@ forwards to today
4. **Connect Telegram.** Open
   `https://email-agent.<your-subdomain>.workers.dev/setup?secret=<TELEGRAM_WEBHOOK_SECRET>`
   in a browser. Then send `/start` to your bot: it replies with your chat id.
   Add it as the secret `TELEGRAM_CHAT_ID`.
5. **Route the mail.** For each domain: Cloudflare → the domain → Email →
   Email Routing → Routes → edit `info@` → Action **Send to a Worker** →
   `email-agent`. Do the same for `support@` if you want it covered.
   `FORWARD_TO` must be a verified destination address in Email Routing; if
   info@ forwards to it today, it already is.
6. **Test.** Send an email to info@ from a personal address. Within a minute:
   a copy in Gmail and a draft on Telegram.

**To switch it off:** set the route back to *Send to an email*. The Worker
stops receiving mail immediately.

## Development

```
npm install
npm test           # unit tests for filtering, form parsing, draft format
npm run typecheck
npx wrangler deploy --dry-run --outdir /tmp/ea   # bundle without deploying
```

The model is `GROK_MODEL` in `wrangler.toml`. Change it there if xAI renames it.
