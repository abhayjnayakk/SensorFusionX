import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Heart, 
  Brain, 
  Activity,
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
      title: "Sensor Fusion Market",
      value: "$7.6B",
      projection: "$28.2B (2033)",
      cagr: "15.74%",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Remote Patient Monitoring",
      value: "$7.2B",
      projection: "$88B (2035)",
      cagr: "25%",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      title: "Wearable Medical Devices",
      value: "$42.68B",
      projection: "$427B (2034)",
      cagr: "25.9%",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Medical Sensors",
      value: "$3.06B",
      projection: "$4.48B (2030)",
      cagr: "7.9%",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    }
  ];

  const targetApplications = [
    {
      title: "Cardiac Care",
      icon: Heart,
      color: "text-red-400",
      applications: ["Remote monitoring", "Arrhythmia detection", "Heart failure management"],
      market: "$3B+ monitoring market"
    },
    {
      title: "Neurology",
      icon: Brain,
      color: "text-blue-400",
      applications: ["Stroke prediction", "Epilepsy monitoring", "Cognitive assessment"],
      market: "Critical diagnostic tool"
    },
    {
      title: "Rehabilitation",
      icon: Activity,
      color: "text-green-400",
      applications: ["Movement analysis", "Muscle function", "Prosthetic control"],
      market: "Essential for recovery"
    },
    {
      title: "Aging Care",
      icon: Users,
      color: "text-purple-400",
      applications: ["Fall detection", "Chronic disease management", "Activity monitoring"],
      market: "Growing elderly population"
    },
    {
      title: "Hospital Integration",
      icon: Shield,
      color: "text-orange-400",
      applications: ["ICU monitoring", "Post-op care", "Emergency triage"],
      market: "Clinical workflow optimization"
    }
  ];

  const technologyRoadmap = [
    {
      phase: "Phase 1: Biomedical Signals",
      timeline: "2024-2025",
      status: "Current MVP",
      icon: CheckCircle,
      color: "text-green-400",
      description: "ECG + EEG + EMG fusion with real-time processing",
      features: ["Remote cardiac monitoring", "Neurological diagnostics", "Rehabilitation monitoring"]
    },
    {
      phase: "Phase 2: Multi-Modal Clinical",
      timeline: "2025-2026",
      status: "Next Development",
      icon: Rocket,
      color: "text-blue-400",
      description: "Biosignals + Medical Imaging integration",
      features: ["MRI/CT/Ultrasound fusion", "Clinical data integration", "Genomic data fusion"]
    },
    {
      phase: "Phase 3: Healthcare System",
      timeline: "2026-2027",
      status: "Future Vision",
      icon: Globe,
      color: "text-purple-400",
      description: "EHR integration and telehealth connectivity",
      features: ["EHR integration", "Telehealth platforms", "AI decision support"]
    },
    {
      phase: "Phase 4: Population Health",
      timeline: "2027+",
      status: "Long-term Vision",
      icon: Target,
      color: "text-orange-400",
      description: "AI-powered population health platform",
      features: ["Population analytics", "Predictive healthcare", "Global health insights"]
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
            Beyond Biomedical Signals:{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Medical Sensor Fusion Vision
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expanding from our validated biomedical signals MVP to the entire medical sensor domain, 
            unlocking a $600B+ healthcare technology convergence opportunity.
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
                  Total Addressable Market: <span className="text-green-400">$600B+</span>
                </h3>
                <p className="text-muted-foreground">
                  Healthcare technology convergence by 2035
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
                Expanding our framework across the entire medical sensor domain
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
                Strategic expansion from biomedical signals to full medical sensor fusion
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
                Transformative Healthcare Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">20-30%</div>
                  <div className="text-sm text-muted-foreground">Reduction in diagnostic errors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">15-20%</div>
                  <div className="text-sm text-muted-foreground">Reduction in hospital readmissions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Cost reduction vs. in-person care</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Rocket className="h-5 w-5 mr-2" />
                Explore Full Medical Vision
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
