import { Skills as SkillsType } from '../types/cv';

interface SkillsProps {
  skills: SkillsType;
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="mb-8">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <span
                key={skill}
                className="skill-tag skill-tag-technical"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill) => (
              <span
                key={skill}
                className="skill-tag skill-tag-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};