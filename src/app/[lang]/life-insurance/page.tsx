import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EnquiryForm } from "@/components/EnquiryForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  Clock,
  Sparkles,
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
    en: "Life Insurance Guide & Policy Types in India",
    gu: "જીવન વીમા માર્ગદર્શિકા અને યોજનાઓના પ્રકારો",
    hi: "जीवन बीमा संपूर्ण गाइड एवं योजनाओं के प्रकार",
  };

  const descriptions: Record<Locale, string> = {
    en: "Explore what life insurance is, how coverage is calculated, key plan categories, exclusions, and essential questions to ask before buying a policy.",
    gu: "જીવન વીમો શું છે, કવરેજ કેવી રીતે ગણવામાં આવે છે, પોલિસીના મુખ્ય પ્રકારો, મહત્વના અપવાદો અને ખરીદતા પહેલા જાણવા જેવા પ્રશ્નો.",
    hi: "जीवन बीमा क्या है, कवर का निर्धारण कैसे करें, प्रमुख पॉलिसी प्रकार, नियम व शर्तें और पॉलिसी लेने से पहले जरूरी सावधानियां।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/life-insurance",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function LifeInsurancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [
    { label: "Life Insurance", href: `/${lang}/life-insurance` },
  ];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Header Banner - Consistent Rich Plum Theme with Lifemitra Banner Visual */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 lg:opacity-30 pointer-events-none">
          <Image
            src="/images/lifemitra/Savings-top-banner.jpg"
            alt="Life Insurance Hub Banner"
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
                <span>Consumer Education & Policy Guide</span>
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={150}>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
                Understanding Life Insurance in India
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={250}>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
                Clear, transparent explanations of life insurance fundamentals, policy types, eligibility factors, and exclusion clauses to help you make informed decisions for your family.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 1. What is Life Insurance */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <AnimateOnScroll direction="right" className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block">
                FUNDAMENTALS OF COVERAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-snug">
                What is Life Insurance and Why Does Your Family Need It?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At its core, a life insurance policy is a risk-mitigation contract between an individual and an insurer. In exchange for periodic premium payments, the insurance company provides a guaranteed financial payout—the <strong>sum assured</strong>—to the designated nominees in the event of an untimely demise during the policy term, or a maturity benefit upon surviving the term.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Life insurance is the foundation of family financial security: it ensures that your spouse, children, or elderly parents do not suffer devastating financial dislocation, loss of their family home, or abandonment of their education if the primary breadwinner is no longer there.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delayMs={150} className="lg:col-span-5 bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2 font-display">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>Core Objectives of Coverage</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Income Replacement:</strong> Replaces lost monthly salary for daily household living expenses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Liability Payoff:</strong> Clears outstanding home loans, car loans, or personal debts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Child Education & Marriage:</strong> Guarantees required funds at crucial future milestones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tax Advantages:</strong> Avail benefits under Section 80C & Section 10(10D) as per income tax laws.</span>
                </li>
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 2. Key Categories of Life Insurance */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimateOnScroll direction="up" className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block">
              PORTFOLIO CLASSIFICATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Major Types of Life Insurance Policies
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Each policy category addresses distinct financial objectives. Understanding their differences ensures you never overpay for features you don&apos;t need.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pure Term */}
            <AnimateOnScroll direction="up" delayMs={50}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-50 text-[#53205A] text-[11px] font-bold inline-block">
                      Essential Safety Net
                    </span>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/lifemitra/pl-1.png"
                        alt="Pure Term Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Pure Term Insurance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Provides the highest sum assured (e.g. ₹1 Crore+) for the lowest premium. Pure risk cover without investment risk. If the insured survives the term, no maturity benefit is paid.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    href={`/${lang}/life-insurance/term-insurance`}
                    className="text-xs font-bold text-[#53205A] hover:text-[#38143E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read In-Depth Term Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Guaranteed Savings */}
            <AnimateOnScroll direction="up" delayMs={100}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-[11px] font-bold inline-block">
                      Certainty & Peace of Mind
                    </span>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/lifemitra/pl-2.png"
                        alt="Savings Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Guaranteed Savings Plans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Combines life protection with guaranteed returns and regular income payouts. Insulated from stock market volatility, ideal for funding non-negotiable family commitments.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    href={`/${lang}/contact`}
                    className="text-xs font-bold text-[#53205A] hover:text-[#38143E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Enquire on Savings Plans</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* ULIPs */}
            <AnimateOnScroll direction="up" delayMs={150}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-900 text-[11px] font-bold inline-block">
                      Market Growth Potential
                    </span>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/lifemitra/pl-3.png"
                        alt="ULIP Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Unit Linked Plans (ULIPs)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Part of your premium provides life cover, while the balance is invested in equity or debt funds based on your risk profile, with flexible fund-switching privileges.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    href={`/${lang}/contact`}
                    className="text-xs font-bold text-[#53205A] hover:text-[#38143E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Consult on ULIPs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Retirement / Annuity */}
            <AnimateOnScroll direction="up" delayMs={200}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold inline-block">
                      Lifelong Independence
                    </span>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/lifemitra/pl-4.png"
                        alt="Retirement Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Retirement & Pension Plans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enables disciplined accumulation during working years followed by guaranteed regular annuity income throughout retirement, shielding you from outliving your savings.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    href={`/${lang}/contact`}
                    className="text-xs font-bold text-[#53205A] hover:text-[#38143E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Plan Your Retirement</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Child Education */}
            <AnimateOnScroll direction="up" delayMs={250}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-900 text-[11px] font-bold inline-block">
                      Education Guarantee
                    </span>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/lifemitra/pl-5.png"
                        alt="Child Education Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Child Education Plans
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Features built-in Premium Waiver Benefits: if the parent passes away during the term, future premiums are waived by the insurer, ensuring the planned fund matures uninterrupted.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    href={`/${lang}/contact`}
                    className="text-xs font-bold text-[#53205A] hover:text-[#38143E] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Secure Child Future</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBA00]" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Policy Review */}
            <AnimateOnScroll direction="up" delayMs={300}>
              <div className="p-7 rounded-2xl bg-[#2D1032] text-white shadow-md flex flex-col justify-between border border-purple-900/60 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#FFBA00] text-slate-950 text-[11px] font-bold inline-block">
                      Free Advisory Service
                    </span>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/images/lifemitra/umbrella.png"
                        alt="Umbrella Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Existing Policy Health Check
                  </h3>
                  <p className="text-xs text-purple-200 leading-relaxed">
                    Already have policies? Have them reviewed to verify coverage adequacy, check nominee details, and understand exact policy returns without any obligation to buy.
                  </p>
                </div>
                <div className="pt-6 border-t border-purple-800/80 mt-6">
                  <Link
                    href={`/${lang}/contact`}
                    className="text-xs font-bold text-[#FFBA00] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Book Free Policy Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 3. Factors Influencing Premium & Policy Exclusions */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Factors */}
            <AnimateOnScroll direction="right" className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                <Clock className="w-6 h-6 text-amber-600" />
                <span>Factors Affecting Your Policy Premium</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Age at Inception:</strong>
                  The younger you apply, the lower your annual premium. Buying at age 25 locks in rates substantially cheaper than applying at age 40.
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Tobacco & Smoking Habits:</strong>
                  Non-smokers typically enjoy 30% to 50% lower premiums compared to tobacco users due to actuarial mortality statistics.
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Medical History:</strong>
                  Pre-existing conditions like hypertension or diabetes may require tele-medical underwriting or slight premium loading.
                </div>
              </div>
            </AnimateOnScroll>

            {/* Exclusions */}
            <AnimateOnScroll direction="left" delayMs={150} className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
                <span>Important Policy Exclusions & Limitations</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
                  <strong className="text-rose-950 block mb-1">Suicide Clause:</strong>
                  Under standard IRDAI guidelines, death due to suicide within the first 12 months from policy inception is excluded from full sum assured payout (typically only premiums paid are refunded).
                </div>
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
                  <strong className="text-rose-950 block mb-1">Material Non-Disclosure / Fraud:</strong>
                  Concealing active tobacco habits, heart surgeries, or other critical medical diagnoses can lead to claim repudiation under Section 45 of the Insurance Act.
                </div>
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
                  <strong className="text-rose-950 block mb-1">Hazardous Sports / Criminal Acts:</strong>
                  Death resulting from participation in illegal activities or unauthorized hazardous aerial activities is generally excluded.
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Checklist before buying */}
          <AnimateOnScroll direction="up" delayMs={200}>
            <div className="p-8 rounded-2xl bg-gradient-to-r from-[#2D1032] to-[#3B1441] text-white space-y-4 border border-purple-900 shadow-md">
              <h3 className="text-xl font-bold font-display flex items-center gap-2 text-[#FFBA00]">
                <HelpCircle className="w-5 h-5" />
                <span>5 Critical Questions to Ask Before Buying Any Policy</span>
              </h3>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-purple-100 list-decimal list-inside">
                <li>Is the sum assured at least 15 times my current annual income?</li>
                <li>What is the exact surrender charge or lock-in period if I cannot pay future premiums?</li>
                <li>Are returns guaranteed in Rupee amounts or dependent on market performance?</li>
                <li>Have all my medical diagnoses and tobacco habits been declared transparently on paper?</li>
                <li>Who is the local advisor responsible for helping my nominee during claim submission?</li>
              </ol>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll direction="up">
            <EnquiryForm
              locale={lang}
              defaultEnquiryType="General Consultation"
              sourceContext="Life Insurance Educational Page"
            />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
