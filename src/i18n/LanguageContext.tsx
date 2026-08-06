import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { DICTIONARIES, type Translations } from './translations';

export type LanguageCode = 'es' | 'en';

const STORAGE_KEY = 'encuadre.language';

interface LanguageContextValue {
  language: LanguageCode;
  t: Translations;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectDefaultLanguage(): LanguageCode {
  const deviceLanguage = Localization.getLocales()[0]?.languageCode;
  return deviceLanguage === 'en' ? 'en' : 'es';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(detectDefaultLanguage());

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved === 'es' || saved === 'en') setLanguageState(saved);
    });
  }, []);

  function setLanguage(lang: LanguageCode) {
    setLanguageState(lang);
    AsyncStorage.setItem(STORAGE_KEY, lang).catch(() => {});
  }

  return (
    <LanguageContext.Provider value={{ language, t: DICTIONARIES[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  return ctx;
}
