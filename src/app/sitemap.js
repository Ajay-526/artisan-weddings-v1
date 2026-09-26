import { ceremonies, films, loveStories } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/story",
    "/photos",
    "/ceremonies",
    "/films",
    "/love-stories",
    "/testimonials",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const ceremonyRoutes = ceremonies.map((c) => ({
    url: `${baseUrl}/ceremonies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const storyRoutes = loveStories.map((s) => ({
    url: `${baseUrl}/love-stories/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...ceremonyRoutes, ...storyRoutes];
}
