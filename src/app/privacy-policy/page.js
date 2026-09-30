import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Artisan Weddings uses the details you share through our wedding enquiry form.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-[#1c1612] lg:px-8">
      <p className="section-label">ARTISAN WEDDINGS</p>
      <h1 className="mt-4 font-serif text-4xl md:text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-[#4a4038]">
        <p>
          We use the details you share through our enquiry form only to respond
          to your wedding photography or film enquiry.
        </p>
        <p>
          We do not sell or share your personal information for unrelated
          marketing. Messages sent through WhatsApp, Instagram, or email are
          handled by those services according to their own privacy policies.
        </p>
        <p>
          To ask about your information or request its removal, please contact
          us through the enquiry page.
        </p>
      </div>
      <Link href="/contact" className="btn-wine mt-8">
        Contact us
      </Link>
    </div>
  );
}
