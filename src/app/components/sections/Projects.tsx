import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { BackgroundGradient } from "../ui/background-gradient";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-4">
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
}[] = [
  {
    title: "API Rest Golang",
    description:
      "API para gerenciamento de produtos , Uma API RESTful é uma interface de programação de aplicativos (API) que permite a troca de informações de forma segura entre dois sistemas de computador, permite a integração de aplicações e a conexão de componentes em arquiteturas de microsserviços. ",
    content: (
      <a target="_blank" href="https://github.com/Bulletdev/bullet-cloud-api">
        <Image
          src="/api.png"
          alt="Requisições aqui: https://bullet-cloud-api.onrender.com"
          width={500}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "📐 Cálculo para Devs",
    description:
      "Cálculo para Desenvolvedores! Aqui, você encontrará exemplos de código práticos e organizados por módulos para aprender e aplicar conceitos fundamentais de cálculo diretamente na programação. Este curso é ideal para desenvolvedores com conhecimento básico de programação e matemática (álgebra e geometria).",
    content: (
      <a target="_blank" href="https://github.com/ClubeDoJava/CalculoParaDevs">
        <Image
          src="/calculo.png"
          alt="demo"
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
      "Crie pipelines CI/CD de forma intuitiva sem precisar configurar manualmente",
      content: (
      <a target="_blank" href="https://github.com/bulletdev/pipeline-automatizador">
        <Image
          src="/pipeline.jpeg"
          alt="Demo"
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
      "O DevInterviewSimulator é uma ferramenta interativa que permite aos desenvolvedores se prepararem para entrevistas técnicas com base nas tecnologias e frameworks que eles dominam. O sistema gera perguntas dinâmicas e simula uma entrevista real.",
      content: (
      <a target="_blank" href="https://github.com/ClubeDoJava/DevInterviewSimulator">
        <Image
          src="/simulador.png"
          alt="Demo"
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
      "O ShortMe é uma plataforma online que permite criar uma página personalizada com vários links para diferentes conteúdos: Redes sociais, Sites, Lojas, Vídeos, Música, Podcasts.  é útil para pessoas e empresas que possuem várias plataformas e desejam compartilhar todas elas de forma organizada.",
      content: (
      <a target="_blank" href="https://github.com/Bulletdev/ShortMe">
        <Image
          src="/shortm.png"
          alt="Demo"
          loading="lazy"
          width={800}
          height={500}
        />
      </a>
    ),
  },
  {
    title: "",
    description: ""
  },
];
