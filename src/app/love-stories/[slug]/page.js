import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loveStories } from "@/lib/data";

export function generateStaticParams() {
  return loveStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const story = loveStories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const title = `${story.names}, ${story.city} | Artisan Weddings`;
  const description = `${story.quote} Wedding photography in ${story.city}.`;

  return {
    title,
    description,

    alternates: {
      canonical: `/love-stories/${story.slug}`,
    },

    openGraph: {
      title,
      description,
      type: "article",
      url: `/love-stories/${story.slug}`,
      images: [
        {
          url: story.image,
          width: 1200,
          height: 630,
          alt: `${story.names} wedding`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [story.image],
    },
  };
}

export default async function LoveStoryPage({ params }) {
  const { slug } = await params;

  const story = loveStories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="pt-15 lg:pt-0">
      {/* Hero */}
      <header className="relative h-[58vh] min-h-125 overflow-hidden">
        <Image
          src={story.image}
          alt={`${story.names} wedding in ${story.city}`}
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover object-[50%_40%]"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="section-label">
            {story.city} · {story.date}
          </p>

          <h1 className="mt-3 font-serif text-5xl md:text-6xl">
            {story.names}
          </h1>

          <p className="script mt-4 text-2xl text-[#f3e6d2]">{story.quote}</p>
        </div>
      </header>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <p className="leading-8 text-[#3f342c]">{story.story}</p>
      </section>

      {/* Album */}
      <section className="bg-[#f4eee4] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="section-label">THE ALBUM</p>

          <h2 className="mt-2 font-serif text-3xl">
            A collage from their days
          </h2>

          <div className="collage mt-8">
            {story.collage.map((src, index) => (
              <Image
                key={`${src}-${index}`}
                src={src}
                alt={`${story.names} wedding photograph ${index + 1}`}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16">
        <blockquote className="mx-auto max-w-3xl border-l-2 border-[#d4b483] pl-6">
          <p className="section-label">THEIR WORDS</p>

          <p className="script mt-4 text-3xl leading-snug text-[#3f342c]">
            “{story.testimonial}”
          </p>

          <footer className="mt-4 text-sm text-[#6b5f52]">
            — {story.names}, {story.city}
          </footer>
        </blockquote>

        <div className="mx-auto mt-12 max-w-3xl">
          <Link
            href="/love-stories"
            className="text-sm text-[#6b2430] transition-opacity hover:opacity-70"
          >
            ← All love stories
          </Link>
        </div>
      </section>
    </article>
  );
}
