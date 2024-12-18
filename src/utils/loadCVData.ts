import { CVData } from '../types/cv';
import { Language } from '../hooks/useLanguage';
import cvDataEn from '../data/cv-data.json';
import cvDataVi from '../data/cv-data-vi.json';

export const loadCVData = (language: Language): CVData => {
  return language === 'en' ? cvDataEn : cvDataVi;
};