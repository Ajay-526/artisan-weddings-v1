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

const leftLinks = links.slice(0, 4);
const rightLinks = links.slice(3);

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
      className={`inset-x-0 top-0 z-50 border-b border-[#d4b483]/20 bg-[#1c1410]/95 backdrop-blur-md transition-all duration-500 ${
        solid ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-10 px-5 py-2 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
        <nav className="hidden w-full items-center justify-end gap-10 lg:flex">
          {leftLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "opacity-100" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex items-center gap-3 lg:justify-self-center"
        >
          <Image
            src="/Artisan Weddings.png"
            alt="Artisan Weddings"
            width={80}
            height={80}
            // className="h-10 w-10 rounded-full object-cover ring-1 ring-[#d4b483]/50"
          />
          {/* <div className="leading-tight">
            <div className="font-serif text-[13px] tracking-[0.18em] text-[#f6efe4]">
              ARTISAN WEDDINGS
            </div>
            <div className="text-[9px] tracking-[0.28em] text-[#d4b483]">
              STORIES FOR A LIFETIME
            </div>
          </div> */}
        </Link>

        <div className="flex items-center gap-10 lg:static lg:w-full lg:justify-start">
          <nav className="hidden items-center justify-start gap-10 lg:flex">
            {rightLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "opacity-100" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* <Link
            href="/contact"
            className="hidden rounded-full border border-[#e8d7b8]/50 px-4 py-1.5 text-xs tracking-wide text-[#f6efe4] transition hover:bg-white/10 md:inline-flex"
          >
            Enquire Now
          </Link>
          <button
            className="lg:hidden text-[#f6efe4] text-2xl px-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? "×" : "☰"}
          </button> */}
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
                className="py-1 text-base text-[#f6efe4]"
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
