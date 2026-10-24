import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
        <span className="text-6xl font-extrabold text-[#53205A] font-display">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page or policy resource you are looking for might have been moved or is temporarily unavailable.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/en"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFBA00] hover:bg-[#F5A800] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={siteConfig.social.telUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#53205A]" />
            <span>Contact Advisor</span>
          </a>
        </div>
      </div>
    </div>
  );
}
