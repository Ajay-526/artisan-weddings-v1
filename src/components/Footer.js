import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1210] text-[#f3e9dc]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Artisan Weddings"
            width={42}
            height={42}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="font-serif text-[12px] tracking-[0.16em]">ARTISAN WEDDINGS</div>
            <div className="text-[9px] tracking-[0.24em] text-[#d4b483]">STORIES FOR A LIFETIME</div>
          </div>
        </Link>
        <nav className="flex flex-wrap justify-center gap-5 text-xs text-[#e8dccb]">
          <Link href="/">Home</Link>
          <Link href="/ceremonies">Ceremonies</Link>
          <Link href="/films">Films</Link>
          <Link href="/love-stories">Love Stories</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-4 text-xs text-[#cbbba6]">
          <span>Weddings across India</span>
          <span>© 2026 Artisan Weddings</span>
        </div>
      </div>
    </footer>
  );
}
