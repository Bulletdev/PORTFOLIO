import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { BackgroundGradient } from "../ui/background-gradient";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { title } from "process";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-3">
        <div className="flex gap-3 justify-center">
          {/* Primary Button (Green) */}
          <button className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200">
            Projetos Recentes
            <FaArrowDown className="text-base" />
          </button>

          {/* Secondary Button (White Border) */}
          <button
            className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
            onClick={onSetExperienceSection}
          >
            Demais Projetos
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>
      <StickyScroll content={projectLists} />
    </div>
  );
}

const projectLists: {
  title: string;
  description: string;
  content?: React.ReactNode | any;
  tech?: string[];
}[] = [
    {
    title: "ProStaff API",
    description:
      "API Ruby on Rails robusta para gerenciamento de equipes de e-sports. Arquitetura modular monolítica com módulos dedicados para scouting, analytics, agendamento e integração com API da Riot Games. Inclui autenticação JWT, processamento assíncrono com Sidekiq, cache Redis e testes automatizados com RSpec.",
    tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "API Riot Games"],
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/prostaff-api">
        <Image
          src="/prostaff.png"
          alt="ProStaff API - Gerenciamento de Equipes E-sports"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "Kings Lendas Cup",
    description:
      "Plataforma de torneio de League of Legends com standings ao vivo, calendário de partidas, perfis de times e jogadores, rastreamento de KDA e análise de draft. Integração com a API Leaguepedia para sincronização automática de dados.",
    tech: ["Ruby on Rails", "TailwindCSS", "Hotwire", "SQLite", "Docker", "Redis"],
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/KingsLendas">
        <Image
          src="/kingslendas.webp"
          alt="Kings Lendas Cup - Torneio de League of Legends"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "Clube do Java E-commerce",
    description:
      "E-commerce desenvolvido com Vue.js e Java, além de integração com sistemas de API de pagamento, correios, chatbot e otimização para SEO.",
    tech: ["Vue.js", "Java", "API Pagamento", "SEO", "Chatbot"],
    content: (
      <a target="_blank" href="https://clubedojava.com.br/">
        <Image
          src="/cdj.jpg"
          alt="Clube do Java E-commerce"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "API REST Golang",
    description:
      "API RESTful escalável construída com Golang para gerenciamento completo de e-commerce. Implementa arquitetura limpa com separação de camadas, suporte a Docker para deploy simplificado, e PostgreSQL para persistência robusta de dados. Inclui autenticação JWT, documentação Swagger, e endpoints otimizados para alta performance.",
    tech: ["Golang", "API REST", "Docker", "PostgreSQL"],
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/go-cart-api">
        <Image
          src="/api.png"
          alt="API REST Golang para gerenciamento de produtos"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "Fabmed Distribuidora",
    description:
      "Rebranding visual da Fabmed Distribuidora, com foco em usabilidade e design moderno. Inclui desenvolvimento front-end com React.js e back-end com Node.js, além de integração com sistemas de Intranet, chatbot e otimização para SEO.",
    tech: ["React.js", "Node.js", "Intranet", "Chatbot", "SEO"],
    content: (
      <a target="_blank" href="https://fabmed.vercel.app/">
        <Image
          src="/fbm.jpg"
          alt="Fabmed Distribuidora"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },

  {
    title: "Arremate Certo",
    description:
      "Plataforma de automação para processos licitatórios e dispensas públicas. Arquitetura híbrida com backend Java Spring Boot e Go Gin, oferecendo lances automatizados com regras customizáveis, relatórios detalhados de participação, integração com portais públicos e privados, e gestão segura de dados com criptografia Bouncy Castle.",
    tech: ["Java Spring Boot", "Go", "PostgreSQL", "Apache Kafka", "Vue.js"],
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/Arremate-certo">
        <Image
          src="/arremate.png"
          alt="Arremate Certo - Automação de Licitações"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "Portfolio Pessoal",
    description:
      "Portfolio responsivo e moderno com design inspirado no Spotify, construído com Next.js 14 e Tailwind CSS. Apresenta projetos, habilidades e experiências de forma elegante, destacando-se pela usabilidade e estética visual.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    content: (
      <a target="_blank" href="https://github.com/bulletdev/portfolio">
        <Image
          src="/measf.jpeg"
          alt="Portfolio Pessoal"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },
  {
    title: "📐 Cálculo para Devs",
    description:
      "Plataforma educacional com exemplos práticos de código organizados por módulos, ensinando conceitos fundamentais de cálculo aplicados à programação. Ideal para desenvolvedores que desejam dominar matemática aplicada ao desenvolvimento de software.",
    tech: ["Python", "JavaScript", "Markdown", "Git"],
    content: (
      <a target="_blank" href="https://github.com/ClubeDoJava/CalculoParaDevs">
        <Image
          src="/calculo.png"
          alt="Cálculo para Desenvolvedores"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },

  {
    title: "Automatizador de Pipeline",
    description:
      "Ferramenta desktop com interface intuitiva para criação automatizada de pipelines CI/CD. Elimina a necessidade de configuração manual complexa, integrando-se com Jenkins e Docker para deploy simplificado.",
    tech: ["Java", "JavaFX", "Docker", "Jenkins", "Shell Script"],
    content: (
      <a target="_blank" href="https://github.com/bulletdev/pipeline-automatizador">
        <Image
          src="/pipeline.png"
          alt="Automatizador de Pipeline CI/CD"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },
 
  {
    title: "DevInterviewSimulator",
    description:
      "Ferramenta interativa para preparação de entrevistas técnicas personalizadas. Gera perguntas dinâmicas baseadas nas tecnologias e frameworks do desenvolvedor, simulando entrevistas reais e acelerando o processo de preparação.",
    tech: ["Python", "AI", "FastAPI", "React"],
    content: (
      <a target="_blank" href="https://github.com/ClubeDoJava/DevInterviewSimulator">
        <Image
          src="/simulador.png"
          alt="Simulador de Entrevistas para Desenvolvedores"
          loading="lazy"
          width={700}
          height={300}
        />
      </a>
    ),
  },


  {
    title: "ShortMe",
    description:
      "Plataforma de bio link que centraliza múltiplos links em uma única página personalizada. Ideal para criadores de conteúdo e empresas que precisam compartilhar redes sociais, sites, lojas e mídias de forma organizada e profissional.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/ShortMe">
        <Image
          src="/shortm.png"
          alt="ShortMe - Plataforma de Bio Links"
          loading="lazy"
          width={800}
          height={500}
        />
      </a>
    ),
  },
];
