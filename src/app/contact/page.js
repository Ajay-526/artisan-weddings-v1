import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Enquire",
  description:
    "Book Artisan Weddings for your Indian wedding. Send an enquiry by WhatsApp, Telegram or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="section-label">ENQUIRE</p>
          <h1 className="mt-3 font-serif text-4xl">
            Let’s tell your story together.
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#4a4038]">
            Choose WhatsApp, Telegram or Email, then fill the form. Your note
            opens on the channel you picked — we reply personally.
          </p>
          <p className="mt-6 text-sm">
            Email: hello@artisanweddings.in
            <br />
            WhatsApp: +91 99999 99999
          </p>
        </div>
        <EnquiryForm />
      </div>
    </div>
  );
}
