export type SensorSample = {
  t: number;
  lidar: number;    // LiDAR: Distance measurements (0-200m)
  radar: number;     // RADAR: Velocity and range data (km/h)
  camera: number;   // Camera: Visual feature confidence (0-1)
  imu: number;      // IMU: Acceleration/gyroscope magnitude (m/s²)
  gps: number;      // GPS: Position accuracy signal (0-1)
  fused: number;   // Fused perception signal
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
  const lidar = last.map((s) => s.lidar);
  const radar = last.map((s) => s.radar);
  const camera = last.map((s) => s.camera);
  const imu = last.map((s) => s.imu);
  const gps = last.map((s) => s.gps);
  const fused = last.map((s) => s.fused);

  // Noise estimate: difference between fused and ideal weighted combination
  // Ideal weights: lidar=0.35, radar=0.30, camera=0.20, imu=0.10, gps=0.05
  const noiseEstimate = last.map((s) => 
    s.fused - (0.35 * s.lidar + 0.30 * s.radar + 0.20 * s.camera + 0.10 * s.imu + 0.05 * s.gps)
  );
  const snrDb = computeSnrDb(fused, noiseEstimate);

  // Artifact score: based on signal variability (occlusions, multipath, etc.)
  const artifactStd = rollingStd(fused, 64);
  const artifactScore = normalize(artifactStd, 0.02, 0.2);

  // Drift score: baseline shift detection (sensor calibration drift)
  const drift = Math.abs(average(fused.slice(-128)) - average(fused.slice(0, 128)));
  const driftScore = normalize(drift, 0.0, 0.2);

  // Sensor balance: measure of cross-sensor consistency
  const lidarStd = rollingStd(lidar, 64);
  const radarStd = rollingStd(radar, 64);
  const cameraStd = rollingStd(camera, 64);
  const imuStd = rollingStd(imu, 64);
  const gpsStd = rollingStd(gps, 64);
  const balance = 1 - normalize(
    Math.abs(lidarStd - radarStd) + 
    Math.abs(radarStd - cameraStd) + 
    Math.abs(cameraStd - imuStd),
    0.0, 0.6
  );
  const fusionConfidence = normalize(snrDb, 5, 25) * 0.6 + (1 - artifactScore) * 0.25 + balance * 0.15;

  return {
    signalToNoiseRatioDb: Number(snrDb.toFixed(2)),
    artifactScore: Number(artifactScore.toFixed(2)),
    driftScore: Number(driftScore.toFixed(2)),
    fusionConfidence: Number(fusionConfidence.toFixed(2)),
  };
}







