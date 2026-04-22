import type { Translations } from "./types";

export const pt: Translations = {
  nav: {
    resume: "Currículo",
    toggleLang: "EN",
  },
  profile: {
    subtitle: "Desenvolvedor Backend • Java • Golang • Ruby on Rails",
    bioSegments: [
      { text: "Desenvolvedor", highlight: false },
      { text: " autodidata", highlight: true },
      { text: " com foco em ", highlight: false },
      { text: "backend", highlight: true },
      { text: " e ", highlight: false },
      { text: "aplicações cloud-native", highlight: true },
      { text: ". Apaixonado por ", highlight: false },
      { text: "compartilhar conhecimento, colaborar em projetos", highlight: true },
      { text: " e ", highlight: false },
      { text: "inovar", highlight: true },
      { text: " através da tecnologia.", highlight: false },
    ],
    copyNumber: "Copiar Número",
    copyEmail: "Copiar E-mail",
    copiedNumber: "Número copiado para a área de transferência!",
    copiedEmail: "E-mail copiado para a área de transferência!",
    openWhatsapp: "Abrir WhatsApp",
    copyNumberTitle: "Copiar número",
    copyEmailTitle: "Copiar e-mail",
  },
  experience: {
    sectionTitle: "Experiência Profissional",
    yearsExp: "+4 anos de experiência",
    showDescriptions: "Mostrar descrições",
    hideDescriptions: "Ocultar descrições",
    shuffle: "Embaralhar",
    originalOrder: "Ordenação original",
    jobs: [
      {
        companyName: "Plathanus Software & Design",
        positionTitle: "Mid Level Software Engineer",
        date: "Dezembro de 2025 - Presente",
        tech: ["Ruby on Rails", "Sidekiq", "Redis", "PostgreSQL", "Open Finance", "mTLS", "OAuth 2.0", "XML", "Docker"],
        trivia: "🏦 A integração PIX aqui processa transações financeiras reais - cada QR code escaneado por um cliente passa por esse código.",
        description: [
          "Projetei e implementei integração completa de PIX Automático Recorrente com a Open Finance API do Itaú, incluindo autenticação mTLS/OAuth 2.0, geração de QR codes, processamento de webhooks, retentativas automáticas e conciliação financeira.",
          "Construí do zero um middleware de emissão de NFSe via API Sefin Nacional (Receita Federal), com conversão de formato XML (ABRASF → DPS), assinatura digital com certificado A1 e pipeline assíncrono de processamento via Sidekiq.",
          "Modernizei codebase legado Rails 2.x, melhorando arquitetura, manutenibilidade e compatibilidade com integrações modernas.",
          "Mantive e evoluí portal de clientes em Rails 7 com integrações SOAP, dashboards por perfil de acesso (Síndico, Financeiro, DP) e sustentação do sistema legado de gestão condominial.",
          "Criei e evolui documentações técnicas e levantamento de requisitos funcionais e não funcionais.",
        ],
      },
      {
        companyName: "Effecti",
        positionTitle: "Desenvolvedor Full Stack Pleno",
        date: "Janeiro de 2025 - Dezembro de 2025",
        tech: ["Java", "Golang", "AWS Lambda", "SQS", "API Gateway", "Sidekiq", "Redis", "PostgreSQL"],
        trivia: "⚡ Os scrapers rodavam 24/7 e em um ano processaram mais de 500 milhões de registros de licitações. Mais documentos do que a maioria dos arquivos governamentais.",
        description: [
          "Desenvolvi e otimizei microsserviços em Ruby on Rails e Java para scraping e automação de licitações, processando >1.5 milhão de registros/dia, reduzindo tempo médio de extração em 42% (de ~4s para <2.4s por página).",
          "Liderei migração de 4 serviços críticos de Java monólito para Golang + Serverless (Lambda + SQS + API Gateway), cortando latência p95 em 78% (1.4s → 310ms) e reduzindo custo mensal de infraestrutura em 40%.",
          "Implementei background jobs resilientes com Sidekiq + Redis, processando +85.000 registros/dia com taxa de sucesso >99.8% e tempo médio de retry <5s em falhas transitórias.",
        ],
      },
      {
        companyName: "Accenture",
        positionTitle: "Desenvolvedor Backend Pleno",
        date: "Março de 2020 - Março de 2022",
        tech: ["Java", "Spring Boot", "JUnit", "Mockito", "REST APIs", "SOAP", "Oracle DB"],
        trivia: "👥 Fiz code review de mais de 15 devs júnior e ajudei no onboarding de 3 novos membros. Ensinar é a melhor forma de consolidar o próprio conhecimento.",
        description: [
          "Desenvolvimento de microserviços com Spring Boot",
          "Integração com APIs de terceiros e sistemas legados Ruby on Rails",
          "Testes unitários e de integração com JUnit e Mockito",
          "Participação em reuniões de planejamento e refinamento de sprints",
          "Colaboração com equipes multidisciplinares",
          "Code review e mentoria de desenvolvedores júnior",
        ],
      },
      {
        companyName: "Accenture",
        positionTitle: "Desenvolvedor Backend Júnior",
        date: "Fevereiro de 2019 - Março de 2020",
        tech: ["Java", "Spring Boot", "SQL", "REST APIs", "Git", "Jira"],
        trivia: "🚀 Primeiro emprego como dev. O primeiro commit profissional foi aqui - o começo da jornada do zero ao full-stack.",
        description: [
          "Desenvolvimento de funcionalidades em sistemas enterprise",
          "Manutenção e correção de bugs em aplicações Java",
          "Participação em dailies e retrospectivas",
          "Colaboração com equipes de desenvolvimento ágil",
          "Aprendizado de boas práticas de programação",
        ],
      },
      {
        companyName: "Pirelli Pneus",
        positionTitle: "Desenvolvedor Júnior",
        date: "Outubro de 2017 - Outubro de 2018",
        tech: ["Ruby on Rails", "PHP", "SQL Server", "Crystal Reports", "VBA", "Excel"],
        trivia: "🏎️ A Pirelli fornece pneus para a Fórmula 1. Alguns dashboards de produção criados aqui rastreavam lotes que foram parar em carros de F1.",
        description: [
          "Desenvolvimento de sistemas internos para controle de produção",
          "Criação de relatórios e dashboards",
          "Suporte a usuários finais",
          "Documentação técnica de sistemas",
        ],
      },
    ],
  },
  projects: {
    recentProjects: "Projetos Recentes",
    otherProjects: "Demais Projetos",
    items: [
      {
        title: "ProStaff API",
        description:
          "API Ruby on Rails robusta para gerenciamento de equipes de e-sports. Arquitetura modular monolítica com módulos dedicados para scouting, analytics, agendamento e integração com API da Riot Games. Inclui autenticação JWT, processamento assíncrono com Sidekiq, cache Redis e testes automatizados com RSpec.",
        tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "API Riot Games"],
      },
      {
        title: "ProStaff Riot Gateway",
        description:
          "Gateway de API de alto desempenho em Go que centraliza o acesso à API Riot Games para o ecossistema ProStaff. Implementa rate limiting global com token bucket, cache em duas camadas (LRU + Redis), circuit breakers por região, roteamento regional automático e autenticação JWT entre serviços. Degradação graciosa, retry com backoff exponencial e logging estruturado em JSON. Container Docker < 20MB.",
        tech: ["Go", "Redis", "JWT", "Docker", "Circuit Breaker"],
      },
      {
        title: "Clube do Java E-commerce",
        description:
          "E-commerce desenvolvido com Vue.js e Java, além de integração com sistemas de API de pagamento, correios, chatbot e otimização para SEO.",
        tech: ["Vue.js", "Java", "API Pagamento", "SEO", "Chatbot"],
      },
      {
        title: "ProStaff Scrims",
        description:
          "Plataforma web para times de esports de League of Legends gerenciarem scrimmages. Dashboard com agendamento, analytics, sugestões de matchmaking por região/tier, sessões inhouse com balanceamento, lobbies públicos e convites de scrim. Construído com Next.js 15, Zustand, TanStack Query e Recharts.",
        tech: ["Next.js", "TypeScript", "Zustand", "TanStack Query", "Tailwind CSS"],
      },
      {
        title: "ArenaBR",
        description:
          "Plataforma para gestão de torneios amadores de League of Legends no Brasil. Gerencia inscrições de campeonatos, cadastro de times, rosters, chaves de dupla eliminação, relatório de partidas e pagamento via Pix. Sistema de design retro com paleta ouro/teal.",
        tech: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Framer Motion"],
      },
      {
        title: "Kings Lendas Cup",
        description:
          "Plataforma de torneio de League of Legends com standings ao vivo, calendário de partidas, perfis de times e jogadores, rastreamento de KDA e análise de draft. Integração com a API Leaguepedia para sincronização automática de dados.",
        tech: ["Ruby on Rails", "TailwindCSS", "Hotwire", "SQLite", "Docker", "Redis"],
      },
      {
        title: "API REST Golang",
        description:
          "API RESTful escalável construída com Golang para gerenciamento completo de e-commerce. Implementa arquitetura limpa com separação de camadas, suporte a Docker e PostgreSQL para persistência robusta de dados. Inclui autenticação JWT, documentação Swagger e endpoints otimizados para alta performance.",
        tech: ["Golang", "API REST", "Docker", "PostgreSQL"],
      },
      {
        title: "Fabmed Distribuidora",
        description:
          "Rebranding visual da Fabmed Distribuidora, com foco em usabilidade e design moderno. Inclui desenvolvimento front-end com React.js e back-end com Node.js, além de integração com sistemas de Intranet, chatbot e otimização para SEO.",
        tech: ["React.js", "Node.js", "Intranet", "Chatbot", "SEO"],
      },
      {
        title: "Arremate Certo",
        description:
          "Plataforma de automação para processos licitatórios e dispensas públicas. Arquitetura híbrida com backend Java Spring Boot e Go Gin, oferecendo lances automatizados com regras customizáveis, relatórios detalhados e integração com portais públicos e privados.",
        tech: ["Java Spring Boot", "Go", "PostgreSQL", "Apache Kafka", "Vue.js"],
      },
      {
        title: "Portfolio Pessoal",
        description:
          "Portfolio responsivo e moderno com design inspirado no Spotify, construído com Next.js e Tailwind CSS. Apresenta projetos, habilidades e experiências de forma elegante.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "📐 Cálculo para Devs",
        description:
          "Plataforma educacional com exemplos práticos de código organizados por módulos, ensinando conceitos fundamentais de cálculo aplicados à programação. Ideal para desenvolvedores que desejam dominar matemática aplicada ao desenvolvimento de software.",
        tech: ["Python", "JavaScript", "Markdown", "Git"],
      },
      {
        title: "Automatizador de Pipeline",
        description:
          "Ferramenta desktop com interface intuitiva para criação automatizada de pipelines CI/CD. Elimina a necessidade de configuração manual complexa, integrando-se com Jenkins e Docker para deploy simplificado.",
        tech: ["Java", "JavaFX", "Docker", "Jenkins", "Shell Script"],
      },
      {
        title: "DevInterviewSimulator",
        description:
          "Ferramenta interativa para preparação de entrevistas técnicas personalizadas. Gera perguntas dinâmicas baseadas nas tecnologias e frameworks do desenvolvedor, simulando entrevistas reais.",
        tech: ["Python", "AI", "FastAPI", "React"],
      },
      {
        title: "ShortMe",
        description:
          "Plataforma de bio link que centraliza múltiplos links em uma única página personalizada. Ideal para criadores de conteúdo e empresas que precisam compartilhar redes sociais, sites, lojas e mídias de forma organizada.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      },
    ],
  },
  openedProjects: {
    title: "Projetos",
    subtitle: (count) => `${count} projetos concluídos • Atualizado em Outubro de 2025`,
    items: [
      {
        title: "ProStaff API",
        description:
          "API Ruby on Rails robusta para gerenciamento de equipes de e-sports. Arquitetura modular com módulos dedicados para scouting, analytics, agendamento e integração com API da Riot Games. Inclui autenticação JWT, Sidekiq, cache Redis e testes com RSpec.",
      },
      {
        title: "ProStaff Riot Gateway",
        description:
          "Gateway de API em Go centralizando o acesso à API Riot Games com rate limiting, cache em duas camadas (LRU + Redis), circuit breakers, roteamento regional e autenticação JWT entre serviços.",
      },
      {
        title: "clube do java E-commerce",
        description:
          "Clube do Java E-commerce. Inclui desenvolvimento front-end com vue.js e back-end com Java...",
      },
      {
        title: "ProStaff Scrims",
        description:
          "Plataforma de gestão de scrimmages para times de esports de LoL. Agendamento, analytics, matchmaking, inhouse e lobbies públicos com Next.js 15 e TanStack Query.",
      },
      {
        title: "ArenaBR",
        description:
          "Plataforma de torneios amadores de LoL com chaves de dupla eliminação, cadastro de times, relatório de partidas e pagamento via Pix. Design retro com paleta ouro/teal.",
      },
      {
        title: "Kings Lendas Cup",
        description:
          "Plataforma de torneio de League of Legends com standings ao vivo, calendário de partidas, perfis de times e jogadores, e estatísticas de campeões. Integração com a API Leaguepedia.",
      },
      {
        title: "API REST Golang",
        description:
          "API RESTful modular para gerenciamento de E-commerce desenvolvida em Golang...",
      },
      {
        title: "Fabmed Distribuidora",
        description:
          "Rebranding visual da Fabmed Distribuidora, com foco em usabilidade e design moderno...",
      },
      {
        title: "Portfolio Pessoal ♺",
        description:
          "Portfolio responsivo e moderno com design inspirado no Spotify, construído com Next.js 14 e Tailwind CSS",
      },
    ],
  },
  tutorial: {
    title: "Portfolio Interativo!",
    sectionRef: "Experiência Profissional",
    explore: "Explore também os projetos e tecnologias",
    closeLabel: "Fechar tutorial",
  },
  cvUrl: "https://drive.google.com/file/d/1S_sDiEP10sRpODHkyTnPWdD8c2FUJbME/view?usp=sharing",
  links: {
    tagline: "Desenvolvedor Backend • Java • Golang • Rails",
    portfolio: "Portfólio",
    blog: "Blog",
    linkedin: "LinkedIn",
    github: "GitHub",
    instagram: "Instagram",
    resume: "Currículo",
    whatsapp: "WhatsApp",
    email: "E-mail",
  },
};
