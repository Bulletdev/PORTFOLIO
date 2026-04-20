import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    resume: "Resume",
    toggleLang: "PT",
  },
  profile: {
    subtitle: "Backend Developer • Java • Golang • Ruby on Rails",
    bioSegments: [
      { text: "Self-taught", highlight: true },
      { text: " developer focused on ", highlight: false },
      { text: "backend", highlight: true },
      { text: " and ", highlight: false },
      { text: "cloud-native applications", highlight: true },
      { text: ". Passionate about ", highlight: false },
      { text: "sharing knowledge, collaborating on projects", highlight: true },
      { text: " and ", highlight: false },
      { text: "innovating", highlight: true },
      { text: " through technology.", highlight: false },
    ],
    copyNumber: "Copy Number",
    copyEmail: "Copy Email",
    copiedNumber: "Phone number copied to clipboard!",
    copiedEmail: "Email copied to clipboard!",
    openWhatsapp: "Open WhatsApp",
    copyNumberTitle: "Copy number",
    copyEmailTitle: "Copy email",
  },
  experience: {
    sectionTitle: "Professional Experience",
    yearsExp: "+4 years of experience",
    showDescriptions: "Show descriptions",
    hideDescriptions: "Hide descriptions",
    shuffle: "Shuffle",
    originalOrder: "Original order",
    jobs: [
      {
        companyName: "Plathanus Software & Design",
        positionTitle: "Mid Level Software Engineer",
        date: "December 2025 - Present",
        tech: ["Ruby on Rails", "Sidekiq", "Redis", "PostgreSQL", "Open Finance", "mTLS", "OAuth 2.0", "XML", "Docker"],
        trivia: "🏦 The PIX integration here handles real financial transactions - every QR code scanned by a real customer runs through this code.",
        description: [
          "Designed and implemented full Recurring Automatic PIX integration with Itaú's Open Finance API, including mTLS/OAuth 2.0 authentication, QR code generation, webhook processing, automatic retries, and financial reconciliation.",
          "Built from scratch an NFSe issuance middleware via the National Sefin API, with XML format conversion (ABRASF → DPS), digital signing with A1 certificate, and async processing pipeline via Sidekiq.",
          "Modernized legacy Rails 2.x codebase, improving architecture, maintainability, and compatibility with modern integrations.",
          "Maintained and evolved a Rails 7 customer portal with SOAP integrations, role-based dashboards (Syndic, Finance, HR) and legacy condominium management system support.",
          "Created and evolved technical documentation and functional/non-functional requirements.",
        ],
      },
      {
        companyName: "Effecti",
        positionTitle: "Full Stack Developer",
        date: "January 2025 - December 2025",
        tech: ["Java", "Golang", "AWS Lambda", "SQS", "API Gateway", "Sidekiq", "Redis", "PostgreSQL"],
        trivia: "⚡ The scrapers ran 24/7 and in one year processed over 500 million public tender records. That's more documents than most government archives.",
        description: [
          "Developed and optimized microservices in Ruby on Rails and Java for public tender scraping and automation, processing >1.5M records/day, reducing average extraction time by 42% (from ~4s to <2.4s per page).",
          "Led migration of 4 critical services from Java monolith to Golang + Serverless (Lambda + SQS + API Gateway), cutting p95 latency by 78% (1.4s → 310ms) and reducing monthly infrastructure costs by 40%.",
          "Implemented resilient background jobs with Sidekiq + Redis, processing +85K records/day with >99.8% success rate and average retry time <5s on transient failures.",
        ],
      },
      {
        companyName: "Accenture",
        positionTitle: "Mid-Level Backend Developer",
        date: "March 2020 - March 2022",
        tech: ["Java", "Spring Boot", "Ruby on Rails", "JUnit", "Mockito", "REST APIs", "SOAP", "Oracle DB"],
        trivia: "👥 Reviewed code from 15+ junior developers and helped onboard 3 new team members. Teaching others is how you truly solidify your own knowledge.",
        description: [
          "Developed microservices with Spring Boot",
          "Integration with third-party APIs and legacy Ruby on Rails systems",
          "Unit and integration testing with JUnit and Mockito",
          "Participated in sprint planning and refinement meetings",
          "Collaboration with multidisciplinary teams",
          "Code review and mentoring of junior developers",
        ],
      },
      {
        companyName: "Accenture",
        positionTitle: "Junior Backend Developer",
        date: "February 2019 - March 2020",
        tech: ["Java", "Spring Boot", "SQL", "REST APIs", "Git", "Jira"],
        trivia: "🚀 This was the first professional job. The very first commit pushed here marked the start of the journey from zero to full-stack.",
        description: [
          "Development of features in enterprise systems",
          "Bug fixing and maintenance of Java applications",
          "Participated in dailies and retrospectives",
          "Collaboration with agile development teams",
          "Learning software development best practices",
        ],
      },
      {
        companyName: "Pirelli Pneus",
        positionTitle: "Junior Developer",
        date: "October 2017 - October 2018",
        tech: ["Java", "SQL Server", "Crystal Reports", "VBA", "Excel"],
        trivia: "🏎️ Pirelli supplies tires to Formula 1. Some of the production dashboards built here tracked batches that ended up on F1 cars.",
        description: [
          "Development of internal systems for production control",
          "Creation of reports and dashboards",
          "End-user support",
          "Technical documentation of systems",
        ],
      },
    ],
  },
  projects: {
    recentProjects: "Recent Projects",
    otherProjects: "Other Projects",
    items: [
      {
        title: "ProStaff API",
        description:
          "Robust Ruby on Rails API for e-sports team management. Modular monolithic architecture with dedicated modules for scouting, analytics, scheduling, and Riot Games API integration. Includes JWT authentication, async processing with Sidekiq, Redis cache, and automated tests with RSpec.",
        tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "Riot Games API"],
      },
      {
        title: "ProStaff Riot Gateway",
        description:
          "High-performance API gateway in Go centralizing Riot Games API access for the ProStaff ecosystem. Implements global rate limiting with token buckets, dual-layer caching (LRU + Redis), circuit breakers per region, automatic regional routing, and service-level JWT authentication. Graceful degradation, exponential backoff retry, and structured JSON logging. Deployed as a <20MB Docker container.",
        tech: ["Go", "Redis", "JWT", "Docker", "Circuit Breaker"],
      },
      {
        title: "Clube do Java E-commerce",
        description:
          "E-commerce platform built with Vue.js and Java, with payment API integration, shipping, chatbot, and SEO optimization.",
        tech: ["Vue.js", "Java", "Payment API", "SEO", "Chatbot"],
      },
      {
        title: "ProStaff Scrims",
        description:
          "Web platform for League of Legends esports teams to manage scrimmages. Dashboard for scheduling, analytics, matchmaking suggestions by region/tier, inhouse sessions with tier-based balancing, public team lobbies, and scrim invites. Built with Next.js 15, Zustand, TanStack Query, and Recharts.",
        tech: ["Next.js", "TypeScript", "Zustand", "TanStack Query", "Tailwind CSS"],
      },
      {
        title: "ArenaBR",
        description:
          "Platform for managing amateur League of Legends tournaments in Brazil. Handles championship registration, team enrollment, player rosters, double-elimination brackets, match reporting, and Pix payment processing. Retro HUD design system with gold/teal palette.",
        tech: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Framer Motion"],
      },
      {
        title: "Kings Lendas Cup",
        description:
          "League of Legends tournament platform with live standings, match schedule, team and player profiles, KDA tracking, and draft analysis. Integrated with the Leaguepedia API for automatic data synchronization.",
        tech: ["Ruby on Rails", "TailwindCSS", "Hotwire", "SQLite", "Docker", "Redis"],
      },
      {
        title: "API REST Golang",
        description:
          "Scalable RESTful API built with Golang for complete e-commerce management. Clean architecture with layer separation, Docker support, and PostgreSQL for robust data persistence. Includes JWT auth, Swagger docs, and high-performance endpoints.",
        tech: ["Golang", "REST API", "Docker", "PostgreSQL"],
      },
      {
        title: "Fabmed Distribuidora",
        description:
          "Visual rebranding of Fabmed Distribuidora, focused on usability and modern design. Front-end with React.js and back-end with Node.js, plus Intranet integration, chatbot, and SEO optimization.",
        tech: ["React.js", "Node.js", "Intranet", "Chatbot", "SEO"],
      },
      {
        title: "Arremate Certo",
        description:
          "Automation platform for public tender processes. Hybrid architecture with Java Spring Boot and Go Gin backends, offering automated bids with custom rules, detailed participation reports, and integration with public and private portals.",
        tech: ["Java Spring Boot", "Go", "PostgreSQL", "Apache Kafka", "Vue.js"],
      },
      {
        title: "Personal Portfolio",
        description:
          "Responsive and modern portfolio with Spotify-inspired design, built with Next.js and Tailwind CSS. Features projects, skills, and experience in an elegant way.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "📐 Calculus for Devs",
        description:
          "Educational platform with practical code examples organized by modules, teaching fundamental calculus concepts applied to programming. Ideal for developers who want to master math in software development.",
        tech: ["Python", "JavaScript", "Markdown", "Git"],
      },
      {
        title: "Pipeline Automator",
        description:
          "Desktop tool with an intuitive interface for automated CI/CD pipeline creation. Eliminates complex manual configuration by integrating with Jenkins and Docker for simplified deployment.",
        tech: ["Java", "JavaFX", "Docker", "Jenkins", "Shell Script"],
      },
      {
        title: "DevInterviewSimulator",
        description:
          "Interactive tool for personalized technical interview preparation. Generates dynamic questions based on the developer's technologies and frameworks, simulating real interviews.",
        tech: ["Python", "AI", "FastAPI", "React"],
      },
      {
        title: "ShortMe",
        description:
          "Bio link platform that centralizes multiple links in a single personalized page. Ideal for content creators and companies who need to share social media, websites, stores, and media in an organized way.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      },
    ],
  },
  openedProjects: {
    title: "Projects",
    subtitle: (count) => `${count} completed projects • Updated October 2025`,
    items: [
      {
        title: "ProStaff API",
        description:
          "Robust Ruby on Rails API for e-sports team management. Modular architecture with dedicated modules for scouting, analytics, scheduling, and Riot Games API integration. Includes JWT auth, Sidekiq, Redis cache, and RSpec tests.",
      },
      {
        title: "ProStaff Riot Gateway",
        description:
          "Go API gateway centralizing Riot Games API access with rate limiting, dual-layer caching (LRU + Redis), circuit breakers, regional routing, and JWT auth between services.",
      },
      {
        title: "Clube do Java E-commerce",
        description:
          "E-commerce platform with Vue.js and Java, payment API integration, shipping, chatbot, and SEO optimization.",
      },
      {
        title: "ProStaff Scrims",
        description:
          "Scrimmage management platform for LoL esports teams. Scheduling, analytics, matchmaking, inhouse sessions, and public lobbies built with Next.js 15 and TanStack Query.",
      },
      {
        title: "ArenaBR",
        description:
          "Amateur LoL tournament platform with double-elimination brackets, team enrollment, match reporting, and Pix payment. Retro HUD design with gold/teal palette.",
      },
      {
        title: "Kings Lendas Cup",
        description:
          "League of Legends tournament platform with live standings, match schedule, team and player profiles, and champion stats. Integrated with the Leaguepedia API.",
      },
      {
        title: "API REST Golang",
        description:
          "Modular RESTful API for e-commerce management built in Golang. Clean architecture, Docker support, and PostgreSQL.",
      },
      {
        title: "Fabmed Distribuidora",
        description:
          "Visual rebranding focused on usability and modern design. Front-end with React.js and back-end with Node.js, Intranet integration, chatbot, and SEO.",
      },
      {
        title: "Personal Portfolio ♺",
        description:
          "Responsive and modern portfolio with Spotify-inspired design, built with Next.js and Tailwind CSS.",
      },
    ],
  },
  tutorial: {
    title: "Interactive Portfolio!",
    sectionRef: "Professional Experience",
    explore: "Also explore projects and technologies",
    closeLabel: "Close tutorial",
  },
  cvUrl: "https://drive.google.com/file/d/1c3RBz8NW2kNax8K6eTdYflAXQxviuMi3/view?usp=sharing",
};
