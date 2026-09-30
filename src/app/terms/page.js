import Link from "next/link";
import { pageMeta } from "@/lib/seo";

// ─────────────────────────────────────────────────────────────────────────
// LEGAL REVIEW REQUIRED. Engineering draft. Clause 6 (data protection) is
// written to match the Privacy Notice and the DPDP Act, 2023; the rest is a
// minimal website-terms placeholder. Booking terms (fees, cancellations,
// deliverables, copyright) belong in the client contract and should be
// reviewed by counsel before this page is relied on.
// ─────────────────────────────────────────────────────────────────────────

export const metadata = pageMeta({
  title: "Terms of Service",
  description:
    "Terms for using the Artisan Weddings website, including how we protect personal data under India's DPDP Act.",
  path: "/terms",
});

function Clause({ n, title, children }) {
  return (
    <section>
      <h2 className="mt-10 font-serif text-2xl text-[#1c1612]">
        {n}. {title}
      </h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-[#1c1612] lg:px-8">
      <p className="section-label">ARTISAN WEDDINGS</p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-xs tracking-wide text-[#6b5f52]">
        Last updated 30 September 2026
      </p>

      <div className="mt-8 space-y-4 text-sm leading-7 text-[#4a4038]">
        <Clause n={1} title="About these terms">
          <p>
            These terms apply when you use artisanweddings.in. By using the
            site you agree to them. If you book us, your signed contract with
            Artisan Weddings governs the booking and takes priority over these
            terms where they differ.
          </p>
        </Clause>

        <Clause n={2} title="Enquiries">
          <p>
            Sending an enquiry does not create a booking. A booking is
            confirmed only when we both sign a contract and the agreed advance
            is paid. You must be 18 or older to send an enquiry.
          </p>
        </Clause>

        <Clause n={3} title="Our photographs, films and content">
          <p>
            All photographs, films, text and design on this site belong to
            Artisan Weddings or are used with permission. Please don’t copy,
            download for reuse, or republish them without our written
            permission.
          </p>
        </Clause>

        <Clause n={4} title="Using the site">
          <p>
            Please don’t misuse the site: no attempts to break its security,
            overload it, scrape it, or submit false or someone else’s details.
          </p>
        </Clause>

        <Clause n={5} title="Third-party services">
          <p>
            The site links to or embeds services such as WhatsApp, Instagram,
            email and YouTube. Their own terms and privacy policies apply when
            you use them.
          </p>
        </Clause>

        <Clause n={6} title="Data protection">
          <p>
            We process personal data in line with the Digital Personal Data
            Protection Act, 2023 and the rules made under it. In particular:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              We collect only the personal data needed for the purposes set out
              in our{" "}
              <Link href="/privacy-policy" className="underline">
                Privacy Notice
              </Link>
              , and use it only for those purposes.
            </li>
            <li>
              Where we rely on your consent, we ask for it separately for each
              purpose, with unticked boxes. You can withdraw it at any time as
              easily as you gave it, through “Cookie settings” or our{" "}
              <Link href="/data-rights" className="underline">
                data rights form
              </Link>
              . Withdrawal doesn’t affect processing done before it.
            </li>
            <li>
              We keep personal data only for as long as the Privacy Notice
              says, or as the law requires, and then erase it, including from
              our service providers.
            </li>
            <li>
              Our service providers (Data Processors) may process data only on
              our instructions, under a contract, with reasonable security
              safeguards. We remain responsible for their processing.
            </li>
            <li>
              We take reasonable security safeguards to prevent personal data
              breaches. If one happens, we will notify you and the Data
              Protection Board of India as the law requires.
            </li>
            <li>
              You can access, correct, complete, update or erase your personal
              data, nominate someone to act for you, and raise a grievance with
              our Grievance Officer, whose contact details are in the Privacy
              Notice and at the foot of every page.
            </li>
            <li>
              As a client, you confirm that you are allowed to share any guest
              or family details you give us (for example for schedules or
              shot lists), and that those people know you are sharing them.
            </li>
            <li>
              We will feature your photographs, films or testimonial publicly
              only with your written permission, which you can withdraw for
              future use at any time.
            </li>
          </ul>
        </Clause>

        <Clause n={7} title="Liability">
          <p>
            We keep the site accurate and available, but we provide it “as is”.
            To the extent the law allows, we are not liable for losses from
            using the site. Nothing in these terms limits liability that can’t
            be limited under Indian law.
          </p>
        </Clause>

        <Clause n={8} title="Governing law">
          <p>
            These terms are governed by the laws of India. Courts at Hyderabad,
            Telangana have jurisdiction, subject to any rights you have under
            consumer protection law.
          </p>
        </Clause>

        <Clause n={9} title="Changes and contact">
          <p>
            We may update these terms; the date above shows the latest version.
            Questions:{" "}
            <Link href="/contact" className="underline">
              contact us
            </Link>
            .
          </p>
        </Clause>
      </div>
    </div>
  );
}
