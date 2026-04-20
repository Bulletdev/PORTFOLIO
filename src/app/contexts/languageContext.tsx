"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { en } from "../../../i18n/en";
import { pt } from "../../../i18n/pt";
import type { Translations } from "../../../i18n/types";

export type Language = "en" | "pt";

type LanguageContextValue = {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved) {
      setLanguage(saved);
    } else {
      const detected = navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
      setLanguage(detected);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = language === "en" ? en : pt;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
