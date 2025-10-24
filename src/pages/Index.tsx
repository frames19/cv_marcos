import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, User, Code2, Database, Wrench, Terminal as TerminalIcon, Users, Target, Lightbulb, Award } from "lucide-react";
import { Terminal } from "@/components/Terminal";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificateCard } from "@/components/CertificateCard";

const Index = () => {
  const terminalLines = [
    "Desarrollador Full Stack Junior apasionado por crear soluciones innovadoras",
    "Especializado en desarrollo web con tecnologías modernas",
    "Enfoque en calidad de código y mejores prácticas de desarrollo",
    "Comprometido con el aprendizaje continuo y crecimiento profesional"
  ];

  const skills = {
    frontend: {
      title: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Responsive Design"],
      icon: Code2
    },
    backend: {
      title: "Backend Development",
      items: ["PHP", "Laravel", "Node.js", "Python", "RESTful APIs"],
      icon: Database
    },
    databases: {
      title: "Bases de Datos",
      items: ["MySQL", "Firebase", "SQL Developer", "PHPMyAdmin"],
      icon: Database
    },
    tools: {
      title: "Herramientas & Tecnologías",
      items: ["VS Code", "Git", "Android Studio", "Photoshop", "NetBeans"],
      icon: Wrench
    }
  };

  const education = [
    {
      period: "2023 - 2025",
      title: "Ingeniería de Software con IA",
      institution: "SENATI",
      type: "ESTUDIOS SUPERIORES",
      description: "Formación especializada en desarrollo de software con integración de inteligencia artificial, incluyendo programación, bases de datos, y tecnologías emergentes.",
      achievements: ["Desarrollo de proyectos prácticos", "Certificación en tecnologías web", "Participación en competencias de programación"]
    },
    {
      period: "2013 - 2018",
      title: "Estudios Secundarios",
      institution: "Andrés Avelino Cáceres",
      type: "EDUCACIÓN SECUNDARIA",
      description: "Educación secundaria completa con enfoque en ciencias y matemáticas.",
      achievements: ["Participación en actividades extracurriculares"]
    }
  ];

  const softSkills = {
    teamwork: {
      title: "Trabajo en Equipo",
      items: ["Colaboración efectiva", "Comunicación clara", "Resolución de conflictos", "Mentoría"],
      icon: Users
    },
    problemSolving: {
      title: "Resolución de Problemas",
      items: ["Pensamiento analítico", "Creatividad", "Adaptabilidad", "Aprendizaje rápido"],
      icon: Lightbulb
    },
    professional: {
      title: "Competencias Profesionales",
      items: ["Responsabilidad", "Compromiso", "Puntualidad", "Ética profesional"],
      icon: Award
    },
    goals: {
      title: "Objetivos",
      items: ["Crecimiento profesional", "Innovación tecnológica", "Calidad en el código", "Impacto positivo"],
      icon: Target
    }
  };

  const projects = [
    {
      name: "APP ARGOS SOFTWARE 2024 V1.01",
      company: "ARGOS SOFTWARE",
      duration: "4 meses",
      year: "2024",
      description: "Desarrollo de aplicación móvil completa con funcionalidades avanzadas",
      technologies: ["Visual Studio Code 2022", "Java", "SQL Server"]
    },
    {
      name: "PÁGINA WEB GP PALADINES 2025 V2.0",
      company: "GP PALADINES",
      duration: "4 meses",
      year: "2025",
      description: "Sitio web corporativo responsivo con panel de administración",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"]
    }
  ];

  const certificates = [
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description: "Fundamentos de Internet de las Cosas, conectividad y dispositivos inteligentes",
      type: "IoT"
    },
    {
      title: "Get Connected",
      issuer: "Cisco Networking Academy", 
      date: "2023",
      description: "Introducción a las redes de computadoras y conectividad básica",
      type: "Networking"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2023", 
      description: "Fundamentos de ciberseguridad, amenazas y protección de datos",
      type: "Cybersecurity"
    },
    {
      title: "PCAP - Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      date: "2023",
      description: "Programación esencial en Python, estructuras de datos y algoritmos",
      type: "Programming"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Header */}
        <div className="relative">
          <Card className="overflow-hidden shadow-neon border-neon-glow glass-effect animate-fade-in">
            <div className="gradient-neon p-1">
              <div className="bg-card p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Avatar */}
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-neon rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow" />
                    <div className="relative w-40 h-40 rounded-full gradient-neon p-1 animate-float">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <span className="text-6xl font-bold text-neon code-font">MT</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center lg:text-left space-y-4">
                    <div>
                      <h1 className="text-4xl lg:text-6xl font-bold mb-2 text-neon code-font">
                        Marcos Timana Ramos
                      </h1>
                      <p className="text-xl lg:text-2xl text-primary">
                        {'<'} Full Stack Developer Junior | Software Engineer {' />'}
                      </p>
                      <p className="text-lg text-muted-foreground mt-2">
                        Desarrollador apasionado por crear soluciones web innovadoras
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border-neon">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+51 900836581</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border-neon">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>marcostimanaramos@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border-neon">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Piura, Perú</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm">DNI: 62327196</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">23 años</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Terminal About */}
        <Card className="p-8 glass-effect border-neon shadow-neon-hover animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <TerminalIcon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary code-font"></h2>
          </div>
          <Card className="bg-background/50 p-6 border-neon">
            <Terminal lines={terminalLines} />
          </Card>
          <div className="mt-6 space-y-3 text-foreground/90">
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Desarrollador Full Stack Junior con sólida formación en Ingeniería de Software con IA, especializado en tecnologías web modernas y desarrollo de aplicaciones escalables.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Experiencia práctica en desarrollo de aplicaciones web y móviles, con enfoque en calidad de código, mejores prácticas y soluciones innovadoras.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Comprometido con el aprendizaje continuo, trabajo en equipo y la entrega de productos que superen las expectativas del cliente.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Busco oportunidades para crecer profesionalmente en un entorno dinámico donde pueda contribuir con mi pasión por la tecnología y el desarrollo.</span>
            </p>
          </div>
        </Card>

        {/* Education Timeline */}
        <Card className="p-8 glass-effect border-neon shadow-neon-hover animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-primary code-font">
            {'<'} Educación {' />'}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-neon flex items-center justify-center text-background font-bold code-font shadow-neon group-hover:scale-110 transition-transform">
                    {edu.period.split(' - ')[0].slice(2)}
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 mt-2" />
                  )}
                </div>
                <Card className="flex-1 p-4 glass-effect border-neon shadow-neon-hover">
                  <p className="text-xs text-primary font-semibold mb-1 code-font">{edu.type}</p>
                  <h3 className="text-lg font-bold text-foreground mb-1">{edu.title}</h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-sm text-foreground/80 mb-3">{edu.description}</p>
                  )}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-xs text-primary font-semibold code-font">Logros destacados:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-primary">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-sm text-primary mt-3 code-font">{edu.period}</p>
                </Card>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary code-font text-center">
            {'<'} Stack Tecnológico {' />'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([key, skill], index) => (
              <SkillCard
                key={key}
                title={skill.title}
                skills={skill.items}
                icon={skill.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary code-font text-center">
            {'<'} Competencias Profesionales {' />'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(softSkills).map(([key, skill], index) => (
              <SkillCard
                key={key}
                title={skill.title}
                skills={skill.items}
                icon={skill.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary code-font mb-2">
              {'<'} Proyectos {' />'}
            </h2>
            <p className="text-sm text-muted-foreground code-font">
              // EN EL ÁREA DE INGENIERÍA DE SOFTWARE
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary code-font mb-2">
              {'<'} Certificaciones {' />'}
            </h2>
            <p className="text-sm text-muted-foreground code-font">
              // CISCO NETWORKING ACADEMY
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={index}
                {...certificate}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <Card className="inline-block px-8 py-4 glass-effect border-neon">
            <p className="text-sm text-muted-foreground code-font">
              © 2025 Marcos Timana Ramos <span className="text-primary">|</span> Full Stack Developer Junior
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Desarrollador apasionado por la innovación tecnológica
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
