import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  status?: "success" | "warning" | "error" | "neutral";
  description?: string;
}

const statusConfig = {
  success: {
    color: "text-success",
    glow: "shadow-success/20",
    border: "border-success/30",
  },
  warning: {
    color: "text-warning",
    glow: "shadow-warning/20",
    border: "border-warning/30",
  },
  error: {
    color: "text-destructive",
    glow: "shadow-destructive/20",
    border: "border-destructive/30",
  },
  neutral: {
    color: "text-primary",
    glow: "shadow-primary/10",
    border: "border-primary/20",
  },
};

export const MetricCard = ({ title, value, icon: Icon, status = "neutral", description }: MetricCardProps) => {
  const config = statusConfig[status];
  
  return (
    <div className={cn(
      "industrial-card scan-line group relative",
      "hover:border-primary/40 cursor-pointer",
      config.border
    )}>
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
      
      {/* Content */}
      <div className="relative space-y-2">
        {/* Header with icon */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {title}
          </p>
          <div className={cn(
            "p-1.5 rounded-lg bg-background/50 border border-border",
            config.border,
            config.glow
          )}>
            <Icon className={cn("h-3.5 w-3.5", config.color)} />
          </div>
        </div>
        
        {/* Value with gradient */}
        <div className="metric-value">
          {value}
        </div>
        
        {/* Description */}
        {description && (
          <p className="text-xs text-muted-foreground/80">
            {description}
          </p>
        )}
      </div>
      
      {/* Pulse indicator for active status */}
      {status === "success" && (
        <div className="absolute top-2 right-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
        </div>
      )}
    </div>
  );
};
