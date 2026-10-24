export type Locale = "en" | "gu" | "hi";

export interface LanguageInfo {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: "ltr";
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "gu", label: "Gujarati", nativeLabel: "ગુજરાતી", dir: "ltr" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", dir: "ltr" },
];

export const DEFAULT_LOCALE: Locale = "en";

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === locale);
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // Strip any existing language prefix
  const stripped = cleanPath.replace(/^\/(en|gu|hi)/, "");
  const normalized = stripped.startsWith("/") ? stripped : `/${stripped}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}
