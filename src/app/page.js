import Link from "next/link";
import { ceremonies, loveStories, testimonials, films } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import FilmPlayer from "@/components/FilmPlayer";
import Reveal from "@/components/Reveal";

const heroImg = "/videos/hero.mp4";
const mehendiHands =
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80";
const filmBg =
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80";
const kindBg =
  "https://images.unsplash.com/photo-1490750967868-88aa4c76ea0e?auto=format&fit=crop&w=2000&q=80";
const polaroid1 =
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80";
const polaroid2 =
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100vh] overflow-hidden text-white">
        <video
          src={heroImg}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Indian wedding couple"
          className="absolute inset-0 h-full w-full object-cover kenburns"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 lg:px-10">
          <p className="anim-up section-label text-[#e8d4b0]">
            INDIAN WEDDING PHOTOGRAPHY & FILMS
          </p>
          <h1 className="anim-up-d1 mt-4 max-w-xl font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            YOUR
            <br />
            STORY
            <br />
            OUR ART
          </h1>
          <p className="anim-up-d2 mt-6 max-w-md text-sm leading-relaxed text-[#f0e4d4] md:text-base">
            Capturing the chaos, the colors, the emotions
            <br />
            and everything in between.
          </p>
          <Link href="/love-stories" className="anim-up-d3 btn-pill mt-8 w-fit">
            Explore Our Stories <span>→</span>
          </Link>
        </div>

        <blockquote className="absolute right-8 top-1/3 z-10 hidden max-w-[200px] text-right md:block">
          <p className="script float-slow text-2xl leading-snug text-[#f7ead8]">
            “Some moments deserve forever.”
          </p>
        </blockquote>
      </section>

      <section className="relative overflow-hidden bg-[#f7f1e8] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              WE DON’T JUST
              <br />
              PHOTOGRAPH WEDDINGS.
            </h2>
            <p className="script mt-3 text-3xl text-[#9a6b2f] md:text-4xl">
              We preserve how they felt.
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#4a4038]">
              Every laugh, every tear, every nervous smile, every little moment
              that happened between the big ones. Because years from now, these
              will be the memories that matter the most.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={mehendiHands}
                alt="Mehendi and jewellery"
                className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <Link
                  href="/story"
                  className="flex flex-col items-center gap-2 text-white"
                >
                  <span className="play-pulse flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/15 backdrop-blur-sm text-xl">
                    ▶
                  </span>
                  <span className="text-[11px] tracking-[0.25em]">
                    PLAY OUR STORY
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 flex flex-col items-center justify-between gap-3 md:flex-row">
            <h3 className="section-label text-[#6b5a42]">
              THE WEDDING JOURNEY
            </h3>
            <p className="script text-lg text-[#6b5a42]">
              Different rituals. A single beautiful story.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {ceremonies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70}>
                <Link
                  href={`/ceremonies/${c.slug}`}
                  className="card-hover group block overflow-hidden rounded-sm bg-white"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-end justify-between p-3">
                    <div>
                      <div className="text-[11px] font-medium tracking-[0.14em]">
                        {c.title.toUpperCase()}
                      </div>
                      <div className="mt-1 text-[11px] text-[#6b5f52]">
                        {c.tagline}
                      </div>
                    </div>
                    <span className="text-[#9a6b2f] transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 text-white lg:px-10">
        <img
          src={filmBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="dark-film absolute inset-0" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="section-label text-[#e8d4b0]">WEDDING FILMS</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Relive the emotions
              <br />
              in motion.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#eadccb]">
              Cinematic wedding films that bring your story to life. Press play
              — the film opens here, on this page.
            </p>
            <Link href="/films" className="btn-pill mt-8">
              ▶ Watch Our Films
            </Link>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-sm border border-white/10 bg-black/40 shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 text-[11px] text-[#ddd]">
                <span>{films[0].couple}</span>
                <span>Watch in site</span>
              </div>
              <FilmPlayer film={films[0]} compact />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f1e8] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-8 text-center">
            <p className="section-label">REAL LOVE STORIES</p>
            <p className="script mt-2 text-lg text-[#6b5a42]">
              Every couple. A different universe.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {loveStories.slice(0, 4).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/love-stories/${s.slug}`}
                  className="card-hover block overflow-hidden rounded-sm bg-white"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.names}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-medium">{s.names}</div>
                    <div className="text-xs text-[#6b5f52]">{s.city}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <Link
                href="/love-stories"
                className="flex min-h-44 flex-col items-center justify-center rounded-sm border border-[#e3d8c8] bg-[#fbf7f0] text-sm text-[#4a4038] transition hover:-translate-y-1 hover:bg-white"
              >
                View All Stories
                <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#c9b79a]">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 text-white">
        <img
          src={kindBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1010]/78" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.4fr_1fr]">
          <div className="hidden justify-center md:flex">
            <div className="polaroid float-slow w-44">
              <img
                src={polaroid1}
                alt=""
                className="h-44 w-full object-cover"
              />
            </div>
          </div>
          <TestimonialSlider items={testimonials} />
          <div className="hidden justify-center md:flex">
            <div
              className="polaroid r w-44"
              style={{ animation: "floaty 5s ease-in-out 0.6s infinite" }}
            >
              <img
                src={polaroid2}
                alt=""
                className="h-44 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-[#f7f1e8] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr_0.6fr]">
          <Reveal>
            <p className="section-label">LET’S CREATE YOUR STORY</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Ready to make memories?
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#4a4038]">
              Choose WhatsApp, Telegram or Email, fill in the details, and we
              receive your story on the channel you prefer.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>
          <Reveal delay={160} className="hidden items-center lg:flex">
            <p className="script text-3xl leading-tight text-[#6b2430]">
              “Let’s tell your story together.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
