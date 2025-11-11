import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ApplicationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ApplicationCard = ({ title, description, icon: Icon }: ApplicationCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
