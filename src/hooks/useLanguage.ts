import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type Language = 'en' | 'vi';

export const useLanguage = () => {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'vi' || lang === 'en') {
      setLanguage(lang);
    }
  }, [searchParams]);

  return language;
};