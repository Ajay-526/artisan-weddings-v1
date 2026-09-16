import Link from "next/link";
import { ceremonies, loveStories, testimonials, films } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import FilmPlayer from "@/components/FilmPlayer";
import Reveal from "@/components/Reveal";
import ArtisanIntro from "@/components/ArtisanIntro/Artisanintro";
import OurWorkCarousel from "@/components/OurWorkCarousel/OurWorkCarousel";

const heroImg = "videos/Website reel.mp4";
const mehendiHands =
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=80";
const filmBg =
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80";
const kindBg =
  "https://images.unsplash.com/photo-1629756048377-09540f52caa1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const polaroid1 =
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80";
const polaroid2 =
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80";

export default function Home() {
  return (
    <>
      <section className="relative z-0 min-h-[calc(100vh-80px)] isolate overflow-hidden text-white">
        <video
          src={heroImg}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Indian wedding couple"
          className="fixed inset-0 z-0 h-full w-full object-cover kenburns"
        />
        <div className="hero-overlay fixed inset-0 z-0" />
        <div className="grain fixed inset-0 z-0" />

        {/* <div className="fixed inset-0 z-10 mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 lg:px-10">
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
        </div> */}

        <blockquote className="fixed right-8 top-1/3 z-10 hidden max-w-[200px] text-right md:block">
          <p className="script float-slow text-2xl leading-snug text-[#f7ead8]">
            “Some moments deserve forever.”
          </p>
        </blockquote>
      </section>

      <div className="relative z-10">
        <ArtisanIntro />

        <section className="relative lg:min-h-screen overflow-hidden px-6 py-20 text-white lg:px-10">
          <img
            src={filmBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="dark-film absolute inset-0" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
            {/* <Reveal className="flex flex-col items-center">
              <p className="section-label text-[#e8d4b0]">WEDDING FILMS</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Relive the emotions
                <br />
                in motion.
              </h2>
            </Reveal> */}
            <Reveal delay={140} className=" w-full sm:-mt-6">
              <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-sm border border-white/10 bg-black/40 shadow-2xl">
                <FilmPlayer film={films[0]} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* <section className="bg-[#f7f1e8] px-6 py-16 lg:px-10">
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
        </section> */}
        <OurWorkCarousel />

        <section className="testimonial-section relative isolate overflow-hidden bg-[#f7f4ee] px-5 py-20 sm:py-24 lg:min-h-screen lg:px-10 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(255,255,255,0.98),rgba(247,244,238,0.72)_44%,rgba(229,222,210,0.48))]" />
          <p className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-serif text-[10rem] leading-none tracking-[0.13em] text-[#e5ddd1]/65 lg:block">
            TESTIMONIALS
          </p>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="text-center">
              <p className="section-label text-[#8f5d26]">KIND WORDS</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#25201e] sm:text-5xl lg:text-[4rem]">
                Stories from our couples
              </h2>
              <p className="mt-3 text-base text-[#706b69] sm:text-lg">
                Real moments. Real people. Unforgettable stories.
              </p>
              <div
                className="mt-6 flex items-center justify-center gap-3 text-[#aa722f]"
                aria-hidden="true"
              >
                <span className="h-px w-16 bg-[#b88342]" />
                <span className="text-2xl leading-none">♡</span>
                <span className="h-px w-16 bg-[#b88342]" />
              </div>
            </div>

            <div className="relative mx-auto mt-8 grid max-w-6xl items-center lg:mt-7 lg:grid-cols-[1fr_minmax(0,1.65fr)_1fr] lg:gap-10">
              <div className="pointer-events-none absolute -left-24 top-1/4 hidden rotate-[-16deg] font-display text-4xl italic leading-none text-[#b9a58a]/80 lg:block">
                More
                <br />
                than just
                <br />
                photos
              </div>
              <div className="pointer-events-none absolute -right-20 top-1/4 hidden rotate-[12deg] font-display text-4xl italic leading-none text-[#b9a58a]/80 lg:block">
                Real
                <br />
                Stories
                <br />♡
              </div>

              <div className="hidden lg:block">
                <div className="polaroid float-slow relative z-10 ml-auto w-48 -rotate-[8deg] bg-white p-3 pb-7 shadow-[0_18px_30px_rgba(60,45,29,0.20)]">
                  <img
                    src="/photos/7.webp"
                    alt="Newlyweds sharing a moment"
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="polaroid relative -mt-12 ml-0 w-32 rotate-[7deg] bg-white p-2 pb-5 shadow-[0_14px_28px_rgba(60,45,29,0.18)]">
                  <img
                    src="/photos/10.webp"
                    alt="Wedding detail"
                    className="h-32 w-full object-cover grayscale"
                  />
                </div>
              </div>

              <TestimonialSlider items={testimonials} />

              <div className="hidden lg:block">
                <div className="polaroid r float-slow relative z-10 mr-auto w-48 rotate-[8deg] bg-white p-3 pb-7 shadow-[0_18px_30px_rgba(60,45,29,0.20)]">
                  <img
                    src="/photos/13.webp"
                    alt="Wedding venue at sunset"
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="polaroid r relative -mt-16 ml-28 w-32 -rotate-[6deg] bg-white p-2 pb-5 shadow-[0_14px_28px_rgba(60,45,29,0.18)]">
                  <img
                    src="/photos/15.webp"
                    alt="Wedding flowers"
                    className="h-32 w-full object-cover"
                  />
                </div>
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
      </div>
    </>
  );
}
