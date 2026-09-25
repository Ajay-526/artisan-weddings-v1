import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { studio } from "@/lib/studio";

export const metadata = {
  title: "Our Story",
  description:
    "Why Artisan Weddings photographs Indian weddings as they are felt — quiet work, true frames, films that remember.",
  alternates: { canonical: "/story" },
};

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

const team = [
  {
    name: "Ajay",
    role: "Photographer",
    note: "Finds beauty in the in-between moments.",
    image: `${s3ImagesUrl}/photos/6.webp`,
    socials: [
      {
        label: "Instagram",
        href: "https://instagram.com/artisanweddings",
        icon: faInstagram,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/artisanweddings",
        icon: faLinkedinIn,
      },
    ],
  },
  {
    name: "Shruti",
    role: "Filmmaker",
    note: "Turns emotions into timeless films.",
    image: `${s3ImagesUrl}/photos/9.webp`,
    socials: [
      {
        label: "Instagram",
        href: "https://instagram.com/artisanweddings",
        icon: faInstagram,
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/artisanweddings",
        icon: faLinkedinIn,
      },
    ],
  },
];

function SocialMarks() {
  return (
    <div
      className="mt-7 flex items-center gap-5 text-[#5d4635]"
      aria-label="Social profiles"
    >
      <span className="text-xl" aria-label="Instagram">
        ◎
      </span>
      <span
        className="flex h-5 w-6 items-center justify-center rounded-[5px] bg-[#5d4635] text-[10px] text-[#faf7f1]"
        aria-label="YouTube"
      >
        ▶
      </span>
      <span className="text-xl" aria-label="Website">
        ◎
      </span>
    </div>
  );
}

function SocialLinks({ links }) {
  const activeLinks = links.filter(({ href }) => Boolean(href));

  return (
    <div
      className="mt-7 flex flex-wrap items-center gap-3"
      aria-label="Social profiles"
    >
      {activeLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#9a8069] text-[#5d4635] transition hover:border-[#9d6b38] hover:bg-[#9d6b38] hover:text-white"
          aria-label={label}
          title={label}
        >
          <FontAwesomeIcon icon={icon} className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function StoryPage() {
  return (
    <article className="overflow-hidden bg-[#faf7f1] pt-[63px] text-[#2b241f] lg:pt-0">
      <header className="relative isolate flex min-h-[24rem] items-center overflow-hidden px-6 py-20 text-[#fbf8f2] sm:min-h-[42rem] lg:min-h-[38rem] lg:px-20">
        <Image
          src={`${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image22.webp`}
          alt="Wedding couple sharing a quiet moment"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover  object-[50%_40%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,18,14,0.78)_0%,rgba(26,22,17,0.52)_42%,rgba(26,22,17,0.1)_78%),linear-gradient(0deg,rgba(20,18,14,0.28),transparent_45%)]" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-xl">
            <p className="section-label flex items-center gap-4 text-[#f4eadc]">
              <span>OUR STORY</span>
              <span className="h-px w-14 bg-[#d9c6ad]" />
            </p>
            <h1 className="mt-7 font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-[5.4rem]">
              Why we lift
              <br />
              the camera
            </h1>
            <p className="mt-7 text-xs font-medium tracking-[0.34em] text-[#f3e7d8]">
              PEOPLE · PLACES · REAL EMOTIONS
            </p>
          </div>
          <p className="script absolute right-8 top-1/2 hidden max-w-32 -rotate-[10deg] text-center text-3xl leading-[0.9] text-[#f2e7d8] lg:block">
            More
            <br />
            than just
            <br />
            photos
          </p>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#fffdf9_0%,#faf7f1_52%,#f0e9df_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.1fr)_0.65fr] lg:gap-24">
          <div className="max-w-2xl">
            <blockquote className="script text-[2rem] leading-[1.3] text-[#735442] sm:text-[2.5rem]">
              “A wedding is not an event we cover.
              <br className="hidden sm:block" /> It is a day we are invited to
              remember for you.”
            </blockquote>
            <div className="mt-7 h-px w-20 bg-[#9a8269]" />
            <div className="mt-10 space-y-7 text-lg leading-[1.55] text-[#342d28]">
              <p>
                Artisan Weddings began with a simple dissatisfaction: albums
                full of poses and empty of feeling. We wanted the glance before
                the pheras. The grandmother wiping her eyes in the third row.
                The friend who danced badly and meant it.
              </p>
              <p>
                Today we travel across India — palaces in Udaipur, courtyards in
                Hyderabad, beaches in Goa — working as a small team of
                photographers and filmmakers. We stay quiet. We stay close. We
                treat every ritual as if it has never happened before, because
                for you, it hasn’t.
              </p>
              <p>Our promise is not more pictures. It is truer ones.</p>
            </div>
          </div>

          <div className="relative mx-auto h-[26rem] w-full max-w-sm lg:mt-8">
            <div className="absolute right-2 top-0 w-52 rotate-[9deg] bg-white p-3 pb-8 shadow-[0_16px_32px_rgba(79,55,34,0.17)] sm:w-60">
              <div className="relative aspect-[0.82] overflow-hidden">
                <Image
                  src="/images/ANU_1751.webp"
                  alt="Wedding rings and details"
                  fill
                  sizes="240px"
                  className="object-cover sepia-[.18]"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-2 w-56 -rotate-[8deg] bg-white p-3 pb-8 shadow-[0_16px_32px_rgba(79,55,34,0.18)] sm:w-64">
              <div className="relative aspect-[0.9] overflow-hidden">
                <Image
                  src={`${s3ImagesUrl}/photos/14.webp`}
                  alt="A wedding venue reflected in water"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="absolute bottom-1 right-0 font-display text-4xl italic leading-none text-[#8e6747] sm:text-5xl">
              Real
              <br />
              Stories
            </span>
          </div>
        </div>
      </section>

      {/* <section className="relative overflow-hidden border-t border-[#eee6dc] px-6 py-20 sm:py-28 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,#fffdf9,rgba(246,241,233,0.82)_65%,#ebe5dc)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <p className="section-label text-[#8f684a]">THE PEOPLE BEHIND</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Artisan Weddings
            </h2>
            <div className="mx-auto mt-7 h-px w-12 bg-[#9a7659]" />
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-14 md:grid-cols-2 md:gap-20">
            {team.map((person) => (
              <article
                key={person.name}
                className="grid grid-cols-[12rem_1fr] items-center gap-7 sm:grid-cols-[14rem_1fr] sm:gap-9"
              >
                <div className="relative aspect-[0.72] overflow-hidden rounded-t-full bg-[#e9dfd3] shadow-[0_12px_26px_rgba(82,58,37,0.12)]">
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role} at Artisan Weddings`}
                    fill
                    sizes="(max-width: 640px) 192px, 224px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl sm:text-[2.1rem]">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium tracking-[0.28em] text-[#8f684a]">
                    {person.role.toUpperCase()}
                  </p>
                  <div className="mt-6 h-px w-10 bg-[#a18167]" />
                  <p className="mt-5 max-w-40 text-base leading-6 text-[#463a31]">
                    {person.note}
                  </p>
                  <SocialLinks links={person.socials} />
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-20 h-px w-12 bg-[#9a7659]" />
          <p className="mt-7 text-center text-xs leading-6 tracking-[0.32em] text-[#8f684a]">
            SAME PEOPLE. NEW STORIES.
            <br />
            ALWAYS REAL.
          </p>
        </div>
      </section> */}
    </article>
  );
}
