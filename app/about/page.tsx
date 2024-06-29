import Experience from "../components/experience";

interface JobExperience {
  title: string;
  description: string;
  technologies: string;
}

export default function About() {
  const experiences: JobExperience[] = [
    {
      title: "Space Software Engineer - Saab",
      description:
        "Engineering elegant solutions for Space Domain Awareness Software.",
      technologies: "React \u2022 Java (Vert.X) \u2022 Kubernetes \u2022 Kafka",
    },
  ];

  return (
    <div className="grid gap-4">
      <div className="font-barlow text-left overflow-auto columns-1">
        {experiences.map((exp, index) => {
          return (
            <Experience
              title={exp.title}
              description={exp.description}
              technologies={exp.technologies}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
