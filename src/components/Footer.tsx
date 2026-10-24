import React from "react";
import Link from "next/link";
import { Locale } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { getTranslations } from "@/content/translations";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  ShieldCheck,
  ExternalLink,
  CreditCard,
} from "lucide-react";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);

  return (
    <footer className="bg-[#38143E] text-purple-100 pt-16 pb-12 border-t border-purple-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/50">
          {/* Col 1 & 2: Advisor Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display text-white tracking-tight">
                {siteConfig.fullName}
              </span>
              <span className="text-xs font-semibold text-[#FFBA00] mt-0.5">
                {siteConfig.designation} • {siteConfig.club}
              </span>
            </div>

            <p className="text-sm text-purple-200/90 leading-relaxed max-w-md">
              Dedicated to helping individuals and families secure their financial immunity
              through transparent, need-based life insurance planning and lifetime claim assistance.
            </p>

            <div className="p-3.5 rounded-lg bg-[#270D2C] border border-purple-900/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Affiliation & Registration</span>
              </div>
              <p className="text-xs text-purple-200/80 leading-normal">
                Authorised Life Mitra with <strong className="text-white">{siteConfig.company}</strong>
                <br />
                Regulatory Identifier: <span className="font-mono text-[#FFBA00] font-bold">IRDAI Regn. No. {siteConfig.irdaiRegNo}</span>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/visiting-card`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-[#4B1B54] hover:bg-[#5C2267] text-white border border-purple-800 transition-colors"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#FFBA00]" />
                <span>{t.common.visitingCard}</span>
              </Link>
              <a
                href="https://www.sbilife.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-purple-200 hover:text-white transition-colors"
              >
                <span>SBI Life Corporate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 3: Insurance Offerings */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFBA00] mb-4">
              Products
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href={`/${locale}/life-insurance/term-insurance`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Protection Plans (Term)
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/life-insurance`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Saving Plans
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/life-insurance`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Wealth Creation & ULIPs
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/life-insurance`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Retirement Plans
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/life-insurance`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Child Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Knowledge & Education */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFBA00] mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href={`/${locale}/guides/life-insurance-basics`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Life Insurance Basics
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/guides/term-insurance-guide`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Term Insurance Guide
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/guides/how-much-coverage-needed`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Calculate Required Cover
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/guides/life-insurance-tax-benefits-india`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Tax Benefits (80C & 10(10D))
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/life-insurance/faqs`}
                  className="text-purple-200 hover:text-[#FFBA00] transition-colors"
                >
                  Policy & Claim FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFBA00] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={siteConfig.social.telUrl}
                  className="flex items-start gap-2.5 text-white hover:text-[#FFBA00] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#FFBA00] shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white hover:text-emerald-300 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.emailUrl}
                  className="flex items-start gap-2.5 text-purple-200 hover:text-[#FFBA00] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#FFBA00] shrink-0 mt-0.5" />
                  <span className="text-xs">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-purple-300 text-xs">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.landmark}, {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Disclaimers Section */}
        <div className="py-8 border-b border-purple-900/40 text-[11px] text-purple-300/80 space-y-2.5 leading-relaxed">
          <p className="font-bold text-[#FFBA00] uppercase tracking-wider">
            Regulatory & Compliance Disclaimers
          </p>
          <p>
            {siteConfig.disclaimers.insurance}
          </p>
          <p>
            {siteConfig.disclaimers.tax}
          </p>
          <p>
            {siteConfig.disclaimers.general}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-5">
            <Link
              href={`/${locale}/privacy-policy`}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={`/${locale}/disclaimer`}
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
