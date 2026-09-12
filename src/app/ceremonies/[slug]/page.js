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
  const others = ceremonies.filter((x) => x.slug !== c.slug);

  return (
    <article className="pt-24">
      <header className="relative h-[56vh] overflow-hidden">
        <img
          src={c.image}
          alt={c.title}
          className="h-full w-full object-cover kenburns"
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

      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="leading-8 text-[#3f342c]">{c.description}</p>
      </div>

      <section className="bg-[#f4eee4] px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="section-label">IDEOLOGY</p>
            <h2 className="mt-2 font-serif text-3xl">What the ritual means</h2>
            <p className="mt-5 leading-8 text-[#3f342c]">{c.ideology}</p>
          </div>
          <div>
            <p className="section-label">TRADITION</p>
            <h2 className="mt-2 font-serif text-3xl">How it is lived</h2>
            <ol className="mt-5 space-y-4">
              {c.tradition.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-7 text-[#3f342c]"
                >
                  <span className="mt-1 font-serif text-[#9a6b2f]">
                    0{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="section-label">HOW WE SEE IT</p>
          <p className="script mt-3 max-w-2xl text-2xl text-[#9a6b2f]">
            {c.howWeShoot}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {c.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-56 w-full rounded-sm object-cover transition duration-700 hover:scale-[1.03]"
              />
            ))}
          </div>
        </div>
      </section>

      <nav className="mx-auto flex max-w-5xl flex-wrap gap-3 px-6 pb-16">
        <Link href="/ceremonies" className="text-sm text-[#6b2430]">
          ← All ceremonies
        </Link>
        {others.map((o) => (
          <Link
            key={o.slug}
            href={`/ceremonies/${o.slug}`}
            className="rounded-full border border-[#e3d8c8] px-3 py-1 text-xs text-[#4a4038] transition hover:border-[#9a6b2f]"
          >
            {o.title}
          </Link>
        ))}
      </nav>
    </article>
  );
}
