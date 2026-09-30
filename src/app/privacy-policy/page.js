import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { grievance } from "@/lib/studio";
import { NOTICE_VERSION } from "@/lib/consent";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import GrievanceContact from "@/components/GrievanceContact";

// ─────────────────────────────────────────────────────────────────────────
// LEGAL REVIEW REQUIRED. This notice was drafted by engineering to match
// what the code actually does (see DPDP_PROGRESS.md). Retention periods,
// response timelines, legal bases and cross-border wording must be checked
// by counsel against the DPDP Act, 2023 and the DPDP Rules, 2025 before
// this is relied on. Bump NOTICE_VERSION in src/lib/consent.js whenever the
// substance changes, so visitors are asked for consent again.
// ─────────────────────────────────────────────────────────────────────────

export const metadata = pageMeta({
  title: "Privacy Notice",
  description:
    "What personal data Artisan Weddings collects, why, how long we keep it, who we share it with, and how to use your rights under India's DPDP Act.",
  path: "/privacy-policy",
});

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="mt-12 font-serif text-2xl text-[#1c1612]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

const retention = [
  [
    "Enquiries that don't become a booking",
    "12 months after our last conversation, then deleted.",
  ],
  [
    "Booked clients: contact details, contract, invoices",
    "For the engagement, then 8 years for tax and accounting law.",
  ],
  [
    "Your photographs and films (delivery copies)",
    "Kept for 2 years after delivery so we can resend them, then deleted unless you ask us to keep them longer.",
  ],
  [
    "Consent records",
    "For as long as we rely on the consent, plus 3 years, so we can show what you agreed to.",
  ],
  [
    "Data-rights requests and grievances",
    "3 years after we close the request.",
  ],
  [
    "Analytics and advertising data (only if you allowed them)",
    "Up to 14 months in Google Analytics; Meta keeps Pixel data under its own terms.",
  ],
  [
    "Server and security logs (hosting)",
    "1 year, to detect and investigate misuse.",
  ],
];

const processors = [
  ["Vercel Inc. (USA)", "Hosts this website; processes IP address and request logs."],
  ["Amazon Web Services (CloudFront / S3)", "Serves our photographs and videos; processes IP address and request logs."],
  ["Meta Platforms (WhatsApp, Instagram)", "Carries your enquiry if you choose WhatsApp or Instagram."],
  ["Your email provider and ours", "Carries your enquiry if you choose email."],
  ["Google (YouTube)", "Plays our films. Embedded in privacy-enhanced mode; Google may set cookies once you play a video."],
  ["Google (Tag Manager / Analytics)", "Only if you allow analytics: pages visited, device and approximate location."],
  ["Meta Platforms (Pixel)", "Only if you allow marketing: page views and that you sent an enquiry, with the state and city you chose."],
  ["Our records service", "Stores consent records and data-rights requests securely."],
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-[#1c1612] lg:px-8">
      <p className="section-label">ARTISAN WEDDINGS</p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">Privacy Notice</h1>
      <p className="mt-4 text-xs tracking-wide text-[#6b5f52]">
        Version {NOTICE_VERSION}. Issued under the Digital Personal Data
        Protection Act, 2023 (India).
      </p>

      <div className="mt-8 space-y-4 text-sm leading-7 text-[#4a4038]">
        <p>
          Artisan Weddings (“we”, “us”) photographs and films weddings. When
          you use this website or send us an enquiry, we act as the Data
          Fiduciary for your personal data. This notice explains, in plain
          language, what we collect, why, how long we keep it, who we share it
          with, and how you can use your rights. You can ask us for this notice
          in English or any language in the Eighth Schedule of the
          Constitution.
        </p>

        <Section id="what" title="1. What we collect">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Enquiry form:</strong> your name, email, phone number,
              wedding date, state and city, ceremonies you are planning, budget
              range and anything you write in the message box.
            </li>
            <li>
              <strong>Consent records:</strong> what you agreed to, when, on
              which page, a reference number, your browser type and a one-way
              scrambled (hashed) form of your IP address.
            </li>
            <li>
              <strong>Data-rights requests:</strong> your name, email, phone and
              the details of your request.
            </li>
            <li>
              <strong>Analytics and advertising data, only if you allow it:</strong>{" "}
              cookies, pages visited, device and browser, approximate location
              and whether you sent an enquiry.
            </li>
            <li>
              <strong>Technical logs:</strong> IP address, browser and pages
              requested, kept by our hosting providers for security.
            </li>
            <li>
              <strong>If you are our client or appear in our work:</strong>{" "}
              photographs and films of you and your guests, and your
              testimonial if you give us one.
            </li>
          </ul>
          <p>
            We do not knowingly collect personal data of anyone under 18. Please
            don’t send us an enquiry unless you are 18 or older.
          </p>
        </Section>

        <Section id="why" title="2. Why we use it">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>To reply to your enquiry and plan your coverage</strong>{" "}
              — based on your consent (the checkbox on the form).
            </li>
            <li>
              <strong>To deliver the service you book</strong>, invoice you and
              keep accounts — to perform our contract and meet legal
              obligations.
            </li>
            <li>
              <strong>To send you occasional updates and offers</strong> — only
              if you tick the optional box.
            </li>
            <li>
              <strong>To understand how the site is used</strong> (analytics)
              and <strong>to measure our ads</strong> (marketing) — only if you
              allow them in the cookie banner.
            </li>
            <li>
              <strong>To show our work</strong> (portfolio, love stories,
              testimonials) — only with the couple’s written permission.
            </li>
            <li>
              <strong>To keep the site secure</strong> and to prove what you
              consented to.
            </li>
          </ul>
          <p>
            We do not sell your personal data, and we do not use it for any
            purpose we haven’t told you about.
          </p>
        </Section>

        <Section id="retention" title="3. How long we keep it">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#e3d8c8]">
                  <th className="py-2 pr-4 font-medium">Data</th>
                  <th className="py-2 font-medium">Kept for</th>
                </tr>
              </thead>
              <tbody>
                {retention.map(([data, period]) => (
                  <tr key={data} className="border-b border-[#efe6da] align-top">
                    <td className="py-2 pr-4">{data}</td>
                    <td className="py-2">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            When you withdraw consent or ask us to erase your data, we delete it
            unless a law requires us to keep it, and we tell you if so.
          </p>
        </Section>

        <Section id="sharing" title="4. Who we share it with">
          <p>
            We use these service providers (Data Processors). They may process
            data outside India, in countries not restricted by the Government of
            India under section 16 of the Act.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            {processors.map(([name, purpose]) => (
              <li key={name}>
                <strong>{name}:</strong> {purpose}
              </li>
            ))}
          </ul>
          <p>
            We may also disclose data where the law requires it, for example to
            a court or government authority.
          </p>
        </Section>

        <Section id="cookies" title="5. Cookies and trackers">
          <p>
            The site works without any analytics or advertising tools. They
            load only if you allow them in the cookie banner, and you can change
            your choice any time.
          </p>
          <CookieSettingsButton className="btn-wine mt-2" />
        </Section>

        <Section id="rights" title="6. Your rights">
          <p>Under the DPDP Act you can:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Access</strong> a summary of the personal data we hold
              about you, what we do with it, and who we shared it with.
            </li>
            <li>
              <strong>Correct, complete or update</strong> your personal data.
            </li>
            <li>
              <strong>Erase</strong> your personal data when it is no longer
              needed or you withdraw consent.
            </li>
            <li>
              <strong>Withdraw consent</strong> at any time, as easily as you
              gave it. This doesn’t affect what we did before you withdrew it.
            </li>
            <li>
              <strong>Raise a grievance</strong> with us.
            </li>
            <li>
              <strong>Nominate</strong> someone to use these rights for you if
              you die or become unable to.
            </li>
          </ul>
          <p>
            Use our{" "}
            <Link href="/data-rights" className="underline">
              data rights request form
            </Link>{" "}
            or contact our Grievance Officer below. We may ask you to confirm
            your identity. We reply within 30 days, and resolve grievances
            within 90 days at the latest.
          </p>
          <p>
            If you are not satisfied with our response, you can complain to the
            Data Protection Board of India after using our grievance process.
          </p>
        </Section>

        <Section id="security" title="7. How we protect it">
          <p>
            The site is served only over HTTPS. Access to enquiries and records
            is limited to the people who need it. If a personal data breach
            happens, we will inform you and the Data Protection Board of India
            as the law requires.
          </p>
        </Section>

        <Section id="grievance" title="8. Grievance Officer and contact">
          <p>
            For any question, request or complaint about your personal data,
            contact:
          </p>
          <GrievanceContact />
          {!grievance.email ? (
            <p className="text-xs text-[#9a6b2f]">
              {/* Shown only until NEXT_PUBLIC_GRIEVANCE_EMAIL is set. */}
              Our dedicated email address is being set up; please use the form
              or WhatsApp in the meantime.
            </p>
          ) : null}
        </Section>

        <Section id="changes" title="9. Changes to this notice">
          <p>
            If we change how we use your data, we will update this notice and
            its version date, and ask for your consent again where needed.
          </p>
        </Section>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/data-rights" className="btn-wine">
          Make a data request
        </Link>
        <Link href="/terms" className="btn-wine">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
