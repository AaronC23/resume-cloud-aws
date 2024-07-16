export interface Props {
  title: string;
  description: string;
  technologies: string;
  date: string;
  company?: string;
}

export default function Experience(props: Props) {
  return (
    <div className="pb-4 grid grid-cols-6 text-xxs sm:grid-cols-6 sm:text-sm">
      <div className="col-span-2 md:cols-span-1">{props.date}</div>
      <div className="col-span-4 md:cols-span-4">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="technologies">{props.technologies}</div>
      </div>
    </div>
  );
}
