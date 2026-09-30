import Link from "next/link";
import { grievance, whatsappDisplay } from "@/lib/studio";

// Grievance Officer details, shown on the Privacy Notice and data-rights page.
export default function GrievanceContact() {
  const phone = whatsappDisplay(grievance.phone);
  return (
    <address className="not-italic rounded-sm border border-[#e3d8c8] bg-white p-5 text-sm leading-7">
      <strong className="block font-medium text-[#1c1612]">
        {grievance.name}, Artisan Weddings
      </strong>
      {grievance.email ? (
        <span className="block">
          Email:{" "}
          <a href={`mailto:${grievance.email}`} className="underline">
            {grievance.email}
          </a>
        </span>
      ) : null}
      {phone ? <span className="block">Phone / WhatsApp: {phone}</span> : null}
      {grievance.address ? (
        <span className="block">Address: {grievance.address}</span>
      ) : null}
      <span className="block">
        Online:{" "}
        <Link href="/data-rights" className="underline">
          data rights &amp; grievance form
        </Link>
      </span>
    </address>
  );
}
