"use client";

import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay, FaPause } from "react-icons/fa";
import Image from "next/image";

export default function ExperienceItem() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [positions, setPositions] = useState(experienceLists);
  const [originalPositions] = useState(experienceLists);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShuffle = () => {
    if (isShuffled) {
      // Volta ao estado original
      setPositions(originalPositions);
      setIsShuffled(false);
    } else {
      // Embaralha
      const shuffled = [...positions].sort(() => Math.random() - 0.5);
      setPositions(shuffled);
      setIsShuffled(true);
    }
  };

  return (
    <section
      className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="#experience"
    >
      <div className="bg-spotify-gray px-6 py-4">
        <h2 className="text-xl font-bold mb-1">Experiência Profissional</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />
          +4 anos de experiência
        </p>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePlay}
              className="rounded-full bg-spotify-green p-3.5 hover:scale-105 hover:bg-spotify-dark-green transition-all duration-200"
              title={isPlaying ? "Ocultar descrições" : "Mostrar descrições"}
            >
              {isPlaying ? (
                <FaPause className="text-spotify-black text-sm" />
              ) : (
                <FaPlay className="text-spotify-black text-sm" />
              )}
            </button>
            <div className="flex items-center gap-5">
              <button
                onClick={handleShuffle}
                className="cursor-pointer"
                title={isShuffled ? "Ordenação original" : "Embaralhar"}
              >
                <IoShuffle
                  className={`text-3xl transition-all duration-200 ${
                    isShuffled
                      ? 'text-spotify-green'
                      : 'text-spotify-grey hover:text-white'
                  }`}
                />
              </button>
              <FiPlusCircle className="text-2xl text-spotify-grey hover:text-white transition-colors cursor-pointer" />
              <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey hover:text-white transition-colors cursor-pointer" />
              <BsThreeDots className="text-2xl text-spotify-grey hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
          <RxHamburgerMenu className="text-2xl text-spotify-grey hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      <Positions positions={positions} isPlaying={isPlaying} />
    </section>
  );
}

type PositionsProps = {
  positions: experienceListsProps[];
  isPlaying: boolean;
};

function Positions({ positions, isPlaying }: PositionsProps) {
  return (
    <div className="px-4 pb-2 md:overflow-y-auto h-[450px]">
      {positions.map((position: experienceListsProps, index) => (
        <div
          className="flex items-center gap-4 p-2.5 hover:bg-[#282828] rounded-lg transition-colors group"
          key={`${position.companyName}-${index}`}
        >
          <span className="text-spotify-grey group-hover:text-white min-w-[20px]">
            {index + 1}
          </span>
          <div className="flex-1">
            <p className="text-spotify-green text-sm font-semibold mb-0.5">
              {position.companyName}
            </p>
            <p className="font-bold text-md mb-0.5">{position.positionTitle}</p>
            <p className="text-spotify-gray text-sm">{position.date}</p>

            {/* Descrição que aparece quando o Play está ativo */}
            {isPlaying && position.description && (
              <div className="mt-2 text-spotify-light-gray text-sm leading-relaxed animate-fadeIn">
                <ul className="list-disc list-inside space-y-1">
                  {position.description.map((desc, idx) => (
                    <li key={idx} className="text-xs">{desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

type experienceListsProps = {
  imageSrc: string;
  companyName: string;
  positionTitle: string;
  date: string;
  description?: string[];
};

const experienceLists: experienceListsProps[] = [
  {
    imageSrc: "/ESR.svg",
    companyName: "Effecti",
    positionTitle: "Desenvolvedor Full Stack",
    date: "Janeiro de 2025 - Presente",
    description: [
      "Desenvolvimento de aplicações web utilizando Vue.js, php como cache, Java e Ruby on Rails",
      "Implementação de APIs RESTful e integração com bancos de dados",
      "Otimização de performance e escalabilidade de sistemas",
      "Participação em code reviews e melhoria contínua de processos",
      "Mentoria de desenvolvedores juniores",
      "Colaboração em projetos ágeis com metodologia Scrum"
    ]
  },
  {
    imageSrc: "/pinear-logo.svg",
    companyName: "Accenture",
    positionTitle: "Desenvolvedor Backend Pleno",
    date: "Março de 2020 - Março de 2022",
    description: [
      "Desenvolvimento de microserviços com Spring Boot",
      "Integração com APIs de terceiros e sistemas legados Ruby on Rails",
      "Testes unitários e de integração com JUnit e Mockito",
      "Participação em reuniões de planejamento e refinamento de sprints",
      "Colaboração com equipes multidisciplinares",
      "Code review e mentoria de desenvolvedores júnior"
    ]
  },
  {
    imageSrc: "/asu.svg",
    companyName: "Accenture",
    positionTitle: "Desenvolvedor Backend Júnior",
    date: "Fevereiro de 2019 - Março de 2020",
    description: [
      "Desenvolvimento de funcionalidades em sistemas enterprise",
      "Manutenção e correção de bugs em aplicações Java",
      "Participação em dailies e retrospectivas",
      "Colaboração com equipes de desenvolvimento ágil",
      "Aprendizado de boas práticas de programação"

    ]
  },
  {
    imageSrc: "/asu.svg",
    companyName: "Pirelli Pneus",
    positionTitle: "Desenvolvedor Júnior",
    date: "Outubro de 2017 - Outubro de 2018",
    description: [
      "Desenvolvimento de sistemas internos para controle de produção",
      "Criação de relatórios e dashboards",
      "Suporte a usuários finais",
      "Documentação técnica de sistemas"
    ]
  }
];
