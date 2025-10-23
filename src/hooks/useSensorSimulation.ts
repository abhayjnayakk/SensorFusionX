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
    const dt = 1 / 60; // 60 Hz update
    const samplesPerTick = 4; // simulate higher internal rate
    const newSamples: SensorSample[] = [];
    for (let i = 0; i < samplesPerTick; i++) {
      tRef.current += dt / samplesPerTick;
      const t = tRef.current;
      const ecg = 0.8 * Math.sin(2 * Math.PI * 1.5 * t) + 0.05 * (Math.random() - 0.5);
      const eeg = 0.4 * Math.sin(2 * Math.PI * 10 * t) + 0.15 * Math.sin(2 * Math.PI * 22 * t + 0.5) + 0.05 * (Math.random() - 0.5);
      const emg = 0.15 * (Math.random() - 0.5) + 0.05 * Math.sin(2 * Math.PI * 50 * t);
      const fused = 0.5 * ecg + 0.3 * eeg + 0.2 * emg;
      newSamples.push({ t, ecg, eeg, emg, fused });
    }
    setBuffer((prev) => {
      const next = [...prev, ...newSamples];
      if (next.length > 2000) next.splice(0, next.length - 2000);
      return next;
    });
  }, []);

  const start = React.useCallback(() => {
    if (timerRef.current != null) return;
    setIsRunning(true);
    timerRef.current = window.setInterval(tick, 1000 / 60);
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

  const metrics = React.useMemo(() => computeQualityMetrics(buffer), [buffer]);

  return { buffer, metrics, start, stop, isRunning };
}







