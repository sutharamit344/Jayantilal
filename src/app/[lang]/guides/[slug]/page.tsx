import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { guidesData } from "@/content/guides";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { getArticleSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Clock, Calendar, ShieldCheck, ArrowRight, MessageSquare, Phone } from "lucide-react";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of SUPPORTED_LANGUAGES) {
    for (const guide of guidesData) {
      params.push({ lang: lang.code, slug: guide.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isSupportedLocale(lang)) return {};

  const article = guidesData.find((g) => g.slug === slug);
  if (!article) return {};

  return generateSeoMetadata({
    locale: lang,
    path: `/guides/${slug}`,
    title: article.title[lang],
    description: article.excerpt[lang],
    ogType: "article",
    publishedTime: article.publishDate,
  });
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const article = guidesData.find((g) => g.slug === slug);
  if (!article) notFound();

  const content = article.content[lang];
  const articleUrl = `${siteConfig.domain}/${lang}/guides/${slug}`;

  const articleSchema = getArticleSchema({
    title: article.title[lang],
    excerpt: article.excerpt[lang],
    publishDate: article.publishDate,
    url: articleUrl,
  });

  const breadcrumbs = [
    { label: "Knowledge Centre", href: `/${lang}/guides` },
    { label: article.title[lang] },
  ];

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumb locale={lang} items={breadcrumbs} />

      <article className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="space-y-4 border-b border-slate-200 pb-8">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-bold">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              {article.title[lang]}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {article.excerpt[lang]}
            </p>

            {/* Author Attribution */}
            <div className="pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#53205A] text-[#FFBA00] font-bold flex items-center justify-center text-xs shadow-xs">
                JS
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  {siteConfig.fullName}
                </p>
                <p className="text-[11px] text-slate-500">
                  {siteConfig.designation} • {siteConfig.company}
                </p>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="py-10 space-y-10 text-slate-800 leading-relaxed">
            <div className="text-base sm:text-lg font-normal text-slate-700 leading-relaxed p-6 rounded-2xl bg-slate-50/90 border border-slate-200/90">
              {content.intro}
            </div>

            {content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.listItems && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {section.listItems.map((li, lIdx) => (
                      <li key={lIdx} className="text-sm sm:text-base text-slate-700 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFBA00] shrink-0 mt-2.5"></span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm sm:text-base text-amber-950 leading-relaxed">
              <strong className="block text-amber-900 font-bold mb-1 font-display">Takeaway Summary:</strong>
              {content.conclusion}
            </div>
          </div>

          {/* End of article consultation box */}
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border border-purple-900/60 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-[#FFBA00] text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-[#FFBA00]" />
              <span>Personalised Life Insurance Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Want to calculate your exact family coverage requirements?
            </h3>
            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
              Book a free, 15-minute phone or WhatsApp consultation with Jayantilal Suthar. Receive objective comparisons tailored to your family&apos;s budget.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs transition-all shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask via WhatsApp</span>
              </a>

              <Link
                href={`/${lang}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>Request Policy Review</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
