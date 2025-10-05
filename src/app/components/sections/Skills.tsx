import { InfiniteMovingCards } from "../ui/infinite-moving-cars";
import { ReactNode } from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div
      className="max-lg:col-span-1  max-lg:row-span-1 col-span-4 row-span-2 col-start-1 row-start-7 bg-spotify-light-dark rounded-xl h-fit"
      id="skills"
    >
      <h1 className="text-2xl font-semibold pl-5 pt-2 pb-1">Skills</h1>
      <InfiniteMovingCards items={skillItems} speed="fast" className="" />
    </div>
  );
}

const skillItems: { quote: ReactNode; name: string }[] = [
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
        width={40}
        height={40}
        alt="Spring Boot"
      />
    ),
    name: "Spring Boot",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        width={40}
        height={40}
        alt="Ruby"
      />
    ),
    name: "Ruby",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg"
        width={40}
        height={40}
        alt="Ruby on Rails"
      />
    ),
    name: "Ruby on Rails",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        width={40}
        height={40}
        alt="Golang"
      />
    ),
    name: "Golang",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        width={40}
        height={40}
        alt="PostgreSQL"
      />
    ),
    name: "PostgreSQL",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        width={40}
        height={40}
        alt="MySQL"
      />
    ),
    name: "MySQL",
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        width={40}
        height={40}
        alt="Git"
      />
    ),
    name: "Git",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg"
        width={40}
        height={40}
        alt="Red Hat"
      />
    ),
    name: "Red Hat",
  },
  {
    quote: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
        width={40}
        height={40}
        alt="Redis"
      />
    ),
    name: "Redis",
  },
];
