export interface Props {
  title: string;
  technologies: string;
}

export default function Tech(props: Props) {
  return (
    <div className="pb-2 grid grid-cols-4 experience-font">
      <div className="col-span-4">
        <div>
          <div className="title">{props.title}</div>
          <div className="description">{props.technologies}</div>
        </div>
      </div>
    </div>
  );
}
