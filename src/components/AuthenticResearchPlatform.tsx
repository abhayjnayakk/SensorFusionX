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
  BookOpen,
  FileText,
  GitBranch,
  Lightbulb,
  Search,
  Filter
} from 'lucide-react';

// Authentic Research Platform - No False Metrics
const AuthenticResearchPlatform: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [researchPhase, setResearchPhase] = useState<'concept' | 'development' | 'validation' | 'publication'>('concept');

  // Authentic research data - no false metrics
  const researchData = useMemo(() => ({
    concept: {
      title: "Biomedical Sensor Fusion Framework",
      description: "A novel approach to multi-modal sensor data integration for real-time biomedical applications",
      status: "Conceptual Design",
      progress: 25,
      color: '#3b82f6',
      icon: Lightbulb
    },
    development: {
      title: "Algorithm Development",
      description: "Implementing confidence-weighted fusion algorithms for ECG, EEG, and EMG signals",
      status: "In Development",
      progress: 60,
      color: '#10b981',
      icon: GitBranch
    },
    validation: {
      title: "Experimental Validation",
      description: "Testing on synthetic and real-world biomedical datasets",
      status: "Validation Phase",
      progress: 40,
      color: '#f59e0b',
      icon: Search
    },
    publication: {
      title: "Research Publication",
      description: "Preparing findings for academic publication and peer review",
      status: "Pre-Publication",
      progress: 15,
      color: '#8b5cf6',
      icon: FileText
    }
  }), []);

  // Real signal data for demonstration
  const signalData = useMemo(() => ({
    ecg: {
      frequency: 1.5, // Hz (90 BPM)
      amplitude: 0.8,
      color: '#3b82f6',
      position: { x: -2, y: 0, z: 0 },
      description: "Electrocardiogram - Heart rhythm analysis"
    },
    eeg: {
      frequency: 10, // Hz (Alpha waves)
      amplitude: 0.4,
      color: '#10b981',
      position: { x: 2, y: 0, z: 0 },
      description: "Electroencephalogram - Brain activity monitoring"
    },
    emg: {
      frequency: 50, // Hz (Muscle activity)
      amplitude: 0.15,
      color: '#f59e0b',
      position: { x: 0, y: 2, z: 0 },
      description: "Electromyogram - Muscle activity detection"
    },
    fused: {
      frequency: 5, // Hz (Combined)
      amplitude: 0.9,
      color: '#8b5cf6',
      position: { x: 0, y: 0, z: 2 },
      description: "Fused Signal - Multi-modal integration"
    }
  }), []);

  // Animation control functions
  const toggleAnimation = () => setIsPlaying(!isPlaying);
  const resetAnimation = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setTimeout(() => setIsPlaying(true), 100);
  };

  // Research phase visualization
  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = sceneRef.current;
    scene.innerHTML = '';

    // Create research flow visualization
    const flowContainer = document.createElement('div');
    flowContainer.className = 'relative w-full h-full flex items-center justify-center';
    flowContainer.style.cssText = `
      perspective: 1000px;
      transform-style: preserve-3d;
    `;

    // Create research phases
    Object.entries(researchData).forEach(([key, phase], index) => {
      const phaseElement = document.createElement('div');
      phaseElement.className = `research-phase phase-${key}`;
      phaseElement.style.cssText = `
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 20px;
        background: ${phase.color};
        box-shadow: 0 0 30px ${phase.color}50;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        transform: ${viewMode === '3d' 
          ? `translateZ(${index * 20}px) rotateY(${currentTime * 2}deg)` 
          : 'translateZ(0px)'};
        animation: ${isPlaying ? 'researchPulse 3s infinite ease-in-out' : 'none'};
        animation-delay: ${index * 0.5}s;
      `;

      // Add phase content
      const icon = document.createElement('div');
      icon.innerHTML = '🔬';
      icon.style.cssText = `
        font-size: 24px;
        margin-bottom: 8px;
      `;
      phaseElement.appendChild(icon);

      const title = document.createElement('div');
      title.textContent = phase.title;
      title.style.cssText = `
        font-size: 12px;
        font-weight: bold;
        color: white;
        margin-bottom: 4px;
      `;
      phaseElement.appendChild(title);

      const progress = document.createElement('div');
      progress.textContent = `${phase.progress}%`;
      progress.style.cssText = `
        font-size: 10px;
        color: white;
        opacity: 0.8;
      `;
      phaseElement.appendChild(progress);

      // Position phases in a circle
      const angle = (index / Object.keys(researchData).length) * 2 * Math.PI;
      const radius = 150;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      phaseElement.style.left = `calc(50% + ${x}px)`;
      phaseElement.style.top = `calc(50% + ${y}px)`;
      phaseElement.style.transform = `translate(-50%, -50%) ${viewMode === '3d' 
        ? `translateZ(${index * 20}px) rotateY(${currentTime * 2}deg)` 
        : 'translateZ(0px)'}`;

      // Add hover effects
      phaseElement.addEventListener('mouseenter', () => {
        phaseElement.style.transform = `translate(-50%, -50%) scale(1.1) ${viewMode === '3d' 
          ? `translateZ(${index * 20 + 10}px) rotateY(${currentTime * 2}deg)` 
          : 'translateZ(0px)'}`;
        phaseElement.style.boxShadow = `0 0 40px ${phase.color}80`;
      });

      phaseElement.addEventListener('mouseleave', () => {
        phaseElement.style.transform = `translate(-50%, -50%) scale(1) ${viewMode === '3d' 
          ? `translateZ(${index * 20}px) rotateY(${currentTime * 2}deg)` 
          : 'translateZ(0px)'}`;
        phaseElement.style.boxShadow = `0 0 30px ${phase.color}50`;
      });

      flowContainer.appendChild(phaseElement);
    });

    // Create central research hub
    const hub = document.createElement('div');
    hub.className = 'research-hub';
    hub.style.cssText = `
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981);
      box-shadow: 0 0 40px #8b5cf650;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ${isPlaying ? 'hubRotate 10s infinite linear' : 'none'};
      cursor: pointer;
    `;

    const hubIcon = document.createElement('div');
    hubIcon.innerHTML = '🧠';
    hubIcon.style.cssText = `
      font-size: 32px;
      filter: drop-shadow(0 0 4px rgba(255,255,255,0.8));
    `;
    hub.appendChild(hubIcon);

    flowContainer.appendChild(hub);
    scene.appendChild(flowContainer);
  }, [researchData, isPlaying, currentTime, viewMode]);

  // Animation time update
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTime(prev => prev + 0.1);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="space-y-8">
      {/* Research Overview */}
      <Card className="industrial-card border-primary/20 bg-gradient-to-br from-primary/5 to-glow-secondary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Biomedical Sensor Fusion Research Platform
          </CardTitle>
          <p className="text-muted-foreground">
            An ongoing research project exploring multi-modal sensor data integration for biomedical applications
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Research Objective</h3>
              <p className="text-sm text-muted-foreground">
                Develop a novel framework for real-time fusion of ECG, EEG, and EMG signals 
                using confidence-weighted algorithms to improve diagnostic accuracy in 
                biomedical applications.
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  In Progress
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Multi-modal
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Real-time
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Research Team</h3>
              <p className="text-sm text-muted-foreground">
                Team Utkarsh - CIM Team 32<br/>
                Collaborative research initiative focused on biomedical signal processing
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://teamutkarsh.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    View Team Portfolio
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Flow Visualization */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-success" />
            Research Development Flow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={containerRef}
            className="relative w-full h-96 bg-gradient-to-br from-background to-muted/20 rounded-lg overflow-hidden"
          >
            <div ref={sceneRef} className="relative w-full h-full" />
          </div>
          
          {/* Research Phase Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(researchData).map(([key, phase]) => {
              const IconComponent = phase.icon;
              return (
                <div key={key} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: phase.color }}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {phase.title}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {phase.description}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{phase.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${phase.progress}%`,
                          backgroundColor: phase.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Signal Processing Demo */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-destructive" />
            Signal Processing Demonstration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 bg-gradient-to-br from-primary/10 to-glow-secondary/10 rounded-lg overflow-hidden p-6">
            <div className="relative h-full flex items-center justify-between">
              {/* Input Signals */}
              <div className="flex flex-col space-y-4">
                <div className="text-sm font-semibold text-muted-foreground">Input Signals</div>
                {Object.entries(signalData).map(([key, signal]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: signal.color,
                        animation: isPlaying ? 'signalPulse 2s infinite ease-in-out' : 'none'
                      }}
                    />
                    <div>
                      <div className="text-sm font-medium text-foreground">{key.toUpperCase()}</div>
                      <div className="text-xs text-muted-foreground">{signal.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Processing Flow */}
              <div className="flex-1 mx-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-glow-secondary transform -translate-y-1/2 rounded-full" />
                
                {/* Moving Data Packets */}
                {isPlaying && [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary"
                    style={{
                      top: '50%',
                      left: `${(i * 25)}%`,
                      transform: 'translateY(-50%)',
                      animation: 'dataStream 4s infinite linear',
                      animationDelay: `${i * 1}s`
                    }}
                  />
                ))}
              </div>

              {/* Output */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-sm font-semibold text-muted-foreground">Fused Output</div>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                    boxShadow: '0 0 30px #8b5cf650',
                    animation: isPlaying ? 'hubRotate 6s infinite linear' : 'none'
                  }}
                >
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">FUSED</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Methodology */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-warning" />
            Research Methodology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Approach</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Multi-modal sensor data acquisition</li>
                <li>• Confidence-weighted fusion algorithms</li>
                <li>• Real-time signal processing</li>
                <li>• Quality assessment and validation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Expected Outcomes</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Improved diagnostic accuracy</li>
                <li>• Real-time processing capabilities</li>
                <li>• Robust noise handling</li>
                <li>• Scalable framework design</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Status */}
      <Card className="industrial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Current Research Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <strong>Note:</strong> This is an ongoing research project. All metrics and results 
              are preliminary and subject to validation. No claims are made about final 
              performance until peer review and publication.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">In Progress</div>
                <div className="text-xs text-muted-foreground">Research Status</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-success">Multi-modal</div>
                <div className="text-xs text-muted-foreground">Signal Types</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-warning">Preliminary</div>
                <div className="text-xs text-muted-foreground">Results</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthenticResearchPlatform;
