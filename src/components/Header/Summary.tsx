interface SummaryProps {
  text: string;
}

export const Summary = ({ text }: SummaryProps) => {
  return (
    <p className="text-gray-700 leading-relaxed">{text}</p>
  );
};