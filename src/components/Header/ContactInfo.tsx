import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Contact } from '../../types/cv';

interface ContactInfoProps {
  contact: Contact;
}

export const ContactInfo = ({ contact }: ContactInfoProps) => {
  const { email, phone, location } = contact;
  
  return (
    <div className="flex flex-wrap gap-4 text-gray-600">
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-gray-400" />
        <a href={`mailto:${email}`} className="hover:text-blue-600">
          {email}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <FaPhone className="text-gray-400" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-gray-400" />
        <span>{location}</span>
      </div>
    </div>
  );
};