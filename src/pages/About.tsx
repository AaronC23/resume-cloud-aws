import Layout from "../components/Layout";

function About() {
  const experiences: any[] = [
    {
      title: "Space Software Engineer | Saab",
      description:
        "Engineering elegant solutions for a Space Domain Awareness Software.",
      technologies: "React \u2022 Java (Vert.X) \u2022 Kubernetes \u2022 Kafka",
      date: "Jan 2023 - June 2025",
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
    <Layout>
      <div className="grid col-span-2 columns-1 scrollable scrollbar-hide page-height text-left">
        {experiences.map((exp, index) => {
          return (
            <div className="pb-10 grid grid-cols-6 experience-font" key={index}>
              <div className="col-span-2 md:cols-span-1">{exp.date}</div>
              <div className="col-span-4 md:cols-span-4">
                <div className="title">{exp.title}</div>
                <div className="description">{exp.description}</div>
                <div className="technologies">{exp.technologies}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default About;
