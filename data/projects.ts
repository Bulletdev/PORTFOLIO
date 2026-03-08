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
    title: "clube do java E-commerce",
    description: "Clube do Java E-commerce. Inclui desenvolvimento front-end com vue.js e back-end com Java...",
    imageSrc: "/cdj.jpg",
    imageAlt: "Clube do Java E-commerce",
    href: "https://clubedojava.com.br/",
    tech: ["Vue.js", "Java", "API Pagamento", "SEO", "Chatbot"],
  },
  {
    href: "https://github.com/Bulletdev/KingsLendas",
    imageSrc: "/kingslendas.png",
    imageAlt: "Kings Lendas Cup",
    title: "Kings Lendas Cup",
    description:
      "Plataforma de torneio de League of Legends com standings ao vivo, calendário de partidas, perfis de times e jogadores, e estatísticas de campeões. Integração com a API Leaguepedia.",
    tech: ["Ruby on Rails", "TailwindCSS", "Hotwire", "SQLite", "Docker", "Redis"],
  },
  {
    title: "API REST Golang",
    description: "API RESTful modular para gerenciamento de E-commerce desenvolvida em Golang...",
    imageSrc: "/api.png",
    imageAlt: "API REST Golang para gerenciamento de produtos",
    href: "https://github.com/Bulletdev/go-cart-api",
    tech: ["Golang", "API REST", "Docker", "PostgreSQL"],
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
];
