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
    href: "https://github.com/Bulletdev/prostaff-api",
    imageSrc: "/prostaff.png",
    imageAlt: "ProStaff API - Gerenciamento de Equipes E-sports",
    title: "ProStaff API",
    description:
      "API Ruby on Rails robusta para gerenciamento de equipes de e-sports. Arquitetura modular com módulos dedicados para scouting, analytics, agendamento e integração com API da Riot Games. Inclui autenticação JWT, Sidekiq, cache Redis e testes com RSpec.",
    tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "API Riot Games"],
  },
  {
    href: "https://github.com/Bulletdev/KingsLendas",
    imageSrc: "/kingslendas.webp",
    imageAlt: "Kings Lendas Cup",
    title: "Kings Lendas Cup",
    description:
      "Plataforma de torneio de League of Legends com standings ao vivo, calendário de partidas, perfis de times e jogadores, e estatísticas de campeões. Integração com a API Leaguepedia.",
    tech: ["Ruby on Rails", "TailwindCSS", "Hotwire", "SQLite", "Docker", "Redis"],
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
