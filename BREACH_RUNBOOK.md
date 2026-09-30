# Personal Data Breach Runbook — Artisan Weddings

> **LEGAL REVIEW REQUIRED.** Engineering draft based on the Digital Personal Data
> Protection Act, 2023 (s.8(6)) and the DPDP Rules, 2025 (breach intimation rule).
> Confirm timelines, the Board's current reporting channel, and template wording
> with counsel before relying on this. CERT-In reporting (6 hours for listed
> cyber incidents, CERT-In Directions of 28 April 2022) may apply in parallel.

## What counts as a breach

Any unauthorised processing, accidental disclosure, acquisition, sharing, use,
alteration, destruction or loss of access to personal data that compromises its
confidentiality, integrity or availability. For this site, examples:

- Someone other than the studio reads enquiries (WhatsApp/Instagram/email account
  takeover, a lost or stolen phone that holds client chats).
- The records webhook destination (consent records, data-rights requests) is
  exposed, e.g. a Google Sheet shared publicly by mistake.
- Client photos or films are shared through a public link that shouldn't be.
- Vercel, AWS (S3/CloudFront) or other credentials leak, or `.env` is committed.
- A service provider (Vercel, AWS, Meta, Google, the records service) tells us
  they had an incident affecting our data.

**If in doubt, treat it as a breach and start the clock.**

## Roles

| Role | Who | Backup |
| --- | --- | --- |
| Incident lead (decides, notifies) | _Owner — fill in_ | _fill in_ |
| Technical lead (contain, investigate) | _fill in_ | _fill in_ |
| Grievance Officer (user comms) | `NEXT_PUBLIC_GRIEVANCE_NAME` | _fill in_ |
| Legal counsel | _fill in_ | — |

## Timeline

| When | Action |
| --- | --- |
| **T+0** | Breach discovered. Write the time down. Open an incident log (template below). |
| **T+0 – 6h** | Contain. If it is a cyber incident listed by CERT-In, report to CERT-In within **6 hours** (incident@cert-in.org.in). |
| **Without delay** | **Initial intimation to the Data Protection Board of India** (template A). Send what you know; don't wait for the investigation. |
| **Without delay** | **Intimate each affected Data Principal** (template C), through their usual channel (email / WhatsApp). |
| **T+72h** | **Detailed report to the Board** (template B), or within a longer period if the Board allows it on written request. |
| After closure | Post-incident review; update this runbook, the Privacy Notice and `DPDP_PROGRESS.md`. |

## Step by step

1. **Contain**
   - Rotate every exposed secret: Vercel env vars, `RECORDS_WEBHOOK_SECRET`,
     `RECORDS_IP_SALT`, AWS keys, email/WhatsApp/Instagram passwords. Turn on 2FA.
   - Remove public links; restrict the records sheet/service; revoke sessions on
     lost devices (WhatsApp → Linked devices; Google/Meta → Security → Devices).
   - If the website is involved: redeploy a known-good version in Vercel, or
     pause the project.
2. **Preserve evidence** — export Vercel logs, AWS CloudTrail/S3 access logs,
   account security logs. Don't delete anything yet.
3. **Assess** — what data (fields), whose data (how many people), since when,
   likely consequences (identity misuse, fraud, embarrassment, safety).
4. **Notify the Board** (templates A and B). Use the reporting channel the Board
   publishes on its website; keep the submission receipt.
5. **Notify affected people** (template C). Plain language, their language where
   possible.
6. **Notify processors / partners** if their systems or data are involved.
7. **Fix the root cause**, then **review**: what failed, what changes, owner, date.

## Incident log (copy for each incident)

```
Incident ID:
Discovered at (date, time, IST):         By:
How discovered:
Systems involved:
Data involved (fields):
People affected (number, who):
Start of breach (if known):              Contained at:
CERT-In reported? (time, ref):
Board initial intimation sent (time, ref):
Board 72h report sent (time, ref):
Data Principals notified (time, channel, count):
Root cause:
Actions taken / owner / due date:
```

---

## Template A — Initial intimation to the Data Protection Board (without delay)

> Subject: Personal data breach intimation — Artisan Weddings — [Incident ID]
>
> Data Fiduciary: Artisan Weddings, [registered address], [website]
> Contact: [Grievance Officer name, email, phone]
>
> We are informing the Board of a personal data breach.
>
> - **Description:** [what happened, in brief]
> - **Nature and extent:** [types of personal data, e.g. names, phone numbers,
>   emails, wedding dates, locations; approximate number of Data Principals]
> - **Timing:** discovered on [date, time IST]; believed to have occurred
>   [from/to, or "under investigation"]
> - **Location:** [system / service / device involved]
> - **Likely impact:** [e.g. risk of spam, phishing or impersonation]
> - **Immediate measures taken:** [containment steps]
>
> A detailed report will follow within 72 hours.
>
> [Name, designation, date]

## Template B — Detailed report to the Board (within 72 hours)

> Subject: Detailed report — personal data breach — Artisan Weddings — [Incident ID]
>
> Further to our intimation dated [date]:
>
> 1. **Updated description** of the breach, including the nature, extent,
>    timing and location of the processing involved.
> 2. **Facts and circumstances** — how it happened and how it was discovered.
> 3. **Reasons / root cause.**
> 4. **Measures taken or proposed to mitigate risk** to Data Principals.
> 5. **Findings about the person(s) responsible** (if known).
> 6. **Remedial measures to prevent recurrence.**
> 7. **Report on the intimations given to affected Data Principals** — date,
>    channel, number notified, copy of the notice.
> 8. **Contact** for follow-up: [name, email, phone].
>
> [Name, designation, date]

## Template C — Notice to affected people (without delay)

Short version for WhatsApp / SMS:

> Artisan Weddings: We're writing to tell you that some of your personal data
> may have been exposed in a security incident on [date]. It involved your
> [e.g. name and phone number]. We've [what we did]. Please [what they should
> do]. Details: [link or "reply to this message"]. Questions: [Grievance
> Officer, email/WhatsApp].

Email version:

> Subject: Important: a security incident involving your personal data
>
> Dear [name],
>
> We're writing to tell you about a security incident at Artisan Weddings that
> involves your personal data.
>
> **What happened:** [plain description, date/time it happened and when we
> found it].
>
> **What data was involved:** [e.g. your name, phone number, email address,
> wedding date and city]. [State clearly what was NOT involved, e.g. we do not
> hold card or bank details.]
>
> **What this could mean for you:** [likely consequences, e.g. unexpected
> calls or messages pretending to be us].
>
> **What we have done:** [containment and mitigation steps].
>
> **What you can do:** [safety measures, e.g. be careful with messages asking
> for payments or OTPs; we will never ask for these over WhatsApp; change your
> password if you reused it].
>
> **Contact us:** [Grievance Officer name], [email], [WhatsApp]. You can also
> use our data rights form at [site]/data-rights.
>
> We're sorry this happened.
>
> [Name], Artisan Weddings
