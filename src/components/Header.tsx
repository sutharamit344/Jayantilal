"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Locale } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { getTranslations } from "@/content/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = getTranslations(locale);

  const navLinks = [
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/life-insurance`, label: t.nav.plans },
    { href: `/${locale}/life-insurance/term-insurance`, label: t.nav.termInsurance },
    { href: `/${locale}/guides`, label: t.nav.guides },
    { href: `/${locale}/life-insurance/faqs`, label: t.nav.faqs },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Micro Utility Bar - Clean single row on all mobile viewports */}
      <div className="bg-[#2D1231] text-purple-100 text-xs py-1 px-3 sm:py-1.5 sm:px-4 border-b border-purple-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs">
          <div className="flex items-center gap-1.5 truncate">
            <span className="inline-flex items-center gap-1 text-[#FFBA00] font-semibold truncate">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="truncate">SBI Life • Life Mitra</span>
            </span>
            <span className="hidden md:inline text-purple-400/60">|</span>
            <span className="hidden md:inline text-purple-200">
              IRDAI Reg. No. {siteConfig.irdaiRegNo}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-[10px] sm:text-xs">
            <a
              href={siteConfig.social.telUrl}
              className="inline-flex items-center gap-1 text-purple-100 hover:text-[#FFBA00] transition-colors whitespace-nowrap"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFBA00]" />
              <span>{siteConfig.contact.displayPhone}</span>
            </a>
            <span className="text-purple-400/60">•</span>
            <a
              href={siteConfig.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors whitespace-nowrap font-medium"
            >
              <MessageSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 lg:gap-6">
          {/* Logo / Brand Identity with Official SBI Life Mark - ALWAYS FULLY VISIBLE, NEVER TRUNCATED */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus:outline-none"
          >
            <div className="relative h-7 w-20 sm:h-9 sm:w-26 md:h-10 md:w-28 shrink-0">
              <Image
                src="/images/lifemitra/SBILifeLogo.png"
                alt="SBI Life Insurance"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 80px, 112px"
                priority
              />
            </div>
            <div className="h-6 sm:h-8 w-px bg-slate-200 shrink-0" />
            <div className="flex flex-col shrink-0">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#53205A] transition-colors font-display leading-tight whitespace-nowrap">
                {siteConfig.fullName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#53205A] tracking-wide flex items-center gap-1 whitespace-nowrap">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Life Mitra</span>
                <span className="hidden lg:inline text-slate-400">•</span>
                <span className="hidden lg:inline text-slate-600 font-medium">SBI Life Advisor</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Clean, Short & Spacious */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs lg:text-[13px] font-medium whitespace-nowrap transition-colors ${
                    active
                      ? "text-[#53205A] bg-purple-50 font-bold"
                      : "text-slate-700 hover:text-[#53205A] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Switcher + Golden Button */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 shrink-0">
            <LanguageSwitcher currentLocale={locale} />

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-lg text-xs lg:text-sm font-bold bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
            >
              <span>{t.common.getQuote}</span>
              <ChevronRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Language Switcher + Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <LanguageSwitcher currentLocale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#FFBA00]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50 flex items-center justify-between"
            >
              <span>{t.nav.home}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                    active
                      ? "text-purple-900 bg-purple-50 font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 rounded-xl shadow"
            >
              <span>{t.common.getQuote}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
