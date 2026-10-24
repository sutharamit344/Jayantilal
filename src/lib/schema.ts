import { siteConfig } from "@/config/site";
import { Locale } from "@/config/languages";
import { FaqItem } from "@/content/faqs";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.designation,
    description: `Authorised Life Mitra affiliated with ${siteConfig.company}, helping families secure comprehensive life insurance and claim support.`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.domain,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
      url: "https://www.sbilife.co.in",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
  };
}

export function getFinancialServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `${siteConfig.fullName} - Life Insurance Advisor`,
    description: siteConfig.tagline,
    url: siteConfig.domain,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.fullName} | Life Insurance Advisor`,
    url: siteConfig.domain,
    description: "Professional life insurance consultation, term insurance guidance, and claim settlement support.",
    publisher: {
      "@type": "Person",
      name: siteConfig.fullName,
    },
  };
}

export function getFaqPageSchema(faqs: FaqItem[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[locale],
      },
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  excerpt: string;
  publishDate: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      jobTitle: siteConfig.designation,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.fullName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
