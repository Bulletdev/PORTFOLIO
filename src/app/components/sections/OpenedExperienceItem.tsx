"use client";

import { MdClose } from "react-icons/md";
import { ProjectsProps } from "../../(main)/page";
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
import { personalProjects } from "../../../../data/projects";
import Link from "next/link";
import { IoPlayCircle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../../contexts/languageContext";

type ExperienceItemProps = {
  className?: string;
};

type ProjectsPropsWithClassName = ProjectsProps & ExperienceItemProps;

export default function OpenedExperienceItem({
  onSetExperienceSection,
  className,
}: ProjectsPropsWithClassName) {
  const { t } = useLanguage();

  return (
    <div
      id="project"
      className={`${className} col-span-4 row-span-6 col-start-3 row-start-1 bg-spotify-light-dark rounded-xl overflow-hidden flex flex-col h-[800px]`}
    >
      <div className="sticky top-0 bg-spotify-light-dark z-10">
        <div className="flex justify-between items-center p-6 pb-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-bold">{t.openedProjects.title}</h2>
            <p className="flex items-center text-spotify-grey text-sm gap-1.5">
              <CiGlobe className="text-xl text-spotify-white" />
              {t.openedProjects.subtitle(personalProjects.length)}
            </p>
          </div>

          <button
            type="button"
            className="p-3 hover:bg-[#282828] rounded-full transition-colors"
            onClick={onSetExperienceSection}
          >
            <MdClose className="text-2xl" />
          </button>
        </div>
      </div>

      <section className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4 p-6 pt-2 overflow-y-auto">
        {personalProjects.map((project, index) => {
          const translated = t.openedProjects.items[index];
          const title = translated?.title ?? project.title;
          const description = translated?.description ?? project.description;

          return (
            <Link target="_blank" key={project.title} href={project.href} className="group">
              <div className="relative hover:bg-[#282828] transition-colors p-4 rounded-xl flex flex-col gap-3">
                <div className="relative">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={400}
                    height={400}
                    className="rounded-lg w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <IoPlayCircle className="text-spotify-green text-5xl drop-shadow-lg" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{title}</h4>
                  <p className="text-sm text-spotify-grey line-clamp-2">{description}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {project.tech.map((el) => (
                      <div
                        className="text-[10px] bg-spotify-green px-2 py-1 rounded-md"
                        key={el}
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-spotify-grey group-hover:text-spotify-green transition-colors">
                    <FaGithub className="text-sm" />
                    <span>Ver no GitHub</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
