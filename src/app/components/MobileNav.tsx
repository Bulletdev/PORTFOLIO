"use client";

import SocialLinks from "./SocialLinks";
import NavButton from "./NavButton";
import { useLanguage } from "../contexts/languageContext";
import { PiLineVerticalThin } from "react-icons/pi";

interface MobileNavProps {
  handleMobile: () => void;
}

export default function MobileNav({ handleMobile }: MobileNavProps) {
  const { t, toggleLanguage } = useLanguage();

  const links = [
    { section: t.experience.sectionTitle, href: "#experience" },
    { section: t.projects.recentProjects, href: "#project" },
    { section: "Programming Languages", href: "#programming-languages" },
    { section: "Skills", href: "#skills" },
  ];

  return (
    <nav className="bg-spotify-light-dark flex flex-col text-left sm:hidden rounded-b-xl">
      {links.map((link, index) => (
        <div
          key={index}
          className="p-4 hover:bg-spotify-green rounded-lg"
          onClick={handleMobile}
        >
          <a href={link.href} className="text-spotify-white text-lg font-semibold">
            {link.section}
          </a>
        </div>
      ))}
      <div className="flex flex-row gap-3 p-3 items-center justify-center">
        <SocialLinks />
        <PiLineVerticalThin className="text-spotify-gray text-3xl" />
        <button
          onClick={toggleLanguage}
          className="text-sm font-bold text-spotify-gray hover:text-white transition-colors px-1"
        >
          {t.nav.toggleLang}
        </button>
        <NavButton name={t.nav.resume} href={t.cvUrl} />
      </div>
    </nav>
  );
}
