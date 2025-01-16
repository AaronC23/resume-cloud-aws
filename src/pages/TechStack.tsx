import Layout from "../components/Layout";

function TechStack() {
  const techExperiences: any[] = [
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
      technologies:
        "PostgreSQL \u2022 Docker \u2022 Kubernetes \u2022 Ansible \u2022 AWS \u2022 Terraform",
    },
  ];

  return (
    <Layout>
      <div className="grid columns-1 col-span-2 scrollable scrollbar-hide aboutpage text-left">
        {techExperiences.map((exp, index) => {
          return (
            <div className="pb-2 grid grid-cols-4 experience-font" key={index}>
              <div className="col-span-4">
                <div>
                  <div className="title">{exp.title}</div>
                  <div className="description">{exp.technologies}</div>
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
