import React from "react";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AlertCircle, Scale, ShieldAlert } from "lucide-react";

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
    path: "/disclaimer",
    title: "Legal & Regulatory Disclaimers",
    description: "Statutory disclaimers regarding life insurance solicitation, tax implications, and limitation of liability.",
  });
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [{ label: "Regulatory Disclaimers", href: `/${lang}/disclaimer` }];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Hero Banner - Consistent Rich Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
            <Scale className="w-3.5 h-3.5 text-[#FFBA00]" />
            <span>Compliance & Disclosures</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
            Regulatory Disclaimers & Disclosures
          </h1>
          <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
            Statutory disclaimers regarding life insurance solicitation, tax implications, and limitation of liability under IRDAI regulations.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-2 text-amber-950 shadow-2xs">
            <h2 className="text-base font-bold flex items-center gap-2 font-display text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-700" />
              <span>Insurance Solicitation Notice</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
              {siteConfig.disclaimers.insurance}
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              1. Educational Nature of Website Content
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The information published on this website is for consumer education, awareness, and general guidance only. While reasonable care has been taken to ensure factual correctness, nothing on this site constitutes a guarantee of policy underwriting, specific premium quotes, or guaranteed investment yields. All contracts are subject to official acceptance and policy bond issuance by SBI Life Insurance Company Ltd.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              2. Section 41 of Insurance Act, 1938 (Prohibition of Rebates)
            </h2>
            <p className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 italic leading-relaxed">
              &quot;No person shall allow or offer to allow, either directly or indirectly, as an inducement to any person to take out or renew or continue an insurance in respect of any kind of risk relating to lives or property in India, any rebate of the whole or part of the commission payable or any rebate of the premium shown on the policy, nor shall any person taking out or renewing or continuing a policy accept any rebate, except such rebate as may be allowed in accordance with the published prospectuses or tables of the insurer.&quot;
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              3. Section 45 of Insurance Act, 1938
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Policyholders have an affirmative legal duty of full and truthful disclosure. Under Section 45, no policy of life insurance shall be called in question on any ground whatsoever after the expiry of three years from the date of issuance or revival of the policy. Complete honesty during proposal submission safeguards your claim.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              4. Income Tax Laws Disclaimer
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {siteConfig.disclaimers.tax}
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold font-display text-slate-900">
              5. Portal Independence
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {siteConfig.disclaimers.general}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
