import { Metadata } from "next";
import { Locale, SUPPORTED_LANGUAGES, getLocalizedPath } from "@/config/languages";
import { siteConfig } from "@/config/site";

interface GenerateMetadataOptions {
  locale: Locale;
  path: string; // e.g. "" for home, "/about", "/life-insurance", etc.
  title: string;
  description: string;
  ogType?: "website" | "article";
  publishedTime?: string;
}

export function generateSeoMetadata({
  locale,
  path,
  title,
  description,
  ogType = "website",
  publishedTime,
}: GenerateMetadataOptions): Metadata {
  const canonicalUrl = `${siteConfig.domain}${getLocalizedPath(path, locale)}`;

  // Construct hreflang languages object
  const languagesObj: Record<string, string> = {};
  SUPPORTED_LANGUAGES.forEach((lang) => {
    languagesObj[lang.code] = `${siteConfig.domain}${getLocalizedPath(path, lang.code)}`;
  });
  languagesObj["x-default"] = `${siteConfig.domain}${getLocalizedPath(path, "en")}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical: canonicalUrl,
      languages: languagesObj,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: `${siteConfig.fullName} - ${siteConfig.designation}`,
      locale: locale === "en" ? "en_IN" : locale === "gu" ? "gu_IN" : "hi_IN",
      type: ogType,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
