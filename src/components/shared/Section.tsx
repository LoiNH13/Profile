import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};