import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Basics } from '../types/cv';
import { Avatar } from './Avatar';

interface HeaderProps {
  basics: Basics;
}

export const Header = ({ basics }: HeaderProps) => {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Avatar url={basics.avatar} name={basics.name} />
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{basics.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-4">{basics.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              <a href={`mailto:${basics.email}`} className="hover:text-blue-600">
                {basics.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-400" />
              <span>{basics.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>{basics.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">{basics.summary}</p>
    </header>
  );
};