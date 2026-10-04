# Email agent

Reads mail sent to `info@floridabreezeairduct.com` and `info@garage-door-fixers.com`
(and any other address on those two domains routed to it), drafts a reply with
Grok, asks the owner on Telegram, and sends the approved reply from the same
business address through Resend.

```
customer ─► Cloudflare Email Routing ─► this Worker
                                          ├─► copy to the owner's Gmail   (always, first)
                                          └─► Grok drafts a reply
                                                └─► Telegram  ✅ send / ✏️ edit / 🗑 ignore
                                                      └─► Resend sends it from info@
```

- **Nothing reaches a customer without Send.** Grok only writes drafts.
- **The Gmail copy is made before anything else runs**, so if Grok, Telegram or
  Resend fail, the inbox works exactly as it does today, and Telegram gets a
  warning.
- **Website form leads** (Netlify notifications) are recognised, and the draft
  is addressed to the customer's own email from the form.
- **No reply drafts** for out of office replies, newsletters, `noreply@`
  senders, bounces, or mail from our own domains, so two robots cannot write
  to each other. Grok also marks spam and sales pitches as "ignore"; those
  arrive on Telegram as a one line notice, in case it got one wrong.
- **No database.** The draft and its recipient live in the Telegram message.

Prices and rules the agent is allowed to use are in `src/brands.ts`. They were
copied from the sites' data files; if a published price changes, change it
there too.

## Setup (about 20 minutes, once)

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
