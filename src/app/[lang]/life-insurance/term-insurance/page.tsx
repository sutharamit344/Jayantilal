import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EnquiryForm } from "@/components/EnquiryForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Calculator,
  PlusCircle,
  HelpCircle,
} from "lucide-react";

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
    en: "Term Insurance Advisor & Policy Guide",
    gu: "ટર્મ ઇન્શ્યોરન્સ માર્ગદર્શિકા અને યોગ્ય કવરેજ",
    hi: "टर्म इंश्योरेंस संपूर्ण गाइड एवं सही कवर का चुनाव",
  };

  const descriptions: Record<Locale, string> = {
    en: "Discover how pure term insurance works, calculate your ideal sum assured, explore critical illness riders, and get transparent guidance from Jayantilal Suthar.",
    gu: "પ્યોર ટર્મ ઇન્શ્યોરન્સ કેવી રીતે કાર્ય કરે છે, તમારા પરિવાર માટે યોગ્ય સમ એશ્યોર્ડ નક્કી કરો અને સાચી સલાહ મેળવો.",
    hi: "प्योर टर्म इंश्योरेंस कैसे काम करता है, अपने परिवार के लिए सही कवर कैसे तय करें और जानिए आवश्यक राइडर्स के बारे में।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/life-insurance/term-insurance",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function TermInsurancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [
    { label: "Life Insurance", href: `/${lang}/life-insurance` },
    { label: "Term Insurance", href: `/${lang}/life-insurance/term-insurance` },
  ];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Header Banner - Consistent Rich Plum Theme with Official Lifemitra Protection Banner */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 lg:opacity-30 pointer-events-none">
          <Image
            src="/images/lifemitra/Protection-top-banner.jpg"
            alt="Protection Plan Banner"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D1032] via-[#2D1032]/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <AnimateOnScroll direction="up" delayMs={50}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#FFBA00]" />
                <span>High Cover • Affordable Premium • Pure Protection</span>
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={150}>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
                Pure Term Life Insurance Guidance
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={250}>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
                The single most essential financial foundation for any income-earning individual. Secure ₹1 Crore to ₹2 Crore+ protection for your family at a fraction of traditional policy costs.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delayMs={350}>
              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href={siteConfig.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Term Options</span>
                </a>
                <a
                  href={siteConfig.social.telUrl}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call +91 79761 19365</span>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 1. What Makes Term Insurance Unique */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <AnimateOnScroll direction="right" className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block">
                PURE RISK PROTECTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-snug">
                Why Pure Term Insurance is Non-Negotiable
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Traditional life insurance policies divert a significant portion of premiums into conservative government debt instruments, yielding around 4% to 5% returns while offering a very modest life cover (often only ₹5 to ₹10 Lakhs).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Pure Term Insurance is 100% risk coverage.</strong> Because the insurer is not obligated to pay investment bonuses, they can offer substantial sum assured (e.g., ₹1 Crore or ₹2 Crore) for premiums as low as ₹800 to ₹1,500 per month for a healthy 30-year-old non-smoker.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delayMs={150} className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#2D1032] to-[#3B1441] text-white space-y-4 border border-purple-900 shadow-md">
              <h3 className="font-bold text-base text-[#FFBA00] flex items-center gap-2 font-display">
                <Calculator className="w-5 h-5" />
                <span>Recommended Sum Assured Rule</span>
              </h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Financial planning standards recommend holding a minimum death benefit equal to:
              </p>
              <div className="p-4 rounded-xl bg-black/40 text-center font-mono text-[#FFBA00] font-bold text-base sm:text-lg border border-white/20">
                15 × Annual Income + Loans - Savings
              </div>
              <p className="text-xs text-purple-300 leading-relaxed">
                For example, an individual earning ₹8 Lakhs/year with a ₹25 Lakh home loan and ₹5 Lakh in liquid savings should hold at least ₹1.4 Crore to ₹1.5 Crore in term cover.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 2. Critical Riders */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimateOnScroll direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block">
              COVERAGE ENHANCEMENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Enhance Your Cover with Essential Riders
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Riders are optional add-ons that customize your protection against specific life contingencies without buying separate policies.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimateOnScroll direction="up" delayMs={50}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Critical Illness Rider
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pays an immediate lump-sum payout upon diagnosis of listed conditions (e.g. major cancer, stroke, heart attack), allowing you to meet non-hospital living expenses and lost wages during treatment.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delayMs={150}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Accidental Total Disability Rider
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If an accident causes permanent disability resulting in inability to earn, this rider provides ongoing income or waives all future premiums while keeping your life coverage fully intact.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delayMs={250}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  Waiver of Premium (WOP)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In the event of critical illness or severe disability, all future premiums payable under the policy are waived off by the insurer, ensuring coverage continues uninterrupted.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Underwriting and Transparency Checklist */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AnimateOnScroll direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block">
              APPLICATION & UNDERWRITING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              The Medical Underwriting Process
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Because term insurance involves large sums at risk, insurers require tele-medical interviews, standard blood profiling, or income verification. Complete transparency during this stage is the bedrock of an infallible claim settlement for your family later.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <AnimateOnScroll direction="right" delayMs={100} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block font-display">Income Documentation:</span>
              <p className="text-slate-600 leading-relaxed">Salaried applicants typically provide 3 months of pay slips and Form 16; business owners provide 2 to 3 years of audited ITR filings to verify insurable interest.</p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="left" delayMs={200} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block font-display">Medical Transparency:</span>
              <p className="text-slate-600 leading-relaxed">Always disclose past surgeries, diabetes, blood pressure, or tobacco consumption. Accurate disclosures ensure the policy cannot be contested after 3 years under Section 45.</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Lead capture form */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up">
            <EnquiryForm
              locale={lang}
              defaultEnquiryType="Pure Term Insurance Plan"
              sourceContext="Term Insurance Dedicated Landing Page"
            />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
