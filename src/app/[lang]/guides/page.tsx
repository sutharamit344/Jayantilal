import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { guidesData } from "@/content/guides";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang: lang.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) return {};

  const titles: Record<Locale, string> = {
    en: "Knowledge Centre: Life Insurance Guides & Tips",
    gu: "જ્ઞાન કેન્દ્ર: જીવન વીમા માર્ગદર્શિકા અને લેખો",
    hi: "ज्ञान केंद्र: जीवन बीमा मार्गदर्शन एवं उपयोगी लेख",
  };

  const descriptions: Record<Locale, string> = {
    en: "Educational guides on life insurance fundamentals, term insurance sizing, tax exemptions under Section 80C & 10(10D), and claim settlement in India.",
    gu: "જીવન વીમાના મૂળભૂત નિયમો, ટર્મ પ્લાન, કલમ 80C-10(10D) ટેક્સ લાભો અને ક્લેમ સેટલમેન્ટ વિશે વિસ્તૃત માર્ગદર્શિકા લેખો.",
    hi: "जीवन बीमा के मूल सिद्धांत, टर्म इंश्योरेंस, आयकर छूट एवं क्लेम सेटलमेंट प्रक्रिया पर आधारित सरल एवं प्रमाणिक शैक्षिक लेख।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/guides",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [{ label: "Knowledge Centre", href: `/${lang}/guides` }];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Hero Banner - Consistent Rich Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
              <BookOpen className="w-4 h-4 text-[#FFBA00]" />
              <span>Consumer Education Hub</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
              Life Insurance Knowledge Centre
            </h1>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
              Objective, people-first guides written to help you make informed decisions about your family&apos;s financial protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidesData.map((guide) => (
              <article
                key={guide.slug}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-3 py-1 rounded-full bg-purple-50 font-bold text-[#53205A] text-[11px]">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold font-display text-slate-900 leading-snug">
                    <Link
                      href={`/${lang}/guides/${guide.slug}`}
                      className="hover:text-[#53205A] transition-colors"
                    >
                      {guide.title[lang]}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {guide.excerpt[lang]}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {guide.publishDate}
                  </span>
                  <Link
                    href={`/${lang}/guides/${guide.slug}`}
                    className="text-xs font-bold text-[#53205A] hover:text-[#38143E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
