import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, User } from "lucide-react";

const Index = () => {
  const skills = {
    languages: ["HTML", "PHP", "CSS", "JavaScript", "Python", "Visual Basic"],
    frameworks: ["Laravel", "React", "NodeJS", "Firebase", "Android Studio"],
    databases: ["MySQL", "SQL Developer", "PHPMyAdmin"],
    tools: ["Visual Studio Code", "Apache NetBeans", "Word", "PowerPoint", "Excel", "Photoshop", "CorelDraw", "Filmora"]
  };

  const education = [
    {
      period: "2023 - 2026",
      title: "Ingeniería de Software con Inteligencia Artificial",
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
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Card className="mb-8 overflow-hidden shadow-elegant">
          <div className="gradient-tech p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl font-bold">
                MT
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Marcos Timana Ramos</h1>
                <p className="text-xl text-white/90 mb-4">Software Engineer | Full Stack Developer</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+51 900836581</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>marcostimanaramos@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Piura, Perú</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-card grid grid-cols-1 md:grid-cols-3 gap-4 border-t">
            <div className="text-center">
              <User className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-sm text-muted-foreground">DNI</p>
              <p className="font-semibold">62327196</p>
            </div>
            <div className="text-center">
              <Calendar className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-sm text-muted-foreground">Edad</p>
              <p className="font-semibold">23 años</p>
            </div>
            <div className="text-center">
              <MapPin className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-sm text-muted-foreground">Nacionalidad</p>
              <p className="font-semibold">Peruano</p>
            </div>
          </div>
        </Card>

        {/* About Me */}
        <Card className="mb-8 p-8 shadow-elegant shadow-hover">
          <h2 className="text-2xl font-bold mb-4 text-primary">Sobre Mí</h2>
          <div className="space-y-3 text-foreground/90">
            <p>
              Como profesional, he demostrado un fuerte compromiso, responsabilidad y resiliencia en los diversos proyectos en los que he trabajado.
            </p>
            <p>
              Me caracterizo por ir siempre un paso más lejos y aportar soluciones de calidad que simplemente funcionen.
            </p>
            <p>
              Me encanta poder ayudar y compartir mis conocimientos con el resto de compañeros.
            </p>
          </div>
        </Card>

        {/* Education */}
        <Card className="mb-8 p-8 shadow-elegant shadow-hover">
          <h2 className="text-2xl font-bold mb-6 text-primary">Educación</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                    {edu.period.split(' - ')[0]}
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-xs text-accent font-semibold mb-1">{edu.type}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.title}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills */}
        <Card className="mb-8 p-8 shadow-elegant shadow-hover">
          <h2 className="text-2xl font-bold mb-6 text-primary">Habilidades Técnicas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Lenguajes</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Frameworks & Plataformas</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Bases de Datos</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Herramientas & Software</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Projects */}
        <Card className="mb-8 p-8 shadow-elegant shadow-hover">
          <h2 className="text-2xl font-bold mb-6 text-primary">Proyectos Realizados</h2>
          <p className="text-sm text-accent font-semibold mb-6">EN EL ÁREA DE INGENIERÍA DE SOFTWARE</p>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-accent bg-muted/30 hover:bg-muted/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Empresa:</span> {project.company}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Duración:</span> {project.duration}
                  </p>
                  <Badge variant="outline" className="mt-2">{project.year}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p>© 2025 Marcos Timana Ramos - Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
