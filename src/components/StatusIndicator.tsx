import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "active" | "warning" | "error" | "idle";
  label: string;
}

const statusConfig = {
  active: { color: "bg-success", label: "Active" },
  warning: { color: "bg-warning", label: "Warning" },
  error: { color: "bg-destructive", label: "Error" },
  idle: { color: "bg-muted-foreground", label: "Idle" },
};

export const StatusIndicator = ({ status, label }: StatusIndicatorProps) => {
  const config = statusConfig[status];
  
  return (
    <div className="flex items-center gap-2">
      <div className={cn("h-2 w-2 rounded-full", config.color)} />
      <span className="text-sm text-foreground">{label}</span>
      <span className="text-xs text-muted-foreground ml-auto">{config.label}</span>
    </div>
  );
};
