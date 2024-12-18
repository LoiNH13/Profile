import { useLanguage } from './hooks/useLanguage';
import { loadCVData } from './utils/loadCVData';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { PrintButton } from './components/PrintButton';
import { LanguageSwitch } from './components/LanguageSwitch';

export default function App() {
  const language = useLanguage();
  const data = loadCVData(language);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 print:bg-white print:py-0 print:min-h-0">
        <main className="container mx-auto max-w-4xl content-wrapper">
          <div className="card">
            <Header basics={data.basics} />
            <Skills skills={data.skills} />
            <Experience experience={data.experience} />
            <Education education={data.education} />
            <Certifications certifications={data.certifications} />
          </div>
        </main>
      </div>
      <PrintButton />
      <LanguageSwitch />
    </>
  );
}