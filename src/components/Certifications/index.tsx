import { Section } from '../shared/Section';
import { CertificationItem as CertificationItemType } from '../../types/cv';

interface CertificationsProps {
  certifications: CertificationItemType[];
}

export const Certifications = ({ certifications }: CertificationsProps) => {
  return (
    <Section title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.name}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mt-1">{cert.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};