import { Basics } from '../../types/cv';
import { Avatar } from '../shared/Avatar';
import { ContactInfo } from './ContactInfo';
import { PersonalInfo } from './PersonalInfo';
import { Summary } from './Summary';

interface HeaderProps {
  basics: Basics;
}

export const Header = ({ basics }: HeaderProps) => {
  const { name, title, avatar, summary, ...contact } = basics;

  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Avatar url={avatar} name={name} />
        
        <div className="flex-1">
          <PersonalInfo name={name} title={title} />
          <ContactInfo contact={contact} />
        </div>
      </div>
      
      <Summary text={summary} />
    </header>
  );
};