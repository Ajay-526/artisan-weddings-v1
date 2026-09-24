import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ceremonies } from "@/lib/data";

export function generateStaticParams() {
  return ceremonies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = ceremonies.find((x) => x.slug === slug);
  if (!c) return { title: "Ceremony" };
  return {
    title: `${c.title} photography`,
    description: `${c.quote} ${c.description}`,
    alternates: { canonical: `/ceremonies/${c.slug}` },
    openGraph: {
      title: `${c.title} | Artisan Weddings`,
      description: c.description,
      images: [{ url: c.image, width: 1200, height: 630, alt: c.title }],
    },
  };
}

export default async function CeremonyPage({ params }) {
  const { slug } = await params;
  const c = ceremonies.find((x) => x.slug === slug);

  if (!c) notFound();
  // const gallery = Array.from(
  //   new Set([
  //     ...c.gallery,
  //     ...ceremonies.flatMap((ceremony) => ceremony.gallery),
  //     c.image,
  //   ]),
  // );

  const gallery = c.gallery;

  return (
    <article>
      <header className="relative h-[56vh] overflow-hidden">
        <Image
          src={c.image}
          alt={c.title}
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-top-left kenburns"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="section-label anim-up">{c.tagline}</p>
          <h1 className="anim-up-d1 mt-3 font-serif text-5xl md:text-7xl">
            {c.title}
          </h1>
          <p className="script anim-up-d2 mt-4 max-w-xl text-2xl text-[#f3e6d2]">
            {c.quote}
          </p>
        </div>
      </header>

      <section className="bg-[#f4eee4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">HOW WE SEE IT</p>
          <p className="script mt-3 max-w-3xl text-2xl text-[#9a6b2f] md:text-3xl">
            {c.howWeShoot}
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-96 overflow-hidden rounded-sm bg-[#e7dbcc] md:h-120"
              >
                <Image
                  src={src}
                  alt={`${c.title} wedding photograph`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={80}
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 py-10 text-center">
        <Link href="/ceremonies" className="text-sm text-[#6b2430]">
          ← All ceremonies
        </Link>
      </div>
    </article>
  );
}
