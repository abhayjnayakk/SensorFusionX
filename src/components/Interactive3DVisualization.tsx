import React, { useMemo, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Activity, Zap, Database, BarChart3, TrendingUp } from 'lucide-react';

// Interactive 3D-like visualization component using CSS transforms and animations
const Interactive3DVisualization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D data points for signal fusion visualization
  const fusionData = useMemo(() => [
    { x: 0, y: 0, z: 0, type: 'ECG', value: 0.8, color: '#3b82f6', label: 'ECG Signal' },
    { x: 1, y: 0, z: 0, type: 'EEG', value: 0.6, color: '#10b981', label: 'EEG Signal' },
    { x: 0.5, y: 1, z: 0, type: 'EMG', value: 0.4, color: '#f59e0b', label: 'EMG Signal' },
    { x: 0.5, y: 0.5, z: 1, type: 'Fused', value: 0.9, color: '#8b5cf6', label: 'Fused Output' }
  ], []);

  // Performance metrics for 3D visualization
  const performanceData = useMemo(() => [
    { metric: 'SNR', value: 18.7, max: 25, color: '#10b981' },
    { metric: 'Latency', value: 4.3, max: 10, color: '#3b82f6' },
    { metric: 'Quality', value: 96.3, max: 100, color: '#f59e0b' },
    { metric: 'Reliability', value: 99.9, max: 100, color: '#8b5cf6' }
  ], []);

  // Signal processing pipeline stages
  const pipelineStages = useMemo(() => [
    { stage: 'Acquisition', progress: 100, color: '#3b82f6', time: '0.5ms' },
    { stage: 'Preprocessing', progress: 95, color: '#10b981', time: '1.2ms' },
    { stage: 'Fusion', progress: 90, color: '#f59e0b', time: '1.8ms' },
    { stage: 'Validation', progress: 98, color: '#8b5cf6', time: '0.8ms' }
  ], []);

  return (
    <div className="space-y-6">
      {/* 3D Signal Fusion Visualization */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Interactive 3D Signal Fusion Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={containerRef}
            className="relative w-full h-96 bg-gradient-to-br from-background to-muted/20 rounded-lg overflow-hidden"
            style={{ perspective: '1000px' }}
          >
            {/* 3D Container */}
            <div 
              className="absolute inset-4 transform-gpu transition-transform duration-1000 hover:scale-105"
              style={{ 
                transformStyle: 'preserve-3d',
                animation: 'rotate3d 20s infinite linear'
              }}
            >
              {/* Signal Points */}
              {fusionData.map((point, index) => (
                <div
                  key={point.type}
                  className="absolute transform-gpu transition-all duration-500 hover:scale-125"
                  style={{
                    left: `${point.x * 200 + 50}px`,
                    top: `${point.y * 200 + 50}px`,
                    transform: `translateZ(${point.z * 100}px)`,
                    zIndex: Math.round(point.z * 10) + 10
                  }}
                >
                  <div className="relative">
                    {/* Signal Point */}
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-lg animate-pulse"
                      style={{ 
                        backgroundColor: point.color,
                        boxShadow: `0 0 20px ${point.color}50`
                      }}
                    />
                    
                    {/* Connection Lines */}
                    {index < fusionData.length - 1 && (
                      <div
                        className="absolute w-1 bg-gradient-to-r from-current to-transparent opacity-50"
                        style={{
                          height: '2px',
                          left: '50%',
                          top: '50%',
                          transform: 'rotate(45deg)',
                          backgroundColor: point.color
                        }}
                      />
                    )}
                    
                    {/* Label */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-foreground whitespace-nowrap">
                      {point.label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Fusion Center */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-glow-secondary border-2 border-white shadow-2xl animate-pulse">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/20 to-glow-secondary/20 animate-spin" />
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="absolute top-4 right-4 space-y-2">
              {performanceData.map((metric) => (
                <div key={metric.metric} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: metric.color }}
                  />
                  <span className="text-xs text-foreground">{metric.metric}: {metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3D Performance Metrics */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-success" />
            3D Performance Metrics Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceData.map((metric, index) => (
              <div 
                key={metric.metric}
                className="relative transform-gpu transition-all duration-500 hover:scale-105"
                style={{
                  transform: `rotateY(${index * 15}deg) translateZ(${index * 10}px)`
                }}
              >
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: metric.color }}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{metric.metric}</div>
                  </div>
                  
                  <div className="relative h-32 bg-muted/20 rounded-lg overflow-hidden">
                    {/* 3D Bar */}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000"
                      style={{
                        width: '20px',
                        height: `${(metric.value / metric.max) * 100}%`,
                        backgroundColor: metric.color,
                        boxShadow: `0 0 10px ${metric.color}50`,
                        transform: 'translateX(-50%) rotateX(60deg) rotateY(15deg)'
                      }}
                    />
                    
                    {/* 3D Effect */}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                      style={{
                        width: '20px',
                        height: `${(metric.value / metric.max) * 100}%`,
                        backgroundColor: metric.color,
                        opacity: 0.3,
                        transform: 'translateX(-50%) translateX(2px) translateY(2px)'
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {((metric.value / metric.max) * 100).toFixed(1)}%
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 3D Processing Pipeline */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-warning" />
            3D Processing Pipeline Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg overflow-hidden">
            {/* Pipeline Stages */}
            {pipelineStages.map((stage, index) => (
              <div
                key={stage.stage}
                className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 hover:scale-110"
                style={{
                  left: `${(index / (pipelineStages.length - 1)) * 80 + 10}%`,
                  transform: `translateY(-50%) rotateY(${index * 20}deg) translateZ(${index * 20}px)`
                }}
              >
                <div className="relative">
                  {/* Stage Box */}
                  <div
                    className="w-16 h-16 rounded-lg border-2 border-white shadow-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: stage.color,
                      boxShadow: `0 0 20px ${stage.color}50`
                    }}
                  >
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* 3D Effect */}
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundColor: stage.color,
                      opacity: 0.3,
                      transform: 'translateX(2px) translateY(2px)'
                    }}
                  />
                  
                  {/* Stage Info */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-xs font-medium text-foreground">{stage.stage}</div>
                    <div className="text-xs text-muted-foreground">{stage.time}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {stage.progress}%
                    </Badge>
                  </div>
                </div>
              </div>
            ))}

            {/* Connection Lines */}
            {pipelineStages.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-current to-transparent opacity-50"
                style={{
                  left: `${(index / (pipelineStages.length - 1)) * 80 + 10}%`,
                  width: `${80 / (pipelineStages.length - 1)}%`,
                  backgroundColor: pipelineStages[index].color
                }}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Data Flow */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-destructive" />
            Interactive Data Flow Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-48 bg-gradient-to-br from-primary/10 to-glow-secondary/10 rounded-lg overflow-hidden">
            {/* Data Flow Animation */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{
                    left: `${i * 20}%`,
                    top: '50%',
                    animationDelay: `${i * 0.5}s`,
                    animation: 'dataFlow 3s infinite linear'
                  }}
                />
              ))}
            </div>
            
            {/* Flow Labels */}
            <div className="absolute top-4 left-4 text-xs text-muted-foreground">
              Data Acquisition
            </div>
            <div className="absolute top-4 right-4 text-xs text-muted-foreground">
              Fusion Output
            </div>
            
            {/* Performance Stats */}
            <div className="absolute bottom-4 left-4 space-y-1">
              <div className="text-xs text-foreground">Processing Rate: 240 Hz</div>
              <div className="text-xs text-foreground">Latency: 4.3ms</div>
            </div>
            
            <div className="absolute bottom-4 right-4 space-y-1">
              <div className="text-xs text-foreground">Quality: 96.8%</div>
              <div className="text-xs text-foreground">Reliability: 99.9%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Interactive3DVisualization;
