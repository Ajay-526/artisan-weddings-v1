"use client";

import { useEffect, useState } from "react";

export default function FilmPlayer({ film, films }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilm, setActiveFilm] = useState(film);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openPlayer = () => {
    setActiveFilm(film);
    setIsOpen(true);
  };

  return (
    <>
      {/* ================= FILM CARD ================= */}
      <button
        type="button"
        onClick={openPlayer}
        className="group block w-full text-left"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img
            src={
              film.image ||
              `https://i.ytimg.com/vi/${film.youtubeId}/maxresdefault.jpg`
            }
            alt={film.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark hover overlay */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/45" />

          {/* Play Video */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="flex flex-col items-center gap-3 text-white">
              {/* Play button */}
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-100 scale-90">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-7 w-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M8 5.14v13.72c0 .77.84 1.25 1.5.86l10.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28C8.84 3.89 8 4.37 8 5.14z" />
                </svg>
              </span>

              {/* Text */}
              <span className="text-[11px] font-medium tracking-[0.25em]">
                PLAY VIDEO
              </span>
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="pt-4">
          <h2 className="font-serif text-xl text-[#211914] transition-colors duration-300 group-hover:text-[#9a6b2f]">
            {film.title}
          </h2>

          <p className="mt-1 text-xs tracking-wide text-[#8b8178]">
            {film.couple}
          </p>
        </div>
      </button>

      {/* ================= VIDEO DIALOG ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 md:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-sm bg-[#0d0b0a] shadow-2xl">
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3 md:px-6">
              <div className="min-w-0">
                <h2 className="truncate font-serif text-lg text-white md:text-xl">
                  {activeFilm.title}
                </h2>

                <p className="truncate text-xs text-[#b9aa96]">
                  {activeFilm.couple}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close video"
                className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              </button>
            </div>

            {/* Main Video */}
            <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
              <div className="aspect-video w-full max-h-full">
                <iframe
                  key={activeFilm.youtubeId}
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${activeFilm.youtubeId}?autoplay=1&rel=0`}
                  title={activeFilm.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Bottom Film List */}
            <div className="shrink-0 border-t border-white/10 bg-[#11100f]">
              <div className="px-4 py-3 md:px-6">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#9a6b2f]">
                  MORE WEDDING FILMS
                </p>

                <div className="flex gap-3 overflow-x-auto pb-2">
                  {films.map((item, index) => {
                    const isActive = item.youtubeId === activeFilm.youtubeId;

                    return (
                      <button
                        key={`${item.youtubeId}-${index}`}
                        type="button"
                        onClick={() => setActiveFilm(item)}
                        className={`group flex w-[220px] shrink-0 gap-3 rounded-sm p-2 text-left transition ${
                          isActive ? "bg-white/10" : "hover:bg-white/5"
                        }`}
                      >
                        {/* Thumbnail */}
                        <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-sm bg-black">
                          <img
                            src={
                              item.image ||
                              `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`
                            }
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />

                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                isActive
                                  ? "bg-white text-black"
                                  : "bg-black/60 text-white"
                              }`}
                            >
                              <svg
                                className="ml-0.5 h-3 w-3 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5.14v13.72c0 .77.84 1.25 1.5.86l10.5-6.86a1 1 0 0 0 0-1.72L9.5 4.28C8.84 3.89 8 4.37 8 5.14z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="min-w-0">
                          <h3 className="line-clamp-2 font-serif text-sm text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 line-clamp-1 text-[10px] text-[#a99c8a]">
                            {item.couple}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
