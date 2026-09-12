import { studio, socialLinks } from "@/lib/studio";

export const siteConfig = {
  name: "Artisan Weddings",
  shortName: "Artisan Weddings",
  tagline: "Stories for a Lifetime",
  description:
    "Indian wedding photography and cinematic wedding films across India. We don't just photograph weddings — we preserve how they felt.",
  url: studio.siteUrl,
  locale: "en_IN",
  language: "en-IN",
  email: studio.email,
  phone: studio.phone || undefined,
  sameAs: socialLinks(),
  defaultOgImage:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
};

export function pageMeta({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}) {
  const url = new URL(path, siteConfig.url).toString();
  const ogImage = image || siteConfig.defaultOgImage;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
