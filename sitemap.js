export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    "",
    "/story",
    "/ceremonies",
    "/films",
    "/love-stories",
    "/testimonials",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const ceremonyRoutes = ceremonies.map((c) => ({
    url: `${siteConfig.url}/ceremonies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const storyRoutes = loveStories.map((s) => ({
    url: `${siteConfig.url}/love-stories/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...ceremonyRoutes, ...storyRoutes];
}
