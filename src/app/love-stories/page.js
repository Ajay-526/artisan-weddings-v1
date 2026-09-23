import Image from "next/image";
import Link from "next/link";
import { loveStories } from "@/lib/data";

export const metadata = {
  title: "Love Stories | Artisan Weddings",
  description:
    "Real Indian weddings photographed by Artisan Weddings — couple stories, collages and testimonials from across India.",
  alternates: {
    canonical: "/love-stories",
  },
  openGraph: {
    title: "Love Stories | Artisan Weddings",
    description:
      "Real Indian weddings photographed by Artisan Weddings — couple stories, collages and testimonials from across India.",
    type: "website",
  },
};

export default function LoveStoriesPage() {
  return (
    <main className="pt-15 lg:pt-0">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <header>
          <p className="section-label">REAL LOVE STORIES</p>

          <h1 className="mt-3 font-serif text-4xl md:text-5xl">
            Every couple. A different universe.
          </h1>

          <p className="mt-4 max-w-2xl text-[#6b5f52]">
            Real moments, honest emotions, and beautifully imperfect
            celebrations captured across India.
          </p>
        </header>

        {/* Stories */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {loveStories.map((story) => (
            <Link
              key={story.slug}
              href={`/love-stories/${story.slug}`}
              className="group card-hover overflow-hidden rounded-sm bg-white"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={story.image}
                  alt={`${story.names} wedding in ${story.city}`}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="font-serif text-xl">{story.names}</h2>

                <p className="mt-1 text-xs text-[#6b5f52]">
                  {story.city} · {story.date}
                </p>

                <p className="script mt-3 text-[#9a6b2f]">{story.quote}</p>

                <span className="mt-4 inline-block text-xs tracking-wide text-[#6b2430] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  VIEW THEIR STORY →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
