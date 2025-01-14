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
  // Add more project objects here...
];
