"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Locale, SUPPORTED_LANGUAGES, getLocalizedPath } from "@/config/languages";
import { Globe, ChevronDown } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === currentLocale) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (locale: Locale) => {
    setIsOpen(false);
    const newPath = getLocalizedPath(pathname, locale);
    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 whitespace-nowrap"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600 shrink-0" />
        <span className="sm:hidden">{currentLang.code.toUpperCase()}</span>
        <span className="hidden sm:inline">{currentLang.nativeLabel}</span>
        <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-500 shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 rounded-md bg-white shadow-lg border border-slate-200 py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                lang.code === currentLocale
                  ? "bg-amber-50 text-amber-900 font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>{lang.nativeLabel}</span>
              <span className="text-[10px] uppercase text-slate-400 font-mono">
                {lang.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
