import { useLanguage } from "@/context/LanguageContext";

export function useCorrectLanguage() {
  const { language } = useLanguage();
  const getLocalizedValue = (valuePT: string | undefined, valueEN: string | undefined): string | undefined => {
    return language === "en" ? valueEN : valuePT;
  };

  return getLocalizedValue;
}