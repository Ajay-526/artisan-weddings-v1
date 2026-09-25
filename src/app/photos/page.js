import PhotosAlbum from "@/components/photos/LoveStoryAlbum";

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

const photos = [
  {
    src: `${s3ImagesUrl}/photos/1.webp`,
    alt: "Bride and groom walking together after their ceremony",
    size: "h-[28rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/2.webp`,
    alt: "Bride's hands decorated with mehendi",
    size: "h-72",
  },
  {
    src: `${s3ImagesUrl}/photos/3.webp`,
    alt: "Wedding couple embracing outdoors",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/4.webp`,
    alt: "Bride in traditional wedding clothing",
    size: "h-80",
  },
  {
    src: `${s3ImagesUrl}/photos/5.webp`,
    alt: "Wedding rings and flowers",
    size: "h-64",
  },
  {
    src: `${s3ImagesUrl}/photos/6.webp`,
    alt: "Couple sharing a joyful moment",
    size: "h-[28rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/7.webp`,
    alt: "Wedding couple surrounded by warm light",
    size: "h-80",
  },
  {
    src: `${s3ImagesUrl}/photos/8.webp`,
    alt: "Wedding ceremony floral arrangement",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/9.webp`,
    alt: "Couple holding hands in a garden",
    size: "h-72",
  },
  {
    src: `${s3ImagesUrl}/photos/10.webp`,
    alt: "Bride smiling during a wedding celebration",
    size: "h-[27rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/11.webp`,
    alt: "Wedding guests celebrating together",
    size: "h-80",
  },
  {
    src: `${s3ImagesUrl}/photos/12.webp`,
    alt: "Bride and groom sharing a quiet look",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/13.webp`,
    alt: "Bride in traditional attire during a portrait",
    size: "h-[28rem]",
  },
  {
    src: `${s3ImagesUrl}/photos/14.webp`,
    alt: "Wedding celebration with friends",
    size: "h-72",
  },
  {
    src: `${s3ImagesUrl}/photos/15.webp`,
    alt: "Couple walking through a wedding venue",
    size: "h-96",
  },
  {
    src: `${s3ImagesUrl}/photos/16.webp`,
    alt: "Wedding table set with flowers and candles",
    size: "h-64",
  },
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

      <PhotosAlbum photos={photos} photoDimensions={photoDimensions} />
    </main>
  );
}
