import Link from "next/link";
import { ceremonies } from "@/lib/data";

export const metadata = {
  title: "Wedding Ceremonies",
  description:
    "Roka, Haldi, Mehendi, Sangeet, Wedding and Reception — ideology, tradition and how we photograph each ritual.",
  alternates: { canonical: "/ceremonies" },
};

export default function CeremoniesPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">THE WEDDING JOURNEY</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">
          Every ritual has a pulse
        </h1>
        <p className="script mt-3 text-xl text-[#9a6b2f]">
          Different colours. One continuous story.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ceremonies.map((c) => (
            <Link
              key={c.slug}
              href={`/ceremonies/${c.slug}`}
              className="card-hover group overflow-hidden rounded-sm bg-white"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl">{c.title}</h2>
                <p className="mt-1 text-sm text-[#6b5f52]">{c.tagline}</p>
                <p className="script mt-3 text-lg text-[#9a6b2f]">{c.quote}</p>
                <p className="mt-3 text-sm leading-6 text-[#4a4038]">
                  {c.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
