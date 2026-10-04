import { test } from 'node:test';
import assert from 'node:assert/strict';
import { skipReason, parseNetlifyLead, renderApproval, readApproval, replySubject } from '../src/logic.ts';
import { extractJson } from '../src/grok.ts';
import { brandForAddress } from '../src/brands.ts';

const noHeaders = () => null;
const headers = (h: Record<string, string>) => (k: string) => h[k.toLowerCase()] ?? null;

test('a normal customer email gets a draft', () => {
  assert.equal(skipReason('wkebler@aol.com', noHeaders), null);
});

test('automated and looping senders get no draft', () => {
  assert.ok(skipReason('noreply@somewhere.com', noHeaders));
  assert.ok(skipReason('no-reply@somewhere.com', noHeaders));
  assert.ok(skipReason('mailer-daemon@googlemail.com', noHeaders));
  assert.ok(skipReason('info@garage-door-fixers.com', noHeaders), 'our own domain');
  assert.ok(skipReason('a@b.com', headers({ 'auto-submitted': 'auto-replied' })), 'out of office');
  assert.ok(skipReason('a@b.com', headers({ precedence: 'bulk' })));
  assert.ok(skipReason('a@b.com', headers({ 'list-unsubscribe': '<mailto:x>' })), 'newsletter');
  assert.equal(skipReason('a@b.com', headers({ 'auto-submitted': 'no' })), null);
});

test('reads a lead out of a Netlify form notification', () => {
  const body = `Site:\nfl-airduct\n\nName:\nWilliam Kebler\n\nPhone:\n7277449197\n\nEmail:\nwkebler@aol.com\n\nCity:\nSt. Petersburg\n\nZip:\n33704\n\nCity County:\n\nService:\nAir Duct Cleaning\n\nMessage:\nWould like to get A/C duct cleaning asap.`;
  const lead = parseNetlifyLead(body);
  assert.equal(lead?.email, 'wkebler@aol.com');
  assert.equal(lead?.name, 'William Kebler');
  assert.equal(lead?.zip, '33704');
  assert.equal(lead?.service, 'Air Duct Cleaning');
  assert.match(lead?.message ?? '', /duct cleaning asap/);
});

test('an empty field does not swallow the next label', () => {
  const lead = parseNetlifyLead('Email:\nx@y.com\n\nCity County:\n\nService:\nDryer Vent');
  assert.equal(lead?.service, 'Dryer Vent');
});

test('a form lead with no email is not answerable by email', () => {
  assert.equal(parseNetlifyLead('Name:\nJo\n\nPhone:\n5551234'), null);
});

test('the approval message round trips', () => {
  const meta = { brand: 'airduct', to: 'wkebler@aol.com', from: 'info@floridabreezeairduct.com', subject: 'Re: Duct cleaning', ref: '<abc@aol.com>' };
  const text = renderApproval('📩 header line\nמאת: x', 'Hi William,\n\nThanks.\n\nFlorida Breeze Air Duct', meta);
  const back = readApproval(text);
  assert.deepEqual(back?.meta, meta);
  assert.equal(back?.body, 'Hi William,\n\nThanks.\n\nFlorida Breeze Air Duct');
});

test('the approval message still reads after "sent" is appended', () => {
  const meta = { brand: 'garage', to: 'a@b.com', from: 'info@garage-door-fixers.com', subject: 'Re: x', ref: '' };
  const back = readApproval(renderApproval('h', 'body', meta) + '\n\n✅ נשלח ל-a@b.com');
  assert.equal(back?.meta.ref, '');
  assert.equal(back?.meta.to, 'a@b.com');
});

test('reply subjects', () => {
  assert.equal(replySubject('Quote'), 'Re: Quote');
  assert.equal(replySubject('RE: Quote'), 'RE: Quote');
  assert.equal(replySubject(''), 'Your request');
});

test('model JSON is extracted even with a code fence around it', () => {
  assert.deepEqual(extractJson('```json\n{"action":"ignore","summary":"ספאם"}\n```'), { action: 'ignore', summary: 'ספאם' });
});

test('brand is chosen by the domain written to', () => {
  assert.equal(brandForAddress('info@floridabreezeairduct.com')?.key, 'airduct');
  assert.equal(brandForAddress('Support@Garage-Door-Fixers.com')?.key, 'garage');
  assert.equal(brandForAddress('x@gmail.com'), undefined);
});
