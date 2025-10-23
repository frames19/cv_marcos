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
      className="p-6 glass-effect border-neon shadow-neon-hover group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="secondary"
            className="px-3 py-1 text-xs border border-primary/20 hover:border-primary/50 hover:shadow-neon transition-all"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
