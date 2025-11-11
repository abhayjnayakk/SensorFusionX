import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Activity, Brain, Shield, Zap, Database } from 'lucide-react';

interface ResearchData {
  methodology: {
    name: string;
    description: string;
    performance: number;
    color: string;
  }[];
  experimentalResults: {
    metric: string;
    baseline: number;
    improved: number;
    improvement: number;
    unit: string;
  }[];
  datasetCharacteristics: {
    type: string;
    samples: number;
    quality: number;
    noise: number;
  }[];
}

const ResearchVisualization: React.FC = () => {
  const researchData: ResearchData = useMemo(() => ({
    methodology: [
      {
        name: "Sensor Data Acquisition",
        description: "Multi-modal automotive sensor data collection at 100Hz",
        performance: 99.2,
        color: "hsl(var(--primary))"
      },
      {
        name: "Preprocessing",
        description: "Noise reduction and interference filtering",
        performance: 96.3,
        color: "hsl(var(--success))"
      },
      {
        name: "Fusion Algorithm",
        description: "Confidence-weighted multimodal integration",
        performance: 87.4,
        color: "hsl(var(--warning))"
      },
      {
        name: "Quality Assessment",
        description: "Real-time SNR and reliability scoring",
        performance: 94.7,
        color: "hsl(var(--destructive))"
      }
    ],
    experimentalResults: [
      {
        metric: "Detection Accuracy",
        baseline: 85.1,
        improved: 94.7,
        improvement: 11.3,
        unit: "%"
      },
      {
        metric: "False Positive Rate",
        baseline: 12.4,
        improved: 6.8,
        improvement: -45.2,
        unit: "%"
      },
      {
        metric: "Processing Latency",
        baseline: 8.7,
        improved: 4.3,
        improvement: -50.6,
        unit: "ms"
      },
      {
        metric: "Sensor Reliability",
        baseline: 91.2,
        improved: 97.3,
        improvement: 6.7,
        unit: "%"
      }
    ],
    datasetCharacteristics: [
      {
        type: "LiDAR Data",
        samples: 25000,
        quality: 94.2,
        noise: 5.8
      },
      {
        type: "RADAR Data",
        samples: 30000,
        quality: 91.7,
        noise: 8.3
      },
      {
        type: "Camera Data",
        samples: 20000,
        quality: 88.9,
        noise: 11.1
      },
      {
        type: "Fused Perception",
        samples: 75000,
        quality: 96.8,
        noise: 3.2
      }
    ]
  }), []);

  return (
    <div className="space-y-6">
      {/* Research Methodology Visualization */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Automotive Sensor Fusion Pipeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchData.methodology.map((method, index) => (
              <div key={method.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">{method.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {method.performance}%
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{method.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Performance</span>
                    <span>{method.performance}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${method.performance}%`,
                        backgroundColor: method.color
                      }}
                    />
                  </div>
                </div>
                {index < researchData.methodology.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experimental Results Comparison */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            Performance Validation Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {researchData.experimentalResults.map((result) => (
              <div key={result.metric} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{result.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Baseline: {result.baseline}{result.unit}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Improved: {result.improved}{result.unit}
                    </span>
                    <Badge 
                      variant={result.improvement > 0 ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {result.improvement > 0 ? '+' : ''}{result.improvement.toFixed(1)}%
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Baseline</span>
                      <span>{result.baseline}{result.unit}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-muted-foreground/50"
                        style={{ width: `${Math.min(100, (result.baseline / Math.max(result.baseline, result.improved)) * 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Improved</span>
                      <span>{result.improved}{result.unit}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-success"
                        style={{ width: `${Math.min(100, (result.improved / Math.max(result.baseline, result.improved)) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dataset Characteristics */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Sensor Data Characteristics & Quality Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchData.datasetCharacteristics.map((dataset) => (
              <div key={dataset.type} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">{dataset.type}</h4>
                  <Badge variant="outline" className="text-xs">
                    {dataset.samples.toLocaleString()} samples
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Signal Quality</span>
                    <span>{dataset.quality}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-success"
                      style={{ width: `${dataset.quality}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Noise Level</span>
                    <span>{dataset.noise}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-destructive"
                      style={{ width: `${dataset.noise}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Activity className="h-3 w-3" />
                  <span>Processing: Real-time</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics Summary */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" />
            Autonomous Vehicle Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-success">11.3%</div>
              <div className="text-xs text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">4.3ms</div>
              <div className="text-xs text-muted-foreground">Processing Latency</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-warning">97.3%</div>
              <div className="text-xs text-muted-foreground">Sensor Reliability</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-destructive">99.9%</div>
              <div className="text-xs text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResearchVisualization;
