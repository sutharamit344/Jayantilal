import React from "react";
import { notFound } from "next/navigation";
import { isSupportedLocale, Locale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { generateSeoMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EnquiryForm } from "@/components/EnquiryForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

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
    en: "Contact & Book Free Consultation",
    gu: "સંપર્ક અને મફત પરામર્શ",
    hi: "संपर्क एवं निःशुल्क परामर्श",
  };

  const descriptions: Record<Locale, string> = {
    en: "Get in touch with Jayantilal Suthar, authorised SBI Life Insurance advisor. Connect via WhatsApp, telephone, or online enquiry form.",
    gu: "એસબીઆઈ લાઈફ ઇન્શ્યોરન્સ અધિકૃત સલાહકાર જયંતિલાલ સુથાર સાથે વોટ્સએપ, ફોન અથવા ઓનલાઇન ફોર્મ દ્વારા સીધો સંપર્ક કરો.",
    hi: "एसबीआई लाइफ इंश्योरेंस अधिकृत सलाहकार जयंतीलाल सुथार से व्हाट्सएप, फोन अथवा ऑनलाइन फॉर्म द्वारा सीधा संपर्क करें।",
  };

  return generateSeoMetadata({
    locale: lang,
    path: "/contact",
    title: titles[lang],
    description: descriptions[lang],
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isSupportedLocale(lang)) notFound();

  const breadcrumbs = [{ label: "Contact", href: `/${lang}/contact` }];

  return (
    <>
      <Breadcrumb locale={lang} items={breadcrumbs} />

      {/* Hero Banner - Consistent Rich Plum Theme */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#2D1032] via-[#53205A] to-[#3B1441] text-white border-b border-purple-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,186,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <AnimateOnScroll direction="up" delayMs={50}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold border border-white/20 backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-[#FFBA00]" />
                <span>Confidential • 100% Free Consultation</span>
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={150}>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase leading-[1.15]">
                Contact Jayanti Lal Suthar
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delayMs={250}>
              <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
                Have questions about an existing policy, term insurance, or family protection? Get in touch directly via telephone, WhatsApp, or through the secure consultation form below.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Contact Details & Working Hours */}
            <AnimateOnScroll direction="right" className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl font-bold font-display text-slate-900 border-b border-slate-100 pb-3">
                  Direct Communication Channels
                </h2>

                <div className="space-y-4">
                  <a
                    href={siteConfig.social.telUrl}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-amber-50/70 hover:bg-amber-100/80 border border-amber-200/90 transition-all group shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FFBA00] text-slate-950 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-600 font-medium block">Phone Call (Direct Line)</span>
                      <span className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-amber-800 transition-colors">
                        {siteConfig.contact.displayPhone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={siteConfig.social.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200 transition-all group shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-emerald-800 font-medium block">WhatsApp Chat</span>
                      <span className="text-sm sm:text-base font-bold text-emerald-950">
                        Chat on {siteConfig.contact.displayWhatsapp}
                      </span>
                      <span className="text-[11px] text-emerald-700 block mt-0.5">
                        Typically responds within 30 minutes
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-[#00A3E0] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="break-all">
                      <span className="text-xs text-slate-500 font-medium block">Official Email</span>
                      <a
                        href={siteConfig.social.emailUrl}
                        className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#00A3E0] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-display">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Branch Office Address</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                    {siteConfig.contact.address.landmark}, {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                  </p>
                </div>

                {/* Working Hours */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-display">
                    <Clock className="w-4 h-4 text-[#53205A]" />
                    <span>Advisory Hours</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Monday to Saturday: 9:00 AM – 7:00 PM IST<br />
                    Sunday: Prior appointment for emergency claim guidance
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right Column: Interactive Consultation Form */}
            <AnimateOnScroll direction="left" delayMs={150} className="lg:col-span-7">
              <EnquiryForm
                locale={lang}
                defaultEnquiryType="General Consultation"
                sourceContext="Dedicated Contact Page"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
