import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Locale } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  locale: Locale;
  items: BreadcrumbItem[];
}

export function Breadcrumb({ locale, items }: BreadcrumbProps) {
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.domain}/${locale}`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${siteConfig.domain}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbListSchema} />
      <div className="bg-slate-50/80 border-b border-slate-200/70">
        <nav aria-label="Breadcrumb" className="py-2.5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-slate-500">
          <ol className="flex items-center flex-wrap gap-1.5">
            <li className="flex items-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
              >
                <Home className="w-3.5 h-3.5 text-slate-400" />
                <span>Home</span>
              </Link>
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-slate-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-none">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </>
  );
}
