import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, children, className = "" }: SectionProps) {
  return (
    <div
      id={id}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Section;
