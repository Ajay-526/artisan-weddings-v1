"use client";

import { useState } from "react";

export default function TestimonialSlider({ items }) {
  const [i, setI] = useState(0);
  const t = items[i];

  return (
    <div className="text-center px-2">
      <p className="section-label text-[#e8d4b0]">KIND WORDS</p>
      <h2 className="mt-2 font-serif text-3xl md:text-4xl">What our couples say</h2>
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() => setI((n) => (n - 1 + items.length) % items.length)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40"
          aria-label="Previous"
        >
          ←
        </button>
        <div>
          <p className="script text-xl leading-relaxed text-[#f6eadc] md:text-2xl">
            “{t.quote}”
          </p>
          <p className="mt-4 text-sm text-[#e8d4b0]">
            — {t.names}, {t.city}
          </p>
        </div>
        <button
          onClick={() => setI((n) => (n + 1) % items.length)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40"
          aria-label="Next"
        >
          →
        </button>
      </div>
      <div className="mt-5 flex justify-center gap-1.5">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1.5 w-1.5 rounded-full ${idx === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
