"use client";

import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay, FaPause } from "react-icons/fa";
import { useLanguage } from "../../contexts/languageContext";
import type { Job } from "../../../../i18n/types";

export default function ExperienceItem() {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showTrivia, setShowTrivia] = useState(false);
  const [shuffledIndexes, setShuffledIndexes] = useState<number[] | null>(null);

  const jobs = t.experience.jobs;
  const positions = shuffledIndexes ? shuffledIndexes.map((i) => jobs[i]) : jobs;
  const isShuffled = shuffledIndexes !== null;

  const handleShuffle = () => {
    if (shuffledIndexes) {
      setShuffledIndexes(null);
    } else {
      const indexes = jobs.map((_, i) => i).sort(() => Math.random() - 0.5);
      setShuffledIndexes(indexes);
    }
  };

  return (
    <section
      className="relative col-span-2 row-span-4 col-start-3 bg-spotify-light-dark rounded-xl max-md:overflow-y-scroll overflow-hidden max-md:col-span-1"
      id="#experience"
    >
      <div className="bg-spotify-gray px-6 py-4">
        <h2 className="text-xl font-bold mb-1">{t.experience.sectionTitle}</h2>
        <p className="flex items-center gap-1.5 text-spotify-grey text-sm">
          <CiGlobe className="text-lg" />
          {t.experience.yearsExp}
        </p>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full bg-spotify-green p-3.5 hover:scale-105 hover:bg-spotify-dark-green transition-all duration-200"
              title={isPlaying ? t.experience.hideDescriptions : t.experience.showDescriptions}
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
                title={isShuffled ? t.experience.originalOrder : t.experience.shuffle}
              >
                <IoShuffle
                  className={`text-3xl transition-all duration-200 ${
                    isShuffled ? "text-spotify-green" : "text-spotify-grey hover:text-white"
                  }`}
                />
              </button>
              <button
                onClick={() => { setShowTech(!showTech); setShowTrivia(false); }}
                title={language === "en" ? "Show tech stack" : "Mostrar stack"}
              >
                <FiPlusCircle
                  className={`text-2xl transition-all duration-200 ${
                    showTech ? "text-spotify-green" : "text-spotify-grey hover:text-white"
                  }`}
                />
              </button>
              <button
                onClick={() => { setShowTrivia(!showTrivia); setShowTech(false); }}
                title={language === "en" ? "Reveal curiosities" : "Revelar curiosidades"}
              >
                <MdOutlineDownloadForOffline
                  className={`text-2xl transition-all duration-200 ${
                    showTrivia ? "text-spotify-green" : "text-spotify-grey hover:text-white"
                  }`}
                />
              </button>
              <BsThreeDots className="text-2xl text-spotify-grey hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
          <RxHamburgerMenu className="text-2xl text-spotify-grey hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>

      <Positions positions={positions} isPlaying={isPlaying} showTech={showTech} showTrivia={showTrivia} />
    </section>
  );
}

type PositionsProps = {
  positions: Job[];
  isPlaying: boolean;
  showTech: boolean;
  showTrivia: boolean;
};

function Positions({ positions, isPlaying, showTech, showTrivia }: PositionsProps) {
  return (
    <div className="px-4 pb-2 md:overflow-y-auto md:h-[470px]">
      {positions.map((position: Job, index) => (
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

            {showTech && position.tech && (
              <div className="mt-2 flex flex-wrap gap-1.5 animate-fadeIn">
                {position.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold bg-spotify-green/15 text-spotify-green border border-spotify-green/30 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {showTrivia && position.trivia && (
              <div className="mt-2 text-xs text-spotify-light-gray bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-relaxed animate-fadeIn">
                {position.trivia}
              </div>
            )}

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
