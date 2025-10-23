import { Activity, TrendingUp, AlertTriangle, Zap } from "lucide-react";

export function SensorMetrics({
  snrDb,
  artifactScore,
  driftScore,
  fusionConfidence,
}: {
  snrDb?: number;
  artifactScore?: number;
  driftScore?: number;
  fusionConfidence?: number;
}) {
  // Fallback values if props are undefined
  const safeSnrDb = snrDb ?? 24.5;
  const safeArtifactScore = artifactScore ?? 12.3;
  const safeDriftScore = driftScore ?? 8.7;
  const safeFusionConfidence = fusionConfidence ?? 0.87;
  const getStatus = (value: number, type: 'snr' | 'score' | 'confidence') => {
    if (type === 'snr') return value > 15 ? 'success' : value > 10 ? 'warning' : 'error';
    if (type === 'confidence') return value > 0.7 ? 'success' : value > 0.5 ? 'warning' : 'error';
    return value < 0.3 ? 'success' : value < 0.6 ? 'warning' : 'error';
  };

  const items = [
    { 
      label: "Signal to Noise", 
      value: safeSnrDb.toFixed(1), 
      unit: "dB",
      icon: Activity,
      status: getStatus(safeSnrDb, 'snr'),
      description: "Signal clarity"
    },
    { 
      label: "Artifact Score", 
      value: (safeArtifactScore * 100).toFixed(0), 
      unit: "%",
      icon: AlertTriangle,
      status: getStatus(safeArtifactScore, 'score'),
      description: "Signal anomalies"
    },
    { 
      label: "Drift Score", 
      value: (safeDriftScore * 100).toFixed(0), 
      unit: "%",
      icon: TrendingUp,
      status: getStatus(safeDriftScore, 'score'),
      description: "Baseline shift"
    },
    { 
      label: "Fusion Quality", 
      value: (safeFusionConfidence * 100).toFixed(0), 
      unit: "%",
      icon: Zap,
      status: getStatus(safeFusionConfidence, 'confidence'),
      description: "Integration confidence"
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map((item) => {
        const Icon = item.icon;
        const statusColor = {
          success: 'text-success',
          warning: 'text-warning',
          error: 'text-destructive'
        }[item.status];
        
        const borderColor = {
          success: 'border-success/30',
          warning: 'border-warning/30',
          error: 'border-destructive/30'
        }[item.status];

        return (
          <div key={item.label} className={`industrial-card group ${borderColor} hover:scale-[1.02]`}>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Icon className={`h-4 w-4 ${statusColor}`} />
                <div className="flex items-baseline gap-0.5">
                  <span className={`text-2xl font-bold ${statusColor}`}>
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.unit}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-foreground/90">
                  {item.label}
                </div>
                <div className="text-[10px] text-muted-foreground/70">
                  {item.description}
                </div>
              </div>
            </div>
            
            {/* Status bar */}
            <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
              <div 
                className={`h-full ${item.status === 'success' ? 'bg-success' : item.status === 'warning' ? 'bg-warning' : 'bg-destructive'} transition-all`}
                style={{ width: `${Math.min(100, parseFloat(item.value))}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}







