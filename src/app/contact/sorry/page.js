import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You for Your Enquiry",
  description: "Information about Artisan Weddings service availability.",
  robots: { index: false, follow: false },
};

export default function ContactSorryPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <Image
          src="/sorry.png"
          alt="Service availability notice"
          width={180}
          height={180}
          className="mx-auto mb-6 h-36 w-36 object-contain"
          priority
        />
        <p className="section-label">THANK YOU FOR REACHING OUT</p>
        <h1 className="mt-4 font-serif text-5xl">We are not there yet.</h1>
        <p className="mt-6 text-sm leading-7 text-[#4a4038]">
          We currently focus on weddings in Telangana and Andhra Pradesh. We
          have saved your interest and will keep expanding our coverage.
        </p>
        <Link href="/contact" className="btn-wine mt-8">
          Send another enquiry
        </Link>
      </div>
    </main>
  );
}
