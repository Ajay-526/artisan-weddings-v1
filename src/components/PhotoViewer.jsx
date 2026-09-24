"use client";

import { useCallback, useEffect, useState } from "react";

function preload(src) {
  if (!src) return;
  const img = new window.Image();
  img.src = src;
}

export default function PhotoViewer({
  images = [],
  startIndex = 0,
  open,
  onClose,
  alt = "Photograph",
}) {
  const [index, setIndex] = useState(startIndex);
  const last = Math.max(images.length - 1, 0);
  const src = images[index] || "";
  const prevSrc = images[index === 0 ? last : index - 1] || "";
  const nextSrc = images[index === last ? 0 : index + 1] || "";

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? last : i - 1));
  }, [last]);

  const goNext = useCallback(() => {
    setIndex((i) => (i >= last ? 0 : i + 1));
  }, [last]);

  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  useEffect(() => {
    if (!open) return undefined;
    preload(prevSrc);
    preload(nextSrc);
    return undefined;
  }, [open, prevSrc, nextSrc]);

  if (!open || !images.length) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 text-2xl leading-none text-white/80 transition-opacity hover:opacity-70"
        aria-label="Close"
      >
        ×
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 py-2 text-3xl text-white/80 transition-opacity hover:opacity-70 md:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 py-2 text-3xl text-white/80 transition-opacity hover:opacity-70 md:right-6"
            aria-label="Next photo"
          >
            ›
          </button>
        </>
      )}

      <img
        src={src}
        alt={`${alt} ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[86vh] max-w-[92vw] object-contain"
        decoding="async"
      />

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}