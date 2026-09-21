"use client";

import { useState } from "react";

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

export default function TestimonialSlider({ items }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const previous = () => setI((n) => (n - 1 + items.length) % items.length);
  const next = () => setI((n) => (n + 1) % items.length);

  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div className="relative flex h-[35rem] items-center rounded-[1.65rem] border border-white/80 bg-white/80 px-8 py-11 text-[#282321] shadow-[0_18px_45px_rgba(75,56,35,0.10)] backdrop-blur-sm sm:h-[31rem] sm:px-16 sm:py-12">
        <span
          className="absolute left-7 top-[6.75rem] font-serif text-6xl leading-none text-[#e9dfd1] sm:left-10 sm:text-7xl"
          aria-hidden="true"
        >
          “
        </span>
        <span
          className="absolute bottom-6 right-8 font-serif text-6xl leading-none text-[#e9dfd1] sm:right-10 sm:text-7xl"
          aria-hidden="true"
        >
          ”
        </span>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-md">
            <img
              src={`${s3ImagesUrl}/photos/3.webp`}
              alt="Happy wedding couple"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="mt-3 font-serif text-2xl font-medium sm:text-[1.7rem]">
            {t.names}
          </h3>
          <p className="mt-1 text-[0.68rem] font-medium tracking-[0.30em] text-[#a87336]">
            {t.city.toUpperCase()}
          </p>
          <div
            className="mt-5 flex gap-1 text-[#af7833]"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
          <p className="script mt-5 max-w-[31rem] text-[1.35rem] leading-[1.48] text-[#342c28] sm:text-[1.55rem]">
            {t.quote}
          </p>
        </div>
      </div>

      <button
        onClick={previous}
        className="absolute left-0 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee8df] bg-white text-3xl text-[#211d1a] shadow-[0_8px_18px_rgba(75,56,35,0.12)] transition hover:-translate-x-[60%] hover:bg-[#fcfaf6]"
        aria-label="Previous testimonial"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 flex h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee8df] bg-white text-3xl text-[#211d1a] shadow-[0_8px_18px_rgba(75,56,35,0.12)] transition hover:translate-x-[60%] hover:bg-[#fcfaf6]"
        aria-label="Next testimonial"
      >
        ›
      </button>

      <div className="mt-7 flex justify-center gap-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-3 w-3 rounded-full transition ${idx === i ? "bg-[#ad7837]" : "bg-[#ded8d0] hover:bg-[#c9bfb3]"}`}
            aria-label={`Show testimonial ${idx + 1}`}
            aria-current={idx === i ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
