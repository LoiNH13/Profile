interface AvatarProps {
  url?: string;
  name: string;
}

export const Avatar = ({ url, name }: AvatarProps) => {
  if (!url) return null;

  return (
    <div className="flex-shrink-0">
      <img
        src={url}
        alt={`${name}'s profile picture`}
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-lg print:shadow-none print:border-2"
      />
    </div>
  );
};