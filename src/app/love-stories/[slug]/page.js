import Link from "next/link";
import { notFound } from "next/navigation";
import { loveStories } from "@/lib/data";

export function generateStaticParams() {
  return loveStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = loveStories.find((x) => x.slug === slug);
  if (!s) return { title: "Love Story" };
  return {
    title: `${s.names}, ${s.city}`,
    description: `${s.quote} Wedding photography in ${s.city}.`,
    alternates: { canonical: `/love-stories/${s.slug}` },
    openGraph: {
      title: `${s.names} | Artisan Weddings`,
      description: s.quote,
      images: [{ url: s.image, width: 1200, height: 630, alt: s.names }],
    },
  };
}

export default async function LoveStoryPage({ params }) {
  const { slug } = await params;
  const s = loveStories.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <article className="lg:pt-0 pt-15">
      <header className="relative h-[58vh] overflow-hidden">
        <img
          src={s.image}
          alt={s.names}
          className="h-full w-full object-cover kenburns"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="section-label">
            {s.city} · {s.date}
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl">{s.names}</h1>
          <p className="script mt-4 text-2xl text-[#f3e6d2]">{s.quote}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="leading-8 text-[#3f342c]">{s.story}</p>
      </div>

      <section className="bg-[#f4eee4] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="section-label">THE ALBUM</p>
          <h2 className="mt-2 font-serif text-3xl">
            A collage from their days
          </h2>
          <div className="collage mt-8">
            {s.collage.map((src, i) => (
              <img key={src + i} src={src} alt={`${s.names} ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <blockquote className="mx-auto max-w-3xl border-l-2 border-[#d4b483] pl-6">
          <p className="section-label">THEIR WORDS</p>
          <p className="script mt-4 text-3xl leading-snug text-[#3f342c]">
            “{s.testimonial}”
          </p>
          <footer className="mt-4 text-sm text-[#6b5f52]">
            — {s.names}, {s.city}
          </footer>
        </blockquote>
        <div className="mx-auto mt-12 max-w-3xl">
          <Link href="/love-stories" className="text-sm text-[#6b2430]">
            ← All love stories
          </Link>
        </div>
      </section>
    </article>
  );
}
