import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { getTranslations } from "@/content/translations";
import { guidesData } from "@/content/guides";
import { faqsData } from "@/content/faqs";
import { generateSeoMetadata } from "@/lib/seo";
import { getPersonSchema, getFinancialServiceSchema, getWebSiteSchema, getFaqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EnquiryForm } from "@/components/EnquiryForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ShieldCheck,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Compass,
  CreditCard,
  Shield,
  Coins,
  Puzzle,
  BadgeIndianRupee,
  HeartHandshake,
  Umbrella,
  TrendingUp,
  Baby,
  Armchair,
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
    en: "Life Insurance Advisor & Life Mitra",
    gu: "પ્રમાણિત જીવન વીમા સલાહકાર અને લાઈફ મિત્ર",
    hi: "प्रमाणित जीवन बीमा सलाहकार एवं लाइफ मित्र",
  };

  const descriptions: Record<Locale, string> = {
    en: "Consult Jayantilal Suthar, authorised Life Mitra with SBI Life Insurance Co. Ltd. Expert, unbiased life insurance guidance, term plans, and lifetime claim support.",
    gu: "એસબીઆઈ લાઈફ ઇન્શ્યોરન્સ અધિકૃત લાઈફ મિત્ર જયંતિલાલ સુથાર પાસેથી જીવન વીમા અને ટર્મ પ્લાનનું સાચું અને વિશ્વસનીય માર્ગદર્શન મેળવો.",
    hi: "एसबीआई लाइफ इंश्योरेंस अधिकृत लाइफ मित्र जयंतीलाल सुथार से जीवन बीमा, टर्म प्लान एवं क्लेम सहायता हेतु निःशुल्क एवं ईमानदार परामर्श प्राप्त करें।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const t = getTranslations(lang);
  const featuredGuides = guidesData.slice(0, 3);
  const homepageFaqs = faqsData.slice(0, 4);

  const schemas = [
    getPersonSchema(),
    getFinancialServiceSchema(),
    getWebSiteSchema(),
    getFaqPageSchema(homepageFaqs, lang),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      {/* 1. HERO FULL BANNER SECTION - Panoramic Family Protection Banner with Signature SBI Plum Theme */}
      <section className="relative overflow-hidden bg-[#240B29] text-white">
        {/* Full-bleed Panoramic Banner Image - Family visible on the right */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-full-banner.jpg"
            alt="Protected Indian family smiling happily in their home with financial security"
            fill
            priority
            quality={95}
            className="object-cover object-[80%_center] sm:object-[82%_center] md:object-[84%_center] lg:object-[86%_center]"
            sizes="100vw"
          />
          {/* Authentic Plum/Wine Brand Gradient Scrim - Dark on left for text readability, 100% transparent on right for family visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#200A25]/95 via-[#2A0E30]/85 via-45% to-transparent pointer-events-none md:via-[#2A0E30]/92 md:to-75%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F0724]/90 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Banner Content Container - Kept on left so people on right remain completely visible */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-28 min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
            {/* Verified Badge with Slide-Right Animation */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md border border-white/25 shadow-sm animate-slide-right">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFBA00] shrink-0" />
              <span className="tracking-wide">{t.hero.badge}</span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-[#FFBA00] font-medium hidden sm:inline">IRDAI Reg. 111</span>
            </div>

            {/* Main Inspiring Headline with Slide-Up Animation */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight text-white uppercase leading-[1.18] sm:leading-[1.14] drop-shadow-sm font-display animate-slide-up animation-delay-100">
              {t.hero.title}
            </h1>

            {/* Subtitle with Slide-Up Animation */}
            <p className="text-xs sm:text-base md:text-lg text-purple-100/95 leading-relaxed max-w-xl font-normal drop-shadow-xs animate-slide-up animation-delay-200">
              {t.hero.subtitle}
            </p>

            {/* Action CTAs with Slide-Up Animation */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4 animate-slide-up animation-delay-300">
              <a
                href={siteConfig.social.telUrl}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 shadow-md hover:shadow-xl transition-all active:scale-95 whitespace-nowrap uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-slate-950 shrink-0" />
                <span>{t.hero.ctaPrimary}</span>
              </a>

              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-white shrink-0" />
                <span>{t.hero.ctaSecondary}</span>
              </a>

              <a
                href="#plans"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Explore Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
              </a>
            </div>

            {/* Trust Indicators inside Banner */}
            <div className="pt-4 sm:pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 animate-slide-up animation-delay-400">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-purple-100/95 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFBA00] shrink-0" />
                <span>{t.hero.trustItem1}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-purple-100/95 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFBA00] shrink-0" />
                <span>{t.hero.trustItem2}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-purple-100/95 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFBA00] shrink-0" />
                <span>{t.hero.trustItem3}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Glass Utility Bar */}
        <div className="relative z-10 border-t border-white/15 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4 text-[11px] sm:text-xs text-purple-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="font-semibold text-white">Official Consultation Desk:</span>
                <span className="text-purple-200">Paxall Complex, Jalore, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs">
                <span className="text-purple-200">
                  <span className="font-bold text-[#FFBA00]">100% Free</span> No-Obligation Consultation
                </span>
                <span className="hidden md:inline text-white/30">•</span>
                <span className="hidden md:inline text-purple-200">
                  Direct Claims Guidance & Policy Servicing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TRUST BAR - Clean Corporate Light Theme */}
      <section className="bg-white border-b border-slate-200 py-5 sm:py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            <div className="flex items-start gap-2.5 sm:gap-3.5 p-1 sm:p-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#FFBA00] shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Authorised Life Mitra</h4>
                <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5">SBI Life Insurance Co. Ltd.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#53205A] shrink-0">
                <HeartHandshake className="w-5 h-5 text-[#53205A]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Direct Claim Support</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Lifetime family settlement care</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 shrink-0">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Unbiased Advisory</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Zero pressure, tailored solutions</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                <BadgeIndianRupee className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Tax Benefits</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Under Sec 80C & 10(10D)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION - Clean Light Corporate Theme */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Advisor Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <AnimateOnScroll direction="right">
                <div className="relative group">
                  <div className="relative w-72 h-80 sm:w-84 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                    <Image
                      src="/images/advisor.jpg"
                      alt="Jayanti Lal Suthar - Life Mitra with SBI Life Insurance"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 288px, 336px"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 text-white text-center">
                      <span className="text-sm font-bold text-[#FFBA00] block">{siteConfig.fullName}</span>
                      <span className="text-xs text-slate-200">{siteConfig.designation}</span>
                    </div>
                  </div>

                  {/* Floating Credential Tag */}
                  <div className="absolute -top-3 -right-3 bg-white text-slate-900 py-1.5 px-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-1.5 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#53205A]" />
                    <span>Club: Life Mitra</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column: About Details */}
            <div className="lg:col-span-7 space-y-5">
              <AnimateOnScroll direction="left">
                <div className="space-y-1.5">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block">
                    ABOUT YOUR ADVISOR
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                    {siteConfig.fullName}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-purple-50 text-[#53205A] font-bold">
                      Official Life Mitra
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-700 font-semibold">{siteConfig.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">IRDAI Reg. {siteConfig.irdaiRegNo}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
                  As a Life Mitra, I take great pride in providing life insurance advice to countless individuals and families. With a greater purpose of making people aware of the importance of life insurance, I have had the great fortune of earning trust, respect and life-long friendship with my customers. My ultimate aim will always be to help people plan towards protecting their financial future.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={siteConfig.social.telUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 uppercase tracking-wider shadow-sm hover:shadow transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-slate-950" />
                    <span>CONTACT ME</span>
                  </a>

                  <Link
                    href={`/${lang}/visiting-card`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    <CreditCard className="w-4 h-4 text-[#53205A]" />
                    <span>View Visiting Card</span>
                  </Link>
                </div>

                {/* Trust Pillars */}
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-slate-200">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <Award className="w-4 h-4 text-[#FFBA00] mb-1.5" />
                    <h4 className="font-bold text-slate-900 text-xs">Integrity First</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Clear disclosures on policy terms & exclusions.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <Users className="w-4 h-4 text-emerald-600 mb-1.5" />
                    <h4 className="font-bold text-slate-900 text-xs">Zero Pressure</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Educational guidance tailored to your budget.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#00A3E0] mb-1.5" />
                    <h4 className="font-bold text-slate-900 text-xs">Lifetime Claims</h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Dedicated family support during claim settlement.</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE LIFE INSURANCE - Using Official Lifemitra Icons */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                WHY LIFE INSURANCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Why Choose Life Insurance
              </h2>
              <div className="w-16 h-1 bg-[#FFBA00] mx-auto rounded-full mt-2" />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <AnimateOnScroll delayMs={0}>
              <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center p-3 mb-4 shadow-xs relative">
                  <Image
                    src="/images/lifemitra/cli-1.png"
                    alt="Financial Protection"
                    fill
                    className="object-contain p-2.5"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  Financial Protection
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our primary motto is to provide financial protection to the families and secure their future.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 2 */}
            <AnimateOnScroll delayMs={100}>
              <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center p-3 mb-4 shadow-xs relative">
                  <Image
                    src="/images/lifemitra/cli-2.png"
                    alt="Claims Settlement"
                    fill
                    className="object-contain p-2.5"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  Claims Settlement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wider branch network across the country to provide claim settlement support.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 3 */}
            <AnimateOnScroll delayMs={200}>
              <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-rose-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center p-3 mb-4 shadow-xs relative">
                  <Image
                    src="/images/lifemitra/cli-3.png"
                    alt="Flexibility"
                    fill
                    className="object-contain p-2.5"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  Flexibility
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Affordable premium and flexible payout options to suit your financial circumstances.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 4 */}
            <AnimateOnScroll delayMs={300}>
              <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center p-3 mb-4 shadow-xs relative">
                  <Image
                    src="/images/lifemitra/cli-4.png"
                    alt="Tax Benefits"
                    fill
                    className="object-contain p-2.5"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  Tax Benefits
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tax benefits/exemptions as per the applicable income tax laws in India (Sec 80C & 10(10D)).
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 4. RANGE OF PLANS - Using Official Lifemitra Category Icons */}
      <section id="plans" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                POLICY PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Life Insurance provides you with a wide range of plans
              </h2>
              <div className="w-16 h-1 bg-[#FFBA00] mx-auto rounded-full mt-2" />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Plan 1: Saving Plans */}
            <AnimateOnScroll delayMs={0}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group">
                <div className="w-full space-y-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto border border-amber-200 group-hover:scale-105 transition-transform p-3 relative">
                    <Image
                      src="/images/lifemitra/pl-1.png"
                      alt="Saving Plans"
                      fill
                      className="object-contain p-2.5"
                      sizes="64px"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100/70 text-amber-900">
                    Guaranteed Returns
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Saving Plans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guaranteed wealth preservation and disciplined capital accumulation.
                  </p>
                </div>

                <div className="pt-6 w-full space-y-2 mt-4">
                  <Link
                    href={`/${lang}/life-insurance`}
                    className="w-full block py-2.5 px-3 rounded-lg bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    KNOW MORE
                  </Link>
                  <Link
                    href={`/${lang}/contact`}
                    className="w-full block py-2 px-3 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    ENQUIRE
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Plan 2: Protection Plans */}
            <AnimateOnScroll delayMs={80}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group">
                <div className="w-full space-y-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mx-auto border border-purple-200 group-hover:scale-105 transition-transform p-3 relative">
                    <Image
                      src="/images/lifemitra/pl-2.png"
                      alt="Protection Plans"
                      fill
                      className="object-contain p-2.5"
                      sizes="64px"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100/70 text-[#53205A]">
                    Pure Term Cover
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Protection Plans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pure term cover with substantial sum assured at modest premiums.
                  </p>
                </div>

                <div className="pt-6 w-full space-y-2 mt-4">
                  <Link
                    href={`/${lang}/life-insurance/term-insurance`}
                    className="w-full block py-2.5 px-3 rounded-lg bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    KNOW MORE
                  </Link>
                  <Link
                    href={`/${lang}/contact`}
                    className="w-full block py-2 px-3 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    ENQUIRE
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Plan 3: Wealth Creation */}
            <AnimateOnScroll delayMs={160}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group">
                <div className="w-full space-y-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto border border-cyan-200 group-hover:scale-105 transition-transform p-3 relative">
                    <Image
                      src="/images/lifemitra/pl-3.png"
                      alt="Wealth Creation"
                      fill
                      className="object-contain p-2.5"
                      sizes="64px"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-100/70 text-cyan-900">
                    Market Linked ULIP
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Wealth Creation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Market-linked ULIPs with life insurance protection and fund agility.
                  </p>
                </div>

                <div className="pt-6 w-full space-y-2 mt-4">
                  <Link
                    href={`/${lang}/life-insurance`}
                    className="w-full block py-2.5 px-3 rounded-lg bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    KNOW MORE
                  </Link>
                  <Link
                    href={`/${lang}/contact`}
                    className="w-full block py-2 px-3 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    ENQUIRE
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Plan 4: Retirement */}
            <AnimateOnScroll delayMs={240}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group">
                <div className="w-full space-y-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto border border-emerald-200 group-hover:scale-105 transition-transform p-3 relative">
                    <Image
                      src="/images/lifemitra/pl-4.png"
                      alt="Retirement"
                      fill
                      className="object-contain p-2.5"
                      sizes="64px"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-900">
                    Lifelong Pension
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Retirement
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guaranteed lifelong annuity payments ensuring financial independence.
                  </p>
                </div>

                <div className="pt-6 w-full space-y-2 mt-4">
                  <Link
                    href={`/${lang}/life-insurance`}
                    className="w-full block py-2.5 px-3 rounded-lg bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    KNOW MORE
                  </Link>
                  <Link
                    href={`/${lang}/contact`}
                    className="w-full block py-2 px-3 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    ENQUIRE
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Plan 5: Child Plans */}
            <AnimateOnScroll delayMs={320}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center group">
                <div className="w-full space-y-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto border border-sky-200 group-hover:scale-105 transition-transform p-3 relative">
                    <Image
                      src="/images/lifemitra/pl-5.png"
                      alt="Child Plans"
                      fill
                      className="object-contain p-2.5"
                      sizes="64px"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-100/70 text-sky-900">
                    Higher Education
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Child Plans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guaranteed funds for higher education with built-in premium waiver.
                  </p>
                </div>

                <div className="pt-6 w-full space-y-2 mt-4">
                  <Link
                    href={`/${lang}/life-insurance`}
                    className="w-full block py-2.5 px-3 rounded-lg bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                  >
                    KNOW MORE
                  </Link>
                  <Link
                    href={`/${lang}/contact`}
                    className="w-full block py-2 px-3 rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    ENQUIRE
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 5. EDUCATIONAL GUIDES & ARTICLES */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                  Knowledge Centre
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1 font-display">
                  Consumer Education & Policy Guides
                </h2>
              </div>
              <Link
                href={`/${lang}/guides`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#53205A] hover:text-[#38143E] transition-colors whitespace-nowrap"
              >
                <span>{t.common.viewAllGuides}</span>
                <ArrowRight className="w-4 h-4 text-[#FFBA00]" />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, idx) => (
              <AnimateOnScroll key={guide.slug} delayMs={idx * 100}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#53205A] font-bold text-[11px]">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {guide.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug font-display">
                      <Link
                        href={`/${lang}/guides/${guide.slug}`}
                        className="hover:text-[#53205A] transition-colors"
                      >
                        {guide.title[lang]}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {guide.excerpt[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-5">
                    <Link
                      href={`/${lang}/guides/${guide.slug}`}
                      className="text-xs font-bold text-[#53205A] hover:text-[#38143E] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{t.common.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimateOnScroll direction="up">
            <div className="text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0]">
                FAQs
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Clear, transparent answers about life insurance policies, tax benefits, and claims support.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delayMs={100}>
            <FaqAccordion locale={lang} />
          </AnimateOnScroll>

          <div className="text-center pt-2">
            <Link
              href={`/${lang}/life-insurance/faqs`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#53205A] transition-colors"
            >
              <span>{t.common.viewFaqs}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. GET IN TOUCH FORM SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up">
            <EnquiryForm locale={lang} sourceContext="Homepage Lead Consultation" />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
