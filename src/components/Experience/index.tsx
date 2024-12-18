import { Section } from '../shared/Section';
import { ExperienceItem as ExperienceItemType } from '../../types/cv';

interface ExperienceProps {
  experience: ExperienceItemType[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.position}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
              <p className="text-gray-500 text-sm">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {job.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};