import { studio, socialLinks } from "@/lib/studio";
const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;
const normalizeUrl = (url) => url.replace(/\/+$/, "");
const baseUrl = normalizeUrl(studio.siteUrl);

export const siteConfig = {
  name: "Artisan Weddings",
  shortName: "Artisan Weddings",
  tagline: "Stories for a Lifetime",
  description:
    "Indian wedding photography and cinematic wedding films across India. We don't just photograph weddings — we preserve how they felt.",
  url: baseUrl,
  locale: "en_IN",
  language: "en-IN",
  email: studio.email,
  phone: studio.phone || undefined,
  sameAs: socialLinks(),
  defaultOgImage: `${s3ImagesUrl?.replace(/\/+$/, "")}/Artisan+Weddings+Black.jpg`,
};

export function pageMeta({
  title,
  description = siteConfig.description,
  path = "/",
  image,
  noIndex = false,
}) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(cleanPath, `${siteConfig.url}/`).toString();
  const ogImage = image || siteConfig.defaultOgImage;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: fullTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}
