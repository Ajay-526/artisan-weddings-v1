"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Our Story" },
  { href: "/ceremonies", label: "Ceremonies" },
  { href: "/films", label: "Films" },
  { href: "/love-stories", label: "Love Stories" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#1c1410]/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Artisan Weddings"
            width={46}
            height={46}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-[#d4b483]/50"
          />
          <div className="leading-tight">
            <div className="font-serif text-[13px] tracking-[0.18em] text-[#f6efe4]">
              ARTISAN WEDDINGS
            </div>
            <div className="text-[9px] tracking-[0.28em] text-[#d4b483]">
              STORIES FOR A LIFETIME
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "opacity-100" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-[#e8d7b8]/50 px-4 py-2 text-xs tracking-wide text-[#f6efe4] transition hover:bg-white/10 md:inline-flex"
          >
            Enquire Now
          </Link>
          <button
            className="lg:hidden text-[#f6efe4] text-2xl px-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#1c1410] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#f6efe4] text-sm py-1"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
