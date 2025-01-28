import Layout from "../components/Layout";

function TechStack() {
  const techExperiences: any[] = [
    {
      title: "Programming languages",
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "TailwindCSS",
        "Java",
        "Bash",
      ],
    },
    {
      title: "Frameworks & libraries",
      technologies: ["VertX", "React", "OpenAPISpec", "VueJS", "ViteJS"],
    },
    {
      title: "Technologies",
      technologies: [
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Ansible",
        "AWS",
        "Terraform",
      ],
    },
  ];

  return (
    <Layout>
      <div className="grid columns-1 col-span-2 scrollable scrollbar-hide aboutpage text-left">
        {techExperiences.map((exp, index) => {
          return (
            <div className="new-experience-font pb-2" key={index}>
              <div>
                <div>
                  <div className="title">{exp.title}</div>
                  <ul className="list-disc pl-3">
                    {exp.technologies.map((tech: string, index: any) => {
                      return (
                        <li className="description" key={index}>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default TechStack;
