import Experience from "../components/experience";

interface JobExperience {
  title: string;
  description: string;
  technologies: string;
  date: string;
}

export default function About() {
  const experiences: JobExperience[] = [
    {
      title: "Space Software Engineer | Saab",
      description:
        "Engineering elegant solutions for Space Domain Awareness Software.",
      technologies: "React \u2022 Java (Vert.X) \u2022 Kubernetes \u2022 Kafka",
      date: "Jan 2023 - Present",
    },
    {
      title: "Graduate Software Engineer | Saab ",
      description:
        "Full Stack Developer creating backend simulations and front end UIs to support the 9LV Combat System",
      technologies: "VueJS \u2022 Java \u2022 Docker \u2022 Bash",
      date: "Jan 2022 - Dec 2023",
    },
    {
      title:
        "Undergraduate Space Software Engineer | Defence Science and Technology Group",
      description:
        "Developing space software to visualise live view of satellite orbits, telemetry data, and automatic scheduling of antenna to communicate with satellites.",
      technologies: "VueJS \u2022 Java \u2022 Ansible",
      date: "Mar 2020 - Mar 2021",
    },
    {
      title: "Software Engineer Intern | Fivecast",
      description:
        "Worked with a small team to develop a web scraper and data parser from open source intelligence.",
      technologies: "Java \u2022 Python \u2022 JSoup",
      date: "Nov 2019 - Dec 2020",
    },
  ];

  return (
    <div className="grid col-span-2 scrollable scrollbar-hide h-[calc(100vh-170px)] s:h-[calc(100vh-190px)] sm:h-[calc(100vh-210px)] md:h-[calc(100vh-230px)] lg:h-[calc(100vh-260px)] xl:-[calc(100vh-300px)] 2xl:-[calc(100vh-300px)] text-left columns-1">
      {experiences.map((exp, index) => {
        return (
          <Experience
            title={exp.title}
            description={exp.description}
            technologies={exp.technologies}
            date={exp.date}
            key={index}
          />
        );
      })}
    </div>
  );
}
