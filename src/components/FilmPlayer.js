"use client";

import { useEffect, useState } from "react";

export default function FilmPlayer({ film, compact = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-sm text-left"
      >
        <img
          src={film.image}
          alt={film.title}
          className={`${compact ? "h-64" : "h-72"} w-full object-cover transition duration-700 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="play-pulse yt-btn flex h-14 w-[78px] items-center justify-center rounded-lg bg-[#ff0000] text-2xl shadow-lg">
            ▶
          </span>
          <span className="mt-3 text-[11px] tracking-[0.22em]">PLAY ON YOUTUBE</span>
        </div>
      </button>

      {open && (
        <div
          className="modal-backdrop fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal-panel w-full max-w-4xl overflow-hidden rounded-md bg-[#111] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm text-[#eee]">
              <div>
                <div className="font-medium">{film.title}</div>
                <div className="text-xs text-[#bbb]">{film.couple}</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-lg"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
                title={film.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
