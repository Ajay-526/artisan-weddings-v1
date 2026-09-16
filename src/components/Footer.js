import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { studio } from "@/lib/studio";

const socialLinks = [
  { label: "Instagram", href: studio.instagram, icon: faInstagram },
  { label: "YouTube", href: studio.youtube, icon: faYoutube },
  { label: "Facebook", href: studio.facebook, icon: faFacebook },
  { label: "Pinterest", href: studio.pinterest, icon: faPinterest },
].filter((link) => link.href);

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#1a1210] text-[#f3e9dc]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Artisan Weddings.png"
            alt="Artisan Weddings"
            width={42}
            height={42}
            className="h-20 w-auto rounded-full object-cover"
          />
          <div>
            <div className="font-serif text-[12px] tracking-[0.16em]">
              ARTISAN WEDDINGS
            </div>
            <div className="text-[9px] tracking-[0.24em] text-[#d4b483]">
              STORIES FOR A LIFETIME
            </div>
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
        {socialLinks.length > 0 && (
          <nav
            aria-label="Social media"
            className="flex flex-wrap justify-center gap-5 text-sm text-[#d4b483]"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b483]/60 bg-[#d4b483]/15 transition hover:border-[#f3e9dc] hover:bg-[#d4b483]/30"
              >
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-4 text-xs text-[#cbbba6]">
          <span>Weddings across India</span>
          <span>© 2026 Artisan Weddings</span>
        </div>
      </div>
    </footer>
  );
}
