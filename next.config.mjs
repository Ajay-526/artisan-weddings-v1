/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      {
        protocol: "https",
        hostname: "pxaulx4cif1wet0u.public.blob.vercel-storage.com",
      },
    ],
    qualities: [75, 85],
  },
};

export default nextConfig;
