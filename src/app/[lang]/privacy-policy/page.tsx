import React from "react";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react";

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

  return generateSeoMetadata({
    locale: lang,
    path: "/privacy-policy",
    title: "Privacy Policy",
    description: "Our privacy policy outlining how customer contact information is protected, stored, and used strictly for life insurance consultations.",
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [{ label: "Privacy Policy", href: `/${lang}/privacy-policy` }];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Hero Banner - Consistent Rich Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
            <Lock className="w-3.5 h-3.5 text-[#FFBA00]" />
            <span>Data Protection & Privacy</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
            Privacy Policy & Data Ethics
          </h1>
          <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
            Our strict commitment outlining how customer contact information is protected, stored, and used solely for life insurance consultations.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              When you submit a consultation request through this website, we collect only the minimal, necessary contact data to facilitate direct communication with Jayantilal Suthar:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600 text-sm">
              <li>Full Name</li>
              <li>Mobile / WhatsApp Phone Number</li>
              <li>Email address (optional)</li>
              <li>Preferred language for discussion (English, Gujarati, Hindi)</li>
              <li>General area of interest or policy enquiry message</li>
            </ul>
            <p className="font-semibold text-slate-900 bg-amber-50/70 p-4 rounded-xl border border-amber-200 text-xs sm:text-sm">
              We never request Aadhaar numbers, PAN cards, credit card numbers, passwords, bank credentials, or confidential medical files through marketing forms on this website.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              2. How Your Information is Used
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Your contact details are strictly used to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600 text-sm">
              <li>Respond directly to your inquiry regarding life insurance products and policy reviews.</li>
              <li>Send requested policy quotes, illustrations, or educational brochures via WhatsApp or email.</li>
              <li>Coordinate authorized proposal submission with SBI Life Insurance Co. Ltd. only upon your explicit request.</li>
            </ul>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              3. Strict No-Spam & Zero Third-Party Selling Policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We value your trust above all else. <strong>We will never sell, rent, lease, or distribute your personal details to third-party telemarketers, loan aggregators, or marketing databases.</strong> Communication is strictly between you and your advisor, Jayantilal Suthar.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              4. Data Retention & Opt-Out
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If at any point you no longer wish to receive consultation calls or WhatsApp updates, you may reply with &quot;STOP&quot; on WhatsApp or email <span className="font-semibold text-slate-900">{siteConfig.contact.email}</span>, and your contact records will be promptly removed from active consultation follow-ups.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
            For questions regarding privacy practices, please contact Jayantilal Suthar at {siteConfig.contact.displayPhone} or {siteConfig.contact.email}.
          </div>
        </div>
      </section>
    </>
  );
}
