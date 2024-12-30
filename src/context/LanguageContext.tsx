// src/context/LanguageContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const getDefaultLang = () => {
    const userLanguage = navigator.language.split("-")[0];
    return userLanguage === "pt" ? "pt" : "en";
  };
  const [language, setLanguage] = useState(getDefaultLang);

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0];
    const defaultLanguage = userLanguage === "pt" ? "pt" : "en";
    i18n.changeLanguage(defaultLanguage);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
