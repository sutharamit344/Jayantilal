import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { faqsData } from "@/content/faqs";
import { generateSeoMetadata } from "@/lib/seo";
import { getFaqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { siteConfig } from "@/config/site";
import { MessageSquare, Phone, HelpCircle } from "lucide-react";

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
    en: "Life Insurance FAQs: Term, Tax & Claims",
    gu: "જીવન વીમા પ્રશ્નોત્તરી (FAQs): ટર્મ, ટેક્સ અને ક્લેમ",
    hi: "जीवन बीमा प्रश्नोत्तरी (FAQs): टर्म, टैक्स एवं क्लेम सहायता",
  };

  const descriptions: Record<Locale, string> = {
    en: "Frequently asked questions about life insurance in India, term plans, tax deductions under 80C & 10(10D), and claim settlement procedures.",
    gu: "ભારતમાં જીવન વીમો, ટર્મ પ્લાન, કલમ 80C અને 10(10D) હેઠળ કર રાહત અને ક્લેમ સેટલમેન્ટ સંબંધિત તમામ સામાન્ય પ્રશ્નોના જવાબો.",
    hi: "भारत में जीवन बीमा, टर्म प्लान, टैक्स लाभ एवं क्लेम सेटलमेंट से जुड़े सभी महत्वपूर्ण सवालों के सटीक एवं सरल उत्तर।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/life-insurance/faqs",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function FaqsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [
    { label: "Life Insurance", href: `/${lang}/life-insurance` },
    { label: "FAQs", href: `/${lang}/life-insurance/faqs` },
  ];

  return (
    <>
      <JsonLd data={getFaqPageSchema(faqsData, lang)} />
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Hero Banner - Consistent Rich Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
              <HelpCircle className="w-4 h-4 text-[#FFBA00]" />
              <span>Clarity & Transparency</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
              Life Insurance Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
              Find transparent, straightforward answers to the most common questions regarding policy selection, tax benefits, medical checks, and claim settlement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* FAQ Accordion Component */}
          <FaqAccordion locale={lang} />

          {/* Still Have Questions Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white text-center space-y-4 border border-purple-900/60 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#FFBA00]/20 text-[#FFBA00] flex items-center justify-center mx-auto border border-[#FFBA00]/30 shadow-inner">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Have a Question That Isn&apos;t Answered Here?
            </h3>
            <p className="text-xs sm:text-sm text-purple-100/90 max-w-lg mx-auto leading-relaxed">
              Every family&apos;s financial situation is unique. Feel free to reach out directly to Jayantilal Suthar for personal clarification.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href={siteConfig.social.telUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>Call {siteConfig.contact.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
