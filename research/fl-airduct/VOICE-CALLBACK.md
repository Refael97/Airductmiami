# Instant AI callback on every lead: is it buildable, is it legal, what does it cost

Research pass, 15 September 2026. The request: leads are being lost because
nobody calls them fast enough, so connect the lead pipeline to an AI phone
system, including buying a line and standing it up.

Everything below is either measured, cited, or flagged as an assumption.
Where something is a judgement call it says so.

---

## The five findings that decide it

**1. The problem is real and it is the largest single lever available.** The
MIT / InsideSales lead response study (Oldroyd, 2007, 15,000 leads and
100,000 call attempts) found leads contacted inside five minutes are 21
times more likely to qualify than at 30 minutes, with contact odds roughly
100x better. Only about 0.1% of inbound leads are actually engaged inside
five minutes. This is the one place where being small is an advantage,
because the advantage is speed and not budget.

**2. It is legal, but only because the lead asks us to call.** The FCC ruled
on 8 February 2024 that an AI generated voice is an "artificial voice" under
the TCPA, so an AI callback needs prior express consent exactly as a
recorded message would. A visitor who types their number into our form
asking for a quote gives that consent for that enquiry. Florida's own
mini-TCPA was amended by HB 761 in 2023 to limit liability to **unsolicited**
calls, and a form submission is not unsolicited. **The form is the entire
legal basis, so the form's consent wording is the highest risk item in this
project and it is currently not written for this.**

**3. Florida recording law is the sharpest edge and it is criminal, not
civil.** Fla. Stat. § 934.03 is all-party consent. Recording a call without
every party's consent is a third degree felony, up to five years and a
$5,000 fine, plus civil damages. Every AI platform records by default. The
existing agent brief already has the disclosure written; it must never be
removed, and the agent must actually hang up if the caller objects.

**4. The thing most likely to make this fail quietly is not the AI, it is
the phone number.** A brand new number that starts dialling gets scored by
Verizon Call Filter, T-Mobile Scam Shield and AT&T Call Protect on call
velocity and pattern, and lands as "Spam Likely". Passing STIR/SHAKEN with
A attestation does not prevent it: attestation proves the number is ours and
says nothing about how we dial it. A callback nobody answers is worth
nothing, so number reputation is a first class part of the build, not an
afterthought.

**5. There is no reason to buy a new platform.** Telnyx is already connected
to this account, sells numbers from $1 a month, and runs voice AI agents at
a flat $0.05 a minute all in. The agent brief for Maya is already written
and already emits the network lead contract. The missing pieces are a number,
a webhook, and the consent line on the form.

---

## 1. The legal position, in order of how much it can hurt

### 1.1 Federal: TCPA and the AI voice ruling

On 8 February 2024 the FCC adopted a Declaratory Ruling that an AI generated
voice on a call is "an artificial or prerecorded voice" under the TCPA. AI
does not escape the statute.

The consequence: an outbound AI call needs **prior express consent** from the
called party. For a call to a mobile number this is § 227(b)(1)(A)(iii), and
almost every lead we get is a mobile number.

Someone who fills in a quote form with their phone number, on a page whose
whole purpose is getting a call back, has given prior express consent for a
call about that enquiry. That is the standard reading and it is why this is
workable at all.

**Two things narrow it.**

The consent covers *that enquiry*. It is not a licence to call them about
something else later, and it is not a marketing list.

And consent has to be demonstrable. If it is ever disputed, what we can show
is the form submission: what it said, what they typed, and when. That makes
the form wording and the submission record part of the legal file.

### 1.2 The February 2026 Fifth Circuit ruling does not help us

On 26 February 2026 the Fifth Circuit held in *Bradford v. Sovereign Pest
Control of TX* that the TCPA requires only prior express consent, oral or
written, and rejected the FCC's prior express written consent rule for
telemarketing robocalls.

**That is Texas, Louisiana and Mississippi.** Florida is in the Eleventh
Circuit, where federal courts still apply the FCC's written consent rule.
Do not let anyone selling a platform cite this case as cover for Florida. It
is worth knowing only because it signals the direction of travel.

### 1.3 Florida: the FTSA

Fla. Stat. § 501.059, the Florida Telephone Solicitation Act, is the most
litigated state telemarketing statute in the country and Florida is where
every one of our leads is.

What matters here:

- **HB 761 (signed 25 May 2023) limited liability to "unsolicited" calls.**
  A business may call someone it has an established relationship with or who
  expressly requested contact. Our leads request contact. This is the single
  most useful fact in this document.
- **Calls must stop at 8pm.** Not 9pm. This is stricter than the federal
  rule and it is the one an automated system will break first, because a form
  submitted at 8:15pm will trigger a callback unless something stops it.
- **No more than three commercial solicitation calls in 24 hours** on the
  same subject to the same person. Our retry ladder must respect this.

### 1.4 Florida: recording, and why this one is different

Fla. Stat. § 934.03 makes Florida an all-party consent state. Recording a
private conversation without everyone's consent is a **third degree felony**,
up to five years and $5,000, with civil damages on top.

Every AI voice platform records and transcribes by default, because that is
how the transcript and the summary are produced.

So the disclosure at the top of the call is not a courtesy. The existing
brief already says it, and it also says that if the caller objects the agent
ends the call and a human calls back instead. **That behaviour must be tested
before launch, not assumed.**

### 1.5 AI disclosure: no federal rule yet, three states that matter

The FCC's NPRM on AI generated calls (FCC 24-84, adopted 7 August 2024,
CG Docket 23-362) would require disclosing AI at the start of every call and
at the point of collecting consent. **Comments closed in October 2024 and no
final rule has been adopted.** Expectations are Q4 2026 at the earliest, and
the current Commission has signalled a lighter posture.

So there is no federal AI disclosure mandate today. There is state law:

| State | What it requires |
|---|---|
| **Maine** | Chatbot Disclosure Act (LD 1727, signed 12 June 2025, effective 24 Sept 2025), 10 M.R.S. § 1500-Y. Must tell a consumer they are not talking to a human where a reasonable person could not tell |
| **Utah** | Must disclose on request that it is generative AI. Proactive disclosure for regulated occupations. Fines to $2,500 per violation |
| **California** | AB 2905 requires stating that a prerecorded message uses an AI generated voice. Penalties to $500 per violation |
| **Colorado** | The general AI interaction disclosure was repealed by SB 26-189 in May 2026 and replaced with automated decision rules effective 1 Jan 2027 |

Florida has no AI disclosure statute of its own today.

**The recommendation is to disclose anyway, in the first sentence, on every
call.** Three reasons. It is already in the brief. The federal rule is
coming and rebuilding later costs more than doing it now. And it works:
people are measurably more patient with a bot that said it was a bot than
with one they catch out.

### 1.6 What this means in practice

The system is lawful if, and only if:

1. The form captures explicit consent to an automated call, naming it.
2. The agent discloses AI and recording in its first sentence.
3. It stops calling at 8pm Eastern and does not start before 8am.
4. It never exceeds three calls in 24 hours on one enquiry.
5. It honours a removal request immediately and permanently.
6. The consent record is kept with the lead.

Points 2 through 5 are already in the Maya brief. Point 1 does not exist yet
and point 6 has never been designed.

---

## 2. The platforms

Measured against what this business actually needs: outbound, triggered by a
webhook, English and Spanish, low latency, and a structured summary at the
end.

| Platform | Per minute | Latency | Notes |
|---|---|---|---|
| **Telnyx Voice AI** | **$0.05 all in** (STT, TTS, orchestration), LLM tokens billed separately | not published | Already connected to this account. Numbers from $1/month. Pure pay as you go, no seats |
| Vapi | from $0.05 plus platform fee | ~500 to 700ms tuned | Cheapest sticker, most assembly. At 10,000 min/month the all in lands near the most expensive |
| Retell AI | $0.07, no platform fee | ~600 to 620ms managed | SOC 2 and HIPAA on standard plans. Best managed inbound |
| Bland AI | $0.07 to $0.09 outbound | ~700 to 900ms | Strongest at high volume outbound with deterministic flows |
| ElevenLabs Agents | ~$0.08 to $0.10 beyond the included block | not published | Best voice quality. Already have an account. Telephony is separate on top |

Telephony underneath, where the platform does not include it: Twilio is
about $0.014/min outbound and $0.0085/min inbound. Telnyx includes it.

**Recommendation: Telnyx.** Not because it is the best voice on the list,
ElevenLabs probably is, but because it is one vendor for the number, the
carrier and the agent, at a flat and predictable rate, on an account that
already exists. One bill, one support channel, one place where the number
reputation lives. At this volume the difference between $0.05 and $0.09 a
minute is a rounding error next to a lost job.

If the voice quality turns out to be the thing that loses calls, ElevenLabs
can be swapped in behind the same number later. That is a reason to keep the
agent brief in this repo rather than only in a vendor's dashboard.

---

## 3. The number, and the part that quietly kills this

A new number that starts making outbound calls looks exactly like a
telemarketing operation to the carrier analytics, because mechanically it is
one. Carrier AI scores on call velocity, area code match, attestation level,
CNAM data and complaints. Once labelled, answer rates collapse and the whole
project returns nothing while appearing to work.

What actually helps, in order:

1. **Buy a local Florida number, not a toll free one.** Area code match is a
   scoring input and a 561 or 954 number reads as a neighbour. Toll free
   reads as a call centre.
2. **Use a different number from the one printed on the site.** The site
   number is the one customers call in on and its reputation should not be
   risked by outbound dialling. It also lets us measure the two separately.
3. **Register CNAM** so the name shows rather than a bare number.
4. **Warm it up.** Do not switch it on and let it dial 40 leads on day one.
   Low volume for the first weeks is how a number builds reputation.
5. **Watch the label.** Free lookup tools exist for all three major carriers.
   If it gets flagged, remediation is a per carrier form, not a code change.
6. **Keep call duration up and abandonment at zero.** Short calls and
   hangups are what the models score hardest. An AI that actually talks to
   people is, usefully, good for reputation.

**Honest caveat: I cannot promise the label will stay clean.** It depends on
how recipients react, and a run of people hanging up on a robot will hurt it.
This is the main operational risk of the whole idea and it is worth watching
weekly for the first two months.

---

## 4. What it costs

Assume 40 leads a month, which is above what the site currently produces, and
a four minute average call.

| Item | Monthly |
|---|---|
| Local Florida number | $1 |
| Telnyx voice AI, 40 calls x 4 min x $0.05 | $8 |
| LLM tokens for those calls | roughly $2 to $6 |
| Retries on no answer, say 1.5 attempts per lead | add about 50% of the above |
| **Total** | **roughly $17 to $25** |

Call it $25 a month, or under a dollar a lead. Against a duct cleaning job at
$300 to $600, one recovered job pays for two years of it.

The cost is not the question. The question is whether the calls get answered
and whether the leads are handled well when they are.

---

## 5. What I would build

Nothing here needs a new platform in the repo. The pipeline already exists.

```
lead form  →  Netlify Forms  →  webhook  →  our function
                                              │
                                              ├─ inside calling hours?
                                              │    no  → queue for 8am
                                              ├─ consent recorded?
                                              │    no  → email only, no call
                                              ├─ do not call list?
                                              │    yes → email only
                                              │
                                              └─ trigger Telnyx agent call
                                                        │
                                                        └─ summary webhook
                                                              → CRM row
                                                              → owner email
                                                              → outcome logged
```

The pieces:

1. **A consent line on both forms**, in both languages, and a hidden field
   recording that it was shown. This is the legal foundation and it is the
   first thing to build.
2. **A Netlify function** that receives the submission, applies the four
   gates above, and calls the Telnyx API. Roughly the same shape as the chat
   function that already exists.
3. **A quiet hours queue.** A lead at 8:15pm is emailed immediately and
   called at 8am. This is the rule an automated system breaks first.
4. **A do not call store.** Netlify Blobs, the same store the chat rate
   limiter already uses.
5. **The Maya brief, updated.** It currently says the agent must never quote
   a price. That was true when it was written and **it is now wrong**: the
   site publishes $300 to $600 per system and $100 to $200 for a dryer vent,
   and the web chat quotes them. An agent that refuses to say a number the
   website prints in three places looks evasive. This has to be reconciled
   before the agent goes live.
6. **Outcome written back**, so we can see answered, booked, no answer and
   not interested per lead rather than guessing.

---

## 6. What I need from you before building

| # | Question | Why it blocks |
|---|---|---|
| 1 | Do you want the AI to be the first contact, or a bridge that calls you first and only then connects the lead? | Completely different builds. The bridge is lower risk and keeps a human on the call |
| 2 | Which number should the callbacks come from? | I recommend a new local Florida number, separate from (561) 897-9930 |
| 3 | Confirm the agent may quote the published prices | The brief and the site currently contradict each other |
| 4 | Who takes the call when the lead says yes? | The AI books a callback. Somebody has to actually turn up on the phone |
| 5 | Telnyx account access, or do you want to buy the number yourself? | I can write every line of the integration. I cannot complete a carrier identity verification for you, and US number provisioning requires it |

---

## 7. The honest summary

This is worth doing, the law allows it for leads who asked us to call, and
the cost is trivial. Three things are genuinely risky and none of them is the
AI:

- **The form consent wording**, because it is the whole legal basis and it
  does not exist yet.
- **Florida recording law**, because it is criminal rather than civil and
  every platform records by default.
- **The number's reputation**, because a labelled number fails silently and
  looks like the idea did not work.

The fourth risk is not technical. An AI that answers in thirty seconds and
books a callback nobody makes is worse than the current situation, because it
raised the expectation. The system is only as fast as the slowest human in it.

---

## Sources

- [FCC, AI-generated voices in robocalls are illegal under the TCPA (8 Feb 2024)](https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal)
- [FCC Declaratory Ruling FCC 24-17 (full text)](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf)
- [Federal Register: Implications of AI Technologies on Protecting Consumers From Unwanted Robocalls (NPRM 24-84)](https://www.federalregister.gov/documents/2024/09/10/2024-19028/implications-of-artificial-intelligence-technologies-on-protecting-consumers-from-unwanted-robocalls)
- [Fla. Stat. § 501.059, Telephone solicitation](https://www.flsenate.gov/Laws/Statutes/2024/0501.059)
- [FDACS: what hours a telemarketer may call](https://www.fdacs.gov/Business-Services/Florida-Do-Not-Call/What-hours-can-a-telemarketer-call-or-text)
- [Quarles: amendments to the Florida Telephone Solicitation Act (HB 761)](https://www.quarles.com/newsroom/publications/a-return-to-relative-sanity-amendments-to-the-florida-telephone-solicitation-act)
- [Fla. Stat. § 934.03](https://www.flsenate.gov/laws/statutes/2012/934.03)
- [Florida call recording law guide, 2026](https://fornarolegal.com/florida-call-recording-law-guide/)
- [Holland & Knight: Fifth Circuit rejects prior express written consent rule (Bradford, 26 Feb 2026)](https://www.hklaw.com/en/insights/publications/2026/03/tcpa-reset-fifth-circuit-rejects-prior-express-written-consent-rule)
- [Henson Legal: AI voice agent compliance, federal and state, 2026](https://www.henson-legal.com/ai-voice-compliance)
- [JustCall: AI voice agent disclosure laws by state, 2026](https://justcall.io/blog/ai-voice-agent-disclosure-laws.html)
- [Telnyx voice AI agent pricing](https://telnyx.com/pricing/voice-ai-agents)
- [Retell AI: Vapi vs Bland cost and latency comparison, 2026](https://www.retellai.com/blog/vapi-vs-bland)
- [ElevenLabs Agents, outbound calling](https://elevenlabs.io/agents/ai-outbound-calling)
- [InsideSales: response time matters (MIT / Oldroyd lead response study)](https://www.insidesales.com/response-time-matters/)
- [Aloware: why calls say Spam Likely, CNAM vs STIR/SHAKEN](https://aloware.com/blog/understanding-cnam-and-stir-shaken)
- [ICTBroadcast: passing STIR/SHAKEN and still labelled, number reputation](https://www.ictbroadcast.com/stir-shaken-still-spam-likely-number-reputation-2026/)
