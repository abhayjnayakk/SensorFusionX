export type SensorSample = {
  t: number;
  ecg: number;
  eeg: number;
  emg: number;
  fused: number;
};

export type QualityMetrics = {
  signalToNoiseRatioDb: number;
  artifactScore: number;
  driftScore: number;
  fusionConfidence: number;
};

export function computeSnrDb(signal: number[], noiseEstimate: number[]): number {
  const signalPower = average(signal.map((v) => v * v));
  const noisePower = Math.max(1e-9, average(noiseEstimate.map((v) => v * v)));
  return 10 * Math.log10(signalPower / noisePower);
}

export function rollingStd(values: number[], windowSize: number): number {
  const w = values.slice(Math.max(0, values.length - windowSize));
  const mean = average(w);
  const variance = average(w.map((v) => (v - mean) * (v - mean)));
  return Math.sqrt(variance);
}

export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function normalize(value: number, min: number, max: number): number {
  if (max <= min) return 0;
  const v = (value - min) / (max - min);
  return Math.min(1, Math.max(0, v));
}

export function computeQualityMetrics(buffer: SensorSample[]): QualityMetrics {
  const last = buffer.slice(-512);
  const ecg = last.map((s) => s.ecg);
  const eeg = last.map((s) => s.eeg);
  const emg = last.map((s) => s.emg);
  const fused = last.map((s) => s.fused);

  const noiseEstimate = last.map((s) => s.fused - 0.5 * s.ecg - 0.3 * s.eeg - 0.2 * s.emg);
  const snrDb = computeSnrDb(fused, noiseEstimate);

  const artifactStd = rollingStd(fused, 64);
  const artifactScore = normalize(artifactStd, 0.02, 0.2);

  const drift = Math.abs(average(fused.slice(-128)) - average(fused.slice(0, 128)));
  const driftScore = normalize(drift, 0.0, 0.2);

  const eegStd = rollingStd(eeg, 64);
  const ecgStd = rollingStd(ecg, 64);
  const emgStd = rollingStd(emg, 64);
  const balance = 1 - normalize(Math.abs(ecgStd - eegStd) + Math.abs(eegStd - emgStd), 0.0, 0.6);
  const fusionConfidence = normalize(snrDb, 5, 25) * 0.6 + (1 - artifactScore) * 0.25 + balance * 0.15;

  return {
    signalToNoiseRatioDb: Number(snrDb.toFixed(2)),
    artifactScore: Number(artifactScore.toFixed(2)),
    driftScore: Number(driftScore.toFixed(2)),
    fusionConfidence: Number(fusionConfidence.toFixed(2)),
  };
}







