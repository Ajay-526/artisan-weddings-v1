import Link from "next/link";
import { loveStories } from "@/lib/data";

export const metadata = {
  title: "Love Stories",
  description:
    "Real Indian weddings photographed by Artisan Weddings — couple stories, collages and testimonials from across India.",
  alternates: { canonical: "/love-stories" },
};

export default function LoveStoriesPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">REAL LOVE STORIES</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">
          Every couple. A different universe.
        </h1>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loveStories.map((s) => (
            <Link
              key={s.slug}
              href={`/love-stories/${s.slug}`}
              className="card-hover overflow-hidden rounded-sm bg-white"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.names}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-xl">{s.names}</h2>
                <p className="text-xs text-[#6b5f52]">
                  {s.city} · {s.date}
                </p>
                <p className="script mt-3 text-[#9a6b2f]">{s.quote}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
