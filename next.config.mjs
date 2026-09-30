/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF is ~20-30% smaller than WebP; browsers without AVIF get WebP.
    formats: ["image/avif", "image/webp"],
    // Photos rarely change, so keep optimized copies cached for 30 days
    // instead of the 4-hour default.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      {
        protocol: "https",
        hostname: "pxaulx4cif1wet0u.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "dkr99ixtwl51t.cloudfront.net",
        pathname: "/**",
      },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    qualities: [75, 80, 85],
  },
  async headers() {
    return [
      {
        // Baseline security headers (HSTS is already sent by Vercel).
        // A full Content-Security-Policy is an open item in DPDP_PROGRESS.md.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
      {
        // Hero video and other static media in /public never change in place.
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
