import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

//       className={`min-h-screen items-center grid grid-cols-1 text-center font-newsreader ${className}`}

function Section({ id, children, className = "" }: SectionProps) {
  return (
    <div
      id={id}
      className={`min-h-screen items-center grid grid-cols-1 text-center font-newsreader ${className}`}
    >
      {children}
    </div>
  );
}

export default Section;
