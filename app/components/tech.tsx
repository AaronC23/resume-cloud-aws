export interface Props {
  title: string;
  technologies: string;
}

export default function Tech(props: Props) {
  return (
    <div className="pb-2 grid grid-cols-4 text-xxs sm:grid-cols-6 xs:text-xs s:text-sm sm:text-sm md:text-m lg:text-base xl:text-l 2xl:text-xl">
      <div className="col-span-4 md:cols-span-4">
        <div>
          <div className="title">{props.title}</div>
          <div className="description">{props.technologies}</div>
        </div>
      </div>
    </div>
  );
}
