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
  Maximize2,
  Volume2,
  VolumeX
} from 'lucide-react';

// Professional 3D Signal Fusion Visualization using Context7 libraries
const Professional3DVisualization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Professional signal data with realistic biomedical characteristics
  const signalData = useMemo(() => ({
    ecg: {
      frequency: 1.5, // Hz (90 BPM)
      amplitude: 0.8,
      phase: 0,
      color: '#3b82f6',
      position: { x: -2, y: 0, z: 0 },
      quality: 94.2,
      icon: Activity
    },
    eeg: {
      frequency: 10, // Hz (Alpha waves)
      amplitude: 0.4,
      phase: Math.PI / 4,
      color: '#10b981',
      position: { x: 2, y: 0, z: 0 },
      quality: 91.7,
      icon: Brain
    },
    emg: {
      frequency: 50, // Hz (Muscle activity)
      amplitude: 0.15,
      phase: Math.PI / 2,
      color: '#f59e0b',
      position: { x: 0, y: 2, z: 0 },
      quality: 88.9,
      icon: Zap
    },
    fused: {
      frequency: 5, // Hz (Combined)
      amplitude: 0.9,
      phase: 0,
      color: '#8b5cf6',
      position: { x: 0, y: 0, z: 2 },
      quality: 96.8,
      icon: Shield
    }
  }), []);

  // Performance metrics for real-time display
  const performanceMetrics = useMemo(() => ({
    snr: 18.7,
    latency: 4.3,
    confidence: 0.847,
    throughput: 240,
    memory: 45.2,
    cpu: 23.8
  }), []);

  // Animation control functions
  const toggleAnimation = () => setIsPlaying(!isPlaying);
  const resetAnimation = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setTimeout(() => setIsPlaying(true), 100);
  };

  // Professional 3D Scene with Three.js concepts
  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = sceneRef.current;
    
    // Clear previous content
    scene.innerHTML = '';

    // Create 3D container with proper perspective
    const scene3D = document.createElement('div');
    scene3D.className = 'relative w-full h-full transform-gpu preserve-3d';
    scene3D.style.cssText = `
      perspective: ${viewMode === '3d' ? '1000px' : 'none'};
      transform-style: preserve-3d;
      overflow: hidden;
    `;

    // Create signal nodes with professional styling
    Object.entries(signalData).forEach(([key, signal], index) => {
      const node = document.createElement('div');
      node.className = `signal-node signal-${key}`;
      node.style.cssText = `
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: ${signal.color};
        box-shadow: 0 0 20px ${signal.color}50, 0 0 40px ${signal.color}30;
        left: ${50 + signal.position.x * 25}%;
        top: ${50 + signal.position.y * 25}%;
        transform: ${viewMode === '3d' 
          ? `translateZ(${signal.position.z * 30}px) rotateY(${currentTime * 5}deg)` 
          : 'translateZ(0px)'};
        z-index: ${Math.round(signal.position.z * 10) + 10};
        animation: ${isPlaying ? 'signalPulse 2s infinite ease-in-out' : 'none'};
        animation-delay: ${index * 0.3}s;
        transition: all 0.3s ease;
        cursor: pointer;
      `;

      // Add signal label with professional typography
      const label = document.createElement('div');
      label.textContent = key.toUpperCase();
      label.style.cssText = `
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 11px;
        font-weight: 700;
        color: ${signal.color};
        text-shadow: 0 0 8px ${signal.color};
        letter-spacing: 0.5px;
      `;
      node.appendChild(label);

      // Add quality indicator with professional styling
      const quality = document.createElement('div');
      quality.textContent = `${signal.quality}%`;
      quality.style.cssText = `
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 9px;
        font-weight: 600;
        color: white;
        background: rgba(0,0,0,0.8);
        padding: 3px 6px;
        border-radius: 4px;
        border: 1px solid ${signal.color}50;
        backdrop-filter: blur(4px);
      `;
      node.appendChild(quality);

      // Add hover effects
      node.addEventListener('mouseenter', () => {
        node.style.transform = `${viewMode === '3d' 
          ? `translateZ(${signal.position.z * 30 + 10}px) rotateY(${currentTime * 5}deg) scale(1.2)` 
          : 'translateZ(0px) scale(1.2)'}`;
        node.style.boxShadow = `0 0 30px ${signal.color}80, 0 0 60px ${signal.color}50`;
      });

      node.addEventListener('mouseleave', () => {
        node.style.transform = `${viewMode === '3d' 
          ? `translateZ(${signal.position.z * 30}px) rotateY(${currentTime * 5}deg) scale(1)` 
          : 'translateZ(0px) scale(1)'}`;
        node.style.boxShadow = `0 0 20px ${signal.color}50, 0 0 40px ${signal.color}30`;
      });

      scene3D.appendChild(node);
    });

    // Create fusion center with professional design
    const fusionCenter = document.createElement('div');
    fusionCenter.className = 'fusion-center';
    fusionCenter.style.cssText = `
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981);
      box-shadow: 0 0 40px #8b5cf650, 0 0 80px #8b5cf630;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ${isPlaying ? 'fusionRotate 8s infinite linear' : 'none'};
      z-index: 20;
      cursor: pointer;
      transition: all 0.3s ease;
    `;

    // Add Brain icon to fusion center
    const brainIcon = document.createElement('div');
    brainIcon.innerHTML = '🧠';
    brainIcon.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      filter: drop-shadow(0 0 4px rgba(255,255,255,0.8));
    `;
    fusionCenter.appendChild(brainIcon);

    // Add fusion center hover effects
    fusionCenter.addEventListener('mouseenter', () => {
      fusionCenter.style.transform = 'translate(-50%, -50%) scale(1.1)';
      fusionCenter.style.boxShadow = '0 0 60px #8b5cf680, 0 0 120px #8b5cf650';
    });

    fusionCenter.addEventListener('mouseleave', () => {
      fusionCenter.style.transform = 'translate(-50%, -50%) scale(1)';
      fusionCenter.style.boxShadow = '0 0 40px #8b5cf650, 0 0 80px #8b5cf630';
    });

    scene3D.appendChild(fusionCenter);

    // Create connection lines with professional styling
    Object.entries(signalData).forEach(([key, signal]) => {
      if (key === 'fused') return;
      
      const line = document.createElement('div');
      line.className = `connection-line connection-${key}`;
      line.style.cssText = `
        position: absolute;
        height: 3px;
        background: linear-gradient(90deg, ${signal.color}, #8b5cf6);
        border-radius: 2px;
        transform-origin: left center;
        top: 50%;
        left: 50%;
        z-index: 5;
        animation: ${isPlaying ? 'dataFlow 4s infinite linear' : 'none'};
        box-shadow: 0 0 8px ${signal.color}50;
      `;
      
      // Calculate line properties
      const centerX = 50;
      const centerY = 50;
      const nodeX = 50 + signal.position.x * 25;
      const nodeY = 50 + signal.position.y * 25;
      const dx = nodeX - centerX;
      const dy = nodeY - centerY;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      
      line.style.width = `${length}%`;
      line.style.transform = `rotate(${angle}deg)`;
      
      scene3D.appendChild(line);
    });

    // Create data flow particles
    if (isPlaying) {
      [...Array(8)].forEach((_, i) => {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          box-shadow: 0 0 8px #3b82f680;
          top: 50%;
          left: ${20 + (i * 10)}%;
          transform: translateY(-50%);
          animation: dataStream 6s infinite linear;
          animation-delay: ${i * 0.8}s;
          z-index: 15;
        `;
        scene3D.appendChild(particle);
      });
    }

    scene.appendChild(scene3D);

    // Cleanup function
    return () => {
      scene.innerHTML = '';
    };
  }, [signalData, isPlaying, viewMode, currentTime]);

  // Animation time update
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTime(prev => prev + 0.1);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      {/* Professional 3D Signal Fusion Visualization */}
      <Card className="industrial-card border-primary/20 bg-gradient-to-br from-primary/5 to-glow-secondary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Professional 3D Signal Fusion Visualization
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAnimation}
                className="hover:bg-primary/10"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetAnimation}
                className="hover:bg-primary/10"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === '3d' ? '2d' : '3d')}
                className="hover:bg-primary/10"
              >
                <Maximize2 className="h-4 w-4" />
                {viewMode === '3d' ? '2D' : '3D'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMuted(!muted)}
                className="hover:bg-primary/10"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                {muted ? 'Unmute' : 'Mute'}
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
            <div ref={sceneRef} className="relative w-full h-full" />
          </div>
          
          {/* Professional Performance Indicators */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center space-y-2">
              <div className="text-xl font-bold text-primary">{performanceMetrics.snr}dB</div>
              <div className="text-xs text-muted-foreground">Signal-to-Noise</div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-primary h-1 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-xl font-bold text-success">{performanceMetrics.latency}ms</div>
              <div className="text-xs text-muted-foreground">Latency</div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-success h-1 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-xl font-bold text-warning">{(performanceMetrics.confidence * 100).toFixed(1)}%</div>
              <div className="text-xs text-muted-foreground">Confidence</div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-warning h-1 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-xl font-bold text-destructive">{performanceMetrics.throughput}Hz</div>
              <div className="text-xs text-muted-foreground">Throughput</div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-destructive h-1 rounded-full" style={{ width: '88%' }} />
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-xl font-bold text-primary">{performanceMetrics.memory}%</div>
              <div className="text-xs text-muted-foreground">Memory</div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-primary h-1 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-xl font-bold text-success">{performanceMetrics.cpu}%</div>
              <div className="text-xs text-muted-foreground">CPU</div>
              <div className="w-full bg-muted rounded-full h-1">
                <div className="bg-success h-1 rounded-full" style={{ width: '24%' }} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Processing Pipeline */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-success" />
            Advanced Processing Pipeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-72 bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg overflow-hidden p-6">
            {/* Pipeline Stages */}
            <div className="flex items-center justify-between h-full">
              {[
                { 
                  stage: 'Acquisition', 
                  progress: 100, 
                  color: '#3b82f6', 
                  time: '0.5ms', 
                  icon: Database,
                  description: 'Multi-modal sensor data collection'
                },
                { 
                  stage: 'Preprocessing', 
                  progress: 95, 
                  color: '#10b981', 
                  time: '1.2ms', 
                  icon: Zap,
                  description: 'Noise reduction and filtering'
                },
                { 
                  stage: 'Fusion', 
                  progress: 90, 
                  color: '#f59e0b', 
                  time: '1.8ms', 
                  icon: Brain,
                  description: 'Confidence-weighted fusion'
                },
                { 
                  stage: 'Validation', 
                  progress: 98, 
                  color: '#8b5cf6', 
                  time: '0.8ms', 
                  icon: Shield,
                  description: 'Quality assessment and validation'
                }
              ].map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div key={stage.stage} className="flex flex-col items-center space-y-4 group">
                    {/* Stage Box */}
                    <div
                      className="w-20 h-20 rounded-xl border-2 border-white shadow-xl flex items-center justify-center relative group-hover:scale-110 transition-all duration-300"
                      style={{ 
                        backgroundColor: stage.color,
                        boxShadow: `0 0 30px ${stage.color}50, 0 0 60px ${stage.color}30`,
                        animation: isPlaying ? 'stageProcessing 3s infinite ease-in-out' : 'none',
                        animationDelay: `${index * 0.4}s`
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                      
                      {/* 3D Effect */}
                      {viewMode === '3d' && (
                        <div
                          className="absolute inset-0 rounded-xl"
                          style={{
                            backgroundColor: stage.color,
                            opacity: 0.3,
                            transform: 'translateX(3px) translateY(3px)'
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Stage Info */}
                    <div className="text-center space-y-2">
                      <div className="text-sm font-semibold text-foreground">{stage.stage}</div>
                      <div className="text-xs text-muted-foreground">{stage.time}</div>
                      <div className="text-xs text-muted-foreground max-w-20">{stage.description}</div>
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
                  className="absolute h-1 bg-gradient-to-r from-current to-transparent opacity-60"
                  style={{
                    left: `${(index / 3) * 80 + 10}%`,
                    width: `${80 / 3}%`,
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'][index],
                    animation: isPlaying ? 'dataFlow 4s infinite linear' : 'none'
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
          <div className="relative h-56 bg-gradient-to-br from-primary/10 to-glow-secondary/10 rounded-lg overflow-hidden p-6">
            {/* Data Flow Animation */}
            <div className="relative h-full flex items-center">
              {/* Input Signals */}
              <div className="flex flex-col space-y-4">
                <div className="text-sm font-semibold text-muted-foreground mb-3">Input Signals</div>
                {['ECG', 'EEG', 'EMG'].map((signal, i) => (
                  <div key={signal} className="flex items-center space-x-3 group">
                    <div 
                      className="w-4 h-4 rounded-full group-hover:scale-125 transition-transform duration-300"
                      style={{
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'][i],
                        animation: isPlaying ? 'signalPulse 2s infinite ease-in-out' : 'none',
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                    <span className="text-sm font-medium text-foreground">{signal}</span>
                    <Badge variant="outline" className="text-xs">
                      {[94.2, 91.7, 88.9][i]}%
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Data Flow Path */}
              <div className="flex-1 mx-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-glow-secondary transform -translate-y-1/2 rounded-full" />
                
                {/* Moving Data Packets */}
                {isPlaying && [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary"
                    style={{
                      top: '50%',
                      left: `${(i * 18)}%`,
                      transform: 'translateY(-50%)',
                      animation: 'dataStream 5s infinite linear',
                      animationDelay: `${i * 0.8}s`,
                      boxShadow: '0 0 8px #3b82f680'
                    }}
                  />
                ))}
              </div>

              {/* Output */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-sm font-semibold text-muted-foreground">Fused Output</div>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                    boxShadow: '0 0 30px #8b5cf650, 0 0 60px #8b5cf630',
                    animation: isPlaying ? 'fusionRotate 6s infinite linear' : 'none'
                  }}
                >
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">FUSED</span>
                <Badge variant="outline" className="text-xs">
                  96.8%
                </Badge>
              </div>
            </div>
            
            {/* Performance Stats */}
            <div className="absolute bottom-4 left-4 space-y-2">
              <div className="text-sm text-foreground font-medium">Processing Rate: 240 Hz</div>
              <div className="text-sm text-foreground font-medium">Latency: 4.3ms</div>
            </div>
            
            <div className="absolute bottom-4 right-4 space-y-2">
              <div className="text-sm text-foreground font-medium">Quality: 96.8%</div>
              <div className="text-sm text-foreground font-medium">Reliability: 99.9%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Professional3DVisualization;
