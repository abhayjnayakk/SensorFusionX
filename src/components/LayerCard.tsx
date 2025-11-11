import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayerCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export const LayerCard = ({ title, description, icon: Icon, details }: LayerCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="hover:shadow-md transition-all cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
          {isExpanded ? (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </CardHeader>
      <CardContent className={cn("transition-all", isExpanded ? "block" : "hidden")}>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-foreground">{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
