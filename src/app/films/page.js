import { films } from "@/lib/data";
import FilmPlayer from "@/components/FilmPlayer";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Wedding Films",
  description:
    "Cinematic Indian wedding films by Artisan Weddings. Watch our wedding highlight films and relive the emotions in motion.",
  path: "/films",
});

export default function FilmsPage() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label">WEDDING FILMS</p>

        <h1 className="mt-3 font-serif text-4xl md:text-5xl">
          Relive the emotions in motion
        </h1>

        <p className="script mt-3 text-xl text-[#9a6b2f]">
          Tap a film to watch the story unfold.
        </p>

        {/* 1 column mobile / 3 columns desktop */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
          {films.map((film, index) => (
            <FilmPlayer
              key={`${film.youtubeId}-${index}`}
              film={film}
              films={films}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
