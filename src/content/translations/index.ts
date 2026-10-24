import { Locale } from "@/config/languages";
import { en } from "./en";
import { gu } from "./gu";
import { hi } from "./hi";

export const translations = {
  en,
  gu,
  hi,
};

export type Translations = typeof en;

export function getTranslations(locale: Locale): Translations {
  return (translations[locale] || translations.en) as Translations;
}
