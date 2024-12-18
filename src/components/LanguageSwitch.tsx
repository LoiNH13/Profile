import { useSearchParams } from 'react-router-dom';
import { Language } from '../hooks/useLanguage';

export const LanguageSwitch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLang = (searchParams.get('lang') as Language) || 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'vi' : 'en';
    setSearchParams({ lang: newLang });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors print:hidden"
    >
      {currentLang === 'en' ? '🇻🇳 Tiếng Việt' : '🇺🇸 English'}
    </button>
  );
};