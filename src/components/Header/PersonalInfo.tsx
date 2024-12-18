interface PersonalInfoProps {
  name: string;
  title: string;
}

export const PersonalInfo = ({ name, title }: PersonalInfoProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">{title}</h2>
    </>
  );
};