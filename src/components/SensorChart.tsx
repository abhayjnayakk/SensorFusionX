import * as React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { Activity } from "lucide-react";

type Point = { t: number; lidar: number; radar: number; camera: number; imu: number; gps: number; fused: number };

const CustomTooltip = React.memo(({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
        <p className="text-xs text-muted-foreground mb-2">Time: {payload[0].payload.t}s</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 text-xs">
            <span style={{ color: entry.color }} className="font-medium">
              {entry.name}
            </span>
            <span className="text-foreground font-mono">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
});

export function SensorChart({ data }: { data?: Point[] }) {
  // Fallback data if data is undefined
  const safeData = data || [];
  
  const chartData = React.useMemo(() => {
    if (safeData.length === 0) {
      // Generate fallback data
      return Array.from({ length: 100 }, (_, i) => ({
        t: i * 0.1,
        LiDAR: 50.0 * Math.sin(i * 0.05) + Math.random() * 5.0,
        RADAR: 30.0 * Math.sin(i * 0.1) + Math.random() * 3.0,
        Camera: Math.max(0, Math.min(1, 0.7 * Math.sin(i * 0.03) + Math.random() * 0.1)),
        IMU: 2.0 * Math.sin(i * 0.08) + Math.random() * 0.3,
        GPS: Math.max(0.3, Math.min(1.0, 0.9 * Math.sin(i * 0.01) + Math.random() * 0.15)),
        Fused: 20.0 * Math.sin(i * 0.06) + Math.random() * 2.0,
      }));
    }
    return safeData.slice(-200).map((d) => ({
      t: Number(d.t.toFixed(1)),
      LiDAR: Number(d.lidar.toFixed(1)),
      RADAR: Number(d.radar.toFixed(1)),
      Camera: Number(d.camera.toFixed(3)),
      IMU: Number(d.imu.toFixed(2)),
      GPS: Number(d.gps.toFixed(3)),
      Fused: Number(d.fused.toFixed(2)),
    }));
  }, [safeData]);

  return (
    <div className="industrial-card scan-line space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Activity className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Live Sensor Streams
            </h3>
            <p className="text-xs text-muted-foreground">
              Real-time biosignal monitoring
            </p>
          </div>
        </div>
        
        {/* Status indicators */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="lidarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="cameraGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="imuGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="gpsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="fusedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="t" 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} 
              stroke="hsl(var(--border))"
              axisLine={{ strokeWidth: 1 }}
            />
            <YAxis 
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} 
              domain={["auto", "auto"]} 
              stroke="hsl(var(--border))"
              axisLine={{ strokeWidth: 1 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '11px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="LiDAR" 
              stroke="#3b82f6" 
              dot={false}
              isAnimationActive={false}
              strokeWidth={2}
              fill="url(#lidarGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="RADAR" 
              stroke="#10b981" 
              dot={false}
              isAnimationActive={false}
              strokeWidth={2}
              fill="url(#radarGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="Camera" 
              stroke="#f59e0b" 
              dot={false}
              isAnimationActive={false}
              strokeWidth={2}
              fill="url(#cameraGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="IMU" 
              stroke="#a855f7" 
              dot={false}
              isAnimationActive={false}
              strokeWidth={2}
              fill="url(#imuGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="GPS" 
              stroke="#06b6d4" 
              dot={false}
              isAnimationActive={false}
              strokeWidth={2}
              fill="url(#gpsGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="Fused" 
              stroke="#ef4444" 
              dot={false}
              isAnimationActive={false}
              strokeWidth={2.5}
              fill="url(#fusedGradient)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}







