import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { getPersonSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Phone,
  MessageSquare,
  MapPin,
  HeartHandshake,
  FileSearch,
  CreditCard,
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
    en: "About Me: Certified Life Mitra & Insurance Advisor",
    gu: "પરિચય: પ્રમાણિત લાઈફ મિત્ર અને વીમા સલાહકાર",
    hi: "परिचय: प्रमाणित लाइफ मित्र एवं बीमा सलाहकार",
  };

  const descriptions: Record<Locale, string> = {
    en: "Learn about Jayantilal Suthar, an authorised SBI Life Insurance advisor (Life Mitra) based in Jalore, Rajasthan. Discover his philosophy of honest financial guidance.",
    gu: "જાલોર (રાજસ્થાન) સ્થિત એસબીઆઈ લાઈફ ઇન્શ્યોરન્સ અધિકૃત લાઈફ મિત્ર જયંતિલાલ સુથારનો પરિચય, મૂલ્યો અને કાર્યપદ્ધતિ.",
    hi: "जालोर (राजस्थान) स्थित एसबीआई लाइफ इंश्योरेंस अधिकृत लाइफ मित्र जयंतीलाल सुथार का परिचय, अनुभव एवं कार्यशैली।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/about",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [{ label: "About Me", href: `/${lang}/about` }];

  return (
    <>
      <JsonLd data={getPersonSchema()} />
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Hero Intro - Consistent Rich Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <AnimateOnScroll direction="up" delayMs={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#FFBA00]" />
                <span>Verified Professional Credentials • IRDAI Reg. 111</span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={150}>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
                About Jayanti Lal Suthar
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={250}>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
                Authorised Life Mitra with SBI Life Insurance Company Ltd., dedicated to protecting family financial wellness through honest education and lifetime servicing.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Detailed Bio with Photo */}
            <div className="lg:col-span-8 space-y-8">
              <AnimateOnScroll direction="right">
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-200 shadow-inner">
                    <Image
                      src="/images/advisor.jpg"
                      alt="Jayanti Lal Suthar"
                      fill
                      className="object-cover object-top"
                      sizes="176px"
                    />
                  </div>
                  <div className="space-y-3 text-center sm:text-left flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-extrabold text-[#00A3E0] uppercase tracking-wider block">
                        LIFE MITRA • JALORE, RAJASTHAN
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-6 relative">
                          <Image
                            src="/images/lifemitra/SBILifeLogo.png"
                            alt="SBI Life Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="w-16 h-6 relative">
                          <Image
                            src="/images/lifemitra/LifeMitraLogo.png"
                            alt="Life Mitra Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold font-display text-slate-900">
                      Jayanti Lal Suthar
                    </h2>
                    <p className="text-xs text-slate-600 font-medium">
                      Club: Life Mitra • Agency Code: 992424381 • SBI Life Insurance Co. Ltd.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                      My foundational mission is customer education. Rather than selling confusing policies, I help families accurately calculate their liabilities, identify exact protection gaps, and secure their children&apos;s future with certainty.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Core Commitments */}
              <div className="space-y-4">
                <AnimateOnScroll direction="up">
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    What You Can Always Expect:
                  </h3>
                </AnimateOnScroll>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimateOnScroll direction="up" delayMs={50}>
                    <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow h-full">
                      <HeartHandshake className="w-5 h-5 text-[#FFBA00] mb-2" />
                      <h4 className="font-bold text-slate-900 text-sm font-display">Truthful Disclosures</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Clear explanation of policy exclusions, waiting periods, and underwriting terms before you invest a single Rupee.
                      </p>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll direction="up" delayMs={100}>
                    <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow h-full">
                      <FileSearch className="w-5 h-5 text-emerald-600 mb-2" />
                      <h4 className="font-bold text-slate-900 text-sm font-display">Need-Based Sizing</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Determining coverage based on your actual income, debts, and dependents—not arbitrary sales quotas.
                      </p>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll direction="up" delayMs={150}>
                    <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow h-full">
                      <Award className="w-5 h-5 text-[#00A3E0] mb-2" />
                      <h4 className="font-bold text-slate-900 text-sm font-display">Institutional Backing</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Backed by the robust solvency, nationwide claims network, and trust of SBI Life Insurance Co. Ltd.
                      </p>
                    </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll direction="up" delayMs={200}>
                    <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow h-full">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mb-2" />
                      <h4 className="font-bold text-slate-900 text-sm font-display">Lifetime Support</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Ongoing assistance for nominee changes, premium payments, tax certificates, and personal claim coordination.
                      </p>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>

              {/* What I Do NOT Do (Integrity Safeguards) */}
              <AnimateOnScroll direction="up" delayMs={150}>
                <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-3">
                  <h3 className="text-base font-bold text-amber-950 flex items-center gap-2 font-display">
                    <ShieldCheck className="w-5 h-5 text-amber-700" />
                    <span>My Code of Ethics & Transparency</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-amber-900 leading-relaxed list-disc list-inside">
                    <li>I do not make unrealistic promises of quick returns or guaranteed wealth duplication.</li>
                    <li>I do not recommend buying unnecessary policies that do not solve a genuine protection or savings requirement.</li>
                    <li>I do not hide medical facts or advise policyholders to withhold health declarations.</li>
                    <li>I strictly focus on verified life insurance products authorised under IRDAI regulations.</li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Column: Verified Credentials Box */}
            <AnimateOnScroll direction="left" delayMs={150} className="lg:col-span-4 space-y-6">
              <div className="bg-[#38143E] text-white rounded-2xl p-6 sm:p-7 border border-purple-900 shadow-xl space-y-5">
                <h3 className="text-lg font-bold font-display text-white border-b border-purple-800 pb-3">
                  Verified Details
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-purple-300 block">Full Name:</span>
                    <span className="font-bold text-white text-sm">{siteConfig.fullName}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 block">Designation:</span>
                    <span className="text-[#FFBA00] font-semibold">{siteConfig.designation}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 block">Club Membership:</span>
                    <span className="text-white font-medium">{siteConfig.club}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 block">Authorised Partner:</span>
                    <span className="text-white font-medium">{siteConfig.company}</span>
                  </div>
                  <div>
                    <span className="text-purple-300 block">Regulatory Registration:</span>
                    <span className="font-mono text-[#FFBA00] font-bold">IRDAI Regn. No. {siteConfig.irdaiRegNo}</span>
                  </div>
                  <div className="pt-2 border-t border-purple-800">
                    <span className="text-purple-300 flex items-center gap-1 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      Branch Location:
                    </span>
                    <p className="text-purple-200 text-[11px] leading-relaxed">
                      {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                      {siteConfig.contact.address.landmark}, {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-800 flex flex-col gap-2.5">
                  <a
                    href={siteConfig.social.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs transition-all shadow-sm active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>

                  <a
                    href={siteConfig.social.telUrl}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-slate-950" />
                    <span>Call +91 79761 19365</span>
                  </a>

                  <Link
                    href={`/${lang}/visiting-card`}
                    className="w-full text-center py-2 text-xs text-purple-300 hover:text-white transition-colors underline flex items-center justify-center gap-1.5"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-[#FFBA00]" />
                    <span>View Digital Business Card</span>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
