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
    copyNumber: string;
    copyEmail: string;
    copiedNumber: string;
    copiedEmail: string;
    openWhatsapp: string;
    copyNumberTitle: string;
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
    resume: string;
    whatsapp: string;
    email: string;
  };
};
