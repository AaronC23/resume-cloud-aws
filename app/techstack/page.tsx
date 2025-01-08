import Tech from "@/components/tech";

interface TechStack {
  title: string;
  technologies: string;
}

export default function Page() {
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
      technologies:
        "PostgreSQL \u2022 Docker \u2022 Kubernetes \u2022 Ansible \u2022 AWS \u2022 Terraform",
    },
  ];

  return (
    <div className="grid columns-1 col-span-2 scrollable scrollbar-hide aboutpage text-left">
      {experiences.map((exp, index) => {
        return (
          <Tech title={exp.title} technologies={exp.technologies} key={index} />
        );
      })}
    </div>
  );
}
