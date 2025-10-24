import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  delay?: number;
}

export const SkillCard = ({ title, skills, icon: Icon, delay = 0 }: SkillCardProps) => {
  return (
    <Card 
      className="p-6 glass-effect border-neon shadow-neon-hover group hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="secondary"
            className="px-3 py-1.5 text-xs font-medium border border-primary/30 hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:scale-105"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
