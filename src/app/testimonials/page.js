import Image from "next/image";
import { testimonials } from "@/lib/data";

export const metadata = {
  title: "Testimonials",
  description:
    "What couples across India say about Artisan Weddings photography and films.",
  alternates: { canonical: "/testimonials" },
};

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

const testimonialPhotos = [
  {
    src: `${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image13.webp`,
    alt: "A newlywed couple sharing a quiet smile",
  },
  {
    src: `${s3ImagesUrl}/love+stories/sindhu%2Bneeshal/image5.webp`,
    alt: "A wedding couple beneath celebration lights",
  },
  {
    src: `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image13.webp`,
    alt: "Wedding hands and henna details",
  },
  {
    src: `${s3ImagesUrl}/love+stories/tejashwini%2Bvedanthreddy/image3.webp`,
    alt: "A couple framed in a wedding portrait",
    monochrome: true,
  },
  {
    src: `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image3.webp`,
    alt: "Wedding couple sharing a quiet look",
    monochrome: true,
  },
];

export default function TestimonialsPage() {
  return (
    <article className="overflow-hidden bg-[#faf7f1] pt-[63px] text-[#29221e] lg:pt-0">
      <header className="relative isolate min-h-[18rem] overflow-hidden px-6 py-14 sm:min-h-[22rem] lg:px-16 lg:py-16">
        <Image
          src={`${s3ImagesUrl}/ceremonies/engagement/image21.webp`}
          alt="Wedding stationery and flowers"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,247,241,0.98)_0%,rgba(250,247,241,0.93)_37%,rgba(250,247,241,0.25)_80%)]" />
        <div className="mx-auto flex min-h-[11rem] max-w-7xl flex-col justify-center">
          <p className="section-label flex items-center gap-4 text-[#9b6b38]">
            <span>KIND WORDS</span>
            <span className="h-px w-14 bg-[#ad7b44]" />
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Stories that
            <br />
            stay with us
          </h1>
          <p className="mt-5 text-lg text-[#726c67]">
            Real couples. Real emotions. Real stories.
          </p>
        </div>
      </header>

      <section className="relative px-6 py-12 sm:py-16 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_26%,#fffdf9_0%,#faf7f1_54%,#f0e9df_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="space-y-8 sm:space-y-12">
            {testimonials.map((testimonial, index) => {
              const photo = testimonialPhotos[index];
              const imageOnRight = index % 2 === 1;

              return (
                <article
                  key={testimonial.names}
                  className={`grid items-center gap-9 border-b border-[#e9e0d5] py-8 sm:gap-12 sm:py-10 lg:grid-cols-[minmax(17rem,0.82fr)_minmax(0,1.18fr)] lg:gap-20 ${imageOnRight ? "lg:[&_.testimonial-copy]:order-1 lg:[&_.testimonial-photo]:order-2" : ""}`}
                >
                  <div className="testimonial-photo relative mx-auto w-full max-w-sm">
                    <div
                      className={`absolute inset-x-[-1.15rem] bottom-[-1rem] h-[88%] bg-[#eee4d4] ${imageOnRight ? "right-[-1.15rem] left-auto" : "left-[-1.15rem] right-auto"}`}
                    />
                    <div className="relative aspect-[1.35] overflow-hidden shadow-[0_10px_22px_rgba(68,50,33,0.10)]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 32vw"
                        className={`object-cover ${photo.monochrome ? "grayscale" : ""}`}
                      />
                    </div>
                  </div>

                  <blockquote className="testimonial-copy relative max-w-2xl">
                    <span className="absolute -left-1 -top-7 font-serif text-6xl leading-none text-[#e8decd] sm:-left-10 sm:-top-4">
                      “
                    </span>
                    <p className="script relative text-[1.55rem] leading-[1.42] text-[#332a25] sm:text-[1.85rem]">
                      {testimonial.quote}
                    </p>
                    <footer className="mt-7 flex items-start gap-5">
                      <span className="mt-3 h-px w-10 shrink-0 bg-[#9d8065]" />
                      <div>
                        <p className="text-lg text-[#2d2521]">
                          {testimonial.names}
                        </p>
                        {/* <p className="mt-1 text-[0.68rem] font-medium tracking-[0.28em] text-[#83766b]">
                          {testimonial.city.toUpperCase()}
                        </p> */}
                      </div>
                    </footer>
                  </blockquote>
                </article>
              );
            })}
          </div>

          <div className="relative mx-auto mt-20 max-w-3xl pb-20 pt-10 text-center sm:mt-28">
            <div className="mx-auto h-px w-12 bg-[#a57a4c]" />
            <p className="section-label mt-7 text-[#a06d32]">THANK YOU</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
              Your stories inspire us
              <br />
              to do what we love.
            </h2>
            <p className="script absolute -bottom-1 left-0 hidden -rotate-[14deg] text-3xl leading-none text-[#c2aa8d] lg:block">
              More
              <br />
              than just
              <br />
              photos ♡
            </p>
            <div className="absolute bottom-2 right-0 hidden text-left lg:block">
              <p className="text-[0.65rem] leading-5 tracking-[0.25em] text-[#9b8e83]">
                REAL
                <br />
                PEOPLE
                <br />
                REAL STORIES
              </p>
              <span className="mt-4 block h-px w-12 bg-[#aa9278]" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
