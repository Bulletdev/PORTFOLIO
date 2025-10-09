"use client";

import { useState } from "react";
import ProfileCard from "./components/sections/ProfileCard";
import Footer from "./components/Footer";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ProgrammingLanguages from "./components/sections/ProgrammingLanguages";
import SpotifyAlbum from "./components/sections/SpotifyAlbum";
import ExperienceItem from "./components/sections/ExperienceItems";
import OpenedExperienceItem from "./components/sections/OpenedExperienceItem";
import InteractiveTutorial from "./components/InteractiveTutorial";

export interface ProjectsProps {
  onSetExperienceSection?: () => void;
}

export default function Home() {
  const [experienceSection, setExperienceSection] = useState<boolean>(false);

  function handleSetExperienceSection() {
    setExperienceSection((prev) => !prev);
  }

  return (
    <>
      <InteractiveTutorial />
      <main className="w-screen max-w-[1800px] mx-auto pt-2 px-16 grid grid-cols-6 grid-rows-8 max-md:gap-2 gap-2 max-lg:flex max-lg:flex-col max-md:px-6 mb-4">
        <ProfileCard />
        {experienceSection ? (
          <OpenedExperienceItem
            onSetExperienceSection={handleSetExperienceSection}
            className="max-md:hidden"
          />
        ) : (
          <>
            <ExperienceItem />
            <Projects onSetExperienceSection={handleSetExperienceSection} />
            <ProgrammingLanguages />
          </>
        )}
        <OpenedExperienceItem className="block md:hidden" />

        <Skills />
        <SpotifyAlbum />
        <Footer />
      </main>
    </>
  );
}
