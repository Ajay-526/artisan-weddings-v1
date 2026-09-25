"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoViewer from "@/components/PhotoViewer";

function preload(src) {
  if (!src) return;
  const img = new window.Image();
  img.src = src;
}

export default function PhotosAlbum({ photos, photoDimensions }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section
      className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-10"
      aria-label="Wedding photo gallery"
    >
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => {
          const [width, height] = photoDimensions[i];

          return (
            <figure
              key={`${photo.src}-${i}`}
              className="group mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                onMouseEnter={() => preload(photo.src)}
                onFocus={() => preload(photo.src)}
                className="group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-[#e7dbcc] p-0"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={width}
                  height={height}
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-contain transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 right-4 translate-y-2 text-left text-sm text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.label}
                </span>
              </button>
            </figure>
          );
        })}
      </div>

      <PhotoViewer
        images={photos.map((photo) => photo.src)}
        startIndex={index}
        open={open}
        onClose={() => setOpen(false)}
        alt="Wedding photograph"
      />
    </section>
  );
}