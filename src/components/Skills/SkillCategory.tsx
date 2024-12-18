interface SkillCategoryProps {
  title: string;
  skills: string[];
  variant: 'technical' | 'soft';
}

export const SkillCategory = ({ title, skills, variant }: SkillCategoryProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`skill-tag skill-tag-${variant}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};