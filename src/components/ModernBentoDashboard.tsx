import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Brain, 
  Zap, 
  Database, 
  Shield, 
  TrendingUp,
  Users,
  Globe,
  GitBranch,
  Lightbulb,
  Search,
  BookOpen,
  BarChart3,
  LineChart,
  PieChart,
  Target
} from 'lucide-react';
import { useSensorSimulation } from '@/hooks/useSensorSimulation';

// Modern Bento Grid Layout Component
const ModernBentoDashboard: React.FC = () => {
  const { sensorData, qualityMetrics } = useSensorSimulation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback data in case sensorData is undefined
  const safeSensorData = sensorData || {
    ecg: Array.from({ length: 200 }, (_, i) => Math.sin(i * 0.1) * 0.5 + Math.random() * 0.2),
    eeg: Array.from({ length: 200 }, (_, i) => Math.sin(i * 0.15) * 0.3 + Math.random() * 0.1),
    emg: Array.from({ length: 200 }, (_, i) => Math.sin(i * 0.2) * 0.4 + Math.random() * 0.15),
    fused: Array.from({ length: 200 }, (_, i) => Math.sin(i * 0.12) * 0.6 + Math.random() * 0.1)
  };

  const safeQualityMetrics = qualityMetrics || {
    snr: 24.5,
    artifactScore: 12.3,
    driftScore: 8.7,
    fusionQuality: 87.2
  };

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      {/* Header Section */}
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Biomedical Sensor Fusion
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced multi-modal signal processing for real-time biomedical applications
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              Research Platform
            </Badge>
            <Badge variant="outline" className="text-purple-400 border-purple-400">
              Real-time Processing
            </Badge>
            <Badge variant="outline" className="text-pink-400 border-pink-400">
              Multi-modal Fusion
            </Badge>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          
          {/* Large Hero Card - ECG Signal */}
          <Card className={`lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Activity className="h-6 w-6 text-red-400" />
                Real-time ECG Signal
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full flex flex-col justify-center">
              <div className="relative h-32 w-full">
                <svg className="w-full h-full" viewBox="0 0 400 120">
                  <polyline
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    points={safeSensorData.ecg.map((point, index) => `${index * 2},${60 + point * 20}`).join(' ')}
                  />
                </svg>
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-1 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{safeQualityMetrics.snr.toFixed(1)} dB</div>
                  <div className="text-sm text-slate-300">Signal Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">240 Hz</div>
                  <div className="text-sm text-slate-300">Sampling Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EEG Signal Card */}
          <Card className={`bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-purple-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Brain className="h-5 w-5 text-purple-400" />
                EEG Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-20 w-full mb-3">
                <svg className="w-full h-full" viewBox="0 0 200 80">
                  <polyline
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    points={safeSensorData.eeg.map((point, index) => `${index * 4},${40 + point * 15}`).join(' ')}
                  />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{safeQualityMetrics.artifactScore.toFixed(1)}%</div>
                <div className="text-xs text-slate-300">Artifact Score</div>
              </div>
            </CardContent>
          </Card>

          {/* EMG Signal Card */}
          <Card className={`bg-gradient-to-br from-green-500/20 to-teal-600/20 border-green-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Zap className="h-5 w-5 text-green-400" />
                EMG Signal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-20 w-full mb-3">
                <svg className="w-full h-full" viewBox="0 0 200 80">
                  <polyline
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    points={safeSensorData.emg.map((point, index) => `${index * 4},${40 + point * 15}`).join(' ')}
                  />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{safeQualityMetrics.driftScore.toFixed(1)}%</div>
                <div className="text-xs text-slate-300">Drift Score</div>
              </div>
            </CardContent>
          </Card>

          {/* Research Progress Card */}
          <Card className={`lg:col-span-2 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 border-indigo-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Target className="h-6 w-6 text-indigo-400" />
                Research Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Conceptual Design", progress: 25, color: "from-blue-500 to-cyan-500", icon: Lightbulb },
                  { title: "Algorithm Development", progress: 60, color: "from-green-500 to-emerald-500", icon: GitBranch },
                  { title: "Experimental Validation", progress: 40, color: "from-yellow-500 to-orange-500", icon: Search },
                  { title: "Research Publication", progress: 15, color: "from-purple-500 to-pink-500", icon: BookOpen }
                ].map((phase, index) => {
                  const IconComponent = phase.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4 text-slate-300" />
                        <span className="text-sm text-slate-300">{phase.title}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${phase.color} transition-all duration-1000`}
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-400">{phase.progress}%</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Fusion Quality Card */}
          <Card className={`bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-pink-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Shield className="h-5 w-5 text-pink-400" />
                Fusion Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - safeQualityMetrics.fusionQuality / 100)}`}
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{safeQualityMetrics.fusionQuality.toFixed(0)}%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-300">Confidence Score</div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Portfolio Card */}
          <Card className={`lg:col-span-2 bg-gradient-to-br from-slate-500/20 to-gray-600/20 border-slate-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-6 w-6 text-slate-400" />
                Research Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">Team Utkarsh</h3>
                  <p className="text-slate-300 mb-4">CIM Team 32 - Collaborative research initiative</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-blue-400 border-blue-400">Biomedical Engineering</Badge>
                    <Badge variant="outline" className="text-purple-400 border-purple-400">Signal Processing</Badge>
                    <Badge variant="outline" className="text-green-400 border-green-400">Machine Learning</Badge>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                  >
                    <a 
                      href="https://teamutkarsh.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      View Portfolio
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics Card */}
          <Card className={`bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/30 backdrop-blur-sm transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Latency</span>
                  <span className="text-lg font-bold text-white">4.3ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Throughput</span>
                  <span className="text-lg font-bold text-white">240Hz</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Uptime</span>
                  <span className="text-lg font-bold text-white">99.9%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Disclaimer Card */}
          <Card className={`lg:col-span-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.8s' }}>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-amber-400 font-semibold">Research Status</span>
                </div>
                <p className="text-slate-300 max-w-4xl mx-auto">
                  <strong>Note:</strong> This is an ongoing research project. All metrics, progress percentages, and results presented are preliminary and subject to further validation and peer review. No claims are made about final performance until the research is officially published.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernBentoDashboard;
