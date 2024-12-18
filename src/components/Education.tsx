import { EducationItem } from '../types/cv';

interface EducationProps {
  education: EducationItem[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section className="mb-8">
      <h2 className="section-title">Education</h2>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
            
            {edu.achievements.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};