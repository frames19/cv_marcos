import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, FileText } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  type?: string;
  delay?: number;
}

export const CertificateCard = ({ 
  title, 
  issuer, 
  date, 
  description, 
  type, 
  delay = 0 
}: CertificateCardProps) => {
  return (
    <Card 
      className="p-6 glass-effect border-neon shadow-neon-hover group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center text-background shadow-neon group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary group-hover:text-neon transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{issuer}</p>
            </div>
          </div>
          {type && (
            <Badge className="bg-primary/20 text-primary border-primary/30">
              {type}
            </Badge>
          )}
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
          
          {description && (
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4 text-primary mt-0.5" />
              <span className="text-foreground/80">{description}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm text-primary">
            <ExternalLink className="w-4 h-4" />
            <span className="font-semibold">Certificado verificado</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
