'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation } from '@/utils/translations';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('language') || 'ko';
    setLanguage(saved);
    setMounted(true);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    window.localStorage.setItem('language', lang);
  };

  const t = (key) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, mounted, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
