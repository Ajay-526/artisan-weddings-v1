import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import DataRightsForm from "@/components/DataRightsForm";
import GrievanceContact from "@/components/GrievanceContact";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata = pageMeta({
  title: "Your Data Rights",
  description:
    "Ask Artisan Weddings to access, correct or erase your personal data, withdraw consent, nominate someone, or raise a grievance under India's DPDP Act.",
  path: "/data-rights",
});

export default function DataRightsPage() {
  return (
    <div className="lg:pt-0 pt-15">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="text-sm leading-7 text-[#4a4038]">
          <p className="section-label">YOUR DATA, YOUR RIGHTS</p>
          <h1 className="mt-3 font-serif text-4xl text-[#1c1612]">
            Make a data request
          </h1>
          <p className="mt-4">
            Under India’s Digital Personal Data Protection Act you can ask us
            to show you, correct or erase the personal data we hold about you,
            withdraw your consent, nominate someone to act for you, or raise a
            grievance. We reply within 30 days.
          </p>
          <p className="mt-4">
            To stop analytics or marketing cookies right now, you don’t need to
            write to us:{" "}
            <CookieSettingsButton className="underline" />.
          </p>
          <p className="mt-4">
            How we handle your data is explained in our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Notice
            </Link>
            .
          </p>
          <div className="mt-8">
            <p className="mb-3 text-xs tracking-[0.16em] uppercase text-[#6b5a42]">
              Grievance Officer
            </p>
            <GrievanceContact />
          </div>
        </div>
        <DataRightsForm />
      </div>
    </div>
  );
}
