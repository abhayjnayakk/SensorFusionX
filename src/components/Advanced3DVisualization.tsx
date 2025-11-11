import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Activity, 
  Zap, 
  Database, 
  TrendingUp, 
  Shield, 
  Award, 
  Users, 
  Globe, 
  Target,
  BarChart3,
  LineChart,
  PieChart,
  Gauge,
  Play,
  Pause,
  RotateCcw,
  Maximize2
} from 'lucide-react';

// Advanced 3D Signal Fusion Visualization with Animation Libraries
const Advanced3DVisualization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');

  // 3D Signal data with realistic biomedical characteristics
  const signalData = useMemo(() => ({
    ecg: {
      frequency: 1.5, // Hz (90 BPM)
      amplitude: 0.8,
      phase: 0,
      color: '#3b82f6',
      position: { x: -2, y: 0, z: 0 },
      quality: 94.2
    },
    eeg: {
      frequency: 10, // Hz (Alpha waves)
      amplitude: 0.4,
      phase: Math.PI / 4,
      color: '#10b981',
      position: { x: 2, y: 0, z: 0 },
      quality: 91.7
    },
    emg: {
      frequency: 50, // Hz (Muscle activity)
      amplitude: 0.15,
      phase: Math.PI / 2,
      color: '#f59e0b',
      position: { x: 0, y: 2, z: 0 },
      quality: 88.9
    },
    fused: {
      frequency: 5, // Hz (Combined)
      amplitude: 0.9,
      phase: 0,
      color: '#8b5cf6',
      position: { x: 0, y: 0, z: 2 },
      quality: 96.8
    }
  }), []);

  // Performance metrics for real-time display
  const performanceMetrics = useMemo(() => ({
    snr: 18.7,
    latency: 4.3,
    confidence: 0.847,
    throughput: 240
  }), []);

  // Animation control functions
  const toggleAnimation = () => setIsPlaying(!isPlaying);
  const resetAnimation = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  // Animation state for signal nodes
  const [animationTime, setAnimationTime] = useState(0);

  // Update animation time for smooth animations
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setAnimationTime(prev => prev + 0.1);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      {/* 3D Signal Fusion Visualization */}
      <Card className="industrial-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Interactive 3D Signal Fusion Visualization
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAnimation}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetAnimation}
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === '3d' ? '2d' : '3d')}
              >
                <Maximize2 className="h-4 w-4" />
                {viewMode === '3d' ? '2D' : '3D'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div 
            ref={containerRef}
            className={`relative w-full bg-gradient-to-br from-background to-muted/20 rounded-lg overflow-hidden ${
              viewMode === '3d' ? 'h-96' : 'h-64'
            }`}
            style={{ 
              perspective: viewMode === '3d' ? '1000px' : 'none',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* 3D Signal Fusion Scene */}
            <div className="relative w-full h-full transform-gpu preserve-3d">
              {/* Signal Nodes */}
              {Object.entries(signalData).map(([key, signal], index) => (
                <div
                  key={key}
                  className="absolute signal-node"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: signal.color,
                    boxShadow: `0 0 20px ${signal.color}50`,
                    left: `${50 + signal.position.x * 30}%`,
                    top: `${50 + signal.position.y * 30}%`,
                    transform: viewMode === '3d' 
                      ? `translateZ(${signal.position.z * 30}px) rotateY(${animationTime * 10}deg)`
                      : 'translateZ(0px)',
                    zIndex: Math.round(signal.position.z * 10) + 10,
                    animation: isPlaying ? 'pulse3d 2s infinite ease-in-out' : 'none',
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  {/* Signal Label */}
                  <div 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold"
                    style={{ 
                      color: signal.color,
                      textShadow: `0 0 5px ${signal.color}`
                    }}
                  >
                    {key.toUpperCase()}
                  </div>
                  
                  {/* Quality Indicator */}
                  <div 
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/70 px-1 py-0.5 rounded"
                  >
                    {signal.quality}%
                  </div>
                </div>
              ))}

              {/* Fusion Center */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                  boxShadow: '0 0 30px #8b5cf650',
                  animation: isPlaying ? 'rotate3d 10s infinite linear' : 'none',
                  zIndex: 20
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Connection Lines */}
              {Object.entries(signalData).map(([key, signal]) => {
                if (key === 'fused') return null;
                
                const centerX = 50;
                const centerY = 50;
                const nodeX = 50 + signal.position.x * 30;
                const nodeY = 50 + signal.position.y * 30;
                const dx = nodeX - centerX;
                const dy = nodeY - centerY;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                
                return (
                  <div
                    key={`line-${key}`}
                    className="absolute connection-line"
                    style={{
                      left: `${centerX}%`,
                      top: `${centerY}%`,
                      width: `${length}%`,
                      height: '2px',
                      background: `linear-gradient(90deg, ${signal.color}, #8b5cf6)`,
                      transformOrigin: 'left center',
                      transform: `rotate(${angle}deg)`,
                      zIndex: 5,
                      animation: isPlaying ? 'dataFlow 3s infinite linear' : 'none'
                    }}
                  />
                );
              })}

              {/* Data Flow Particles */}
              {isPlaying && [...Array(6)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: '50%',
                    animation: 'dataStream 4s infinite linear',
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Performance Indicators */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center space-y-1">
              <div className="text-lg font-bold text-primary">{performanceMetrics.snr}dB</div>
              <div className="text-xs text-muted-foreground">SNR</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-lg font-bold text-success">{performanceMetrics.latency}ms</div>
              <div className="text-xs text-muted-foreground">Latency</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-lg font-bold text-warning">{(performanceMetrics.confidence * 100).toFixed(1)}%</div>
              <div className="text-xs text-muted-foreground">Confidence</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-lg font-bold text-destructive">{performanceMetrics.throughput}Hz</div>
              <div className="text-xs text-muted-foreground">Throughput</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Signal Processing Pipeline */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-success" />
            3D Processing Pipeline Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg overflow-hidden p-4">
            {/* Pipeline Stages */}
            <div className="flex items-center justify-between h-full">
              {[
                { stage: 'Acquisition', progress: 100, color: '#3b82f6', time: '0.5ms', icon: Database },
                { stage: 'Preprocessing', progress: 95, color: '#10b981', time: '1.2ms', icon: Zap },
                { stage: 'Fusion', progress: 90, color: '#f59e0b', time: '1.8ms', icon: Brain },
                { stage: 'Validation', progress: 98, color: '#8b5cf6', time: '0.8ms', icon: Shield }
              ].map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div key={stage.stage} className="flex flex-col items-center space-y-4">
                    {/* Stage Box */}
                    <div
                      className="w-16 h-16 rounded-lg border-2 border-white shadow-lg flex items-center justify-center relative"
                      style={{ 
                        backgroundColor: stage.color,
                        boxShadow: `0 0 20px ${stage.color}50`,
                        animation: isPlaying ? 'pulse3d 2s infinite ease-in-out' : 'none',
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                      
                      {/* 3D Effect */}
                      {viewMode === '3d' && (
                        <div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            backgroundColor: stage.color,
                            opacity: 0.3,
                            transform: 'translateX(2px) translateY(2px)'
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Stage Info */}
                    <div className="text-center space-y-1">
                      <div className="text-sm font-medium text-foreground">{stage.stage}</div>
                      <div className="text-xs text-muted-foreground">{stage.time}</div>
                      <Badge variant="outline" className="text-xs">
                        {stage.progress}%
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connection Arrows */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="absolute h-1 bg-gradient-to-r from-current to-transparent opacity-50"
                  style={{
                    left: `${(index / 3) * 80 + 10}%`,
                    width: `${80 / 3}%`,
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'][index],
                    animation: isPlaying ? 'dataFlow 3s infinite linear' : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Data Flow */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-6 w-6 text-destructive" />
            Real-time Data Flow & Signal Processing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-48 bg-gradient-to-br from-primary/10 to-glow-secondary/10 rounded-lg overflow-hidden p-4">
            {/* Data Flow Animation */}
            <div className="relative h-full flex items-center">
              {/* Input Signals */}
              <div className="flex flex-col space-y-2">
                <div className="text-xs text-muted-foreground mb-2">Input Signals</div>
                {['ECG', 'EEG', 'EMG'].map((signal, i) => (
                  <div key={signal} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'][i],
                        animation: isPlaying ? 'pulse3d 2s infinite ease-in-out' : 'none',
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                    <span className="text-xs text-foreground">{signal}</span>
                  </div>
                ))}
              </div>

              {/* Data Flow Path */}
              <div className="flex-1 mx-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-glow-secondary transform -translate-y-1/2" />
                
                {/* Moving Data Packets */}
                {isPlaying && [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    style={{
                      top: '50%',
                      left: `${(i * 20)}%`,
                      transform: 'translateY(-50%)',
                      animation: 'dataStream 4s infinite linear',
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>

              {/* Output */}
              <div className="flex flex-col items-center space-y-2">
                <div className="text-xs text-muted-foreground mb-2">Fused Output</div>
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                    boxShadow: '0 0 20px #8b5cf650',
                    animation: isPlaying ? 'pulse3d 2s infinite ease-in-out' : 'none'
                  }}
                >
                  <Brain className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs text-foreground">FUSED</span>
              </div>
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

      {/* Signal Quality Metrics */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="h-6 w-6 text-warning" />
            Real-time Signal Quality Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(signalData).map(([key, signal]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: signal.color }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {key.toUpperCase()}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Quality</span>
                    <span>{signal.quality}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${signal.quality}%`,
                        backgroundColor: signal.color,
                        animation: isPlaying ? 'pulse3d 2s infinite ease-in-out' : 'none'
                      }}
                    />
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Freq: {signal.frequency}Hz | Amp: {signal.amplitude}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Advanced3DVisualization;
