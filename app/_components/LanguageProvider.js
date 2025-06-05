"use client";
import { getTranslations } from "@/lib/i18n";
import React, { createContext, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children, locale }) {
  const translations = getTranslations(locale);

  const t = (key) => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
}
