import { films } from "@/lib/data";
import FilmPlayer from "@/components/FilmPlayer";

export const metadata = {
  title: "Wedding Films",
  description:
    "Cinematic Indian wedding films. Watch highlight films on this site in an in-page YouTube player.",
  alternates: { canonical: "/films" },
};

export default function FilmsPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">WEDDING FILMS</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">
          Relive the emotions in motion
        </h1>
        <p className="script mt-3 text-xl text-[#9a6b2f]">
          Tap a film. It plays here in a YouTube player — no new tab.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {films.map((f) => (
            <article
              key={f.title}
              className="overflow-hidden rounded-sm bg-[#16110f] text-white"
            >
              <FilmPlayer film={f} />
              <div className="p-4">
                <h2 className="font-serif text-xl">{f.title}</h2>
                <p className="text-xs text-[#d8cbb8]">{f.couple}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
