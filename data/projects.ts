// data/projects.ts
export type personalProjectType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
}[];

export const personalProjects: personalProjectType = [
  
  
  {
    href: "https://github.com/bulletdev/bullet-cloud-api",
    imageSrc: "/staticsitegenerator_infrastructure.png",
    imageAlt: "API",
    title: "Bullet API ♺",
    description:
      "API para gerenciamento de produtos",
    tech: ["Golang", "GO", "API REST"],
  },
  {
    href: "https://github.com/bulletdev/portfolio",
    imageSrc: "/measf.jpeg",
    imageAlt: "Portfolio",
    title: "Meu portfolio ♺",
    description:
      "Portfolio com design baseado no Spotify",
    tech: ["Typescript", "NextJS", "Tailwind"],
  },
  {
    href: "https://github.com/bulletdev/pipeline-automatizador",
    imageSrc: "/cicd.png",
    imageAlt: "Automatizador de pipeline",
    title: "Automatizador de Pipeline CI-CD ♺",
    description:
        "Autoamatizador de pipeline CI-CD",
    tech: ["Java", "JavaFX", "Docker", "Shell", "Jenkins"],
  },
  {
    href: "https://github.com/bulletdev/sql-query-builder",
    imageSrc: "/sql.jpg",
    imageAlt: "SQL Query Builder",
    title: "SQL Query Builder 🛢️",
    description:
        "Automatizador de Queries Multi-Database",
    tech: ["Python", "GO", "SQL", "Shell", ],
  },
  // Add more project objects here...
];
