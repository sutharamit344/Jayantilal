"use client";

import React, { useState } from "react";
import { Locale } from "@/config/languages";
import { siteConfig } from "@/config/site";
import { getTranslations } from "@/content/translations";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface EnquiryFormProps {
  locale: Locale;
  defaultEnquiryType?: string;
  sourceContext?: string;
}

export function EnquiryForm({
  locale,
  defaultEnquiryType = "General Consultation",
  sourceContext = "Direct Contact Page",
}: EnquiryFormProps) {
  const t = getTranslations(locale);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredLanguage: locale,
    enquiryType: defaultEnquiryType,
    message: "",
    consent: true,
    hp_website: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic client checks
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please confirm your consent to receive the consultation call.");
      return;
    }

    setStatus("submitting");

    const langNames: Record<string, string> = {
      en: "English",
      gu: "Gujarati (ગુજરાતી)",
      hi: "Hindi (हिन्दी)",
    };

    const textLines = [
      `*New Life Insurance Consultation Enquiry*`,
      `--------------------------------`,
      `*Name:* ${formData.name.trim()}`,
      `*Mobile:* +91 ${cleanPhone}`,
      formData.email.trim() ? `*Email:* ${formData.email.trim()}` : "",
      `*Plan of Interest:* ${formData.enquiryType}`,
      `*Preferred Language:* ${langNames[formData.preferredLanguage] || formData.preferredLanguage}`,
      formData.message.trim() ? `*Query / Notes:* ${formData.message.trim()}` : "",
      `*Source:* ${sourceContext}`,
      `--------------------------------`,
      `Hello Jayanti Lal ji, please guide me with life insurance options and a tailored quote.`,
    ].filter(Boolean).join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=917976119365&text=${encodeURIComponent(textLines)}`;
    setRedirectUrl(whatsappUrl);

    // Asynchronously record lead on backend without blocking user
    try {
      fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: cleanPhone,
          sourceContext,
        }),
      }).catch(() => {});
    } catch {
      // Non-blocking
    }

    // Immediately redirect to WhatsApp
    if (typeof window !== "undefined") {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-[#2D1032] via-[#53205A] to-[#3B1441] p-5 sm:p-7 text-white border-b border-purple-900/60">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFBA00] text-xs font-semibold mb-2.5 border border-white/20 backdrop-blur-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFBA00]" />
          <span>{t.common.badgeVerified}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
          {t.form.heading}
        </h3>
        <p className="text-xs sm:text-sm text-purple-100/90 mt-1 leading-relaxed">
          {t.form.subheading}
        </p>
      </div>

      <div className="p-4 sm:p-7">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Honeypot field (hidden) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_website">Website</label>
              <input
                type="text"
                id="hp_website"
                name="hp_website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.hp_website}
                onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
              />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold">{errorMessage || t.form.errorMsg}</p>
                  <p className="text-xs text-rose-700 mt-1">
                    You can also reach out directly via call at{" "}
                    <a href={siteConfig.social.telUrl} className="font-bold underline">
                      {siteConfig.contact.displayPhone}
                    </a>
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.form.nameLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.form.phoneLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.form.phonePlaceholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.form.emailLabel}
                </label>
                <input
                  type="email"
                  placeholder={t.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Preferred Language */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.form.languageLabel}
                </label>
                <select
                  value={formData.preferredLanguage}
                  onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value as Locale })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                >
                  <option value="en">English</option>
                  <option value="gu">ગુજરાતી (Gujarati)</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                </select>
              </div>
            </div>

            {/* Plan of Interest */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.form.enquiryTypeLabel}
              </label>
              <select
                value={formData.enquiryType}
                onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                <option value="Pure Term Insurance Plan">Pure Term Insurance (High Cover)</option>
                <option value="Guaranteed Savings Plan">Guaranteed Savings & Income Plan</option>
                <option value="Wealth Creation & ULIP">Wealth Creation & ULIP</option>
                <option value="Child Education & Marriage Plan">Child Future & Education Plan</option>
                <option value="Retirement & Pension Plan">Retirement & Pension Solution</option>
                <option value="Existing Policy Review">Existing Policy Review & Claim Query</option>
                <option value="General Consultation">General Consultation / Not Sure</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t.form.messageLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.form.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="consent-check"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor="consent-check" className="text-xs text-slate-500 leading-normal select-none">
                {t.form.consentText}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed shadow-md ${
                status === "submitting"
                  ? "bg-[#25D366] text-white"
                  : "bg-[#FFBA00] hover:bg-[#F5A800] active:scale-[0.99] text-slate-950 hover:shadow-lg"
              }`}
            >
              {status === "submitting" ? (
                <>
                  <MessageSquare className="w-4 h-4 animate-bounce text-white" />
                  <span>Connecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.form.submitBtn}</span>
                </>
              )}
            </button>

            {status === "submitting" && redirectUrl && (
              <p className="text-center text-xs text-emerald-700 font-medium animate-pulse">
                Redirecting to WhatsApp with your consultation details...{" "}
                <a href={redirectUrl} className="font-bold underline text-emerald-800">
                  Click here if not redirected automatically
                </a>
              </p>
            )}

            <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-4">
              <a
                href={siteConfig.social.telUrl}
                className="inline-flex items-center gap-1 hover:text-slate-700 transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-500" />
                <span>Call {siteConfig.contact.displayPhone}</span>
              </a>
              <span>•</span>
              <a
                href={siteConfig.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-700 transition-colors text-emerald-600 font-semibold"
              >
                <MessageSquare className="w-3 h-3" />
                <span>Quick WhatsApp</span>
              </a>
            </div>
          </form>
      </div>
    </div>
  );
}
