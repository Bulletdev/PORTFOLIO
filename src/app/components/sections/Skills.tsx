import { InfiniteMovingCards } from "../ui/infinite-moving-cars";
import { ReactNode } from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div
      className="max-lg:col-span-1  max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
      id="skills"
    >
      <h1 className="text-2xl font-semibold pl-5 pt-3">Skills</h1>
      <InfiniteMovingCards items={skillItems} speed="fast" className="" />
    </div>
  );
}

const skillItems: { quote: ReactNode; name: string }[] = [
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
        width={40}
        height={40}
        alt="Java"
      />
    ),
    name: "Java",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
        width={40}
        height={40}
        alt="Kubernetes"
      />
    ),
    name: "Kubernetes",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        width={40}
        height={40}
        alt="Docker"
      />
    ),
    name: "Docker",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"
        width={40}
        height={40}
        alt="IntelliJ"
      />
    ),
    name: "IntelliJ",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
        width={40}
        height={40}
        alt="Spring"
      />
    ),
    name: "Spring",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
        width={40}
        height={40}
        alt="Ubuntu"
      />
    ),
    name: "Ubuntu",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg"
        width={40}
        height={40}
        alt="ruby"
      />
    ),
    name: "ruby",
  },
 
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        width={40}
        height={40}
        alt="PostreSQL"
      />
    ),
    name: "PostreSQL",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        width={40}
        height={40}
        alt="mySQL"
      />
    ),
    name: "MySQL",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        width={40}
        height={40}
        alt="AWS"
      />
    ),
    name: "AWS",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        width={40}
        height={40}
        alt="Postman"
      />
    ),
    name: "Postman",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
        width={40}
        height={40}
        alt="npm"
      />
    ),
    name: "npm",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        width={40}
        height={40}
        alt="git"
      />
    ),
    name: "git",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg"
        width={40}
        height={40}
        alt="apache"
      />
    ),
    name: "apache",
  },
];
