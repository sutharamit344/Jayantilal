import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { SUPPORTED_LANGUAGES } from "@/config/languages";
import { guidesData } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/life-insurance", priority: 0.9, changeFrequency: "weekly" },
    { path: "/life-insurance/term-insurance", priority: 0.9, changeFrequency: "weekly" },
    { path: "/life-insurance/faqs", priority: 0.8, changeFrequency: "weekly" },
    { path: "/guides", priority: 0.85, changeFrequency: "weekly" },
    { path: "/visiting-card", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "monthly" },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate localized entries for standard routes
  for (const lang of SUPPORTED_LANGUAGES) {
    for (const route of routes) {
      const url = `${siteConfig.domain}/${lang.code}${route.path}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

    // Generate localized entries for individual guide articles
    for (const guide of guidesData) {
      const url = `${siteConfig.domain}/${lang.code}/guides/${guide.slug}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(guide.publishDate),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return sitemapEntries;
}
