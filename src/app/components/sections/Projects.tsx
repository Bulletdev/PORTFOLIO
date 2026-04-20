"use client";

import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../../page";
import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { useLanguage } from "../../contexts/languageContext";

const projectImages: { content: React.ReactNode; href: string }[] = [
  { href: "https://github.com/Bulletdev/prostaff-api",          content: <Image src="/prostaff.png"     alt="ProStaff API"             loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/prostaff-gateway",      content: <Image src="/gateway.webp"     alt="ProStaff Riot Gateway"    loading="lazy" width={700} height={300} /> },
  { href: "https://clubedojava.com.br/",                         content: <Image src="/cdj.jpg"          alt="Clube do Java E-commerce" loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/ProStaff-Scrims",       content: <Image src="/scrims.jpg"       alt="ProStaff Scrims"          loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/ArenaBR",               content: <Image src="/arena.avif"       alt="ArenaBR"                  loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/KingsLendas",           content: <Image src="/kingslendas.webp" alt="Kings Lendas Cup"         loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/go-cart-api",           content: <Image src="/api.png"          alt="API REST Golang"                         width={500} height={500} /> },
  { href: "https://fabmed.vercel.app/",                          content: <Image src="/fbm.jpg"          alt="Fabmed Distribuidora"     loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/Arremate-certo",        content: <Image src="/arremate.png"     alt="Arremate Certo"           loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/bulletdev/portfolio",             content: <Image src="/measf.jpeg"       alt="Portfolio Pessoal"        loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/ClubeDoJava/CalculoParaDevs",     content: <Image src="/calculo.png"      alt="Cálculo para Devs"        loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/bulletdev/pipeline-automatizador", content: <Image src="/pipeline.png"    alt="Automatizador de Pipeline" loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/ClubeDoJava/DevInterviewSimulator", content: <Image src="/simulador.png"  alt="DevInterviewSimulator"    loading="lazy" width={700} height={300} /> },
  { href: "https://github.com/Bulletdev/ShortMe",               content: <Image src="/shortm.png"      alt="ShortMe"                  loading="lazy" width={800} height={500} /> },
];

export default function Projects({ onSetExperienceSection }: ProjectsProps) {
  const { t } = useLanguage();

  const content = t.projects.items.map((item, i) => ({
    title: item.title,
    description: item.description,
    tech: item.tech,
    content: projectImages[i]?.content,
    href: projectImages[i]?.href,
  }));

  return (
    <div
      className="max-md:hidden max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-6 col-start-5 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="projects"
    >
      <div className="p-3">
        <div className="flex gap-3 justify-center">
          <button className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105 px-4 py-2.5 rounded-full gap-2 transition-all duration-200">
            {t.projects.recentProjects}
            <FaArrowDown className="text-base" />
          </button>

          <button
            className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
            onClick={onSetExperienceSection}
          >
            {t.projects.otherProjects}
            <GrLinkNext className="text-base" />
          </button>
        </div>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
