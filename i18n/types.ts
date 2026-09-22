export type BioSegment = { text: string; highlight: boolean };

export type Job = {
  companyName: string;
  positionTitle: string;
  date: string;
  description: string[];
  tech: string[];
  trivia: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
};

export type OpenedProjectItem = {
  title: string;
  description: string;
};

export type Translations = {
  nav: {
    resume: string;
    toggleLang: string;
  };
  profile: {
    subtitle: string;
    bioSegments: BioSegment[];
    copyTelegram: string;
    copyEmail: string;
    copiedTelegram: string;
    copiedEmail: string;
    openTelegram: string;
    copyTelegramTitle: string;
    copyEmailTitle: string;
  };
  experience: {
    sectionTitle: string;
    yearsExp: string;
    showDescriptions: string;
    hideDescriptions: string;
    shuffle: string;
    originalOrder: string;
    jobs: Job[];
  };
  projects: {
    recentProjects: string;
    otherProjects: string;
    items: ProjectItem[];
  };
  openedProjects: {
    title: string;
    subtitle: (count: number) => string;
    viewOnGithub: string;
    items: OpenedProjectItem[];
  };
  tutorial: {
    title: string;
    sectionRef: string;
    explore: string;
    closeLabel: string;
  };
  cvUrl: string;
  links: {
    tagline: string;
    portfolio: string;
    blog: string;
    linkedin: string;
    github: string;
    instagram: string;
    x: string;
    telegram: string;
    resume: string;
    email: string;
  };
};
