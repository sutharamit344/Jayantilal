"use client";

import React, { useState } from "react";
import { Locale } from "@/config/languages";
import { faqsData, FaqItem } from "@/content/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqAccordionProps {
  locale: Locale;
  categoryFilter?: "term" | "general" | "tax" | "claims" | "all";
}

export function FaqAccordion({ locale, categoryFilter = "all" }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = categoryFilter === "all"
    ? faqsData
    : faqsData.filter((item) => item.category === categoryFilter);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {filteredFaqs.map((faq: FaqItem) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-amber-300 shadow-sm"
                : "bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${
                  isOpen ? "text-amber-600" : "text-slate-400"
                }`} />
                <span className="text-sm sm:text-base font-semibold text-slate-900">
                  {faq.question[locale]}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-amber-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                {faq.answer[locale]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
