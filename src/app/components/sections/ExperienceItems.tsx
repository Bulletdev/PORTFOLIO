import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function ExperienceItem() {
  return (
    <section
      className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="#experience"
    >
      <div className="bg-spotify-gray p-6">
        <h2 className="text-xl font-bold mb-1">Experiência Profissional</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />
          4444 saves • 4444 44m
        </p>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-spotify-green p-3.5 hover:scale-105 transition-transform">
              <FaPlay className="text-spotify-black text-sm" />
            </button>
            <div className="flex items-center gap-5">
              <IoShuffle className="text-3xl text-spotify-grey hover:text-white transition-colors" />
              <FiPlusCircle className="text-2xl text-spotify-grey hover:text-white transition-colors" />
              <MdOutlineDownloadForOffline className="text-2xl text-spotify-grey hover:text-white transition-colors" />
              <BsThreeDots className="text-2xl text-spotify-grey hover:text-white transition-colors" />
            </div>
          </div>
          <RxHamburgerMenu className="text-2xl text-spotify-grey hover:text-white transition-colors" />
        </div>
      </div>

      <Positions />
    </section>
  );
}

function Positions() {
  return (
    <div className="px-4 pb-4 md:overflow-y-auto h-[300px]">
      {experienceLists.map((position: experienceListsProps, index) => (
        <div
          className="flex items-center gap-4 p-2.5 hover:bg-[#282828] rounded-lg transition-colors group"
          key={position.companyName}
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
};

const experienceLists: experienceListsProps[] = [
  
  {
    imageSrc: "/ESR.svg",
    companyName: "Atento Brasil",
    positionTitle: "Especialista em infraestrutura",
    date: "Julho de 2022 - Dezembro de 2024",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "Rede Materdei de Saúde - Hospital EMEC",
    positionTitle: "Sysadmin & DevOps",
    date: "Fevereiro de 2022 – Julho de 2023",
  },
  {
    imageSrc: "/pinear-logo.svg",
    companyName: "Accenture",
    positionTitle: "Desenvolvedor Java",
    date: "Março 2020 - Março 2022",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "Accenture_",
    positionTitle: "Desenvolvedor Java Junior",
    date: "Fevereiro 2019 – Março 2020",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "Pirelli Pneus",
    positionTitle: "Desenvolvedor Java Junior",
    date: "Outubro 2017 – Outubro 2018",
  },
  {
    imageSrc: "/asu.svg",
    companyName: "Gotemburgo - VOLVO ",
    positionTitle: "Estágio de Programação",
    date: "Fevereiro 2015 – Agosto 2016",
  },
];
