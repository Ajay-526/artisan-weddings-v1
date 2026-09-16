import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Enquiry Received",
  description: "Your Artisan Weddings enquiry has been received.",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <Image
          src="/success.png"
          alt="Enquiry received"
          width={180}
          height={180}
          className="mx-auto mb-6 h-36 w-36 object-contain"
          priority
        />
        <p className="section-label">THANK YOU</p>
        <h1 className="mt-4 font-serif text-5xl">Your story is closer.</h1>
        <p className="mt-6 text-sm leading-7 text-[#4a4038]">
          We have received your enquiry for Telangana or Andhra Pradesh. Our
          team will review the details and get back to you soon.
        </p>
        <Link href="/" className="btn-wine mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
