import { Section } from '../shared/Section';
import { SkillCategory } from './SkillCategory';
import { Skills as SkillsType } from '../../types/cv';

interface SkillsProps {
  skills: SkillsType;
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCategory
          title="Technical Skills"
          skills={skills.technical}
          variant="technical"
        />
        <SkillCategory
          title="Soft Skills"
          skills={skills.soft}
          variant="soft"
        />
      </div>
    </Section>
  );
};