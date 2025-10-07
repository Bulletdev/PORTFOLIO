import { ReactNode } from "react";
import Image from "next/image";

export default function ProgrammingLanguages() {
  return (
    <div
      className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="programming-languages"
    >
      <div className="p-4">
        <h1 className="text-xl font-bold mb-3">Tools</h1>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-3">
          {languageItems.map((item) => (
            <div
              className="flex items-center justify-center p-2.5 rounded-lg hover:bg-[#282828] transition-all duration-200 group"
              key={item.name}
              title={item.name}
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const languageItems: {
  name: string;
  component: ReactNode;
}[] = [

  // Ferramentas de Teste Java
  {
    name: "JUnit",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg"
        width={50}
        height={50}
        alt="JUnit"
      />
    ),
  },
  // Ferramentas Ruby
  {
    name: "RSpec",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rspec/rspec-original.svg"
        width={50}
        height={50}
        alt="RSpec"
      />
    ),
  },
    {
    name: "Sidekiq",
    component: (
      <Image
        src="/sidekiq.png"
        width={50}
        height={50}
        alt="Sidekiq"
      />
    ),
  },
  {
    name: "Selenium",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
        width={50}
        height={50}
        alt="Selenium"
      />
    ),
  },
  // Ferramentas de Build & CI/CD
  {
    name: "GitLab CI",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
        width={50}
        height={50}
        alt="GitLab CI"
      />
    ),
  },
  // Ferramentas de Monitoramento
  {
    name: "Grafana",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg"
        width={50}
        height={50}
        alt="Grafana"
      />
    ),
  },
  {
    name: "Prometheus",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg"
        width={50}
        height={50}
        alt="Prometheus"
      />
    ),
  },
  // API & Messaging
  {
    name: "Postman",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
        width={50}
        height={50}
        alt="Postman"
      />
    ),
  },
  {
    name: "RabbitMQ",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg"
        width={50}
        height={50}
        alt="RabbitMQ"
      />
    ),
  },
    {
    name: "Dbeaver ",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg"
        width={50}
        height={50}
        alt="Dbeaver"
      />
    ),
  },
  {
    name: "Kafka",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg"
        width={50}
        height={50}
        alt="Kafka"
      />
    ),
  },
];
