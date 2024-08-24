import Tech from "../components/tech";

// todo fix later lol
interface TechStack {
  title: string;
  technologies: string;
}

export default function About() {
  const experiences: TechStack[] = [
    {
      title: "Programming languages",
      technologies:
        "JavaScript \u2022 TypeScript \u2022 HTML5 \u2022 TailwindCSS \u2022 Java",
    },
    {
      title: "Frameworks & libraries",
      technologies:
        "VertX \u2022 React \u2022 OpenAPI \u2022 VueJS \u2022 NextJS",
    },
    {
      title: "Technologies",
      technologies: "PostgreSQL, Docker, Kubernetes, Ansible, AWS, Terraform,",
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
    <div className="grid col-span-2 scrollable scrollbar-hide h-[calc(100vh-160px)] xs:h-[calc(100vh-170px)] s:h-[calc(100vh-200px)] sm:h-[calc(100vh-210px)] md:h-[calc(100vh-240px)] lg:h-[calc(100vh-320px)] xl:-[calc(100vh-400px)] 2xl:-[calc(100vh-300px)] text-left columns-1">
      {experiences.map((exp, index) => {
        return (
          <Tech title={exp.title} technologies={exp.technologies} key={index} />
        );
      })}
    </div>
  );
}
