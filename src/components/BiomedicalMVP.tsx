import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Brain, 
  Activity, 
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

const BiomedicalMVP: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const clinicalApplications = [
    {
      title: "Cardiovascular Monitoring",
      icon: Heart,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description: "Leading cause of death globally, $3B+ monitoring market",
      features: ["Arrhythmia detection", "Heart failure management", "Remote monitoring"]
    },
    {
      title: "Neurological Diagnostics",
      icon: Brain,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Critical for stroke, epilepsy, cognitive disorders",
      features: ["Stroke prediction", "Epilepsy monitoring", "Cognitive assessment"]
    },
    {
      title: "Neuromuscular Rehabilitation",
      icon: Activity,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "Essential for rehabilitation and movement disorders",
      features: ["Movement analysis", "Muscle function", "Prosthetic control"]
    }
  ];

  const technicalChallenges = [
    { challenge: "Most artifact-prone biosignals", severity: "High", color: "text-red-400" },
    { challenge: "ECG contaminates EMG", severity: "Medium", color: "text-orange-400" },
    { challenge: "EOG corrupts EEG", severity: "High", color: "text-red-400" },
    { challenge: "Motion artifacts affect all", severity: "Critical", color: "text-red-500" }
  ];

  const validatedResults = [
    { metric: "SNR Quality", value: "24.5 dB", improvement: "+15%", color: "text-green-400" },
    { metric: "Artifact Detection", value: "12.3%", improvement: "Automated", color: "text-blue-400" },
    { metric: "Baseline Stability", value: "8.7%", improvement: "Drift compensation", color: "text-purple-400" },
    { metric: "Integration Quality", value: "87%", improvement: "Confidence", color: "text-green-400" }
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
              Biosignal Fusion
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Starting with the most challenging biosignals (ECG, EEG, EMG) as our proof of concept, 
            we demonstrate real-time multi-modal fusion with validated performance metrics.
          </p>
        </motion.div>

        {/* Why ECG + EEG + EMG */}
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
                Why Start with ECG + EEG + EMG?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Clinical Relevance */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-400" />
                    Clinical Relevance
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cardiovascular: Leading cause of death globally</li>
                    <li>• Neurological: Critical for stroke, epilepsy</li>
                    <li>• Neuromuscular: Essential for rehabilitation</li>
                    <li>• $3B+ monitoring market opportunity</li>
                  </ul>
                </div>

                {/* Technical Challenge */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-400" />
                    Technical Challenge
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Most artifact-prone biosignals</li>
                    <li>• Low amplitude, high noise susceptibility</li>
                    <li>• Real-world validation requirements</li>
                    <li>• Sophisticated fusion algorithms needed</li>
                  </ul>
                </div>

                {/* Market Validation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    Market Validation
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 36.36% wearable ECG adoption (2022)</li>
                    <li>• Fastest-growing telehealth segment</li>
                    <li>• 85% of physicians recognize RPM benefits</li>
                    <li>• $88B RPM market by 2035</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Clinical Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {clinicalApplications.map((app, index) => (
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
                Our framework achieves superior performance across all key metrics
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
                  { feature: "Real-time 4-channel streaming", icon: Activity, color: "text-blue-400" },
                  { feature: "Interactive quality metrics", icon: Eye, color: "text-green-400" },
                  { feature: "Noise robustness comparison", icon: Shield, color: "text-purple-400" },
                  { feature: "Performance vs. traditional", icon: BarChart3, color: "text-orange-400" }
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
                View Live Biomedical Demo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BiomedicalMVP;
