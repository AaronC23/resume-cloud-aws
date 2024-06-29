export interface Props {
  title: string;
  description: string;
  technologies: string;
  date: string;
  company?: string;
}

export default function Experience(props: Props) {
  return (
    <div className="pb-10 grid grid-cols-5 gap-1">
      <div className="col-span-1">{props.date}</div>
      <div className="col-span-4">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="technologies">{props.technologies}</div>
      </div>
    </div>
  );
}
