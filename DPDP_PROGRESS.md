# DPDP Act compliance — progress log

Branch: `compliance/dpdp` (not pushed). Started 30 Sep 2026.
Scope: the Artisan Weddings Next.js site in this repo. This is an engineering
review, **not legal advice**; everything marked *Lawyer review* needs counsel.

Law referenced: Digital Personal Data Protection Act, 2023 ("the Act") and the
DPDP Rules, 2025. Most Fiduciary obligations under the Rules apply from their
phased commencement dates — counsel should confirm which are already in force.

---

## 1. Data map (audit findings)

### Personal data collection points

| Where | Data | Where it goes | Before this branch |
| --- | --- | --- | --- |
| Enquiry form (`src/components/EnquiryForm.js`, used on `/` and `/contact`) | name, email, phone, wedding date, state, city, ceremonies, budget, free-text note | Browser hands it to WhatsApp (`wa.me` link), Instagram (copied to clipboard) or the visitor's mail app (`mailto:`). No server of ours stores it. | No notice at collection, no consent |
| Same form → trackers | channel, state, city, "qualified" flag | Meta Pixel custom events (`Lead`, `QualifiedEnquiry`/`OutOfAreaEnquiry`) and GTM `dataLayer` | Sent whenever the scripts were loaded, i.e. always |
| Portfolio pages (`/photos`, `/love-stories/*`, `/testimonials`, `/ceremonies/*`, home) | Photos/films of identifiable couples and guests; couple names; testimonials | Public website, S3/CloudFront | Nothing in code records the couples' permission |
| Hosting | IP, user agent, URLs | Vercel logs; AWS CloudFront/S3 logs | — |

No database, no user accounts, no cookies set by our own code, no payment data.

### Trackers and third parties

| Service | Type | Loaded | After this branch |
| --- | --- | --- | --- |
| Google Tag Manager (`NEXT_PUBLIC_GTM_ID`) | Analytics, can load anything configured in GTM | Every page view, plus a `<noscript>` iframe | Only after **Analytics** consent |
| Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`) | Advertising | Every page view, plus a `<noscript>` image | Only after **Marketing** consent |
| YouTube embeds (home, `/films`) | Video; Google cookies | `youtube.com/embed` on page load | `youtube-nocookie.com` (privacy-enhanced mode) |
| WhatsApp / Instagram (Meta), email provider | Enquiry transport | When the visitor submits | Disclosed in the form notice and Privacy Notice |
| Vercel | Hosting (USA) | Always | Listed as processor |
| AWS CloudFront / S3 (`dkr99ixtwl51t.cloudfront.net`) | Image and video hosting | Always | Listed as processor |
| Google Fonts | — | Self-hosted at build time by `next/font`, so no request to Google | No change needed |

---

## 2. Decisions

| # | Decision | Why |
| --- | --- | --- |
| D1 | Kept `/privacy-policy` as the Privacy Notice URL (title changed to "Privacy Notice"). | It's already linked, indexed and in the sitemap. |
| D2 | The enquiry has one **required** consent (reply to the enquiry and plan coverage, with an 18+ confirmation) and one **optional** consent (marketing updates). Both are unticked by default. | s.6 requires specific consent per purpose. Replying is the whole point of the form, so it can't be optional; marketing is a separate purpose. The 18+ statement is there because s.9 requires verifiable parental consent for children, and the service is for adults. |
| D3 | Consent records are kept in three places: (a) the visitor's browser (`localStorage`, last 50), (b) `POST /api/consent` → `RECORDS_WEBHOOK_URL`, and (c) a consent reference line added to the WhatsApp/email message itself. | The site has no database. (c) means the studio holds proof alongside the enquiry even before (b) is configured. |
| D4 | The records store is a **webhook** (`RECORDS_WEBHOOK_URL`), not a database added to this repo. | Keeps the site static and dependency-free. A Google Apps Script bound to a private Sheet, or any small backend, works. It must be https (enforced in code). |
| D5 | Records fail closed: if storage isn't configured or fails, the API returns `stored:false` and the data-rights form tells the person to email instead. It never claims the request was saved. | Avoids silently losing requests. |
| D6 | IP addresses are stored only as a salted SHA-256 hash, and only when `RECORDS_IP_SALT` is set. | Data minimisation (s.8(7)): enough to link abuse, not enough to identify. |
| D7 | Consent banner: "Reject non-essential", "Choose" and "Accept all" are equally prominent. Nothing is pre-ticked. The banner reopens from "Cookie settings" in the footer, Privacy Notice and data-rights page. | s.6(1) and s.6(4): consent must be free and unambiguous, and withdrawing it must be as easy as giving it. |
| D8 | Withdrawing tracker consent clears `_ga*`, `_gid`, `_gat*`, `_gcl*`, `_fbp`, `_fbc` cookies and reloads the page. | Scripts that already ran can't be unloaded any other way. |
| D9 | Removed the `<noscript>` GTM iframe and Pixel image from `layout.js`. | They tracked visitors who have JavaScript off and therefore never saw the banner. |
| D10 | Enquiry-form tracking events now also check banner consent in the code, not just whether the script happens to be present. | Defence in depth: no enquiry details reach Meta or Google without consent. |
| D11 | The "notice version" (`NOTICE_VERSION` in `src/lib/consent.js`) is stamped on every consent record. A new version re-asks for banner consent. | Shows which notice a person agreed to; material changes get fresh consent. |
| D12 | Grievance contact is configured with `NEXT_PUBLIC_GRIEVANCE_*` env vars, falling back to `NEXT_PUBLIC_EMAIL` / `NEXT_PUBLIC_WHATSAPP`. | No code change needed to appoint someone. |
| D13 | Data-rights requests cover access, correction, erasure, withdrawal, nomination and grievance (ss.11–14). They get a reference number, a honeypot field and a best-effort rate limit. | The rights the Act lists. There is no captcha today (see S1). |
| D14 | Terms of Service created at `/terms`. There were none before. Clause 6 is the data-protection clause. | Point (7) of the brief. |
| D15 | Added baseline security headers (`nosniff`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`). There is no CSP yet. | Low-risk hardening. A CSP needs GTM/Meta/YouTube allow-lists and testing (see S4). |
| D16 | YouTube switched to `youtube-nocookie.com`. It looks and plays the same. | Fewer third-party cookies before anyone presses play. |

---

## 3. What was built

- `src/lib/consent.js`: consent choice, notice version, consent records (local copy plus `/api/consent`), and the open/withdraw events.
- `src/components/ConsentBanner.js`: the per-purpose banner. It's mounted in `src/app/layout.js`.
- `src/components/Analytics.js`: GTM gated on analytics consent, Pixel gated on marketing consent.
- `src/components/EnquiryForm.js`: notice at collection (changes with the chosen channel), two unticked consent boxes, a consent record, the consent reference in the message, and gated tracking.
- `src/app/api/consent/route.js`, `src/app/api/data-rights/route.js`, `src/lib/records.js`: validated, rate-limited endpoints that store to the webhook, fail closed and hash IPs.
- `src/app/privacy-policy/page.js`: full Privacy Notice (what, why, retention table, processors and cross-border, cookies, rights, Board complaint, security, grievance, changes).
- `src/app/data-rights/page.js` and `src/components/DataRightsForm.js`: rights request form with email fallback.
- `src/app/terms/page.js`: Terms of Service with a data-protection clause.
- `src/components/Footer.js`: legal links, "Cookie settings" and a grievance contact line on every page.
- `src/components/GrievanceContact.js`, `src/components/CookieSettingsButton.js`, `src/lib/dataRights.js`, `src/lib/studio.js` (`grievance` config).
- `src/app/sitemap.js`: added `/terms` and `/data-rights`.
- `src/app/globals.css`: checkbox styling, because the global `input` rule made them full width.
- `next.config.mjs`: security headers.
- `BREACH_RUNBOOK.md`: breach steps, roles, timeline, incident log, and templates for the Board (initial and 72h) and for affected users.

Verified locally: `next build` passes. Without consent no GTM or Pixel script
loads and `dataLayer` is undefined. "Accept all" loads GTM and writes a consent
record. "Reject" via Cookie settings removes it after reload. The enquiry form
won't submit until the required box is ticked. `/api/data-rights` returns 400
for bad input and `stored:false` (202) while the webhook isn't configured.

---

## 4. Needs lawyer review

1. **Privacy Notice wording** (`src/app/privacy-policy/page.js`): especially legal bases (consent vs. s.7 legitimate uses for booked clients), the cross-border paragraph (s.16), and the Board-complaint wording.
2. **Retention periods** in the notice table: 12 months for non-converted enquiries, 8 years for accounts, 2 years for delivery copies, 3 years for consent and request records, and 1 year for logs (the Rules' log-retention requirement should be confirmed).
3. **Response timelines**: the site says "reply within 30 days, grievances resolved within 90 days". Confirm against the Rules.
4. **Consent checkbox text** in `EnquiryForm.js` (marked `LEGAL REVIEW`), including whether a self-declared 18+ statement is enough.
5. **Terms of Service** (`src/app/terms/page.js`): the whole page. Jurisdiction is set to Hyderabad as a placeholder.
6. **Portfolio consent**: couples and guests shown in photos, films, love stories and testimonials. The studio needs written permission (ideally a clause in the client contract), and the ability to take content down on withdrawal.
7. **Meta Pixel custom events** that send state/city: are they proportionate even with marketing consent?
8. **Processor contracts / DPAs** with Vercel, AWS, Meta and Google, and with whoever runs the records webhook.
9. **Breach runbook** timelines, the Board's reporting channel, and CERT-In applicability.
10. Whether the studio could ever be notified as a **Significant Data Fiduciary** (unlikely at this scale).

---

## 5. Security gaps (flagged)

| # | Gap | Status |
| --- | --- | --- |
| S1 | **No captcha anywhere.** The brief mentions an "unverified captcha", but none exists in this codebase. The new `/api/consent` and `/api/data-rights` endpoints only have a honeypot and an in-memory rate limit, which resets per serverless instance. | **Open.** Add Cloudflare Turnstile or hCaptcha **with server-side token verification** in the route handlers, and/or Vercel Firewall rate limiting. |
| S2 | **Fail-open encryption:** not present. There is no encryption code in the repo. The one analogous risk, the records webhook, is made to fail closed and refuse non-https URLs (D5). | Addressed for new code. Confirm the webhook destination encrypts at rest. |
| S3 | **HTTPS:** live check on 30 Sep 2026. `http://` returns 308 to `https://www.`, and HSTS `max-age=63072000` is sent (by Vercel). | OK. Consider `includeSubDomains; preload` after checking every subdomain supports HTTPS. |
| S4 | **No Content-Security-Policy.** | Open. Needs an allow-list for GTM, Meta, YouTube-nocookie, CloudFront and i.ytimg; start in `Report-Only`. |
| S5 | **Enquiry data lives in personal messaging accounts** (WhatsApp/Instagram/email). A lost phone or account takeover is the most likely breach. | Open (process). Turn on 2FA everywhere, use a business account with limited access, set a device lock, and delete chats per the retention table. |
| S6 | **`NEXT_PUBLIC_EMAIL` is empty in `.env`**, so the "Email" enquiry channel opens `mailto:` with no recipient, and there is no grievance email. | **Open, blocking.** Set `NEXT_PUBLIC_GRIEVANCE_EMAIL` (and `NEXT_PUBLIC_EMAIL`). |
| S7 | `.env` defines some keys twice (GTM, Pixel). | Cosmetic; tidy up. |
| S8 | `/api/*` responses have no authentication (they're write-only by design) and there is no read endpoint. | OK by design. Keep it that way; read records in the webhook destination. |

---

## 6. Open items (to go live)

1. **Set env vars in Vercel** (and `.env` locally). `.env.example` is git-ignored, so the list is here:
   - `NEXT_PUBLIC_GRIEVANCE_NAME`, `NEXT_PUBLIC_GRIEVANCE_EMAIL`, `NEXT_PUBLIC_GRIEVANCE_PHONE`, `NEXT_PUBLIC_GRIEVANCE_ADDRESS`
   - `RECORDS_WEBHOOK_URL` (https), `RECORDS_WEBHOOK_SECRET`, `RECORDS_IP_SALT` (a long random string)
   - `NEXT_PUBLIC_EMAIL` (S6)
2. **Stand up the records store** behind `RECORDS_WEBHOOK_URL`. Check `X-Records-Secret`, and restrict access to the studio.
3. **Operational process** for data-rights requests: who handles them, identity check, the 30-day clock, and erasure across WhatsApp, email, the records store, backups and processors.
4. **Retention job**: a calendar reminder or script to delete non-converted enquiries after 12 months, etc.
5. **GTM container audit**: GTM can load other tags. Make sure nothing inside it fires outside the analytics purpose, or add Google Consent Mode v2 signals.
6. **Captcha with server-side verification** (S1) and **CSP** (S4).
7. **Portfolio permissions** (lawyer item 6): collect written permission from featured couples.
8. **Translations** of the notice into Eighth-Schedule languages on request (the notice offers this).
9. After any material change to the notice, **bump `NOTICE_VERSION`**.
10. Fill in the names in the `BREACH_RUNBOOK.md` roles table and run a tabletop exercise.
