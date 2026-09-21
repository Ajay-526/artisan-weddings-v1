import Image from "next/image";

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

const photos = [
  {
    src: `${s3ImagesUrl}/photos/1.webp`,
    alt: "Bride and groom walking together after their ceremony",
    label: "The quiet before the celebration",
    size: "h-[28rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/2.webp`,
    alt: "Bride's hands decorated with mehendi",
    label: "Small details, held close",
    size: "h-72",
  },
  {
    src: `${s3ImagesUrl}/photos/3.webp`,
    alt: "Wedding couple embracing outdoors",
    label: "A moment that found its own light",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/4.webp`,
    alt: "Bride in traditional wedding clothing",
    label: "The pause between rituals",
    size: "h-80",
  },
  {
    src: `${s3ImagesUrl}/photos/5.webp`,
    alt: "Wedding rings and flowers",
    label: "Something borrowed from the morning",
    size: "h-64",
  },
  {
    src: `${s3ImagesUrl}/photos/6.webp`,
    alt: "Couple sharing a joyful moment",
    label: "Laughter, exactly as it happened",
    size: "h-[28rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/7.webp`,
    alt: "Wedding couple surrounded by warm light",
    label: "When the room softened around them",
    size: "h-80",
  },
  {
    src: `${s3ImagesUrl}/photos/8.webp`,
    alt: "Wedding ceremony floral arrangement",
    label: "Colour in every corner",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/9.webp`,
    alt: "Couple holding hands in a garden",
    label: "The tenderness of an ordinary second",
    size: "h-72",
  },
  {
    src: `${s3ImagesUrl}/photos/10.webp`,
    alt: "Bride smiling during a wedding celebration",
    label: "Joy, without an audience",
    size: "h-[27rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/11.webp`,
    alt: "Wedding guests celebrating together",
    label: "The people who make it yours",
    size: "h-80",
  },
  {
    src: `${s3ImagesUrl}/photos/12.webp`,
    alt: "Bride and groom sharing a quiet look",
    label: "A glance that said everything",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/13.webp`,
    alt: "Bride in traditional attire during a portrait",
    label: "Portraits with room to breathe",
    size: "h-[28rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/14.webp`,
    alt: "Wedding celebration with friends",
    label: "The dance keeps going",
    size: "h-72",
  },
  {
    src: `${s3ImagesUrl}/photos/15.webp`,
    alt: "Couple walking through a wedding venue",
    label: "Together, into the next chapter",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/16.webp`,
    alt: "Wedding table set with flowers and candles",
    label: "Before the first guest arrives",
    size: "h-64",
  },
  //   {
  //     src: "https://pxaulx4cif1wet0u.public.blob.vercel-storage.com/photos/17.jpg",
  //     alt: "Bride laughing during a wedding portrait",
  //     label: "The photographs we wait for",
  //     size: "h-[27rem]",
  //   },
  //   {
  //     src: "https://pxaulx4cif1wet0u.public.blob.vercel-storage.com/photos/18.jpg",
  //     alt: "Newlyweds walking through a sunlit field",
  //     label: "A little wild, a lot in love",
  //     size: "h-80",
  //   },
  //   {
  //     src: "https://pxaulx4cif1wet0u.public.blob.vercel-storage.com/photos/19.jpg",
  //     alt: "Couple standing close together outdoors",
  //     label: "Nothing staged, nothing missing",
  //     size: "h-96",
  //   },
  //   {
  //     src: "https://pxaulx4cif1wet0u.public.blob.vercel-storage.com/photos/20.jpg",
  //     alt: "Wedding table filled with flowers",
  //     label: "A table full of stories",
  //     size: "h-72",
  //   },
];

const photoDimensions = [
  [1800, 1200],
  [1800, 1200],
  [1800, 1200],
  [1800, 1200],
  [1800, 1156],
  [1800, 2700],
  [1800, 2700],
  [1800, 1200],
  [1800, 1200],
  [1800, 1200],
  [1800, 2698],
  [1800, 1200],
  [1800, 2700],
  [1800, 2700],
  [1800, 1200],
  [1800, 2700],
];

export const metadata = {
  title: "Photos",
  description:
    "A collection of honest, editorial wedding photographs by Artisan Weddings.",
  alternates: { canonical: "/photos" },
};

export default function PhotosPage() {
  return (
    <main className="bg-[#f7f1e8] lg:pt-0 pt-20 text-[#211916]">
      <header className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
        <p className="section-label">THE ART OF NOTICING</p>
        <h1 className="mt-4 font-serif text-5xl leading-[0.95] md:text-7xl">
          The moments
          <br />
          <em>in between.</em>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#766158] md:text-lg">
          We work as quiet observers, close enough to feel the room and patient
          enough to let it unfold. The best photographs are often fleeting:
          laughter that escapes between rituals, a hand finding another hand, a
          look that belongs only to two people.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#766158] md:text-lg">
          Our editorial approach brings polish without taking away the truth.
          Each frame is made to feel timeless, so years from now you can return
          to the warmth, the wildness, and the people who made the day yours.
        </p>
      </header>

      <section
        className="mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-10"
        aria-label="Wedding photo gallery"
      >
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <figure
              key={`${photo.src}-${index}`}
              className="group mb-4 break-inside-avoid"
            >
              <div className="group relative overflow-hidden bg-[#e7dbcc]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photoDimensions[index][0]}
                  height={photoDimensions[index][1]}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-contain transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-sm text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.label}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
