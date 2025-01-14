import { ReactNode } from "react";
import Image from "next/image";

export default function ProgrammingLanguages() {
  return (
    <div
      className="max-lg:col-span-1 max-lg:row-span-1 col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl bg-spotify-light-dark overflow-hidden"
      id="programming-languages"
    >
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">Stacks</h1>
        <div className="grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-4">
          {languageItems.map((item) => (
            <div
              className="flex items-center justify-center p-2.5 rounded-lg hover:bg-[#282828] transition-all duration-200"
              key={item.name}
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
  {
    name: "Java",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        width={50}
        height={50}
        alt="Java"
      />
    ),
  
  },
  {
    name: "Ruby",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
        width={50}
        height={50}
        alt="Ruby"
      />
    ),
  },
  {
    name: "Django",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        width={50}
        height={50}
        alt="Django"
      />
    ),
  },
  {
    name: "Golang",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
        width={50}
        height={50}
        alt="Golang"
      />
    ),
  },
  {
    name: "karatelabs",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
        width={50}
        height={50}
        alt="karatelabs"
      />
    ),
  },
  {
    name: "kotlin",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/karatelabs/karatelabs-original.svg"
        width={50}
        height={50}
        alt="kotlin"
      />
    ),
  },
  {
    name: "debian",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg"
        width={50}
        height={50}
        alt="debian"
      />

    ),
  },
  {
    name: "azure",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
        width={50}
        height={50}
        alt="azure"
      />

    ),
  },
  {
    name: "googlecloud",
    component: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
        width={50}
        height={50}
        alt="googlecloud"
      />

    ),
  },
  {
    name: "ORACLE",
    component: (
      <Image
        src="https://www.svgrepo.com/show/355152/oracle.svg"
        width={50}
        height={50}
        alt="OREACLE"
      />

    ),
  },
];
