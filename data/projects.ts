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
    title: "API REST Golang",
    description: "API RESTful modular para gerenciamento de E-commerce desenvolvida em Golang...",
    imageSrc: "/api.png",
    imageAlt: "API REST Golang para gerenciamento de produtos",
    href: "https://github.com/Bulletdev/go-cart-api",
    tech: ["Golang", "API REST", "Docker", "PostgreSQL"],
  },
  {
    title: "clube do java E-commerce",
    description: "Clube do Java E-commerce. Inclui desenvolvimento front-end com vue.js e back-end com Java...",
    imageSrc: "/cdj.jpg",
    imageAlt: "Clube do Java E-commerce",
    href: "https://clubedojava.com.br/",
    tech: ["Vue.js", "Java", "API Pagamento", "SEO", "Chatbot"],
  },
  {
    title: "Fabmed Distribuidora",
    description: "Rebranding visual da Fabmed Distribuidora, com foco em usabilidade e design moderno...",
    imageSrc: "/fbm.jpg",
    imageAlt: "Fabmed Distribuidora",
    href: "https://fabmed.vercel.app/",
    tech: ["React.js", "Node.js", "Intranet", "Chatbot", "SEO"],
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
