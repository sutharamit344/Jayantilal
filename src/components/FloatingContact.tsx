"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Locale } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { MessageSquare, Phone, CreditCard, ChevronUp } from "lucide-react";

interface FloatingContactProps {
  locale: Locale;
}

export function FloatingContact({ locale }: FloatingContactProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating Right Bar - Matches reference theme */}
      <aside
        aria-label="Quick Contact Actions"
        className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col shadow-2xl rounded-l-md overflow-hidden border-l border-y border-slate-300 w-13 text-center"
      >
        {/* Visiting Card */}
        <Link
          href={`/${locale}/visiting-card`}
          className="bg-[#5B2166] hover:bg-[#4C1856] text-white py-2.5 px-1 flex flex-col items-center justify-center transition-colors group"
          title="Digital Visiting Card"
        >
          <CreditCard className="w-5 h-5 text-purple-200 group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-semibold mt-1 leading-tight text-purple-100">
            Visiting
            <br />
            Card
          </span>
        </Link>

        {/* WhatsApp */}
        <a
          href={siteConfig.social.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 px-1 flex flex-col items-center justify-center transition-colors group"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-semibold mt-1 leading-tight text-white">
            WhatsApp
          </span>
        </a>

        {/* Call Us */}
        <a
          href={siteConfig.social.telUrl}
          className="bg-[#00A3E0] hover:bg-[#0092C9] text-white py-2.5 px-1 flex flex-col items-center justify-center transition-colors group"
          title={`Call ${siteConfig.contact.displayPhone}`}
        >
          <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          <span className="text-[9px] font-semibold mt-1 leading-tight text-white">
            Call Us
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <nav
        aria-label="Mobile Quick Actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg"
      >
        <a
          href={siteConfig.social.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#25D366] text-white font-bold text-xs shadow-sm hover:bg-[#20BD5A] active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <a
          href={siteConfig.social.telUrl}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#53205A] text-white font-bold text-xs shadow-sm hover:bg-[#431649] active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#FFBA00]" />
          <span>Call Us</span>
        </a>

        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center justify-center py-2.5 px-3.5 rounded-lg bg-[#FFBA00] text-slate-950 font-bold text-xs shadow-sm hover:bg-[#F5A800] active:scale-95 transition-all"
        >
          <span>Enquire</span>
        </Link>
      </nav>

      {/* Floating scroll top for mobile */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="md:hidden fixed bottom-16 right-4 z-30 p-2.5 rounded-full bg-[#53205A] text-white shadow-lg border border-purple-800"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 text-[#FFBA00]" />
        </button>
      )}
    </>
  );
}
