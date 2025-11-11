import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Car,
  Radio,
  Radar,
  Camera,
  Navigation,
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  Zap,
  Shield,
  CheckCircle,
  Calendar,
  Rocket
} from 'lucide-react';

const MarketOpportunity: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const marketSegments = [
    {
      title: "Automotive Sensor Fusion",
      value: "$0.3B",
      projection: "$3.3B (2030)",
      cagr: "42.4%",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "ADAS Systems",
      value: "$25B",
      projection: "$65B (2030)",
      cagr: "18.2%",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Autonomous Vehicles",
      value: "$12B",
      projection: "$185B (2030)",
      cagr: "32.5%",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Global Sensor Fusion",
      value: "$8.5B",
      projection: "$25.5B (2032)",
      cagr: "14.06%",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    }
  ];

  const targetApplications = [
    {
      title: "Object Detection",
      icon: Radar,
      color: "text-blue-400",
      applications: ["Pedestrian detection", "Vehicle tracking", "Obstacle avoidance"],
      market: "$3.3B market by 2030"
    },
    {
      title: "Perception Stack",
      icon: Camera,
      color: "text-green-400",
      applications: ["Lane detection", "Traffic sign recognition", "3D scene reconstruction"],
      market: "Core ADAS/AD technology"
    },
    {
      title: "Navigation",
      icon: Navigation,
      color: "text-purple-400",
      applications: ["GPS fusion", "Dead reckoning", "Map matching"],
      market: "Connected vehicle essential"
    },
    {
      title: "Safety Systems",
      icon: Shield,
      color: "text-orange-400",
      applications: ["AEB (Automatic Emergency Braking)", "ACC (Adaptive Cruise Control)", "LKA (Lane Keep Assist)"],
      market: "ISO 26262 ASIL-D required"
    },
    {
      title: "Autonomous Driving",
      icon: Car,
      color: "text-red-400",
      applications: ["Level 4-5 autonomy", "Robotaxi deployment", "Commercial AV"],
      market: "12M vehicles by 2030"
    }
  ];

  const technologyRoadmap = [
    {
      phase: "Phase 1: Sensor Fusion MVP",
      timeline: "2024-2025",
      status: "Current MVP",
      icon: CheckCircle,
      color: "text-green-400",
      description: "LiDAR + RADAR + Camera + IMU + GPS fusion for ADAS systems",
      features: ["ISO 26262 compliance", "High-level fusion architecture", "Real-time &lt; 10ms latency"]
    },
    {
      phase: "Phase 2: Perception Stack",
      timeline: "2025-2026",
      status: "Next Development",
      icon: Rocket,
      color: "text-blue-400",
      description: "Full perception pipeline with AI-driven fusion",
      features: ["Object detection", "Scene understanding", "Tier 1 integration"]
    },
    {
      phase: "Phase 3: Autonomous Vehicle",
      timeline: "2026-2027",
      status: "Future Vision",
      icon: Globe,
      color: "text-purple-400",
      description: "Level 4-5 autonomous vehicle deployment",
      features: ["OEM partnerships", "Robotaxi integration", "Commercial AV"]
    },
    {
      phase: "Phase 4: Software-Defined Vehicle",
      timeline: "2027+",
      status: "Long-term Vision",
      icon: Target,
      color: "text-orange-400",
      description: "Platform for Software-Defined Vehicle transformation",
      features: ["Global OEM adoption", "SDV ecosystem", "Connected vehicle platform"]
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-muted/20 to-background"
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
            Market Opportunity
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automotive Sensor Fusion Market Leadership:{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              42.4% CAGR Growth Opportunity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The automotive sensor fusion market growing from $0.3B (2023) to $3.3B by 2030, driven by ADAS adoption, 
            autonomous vehicle development, and Software-Defined Vehicle (SDV) transformation.
          </p>
        </motion.div>

        {/* Market Size Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <DollarSign className="h-6 w-6 text-primary" />
                Total Addressable Market
              </CardTitle>
              <p className="text-muted-foreground">
                Healthcare technology convergence creates massive market opportunity
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketSegments.map((segment, index) => (
                  <motion.div
                    key={segment.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`p-6 rounded-lg border-2 ${segment.bgColor} ${segment.borderColor}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">{segment.title}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Current</span>
                        <span className={`text-2xl font-bold ${segment.color}`}>
                          {segment.value}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Projection</span>
                        <span className="text-lg font-semibold text-foreground">
                          {segment.projection}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">CAGR</span>
                        <span className="text-sm font-medium text-green-400">
                          {segment.cagr}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 text-center p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Automotive TAM: <span className="text-green-400">$3.3B</span> | Global Sensor Fusion TAM: <span className="text-blue-400">$25.5B+</span>
                </h3>
                <p className="text-muted-foreground">
                  Automotive sensor fusion leadership with 42.4% CAGR growth
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Target Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <Target className="h-6 w-6 text-purple-400" />
                Target Applications
              </CardTitle>
              <p className="text-muted-foreground">
                Expanding our framework across the entire automotive sensor domain
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {targetApplications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className={`w-12 h-12 ${app.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <app.icon className={`h-6 w-6 ${app.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{app.title}</h3>
                    <div className="space-y-2 mb-4">
                      {app.applications.map((application, appIndex) => (
                        <div key={application} className="text-xs text-muted-foreground">
                          • {application}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">{app.market}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <Calendar className="h-6 w-6 text-blue-400" />
                Technology Roadmap
              </CardTitle>
              <p className="text-muted-foreground">
                Strategic expansion from ADAS sensor fusion to full autonomous vehicle platform
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {technologyRoadmap.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-6 p-6 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className={`w-12 h-12 ${phase.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <phase.icon className={`h-6 w-6 ${phase.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{phase.phase}</h3>
                        <Badge variant="outline" className="text-xs">
                          {phase.timeline}
                        </Badge>
                        <Badge className={`text-xs ${phase.color.replace('text-', 'bg-').replace('-400', '-500')} text-white`}>
                          {phase.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {phase.features.map((feature, featureIndex) => (
                          <div key={feature} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardHeader>
                <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-foreground">
                <TrendingUp className="h-6 w-6 text-green-400" />
                Transformative Automotive Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">$0.3B → $3.3B</div>
                  <div className="text-sm text-muted-foreground">Market growth by 2030</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">42.4%</div>
                  <div className="text-sm text-muted-foreground">CAGR (2023-2030)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">115M</div>
                  <div className="text-sm text-muted-foreground">Connected vehicles by 2025</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Rocket className="h-5 w-5 mr-2" />
                Explore Full Automotive Vision
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketOpportunity;
