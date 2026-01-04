import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations as translationsData } from '@/data/translations';

/**
 * Supported languages in the application
 */
export type Language = 'en' | 'tr';

/**
 * Translation data structure
 * Can be nested for organization
 */
export interface Translations {
  [key: string]: string | Translations;
}

const translations = translationsData as Record<Language, Record<string, string>>;

/**
 * Type-safe translation key
 * Automatically inferred from the English translations
 */
export type TranslationKey = keyof typeof translations.en;

/**
 * Internationalization context type
 * Provides language state and translation function
 */
export interface I18nContextType {
  /** Current active language */
  language: Language;
  /** Function to change the active language */
  setLanguage: (lang: Language) => void;
  /** Translation function that returns the translated string for a given key */
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

/**
 * Internationalization provider component
 * Manages language state and provides translation context to children
 * 
 * @param children - React nodes to wrap with i18n context
 * 
 * @remarks
 * - Persists language preference to localStorage
 * - Sets document language and direction attributes
 * - Falls back to English if stored language is invalid
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language;
      return stored === 'en' || stored === 'tr' ? stored : 'en';
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
      document.documentElement.dir = 'ltr'; // Update if needed for RTL languages
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  /**
   * Translation function
   * Returns translated string for the given key, falling back to English or the key itself
   * 
   * @param key - Translation key to look up
   * @returns Translated string or the key if translation not found
   */
  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations.en?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Hook to access internationalization context
 * 
 * @returns I18nContextType with language, setLanguage, and translation function
 * @throws Error if used outside of I18nProvider
 * 
 * @example
 * ```tsx
 * const { t, language, setLanguage } = useI18n();
 * return <p>{t('welcomeMessage')}</p>;
 * ```
 */
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

