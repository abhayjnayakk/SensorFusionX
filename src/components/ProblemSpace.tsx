import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  Activity, 
  Database, 
  Users, 
  TrendingDown,
  Car,
  Radio,
  Radar,
  Camera,
  Zap,
  Shield,
  BarChart3,
  Target,
  XCircle
} from 'lucide-react';

const ProblemSpace: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const problems = [
    {
      title: "Sensor Occlusion & Multipath",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      stats: [
        { label: "LiDAR Occlusions", value: "40%", subtitle: "in urban environments" },
        { label: "RADAR Multipath", value: "30%", subtitle: "false detections" },
        { label: "Camera Failures", value: "25%", subtitle: "in adverse weather" }
      ],
      description: "Individual sensors fail in critical scenarios—occlusions block LiDAR, multipath corrupts RADAR, weather degrades cameras."
    },
    {
      title: "Real-Time Processing Requirements",
      icon: Zap,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      stats: [
        { label: "Latency Target", value: "&lt; 10ms", subtitle: "for perception stack" },
        { label: "Processing Rate", value: "100 Hz", subtitle: "sensor sampling rate" },
        { label: "Compute Budget", value: "Tight", subtitle: "edge processing only" }
      ],
      description: "Autonomous vehicles require sub-10ms latency for perception decisions—any delay compromises safety."
    },
    {
      title: "Functional Safety Compliance",
      icon: Shield,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      stats: [
        { label: "ISO 26262 ASIL-D", value: "Required", subtitle: "for ADAS/AD systems" },
        { label: "Certification Cost", value: "$5M+", subtitle: "per platform" },
        { label: "Time to Market", value: "2-3 years", subtitle: "validation cycle" }
      ],
      description: "ISO 26262 functional safety (ASIL-D) requires extensive validation, redundancy, and toolchain qualification—critical barrier to market."
    }
  ];

  const sensorFailureStats = [
    { condition: "LiDAR Occlusions", errorRate: "40%", severity: "High", color: "text-red-500" },
    { condition: "Camera Weather Failures", errorRate: "25%", severity: "High", color: "text-red-400" },
    { condition: "RADAR Multipath", errorRate: "30%", severity: "Medium", color: "text-yellow-400" },
    { condition: "GPS Signal Loss", errorRate: "15%", severity: "Medium", color: "text-orange-400" }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-muted/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-red-500/30 text-red-400">
            Critical Automotive Challenge
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automotive Perception Challenges:{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Sensor Occlusion & Real-Time Requirements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Individual sensors fail in critical scenarios—occlusions block LiDAR, multipath corrupts RADAR, weather degrades cameras. 
            Autonomous vehicles require sub-10ms latency with ISO 26262 ASIL-D compliance. Our sensor fusion technology overcomes these critical challenges.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className={`h-full ${problem.bgColor} ${problem.borderColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${problem.bgColor} border ${problem.borderColor}`}>
                      <problem.icon className={`h-6 w-6 ${problem.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {problem.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {problem.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + statIndex * 0.1 }}
                        className="flex justify-between items-center p-3 bg-background/50 rounded-lg"
                      >
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${problem.color}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.subtitle}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Disease-Specific Error Rates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <Target className="h-6 w-6 text-red-400" />
                Sensor-Specific Failure Rates
              </CardTitle>
              <p className="text-muted-foreground">
                Individual sensor failure rates vary significantly, with some scenarios causing 40%+ occlusion rates
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sensorFailureStats.map((sensor, index) => (
                  <motion.div
                    key={sensor.condition}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="text-center p-4 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="text-sm text-muted-foreground mb-2">{sensor.condition}</div>
                    <div className={`text-2xl font-bold ${sensor.color} mb-1`}>
                      {sensor.errorRate}
                    </div>
                    <div className="text-xs text-muted-foreground">{sensor.severity} Risk</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Root Causes Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                Root Causes Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Radar className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Sensor Occlusions</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">40%</div>
                  <p className="text-sm text-muted-foreground">
                    LiDAR blocked, camera degraded, RADAR multipath
                  </p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Latency Requirements</h3>
                  <div className="text-3xl font-bold text-orange-400 mb-2">&lt; 10ms</div>
                  <p className="text-sm text-muted-foreground">
                    Real-time processing, edge compute, safety-critical timing
                  </p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functional Safety</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">ASIL-D</div>
                  <p className="text-sm text-muted-foreground">
                    ISO 26262 compliance, redundancy, toolchain qualification
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProblemSpace;
