import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, User, Code2, Database, Wrench, Terminal as TerminalIcon } from "lucide-react";
import { Terminal } from "@/components/Terminal";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";

const Index = () => {
  const terminalLines = [
    "$ whoami",
    "> Marcos Timana Ramos",
    "$ cat profile.txt",
    "> Full Stack Developer | Software Engineer",
    "> Passionate about creating quality solutions",
    "> Always going the extra mile",
    "$ skills --list",
    "> Loading expertise..."
  ];

  const skills = {
    languages: {
      title: "Lenguajes",
      items: ["HTML", "PHP", "CSS", "JavaScript", "Python", "Visual Basic"],
      icon: Code2
    },
    frameworks: {
      title: "Frameworks",
      items: ["Laravel", "React", "NodeJS", "Firebase", "Android Studio"],
      icon: Database
    },
    databases: {
      title: "Bases de Datos",
      items: ["MySQL", "SQL Developer", "PHPMyAdmin"],
      icon: Database
    },
    tools: {
      title: "Herramientas",
      items: ["VS Code", "NetBeans", "Photoshop", "CorelDraw", "Filmora"],
      icon: Wrench
    }
  };

  const education = [
    {
      period: "2023 - 2026",
      title: "Ingeniería de Software con IA",
      institution: "SENATI",
      type: "ESTUDIOS SUPERIORES"
    },
    {
      period: "2013 - 2018",
      title: "Estudios Secundarios",
      institution: "Andrés Avelino Cáceres",
      type: "EDUCACIÓN SECUNDARIA"
    },
    {
      period: "2006 - 2012",
      title: "Estudios Primarios",
      institution: "Andrés Avelino Cáceres",
      type: "EDUCACIÓN PRIMARIA"
    }
  ];

  const projects = [
    {
      name: "APP ARGOS SOFTWARE 2024 V1.01",
      company: "ARGOS SOFTWARE",
      duration: "4 meses",
      year: "2024"
    },
    {
      name: "PÁGINA WEB GP PALADINES 2025 V2.0",
      company: "GP PALADINES",
      duration: "4 meses",
      year: "2025"
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
                        {'<'} Full Stack Developer | Software Engineer {' />'}
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
            <h2 className="text-2xl font-bold text-primary code-font">$ cat about.me</h2>
          </div>
          <Card className="bg-background/50 p-6 border-neon">
            <Terminal lines={terminalLines} />
          </Card>
          <div className="mt-6 space-y-3 text-foreground/90">
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Como profesional, he demostrado un fuerte compromiso, responsabilidad y resiliencia en los diversos proyectos en los que he trabajado.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Me caracterizo por ir siempre un paso más lejos y aportar soluciones de calidad que simplemente funcionen.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary code-font">{'>'}</span>
              <span>Me encanta poder ayudar y compartir mis conocimientos con el resto de compañeros.</span>
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
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-primary mt-2 code-font">{edu.period}</p>
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

        {/* Footer */}
        <div className="text-center py-8">
          <Card className="inline-block px-8 py-4 glass-effect border-neon">
            <p className="text-sm text-muted-foreground code-font">
              © 2025 Marcos Timana Ramos <span className="text-primary">|</span> Software Engineer
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
