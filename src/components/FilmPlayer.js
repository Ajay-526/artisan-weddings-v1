"use client";

export default function FilmPlayer({ film, compact = false }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm bg-black ${
        compact ? "aspect-video" : "aspect-video"
      }`}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${film.youtubeId}?rel=0`}
        title={film.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
