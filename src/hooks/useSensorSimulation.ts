import * as React from "react";
import { computeQualityMetrics, SensorSample } from "@/lib/analysis";

export type UseSensorSimulationResult = {
  buffer: SensorSample[];
  metrics: ReturnType<typeof computeQualityMetrics>;
  start: () => void;
  stop: () => void;
  isRunning: boolean;
};

export function useSensorSimulation(): UseSensorSimulationResult {
  const [buffer, setBuffer] = React.useState<SensorSample[]>([]);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);
  const tRef = React.useRef(0);

  const tick = React.useCallback(() => {
    const dt = 1 / 60; // simulation step
    const samplesPerTick = 1.5; // slightly lower gen cost
    const newSamples: SensorSample[] = [];
    for (let i = 0; i < Math.round(samplesPerTick); i++) {
      tRef.current += dt / samplesPerTick;
      const t = tRef.current;
      
      // LiDAR: Distance measurements with periodic occlusions
      const lidar = 50.0 * Math.sin(2 * Math.PI * 0.5 * t) + 
                    10.0 * Math.sin(2 * Math.PI * 2.0 * t + 0.3) + 
                    0.05 * 5.0 * (Math.random() - 0.5);
      
      // RADAR: Velocity and range with Doppler patterns
      const radar = 30.0 * Math.sin(2 * Math.PI * 1.0 * t) + 
                    15.0 * Math.sin(2 * Math.PI * 3.0 * t + 0.5) + 
                    0.05 * 3.0 * (Math.random() - 0.5);
      
      // Camera: Visual feature confidence (0-1)
      const camera = Math.max(0, Math.min(1, 
        0.7 * Math.sin(2 * Math.PI * 0.3 * t) + 
        0.2 * Math.sin(2 * Math.PI * 1.5 * t + 0.8) + 
        0.05 * 0.1 * (Math.random() - 0.5)
      ));
      
      // IMU: Acceleration/gyroscope magnitude
      const imu = 2.0 * Math.sin(2 * Math.PI * 0.8 * t) + 
                  0.5 * Math.sin(2 * Math.PI * 5.0 * t + 1.2) + 
                  0.05 * 0.3 * (Math.random() - 0.5);
      
      // GPS: Position accuracy (0.3-1.0, rarely perfect)
      const gps = Math.max(0.3, Math.min(1.0,
        0.9 * Math.sin(2 * Math.PI * 0.1 * t) + 
        0.05 * 0.15 * (Math.random() - 0.5)
      ));
      
      // Fused perception signal (confidence-weighted combination)
      const fused = 0.35 * lidar + 0.30 * radar + 0.20 * camera + 
                    0.10 * imu + 0.05 * gps;
      
      newSamples.push({ t, lidar, radar, camera, imu, gps, fused });
    }
    // Batch UI updates at ~15fps to reduce re-renders further
    setBuffer((prev) => {
      const next = [...prev, ...newSamples];
      const maxPoints = 600; // tighter cap for smoother charts
      if (next.length > maxPoints) next.splice(0, next.length - maxPoints);
      return next;
    });
  }, []);

  const start = React.useCallback(() => {
    if (timerRef.current != null) return;
    setIsRunning(true);
    // Run simulation at 60Hz but only trigger React updates at ~15Hz
    let subStep = 0;
    timerRef.current = window.setInterval(() => {
      // accumulate 3 sim steps per UI tick
      for (let i = 0; i < 3; i++) tick();
      subStep = (subStep + 1) % 3;
    }, 1000 / 15);
  }, [tick]);

  const stop = React.useCallback(() => {
    if (timerRef.current != null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  }, []);

  React.useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  // Compute metrics on a smaller slice to reduce CPU
  const metrics = React.useMemo(() => computeQualityMetrics(buffer.slice(-300)), [buffer]);

  return { buffer, metrics, start, stop, isRunning };
}







