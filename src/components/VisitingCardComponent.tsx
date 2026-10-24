"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Download,
  MessageSquare,
  ShieldCheck,
  RotateCw,
} from "lucide-react";

export function VisitingCardComponent() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate downloadable vCard
  const downloadVCard = () => {
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:Suthar;Jayantilal;;;`,
      `FN:${siteConfig.fullName}`,
      `ORG:${siteConfig.company}`,
      `TITLE:${siteConfig.designation}`,
      `TEL;TYPE=CELL:${siteConfig.contact.phone}`,
      `EMAIL:${siteConfig.contact.email}`,
      `ADR;TYPE=WORK:;;${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2};${siteConfig.contact.address.city};${siteConfig.contact.address.state};${siteConfig.contact.address.pincode};${siteConfig.contact.address.country}`,
      `URL:${siteConfig.domain}`,
      `NOTE:IRDAI Reg. No. ${siteConfig.irdaiRegNo}`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Jayantilal_Suthar_Life_Mitra.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${siteConfig.fullName} - Life Insurance Advisor`,
          text: `Contact ${siteConfig.fullName} (${siteConfig.designation}, ${siteConfig.company}) for life insurance consultation: ${siteConfig.contact.displayPhone}`,
          url: window.location.href,
        });
      } catch {
        // User dismissed share
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col items-center">
      {/* Flip Toggle Button */}
      <div className="mb-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#53205A] text-white text-xs font-semibold hover:bg-[#431649] transition-colors shadow-sm"
        >
          <RotateCw className="w-3.5 h-3.5 text-[#FFBA00]" />
          <span>Flip to {isFlipped ? "Front Side" : "Back Side"}</span>
        </button>
        <span className="text-xs text-slate-500">Click card or button to rotate</span>
      </div>

      {/* Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full cursor-pointer perspective-1000 group select-none"
        style={{ minHeight: "330px" }}
      >
        <div
          className={`relative w-full rounded-2xl p-6 sm:p-8 transition-transform duration-500 shadow-2xl border ${
            isFlipped
              ? "bg-[#53205A] text-white border-purple-800"
              : "bg-white text-slate-900 border-slate-200"
          }`}
        >
          {!isFlipped ? (
            /* FRONT OF CARD */
            <div className="flex flex-col justify-between h-full space-y-6">
              {/* Header with SBI Life Branding */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-24">
                    <Image
                      src="/images/lifemitra/SBILifeLogo.png"
                      alt="SBI Life"
                      fill
                      className="object-contain object-left"
                      sizes="96px"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <div className="relative h-8 w-24">
                    <Image
                      src="/images/lifemitra/LifeMitraLogo.png"
                      alt="Life Mitra"
                      fill
                      className="object-contain object-right"
                      sizes="96px"
                    />
                  </div>
                </div>
              </div>

              {/* Main Profile Info */}
              <div className="flex items-center gap-5">
                {/* Advisor Photo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-100 border-2 border-slate-200 shadow-inner shrink-0 relative overflow-hidden">
                  <Image
                    src="/images/jayantilal-suthar-headshot.jpg"
                    alt={siteConfig.fullName}
                    fill
                    className="object-cover object-center"
                    sizes="96px"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    {siteConfig.fullName}
                  </h3>
                  <p className="text-xs font-semibold text-[#00A3E0]">
                    {siteConfig.designation}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {siteConfig.club}
                  </p>
                </div>
              </div>

              {/* Contact rows */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#FFBA00] shrink-0" />
                  <span className="font-semibold">{siteConfig.contact.displayPhone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 break-all">
                  <Mail className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                  <span className="text-[11px]">{siteConfig.contact.email}</span>
                </div>
              </div>
            </div>
          ) : (
            /* BACK OF CARD */
            <div className="flex flex-col justify-between h-full space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-purple-800 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FFBA00]" />
                  <span className="text-sm font-bold text-white tracking-wide">
                    {siteConfig.company}
                  </span>
                </div>
                <span className="text-[10px] text-purple-200 font-mono">
                  IRDAI Reg. #{siteConfig.irdaiRegNo}
                </span>
              </div>

              {/* Branch Address */}
              <div className="space-y-2 text-xs text-purple-100">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#FFBA00] shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-purple-100">
                    <p className="font-semibold text-white">Branch Office:</p>
                    <p>{siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}</p>
                    <p>{siteConfig.contact.address.landmark}</p>
                    <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.state} - {siteConfig.contact.address.pincode}</p>
                  </div>
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="p-3 rounded-lg bg-black/30 border border-purple-700/60 text-[10px] text-purple-200 leading-normal">
                Insurance is the subject matter of solicitation. Official SBI Life Life Mitra advisory code for customer service and claims assistance across India.
              </div>

              {/* Website link */}
              <div className="pt-2 border-t border-purple-800 flex items-center justify-between text-[11px] text-purple-200">
                <span>Official Partner Portal</span>
                <span className="font-mono text-[#FFBA00]">www.sbilife.co.in</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Below Card */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
        <button
          type="button"
          onClick={downloadVCard}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2D1231] hover:bg-[#3E1A43] text-white text-xs font-bold shadow transition-all active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <Download className="w-4 h-4 text-[#FFBA00]" />
          <span>Save Contact (.vcf)</span>
        </button>

        <a
          href={siteConfig.social.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shadow transition-all active:scale-95 whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <Share2 className="w-4 h-4 text-slate-600" />
          <span>{copied ? "Link Copied!" : "Share Card"}</span>
        </button>
      </div>
    </div>
  );
}
