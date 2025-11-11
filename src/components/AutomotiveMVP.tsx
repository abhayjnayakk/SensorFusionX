import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Radio, 
  Radar, 
  Camera, 
  Navigation, 
  MapPin,
  Zap, 
  CheckCircle,
  Play,
  BarChart3,
  TrendingUp,
  Shield,
  Target,
  ArrowRight,
  Eye,
  Layers
} from 'lucide-react';

const AutomotiveMVP: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const automotiveApplications = [
    {
      title: "Object Detection & Tracking",
      icon: Radar,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Critical for ADAS and autonomous driving, $3.3B market by 2030",
      features: ["Pedestrian detection", "Vehicle tracking", "Obstacle avoidance"]
    },
    {
      title: "Perception & Scene Understanding",
      icon: Camera,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "Essential for L3-L5 autonomous vehicles",
      features: ["Lane detection", "Traffic sign recognition", "3D scene reconstruction"]
    },
    {
      title: "Navigation & Localization",
      icon: MapPin,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Real-time positioning for connected vehicles",
      features: ["GPS fusion", "Dead reckoning", "Map matching"]
    }
  ];

  const technicalChallenges = [
    { challenge: "Sensor occlusion & multipath", severity: "High", color: "text-red-400" },
    { challenge: "Weather conditions affect cameras", severity: "Medium", color: "text-orange-400" },
    { challenge: "LiDAR range limitations", severity: "High", color: "text-red-400" },
    { challenge: "Real-time processing requirements", severity: "Critical", color: "text-red-500" }
  ];

  const validatedResults = [
    { metric: "SNR Quality", value: "24.5 dB", improvement: "+15%", color: "text-green-400" },
    { metric: "Occlusion Detection", value: "95%", improvement: "Automated", color: "text-blue-400" },
    { metric: "Fusion Confidence", value: "87%", improvement: "Real-time", color: "text-purple-400" },
    { metric: "Latency", value: "10ms", improvement: "&lt; 10ms target", color: "text-green-400" }
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
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary/30 text-primary">
            Proof of Concept
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Multi-Modal{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Automotive Sensor Fusion
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Starting with the most critical sensors (LiDAR, RADAR, Camera, IMU, GPS) as our proof of concept, 
            we demonstrate real-time multi-modal fusion with validated performance metrics for autonomous vehicles.
          </p>
        </motion.div>

        {/* Why LiDAR + RADAR + Camera + IMU + GPS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <Target className="h-6 w-6 text-primary" />
                Why Start with LiDAR + RADAR + Camera + IMU + GPS?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Automotive Relevance */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Radio className="h-5 w-5 text-blue-400" />
                    Automotive Relevance
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ADAS: Essential for Level 2-3 systems</li>
                    <li>• Autonomous: Critical for Level 4-5 vehicles</li>
                    <li>• Perception: Core of perception stack</li>
                    <li>• $3.3B market by 2030 (42.4% CAGR)</li>
                  </ul>
                </div>

                {/* Technical Challenge */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-400" />
                    Technical Challenge
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sensor occlusions and multipath</li>
                    <li>• Weather degradation (camera/radar)</li>
                    <li>• Real-time &lt; 10ms latency requirement</li>
                    <li>• ISO 26262 functional safety (ASIL-D)</li>
                  </ul>
                </div>

                {/* Market Validation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    Market Validation
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 42.4% CAGR automotive sensor fusion</li>
                    <li>• Fastest-growing ADAS segment</li>
                    <li>• Major OEMs investing in fusion</li>
                    <li>• Software-Defined Vehicle (SDV) trend</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Automotive Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {automotiveApplications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className={`h-full ${app.bgColor} ${app.borderColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${app.bgColor} border ${app.borderColor}`}>
                      <app.icon className={`h-6 w-6 ${app.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {app.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    {app.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">Key Applications</h4>
                    {app.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-orange-500/5 to-red-500/5 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <Shield className="h-6 w-6 text-orange-400" />
                Technical Challenges We Solve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {technicalChallenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.challenge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="text-center p-4 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="text-sm text-muted-foreground mb-2">{challenge.challenge}</div>
                    <div className={`text-lg font-bold ${challenge.color} mb-1`}>
                      {challenge.severity}
                    </div>
                    <div className="text-xs text-muted-foreground">Complexity</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Validated Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <BarChart3 className="h-6 w-6 text-green-400" />
                Validated Results
              </CardTitle>
              <p className="text-muted-foreground">
                Our framework achieves superior performance across all key metrics for autonomous vehicles
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {validatedResults.map((result, index) => (
                  <motion.div
                    key={result.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="text-center p-6 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="text-sm text-muted-foreground mb-2">{result.metric}</div>
                    <div className={`text-3xl font-bold ${result.color} mb-2`}>
                      {result.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{result.improvement}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Live Demo Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-foreground">
                <Play className="h-6 w-6 text-primary" />
                Live Demo Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { feature: "Real-time 5-sensor streaming", icon: Radio, color: "text-blue-400" },
                  { feature: "Interactive quality metrics", icon: Eye, color: "text-green-400" },
                  { feature: "Occlusion & multipath detection", icon: Shield, color: "text-purple-400" },
                  { feature: "Performance vs. baseline", icon: BarChart3, color: "text-orange-400" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-background/50 rounded-lg"
                  >
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    <span className="text-sm text-foreground">{feature.feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Play className="h-5 w-5 mr-2" />
                View Live Automotive Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AutomotiveMVP;

