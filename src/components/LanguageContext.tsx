import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "../types";
import { translations } from "../i18n";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangInner] = useState<Language>(() => {
    const saved = localStorage.getItem("le_natural_lang");
    return (saved as Language) || "en";
  });

  const setLang = (newLang: Language) => {
    setLangInner(newLang);
    localStorage.setItem("le_natural_lang", newLang);
  };

  useEffect(() => {
    // Dynamic body and HTML direction update
    const direction = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
  }, [lang]);

  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div className={lang === "ar" ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
