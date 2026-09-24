"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoViewer from "@/components/PhotoViewer";

const photoDimensions = [
  [1800, 1200],
  [1800, 1200],
  [1800, 1200],
  [1800, 1200],
  [1800, 1156],
  [1800, 2700],
  [1800, 2700],
  [1800, 1200],
  [1800, 1200],
  [1800, 1200],
  [1800, 2698],
  [1800, 1200],
  [1800, 2700],
  [1800, 2700],
  [1800, 1200],
  [1800, 2700],
];

export default function LoveStoryAlbum({ names, collage }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-[#f4eee4] px-6 lg:px-15 py-16">
      <div className="mx-auto ">
        <p className="section-label">THE ALBUM</p>

        <h2 className="mt-2 font-serif text-3xl">
          A collage from their days
        </h2>

        <div className="mt-8 columns-1 gap-4 sm:columns-3">
          {collage.map((src, i) => {
            const [width, height] =
              photoDimensions[i % photoDimensions.length];

            return (
              <figure
                key={`${src}-${i}`}
                className="group mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                  className="relative block w-full overflow-hidden border-0 bg-[#e7dbcc] p-0 cursor-zoom-in"
                >
                  <Image
                    src={src}
                    alt={`${names} wedding photograph ${i + 1}`}
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-contain transition duration-700 group-hover:scale-105"
                  />
                </button>
              </figure>
            );
          })}
        </div>
      </div>

      <PhotoViewer
        images={collage}
        startIndex={index}
        open={open}
        onClose={() => setOpen(false)}
        alt={`${names} wedding photograph`}
      />
    </section>
  );
}