import React from "react";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { VisitingCardComponent } from "@/components/VisitingCardComponent";
import { ShieldCheck, MapPin, Phone, Mail, Award } from "lucide-react";

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
    en: "Digital Visiting Card (SBI Life Mitra)",
    gu: "ડિજિટલ વિઝિટિંગ કાર્ડ (એસબીઆઈ લાઈફ મિત્ર)",
    hi: "डिजिटल विजिटिंग कार्ड (एसबीआई लाइफ मित्र)",
  };

  const descriptions: Record<Locale, string> = {
    en: "Save contact details, mobile number, office address, and registration credentials for Jayantilal Suthar, certified Life Mitra with SBI Life Insurance Co. Ltd.",
    gu: "એસબીઆઈ લાઈફ ઇન્શ્યોરન્સ અધિકૃત લાઈફ મિત્ર જયંતિલાલ સુથારનું સંપર્ક કાર્ડ, મોબાઈલ નંબર અને કાર્યાલયનું સરનામું સેવ કરો.",
    hi: "एसबीआई लाइफ इंश्योरेंस अधिकृत लाइफ मित्र जयंतीलाल सुथार का डिजिटल संपर्क कार्ड, मोबाइल नंबर एवं कार्यालय का पता सुरक्षित करें।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/visiting-card",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function VisitingCardPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [
    { label: "Visiting Card", href: `/${lang}/visiting-card` },
  ];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Top Banner with Consistent Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-bold border border-white/20 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFBA00]" />
            <span>Official Advisor Identity • IRDAI Reg. 111</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight uppercase leading-[1.15]">
            Digital Visiting Card
          </h1>
          <p className="text-xs sm:text-sm text-purple-100/90 max-w-lg mx-auto font-normal">
            Save contact details directly to your mobile phone or share with family and friends needing reliable life insurance support.
          </p>
        </div>
      </section>

      {/* Card Presentation Section */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Interactive Card Component */}
          <VisitingCardComponent />

          {/* Verification Details Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3">
              Official Regulatory and Office Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-600">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block font-display">Life Insurance Partner:</span>
                <p className="font-medium text-slate-800">{siteConfig.company}</p>
                <p className="text-slate-500">Corporate portal: www.sbilife.co.in</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 block font-display">Registration Code:</span>
                <p className="font-mono text-amber-700 font-bold">IRDAI Regn. No. {siteConfig.irdaiRegNo}</p>
                <p className="text-slate-500">Authorized Agency Code: 992424381</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 block font-display">Primary Contact:</span>
                <p>Mobile: {siteConfig.contact.displayPhone}</p>
                <p>Email: {siteConfig.contact.email}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 block font-display">Branch Office:</span>
                <p className="leading-relaxed">
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.landmark}, {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
