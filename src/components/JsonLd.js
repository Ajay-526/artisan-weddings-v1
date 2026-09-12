import { siteConfig } from "@/lib/seo";

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#studio`,
        name: siteConfig.name,
        alternateName: siteConfig.tagline,
        url: siteConfig.url,
        image: siteConfig.defaultOgImage,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        description: siteConfig.description,
        areaServed: { "@type": "Country", name: "India" },
        priceRange: "$$",
        sameAs: siteConfig.sameAs,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Wedding coverage",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Wedding photography" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cinematic wedding films",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Ceremony coverage" },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#studio` },
        inLanguage: siteConfig.language,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
