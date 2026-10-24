import { notFound } from "next/navigation";
import { isSupportedLocale, SUPPORTED_LANGUAGES } from "@/config/languages";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang: lang.code }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header locale={lang} />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <FloatingContact locale={lang} />
      <Footer locale={lang} />
    </div>
  );
}
