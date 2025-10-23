import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Clock } from "lucide-react";

interface ProjectCardProps {
  name: string;
  company: string;
  duration: string;
  year: string;
  delay?: number;
}

export const ProjectCard = ({ name, company, duration, year, delay = 0 }: ProjectCardProps) => {
  return (
    <Card 
      className="p-6 glass-effect border-neon shadow-neon-hover group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-primary group-hover:text-neon transition-colors flex-1">
            {name}
          </h3>
          <Badge className="bg-primary/20 text-primary border-primary/30">
            {year}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">{company}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
