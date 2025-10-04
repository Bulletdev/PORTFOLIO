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
    imageAlt: "Bullet Cloud API",
    title: "Bullet Cloud API ♺",
    description:
      "API RESTful escalável para gerenciamento de produtos desenvolvida em Golang, com foco em performance e arquitetura cloud-native",
    tech: ["Golang", "API REST", "Docker", "PostgreSQL"],
  },
  {
    href: "https://github.com/bulletdev/portfolio",
    imageSrc: "/measf.jpeg",
    imageAlt: "Portfolio Pessoal",
    title: "Portfolio Pessoal ♺",
    description:
      "Portfolio responsivo e moderno com design inspirado no Spotify, construído com Next.js 14 e Tailwind CSS",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    href: "https://github.com/bulletdev/pipeline-automatizador",
    imageSrc: "/cicd.png",
    imageAlt: "Automatizador de Pipeline CI/CD",
    title: "Automatizador de Pipeline CI/CD ♺",
    description:
      "Ferramenta desktop para automação de pipelines CI/CD com interface gráfica intuitiva, integração com Jenkins e suporte a containers Docker",
    tech: ["Java", "JavaFX", "Docker", "Shell Script", "Jenkins"],
  },
  {
    href: "https://github.com/bulletdev/sql-query-builder",
    imageSrc: "/sql.jpg",
    imageAlt: "SQL Query Builder Multi-Database",
    title: "SQL Query Builder 🛢️",
    description:
      "Gerador automático de queries SQL com suporte multi-database (MySQL, PostgreSQL, Oracle), reduzindo tempo de desenvolvimento em 70%",
    tech: ["Python", "Golang", "SQL", "Shell Script"],
  },
];
