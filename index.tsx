'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Github, GraduationCapIcon as Graduation, Linkedin, Mail, MapPin, Moon, Sun, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Switch } from '@/components/ui/switch'

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

const SaloonDoors = ({ isOpen, onOpen }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[url('/saloon-background.jpg')] bg-cover bg-center"
      initial={false}
      animate={isOpen ? { opacity: 0, pointerEvents: 'none' } : { opacity: 1, pointerEvents: 'auto' }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-[url('/saloon-door-left.jpg')] bg-cover bg-right"
          initial={{ rotateY: 0 }}
          animate={isOpen ? { rotateY: -90 } : { rotateY: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-[url('/saloon-door-right.jpg')] bg-cover bg-left"
          initial={{ rotateY: 0 }}
          animate={isOpen ? { rotateY: 90 } : { rotateY: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ transformOrigin: 'right' }}
        />
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 shadow-text">Michael Douglas dos Santos Silva</h1>
          <p className="text-xl text-white mb-8 shadow-text">Backend Developer</p>
          <motion.button
            className="px-6 py-3 bg-primary text-white rounded-full text-xl font-bold hover:bg-primary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
          >
            Entrar no Saloon
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const AnimatedSection = ({ children, id }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
      id={id}
    >
      {children}
    </motion.section>
  )
}

const TechIcon = ({ name }) => {
  const iconMap = {
    'Java': '/icons/java.svg',
    'Spring': '/icons/spring.svg',
    'Kafka': '/icons/kafka.svg',
    'RabbitMQ': '/icons/rabbitmq.svg',
    'PostgreSQL': '/icons/postgresql.svg',
    'MySQL': '/icons/mysql.svg',
    'DynamoDB': '/icons/dynamodb.svg',
    'BigTable': '/icons/bigtable.svg',
    'Firestore': '/icons/firestore.svg',
    'Google Cloud': '/icons/gcp.svg',
    'Kubernetes': '/icons/kubernetes.svg',
    'JUnit': '/icons/junit.svg',
    'Mockito': '/icons/mockito.svg',
  }

  return (
    <div className="flex items-center gap-2">
      <Image src={iconMap[name] || '/icons/default.svg'} alt={name} width={24} height={24} />
      <span>{name}</span>
    </div>
  )
}

export default function Component() {
  const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/BulletDEV/repos?sort=stars&per_page=4')
      .then((res) => res.json())
      .then((data) => setPinnedRepos(data))
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <>
      <SaloonDoors isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen bg-background dark:bg-gray-900"
          >
            <aside className="w-64 bg-card dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col">
              <div className="p-6 text-center">
                <Image
                  src="/placeholder.svg"
                  alt="Michael Bullet"
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold dark:text-white">Michael Bullet</h2>
                <p className="text-sm text-muted-foreground dark:text-gray-400">Backend Developer</p>
              </div>
              <ScrollArea className="flex-grow">
                <nav className="p-4">
                  <Link className="block py-2 text-sm hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary" href="#about">
                    Sobre
                  </Link>
                  <Link
                    className="block py-2 text-sm hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                    href="#experience"
                  >
                    Experiência
                  </Link>
                  <Link
                    className="block py-2 text-sm hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                    href="#education"
                  >
                    Educação
                  </Link>
                  <Link
                    className="block py-2 text-sm hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                    href="#skills"
                  >
                    Habilidades
                  </Link>
                  <Link
                    className="block py-2 text-sm hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                    href="#projects"
                  >
                    Projetos
                  </Link>
                  <Link
                    className="block py-2 text-sm hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary"
                    href="#contact"
                  >
                    Contato
                  </Link>
                </nav>
              </ScrollArea>
              <div className="p-4 border-t dark:border-gray-700">
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://github.com/BulletDEV">
                      <Github className="h-5 w-5 dark:text-gray-400" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/michael-bullet">
                      <Linkedin className="h-5 w-5 dark:text-gray-400" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://twitter.com/craquebullet">
                      <Twitter className="h-5 w-5 dark:text-gray-400" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
            <main className="flex-1">
              <header className="bg-card dark:bg-gray-800 border-b dark:border-gray-700 p-4 sticky top-0 z-10">
                <div className="container flex justify-between items-center">
                  <h1 className="text-2xl font-bold dark:text-white">Portfólio</h1>
                  <div className="flex items-center gap-4">
                    <Button asChild>
                      <Link href="#contact">Contate-me</Link>
                    </Button>
                    <div className="flex items-center">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                        className="ml-2"
                      />
                    </div>
                  </div>
                </div>
              </header>
              <div className="container mx-auto px-4 py-8">
                <AnimatedSection id="about">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">Sobre Mim</h2>
                  <Card className="dark:bg-gray-800 dark:text-gray-300">
                    <CardContent className="prose dark:prose-invert mt-4">
                      <p>
                        A tecnologia tem sido minha paixão desde a infância, e tenho aperfeiçoado mais nos últimos 5
                        anos, período em que atuei como Desenvolvedor Backend e Especialista em Infraestrutura.
                        Gosto de ver projetos do zero se tornando algo funcional, já trabalhei com arquitetura de rede
                        e sistemas de gestão da qualidade, conheço bem a metodologia 5S e implementei padrões ISO
                        (9000, 14001) em várias organizações.
                      </p>
                      <p>
                        O que mais me motiva é mergulhar em sistemas complexos, seja ajustando configurações de
                        hardware, otimizando redes ou escrevendo código eficiente, adoro enfrentar desafios
                        técnicos.
                      </p>
                      <p>
                        Apesar da minha aparência jovem, trago experiência técnica e uma abordagem madura para
                        resolver problemas. Sou apaixonado por aprender novas tecnologias e compartilhar
                        conhecimento com minha equipe, para mim, sucesso é crescer junto, como um time, sendo
                        proativo, identificando vulnerabilidades de segurança ou otimizando processos de
                        desenvolvimento para entregar mais valor aos usuários.
                      </p>
                      <p>
                        Minha trajetória inclui experiências em diversos setores, desde empresas comerciais até
                        ambientes industriais e hospitais.
                      </p>
                      <div className="flex items-center mt-4">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>Caseb, Feira de Santana - BA, Brazil</span>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
                <AnimatedSection id="experience">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">Experiência Profissional</h2>
                  <div className="space-y-6">
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Especialista de Suporte Técnico</CardTitle>
                        <CardDescription className="dark:text-gray-400">Samsung Electronics • 01/2024 - 10/2024</CardDescription>
                      </CardHeader>
                      <CardContent className="dark:text-gray-300">
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Suporte e consultor técnico</li>
                          <li>Suporte a equipamentos de linha branca</li>
                          <li>Abertura de chamados sob demanda</li>
                          <li>Apoio a equipes</li>
                          <li>Acesso remoto</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Especialista em infraestrutura</CardTitle>
                        <CardDescription className="dark:text-gray-400">Atento • 07/2022 - 12/2023</CardDescription>
                      </CardHeader>
                      <CardContent className="dark:text-gray-300">
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Suporte a usuários in loco e remoto</li>
                          <li>Suporte a VPN Forticlient, Cisco AnyConect</li>
                          <li>Gerenciamento de usuário de rede e computadores através do Active Directory</li>
                          <li>Atendimento de chamados e projetos das operações dentro do SLA</li>
                          <li>Desenvolvimento de script de código aberto para melhor eficiência nos troubleshooting</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Infraestrutura de tecnologia da informação</CardTitle>
                        <CardDescription className="dark:text-gray-400">Rede Mater Dei de Saúde • 02/2022 - 07/2023</CardDescription>
                      </CardHeader>
                      <CardContent className="dark:text-gray-300">
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Suporte Presencial para Usuário final</li>
                          <li>Montagem e organização de Racks</li>
                          <li>Configuração de Servidor</li>
                          <li>Instalação e configuração de APs</li>
                          <li>Instalação do serviço AD e gerenciamento de permissões de usuários e GPO´s</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Desenvolvedor Java</CardTitle>
                        <CardDescription className="dark:text-gray-400">Accenture • 12/2020 - 11/2022</CardDescription>
                      </CardHeader>
                      <CardContent className="dark:text-gray-300">
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Desenvolvimento de aplicações utilizando Spring Framework</li>
                          <li>Aplicação de boas práticas como Clean Code e Design Patterns</li>
                          <li>Gerenciamento e otimização de dados em bancos relacionais e não relacionais</li>
                          <li>Implantação e escalabilidade de aplicações em ambientes de nuvem</li>
                          <li>Criação de testes automatizados utilizando JUnit e Mockito</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Desenvolvedor Java Junior</CardTitle>
                        <CardDescription className="dark:text-gray-400">Accenture • 02/2019 - 12/2020</CardDescription>
                      </CardHeader>
                      <CardContent className="dark:text-gray-300">
                        <ul className="list-disc pl-4 space-y-2">
                          <li>Implementação de soluções em Java 17, utilizando o framework Spring Boot</li>
                          <li>Integração de APIs RESTful e mensagerias como Kafka e RabbitMQ</li>
                          <li>Gerenciamento de dados em bancos de dados PostgreSQL e DynamoDB</li>
                          <li>Desenvolvimento de testes unitários e de integração com JUnit e Mockito</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
                <AnimatedSection id="education">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">Educação</h2>
                  <div className="space-y-6">
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Análise e desenvolvimento de sistemas</CardTitle>
                        <CardDescription className="dark:text-gray-400">UNIFAN - Centro Universitário Nobre • 02/2023 - 2026</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Bacharelado em Engenharia Civil</CardTitle>
                        <CardDescription className="dark:text-gray-400">UniFTC • 2015 - 2022</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Curso Técnico Integrado em Tecnologia em Manutenção Industrial</CardTitle>
                        <CardDescription className="dark:text-gray-400">SENAI - Serviço Nacional de Aprendizagem Industrial • 2017</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </AnimatedSection>
                <AnimatedSection id="skills">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">Habilidades Técnicas</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Linguagens de Programação</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <TechIcon name="Java" />
                            <span className="text-sm font-medium dark:text-gray-300">95%</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="dark:bg-gray-800">
                      <CardHeader>
                        <CardTitle className="dark:text-white">Frameworks & Tecnologias</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="Spring" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="Kafka" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="RabbitMQ" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="PostgreSQL" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="MySQL" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="DynamoDB" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="Google Cloud" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="Kubernetes" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="JUnit" />
                          </Badge>
                          <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                            <TechIcon name="Mockito" />
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
                <AnimatedSection id="projects">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">Projetos em Destaque</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {pinnedRepos.map((repo) => (
                      <Card key={repo.name} className="dark:bg-gray-800">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 dark:text-white">
                            <Coffee className="h-5 w-5" />
                            {repo.name}
                          </CardTitle>
                          <CardDescription className="dark:text-gray-400">{repo.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-center">
                            <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">{repo.language}</Badge>
                            <Link
                              href={repo.html_url}
                              className="text-sm text-primary hover:underline dark:text-blue-400"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver no GitHub →
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AnimatedSection>
                <AnimatedSection id="contact">
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">Entre em Contato</h2>
                  <Card className="dark:bg-gray-800">
                    <CardContent className="mt-4">
                      <p className="mb-4 dark:text-gray-300">
                        Interessado em colaborar em um projeto ou apenas quer trocar uma ideia? Fique à
                        vontade para entrar em contato comigo através de qualquer uma das plataformas
                        abaixo:
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild>
                          <Link href="mailto:licita.michael@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Email
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="dark:text-gray-300 dark:hover:text-white">
                          <Link href="https://www.linkedin.com/in/michael-bullet" target="_blank">
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="dark:text-gray-300 dark:hover:text-white">
                          <Link href="https://github.com/BulletDEV" target="_blank">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Link>
                        </Button>
                      </div>
                      <p className="mt-4 dark:text-gray-300">
                        Telefone: +55 75983360359
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
              <footer className="bg-card dark:bg-gray-800 border-t dark:border-gray-700 p-4 mt-8">
                <div className="container text-center text-sm text-muted-foreground dark:text-gray-400">
                  <p>&copy; 2023 Michael Douglas dos Santos Silva. Todos os direitos reservados.</p>
                </div>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}