import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials",
  description:
    "What couples across India say about Artisan Weddings photography and films.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <div className="lg:pt-0 pt-15">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="section-label">KIND WORDS</p>
        <h1 className="mt-3 font-serif text-4xl">What our couples say</h1>
        <div className="mt-10 space-y-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.names}
              className="border-l-2 border-[#d4b483] pl-6"
            >
              <p className="script text-2xl text-[#3f342c]">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-[#6b5f52]">
                — {t.names}, {t.city}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
