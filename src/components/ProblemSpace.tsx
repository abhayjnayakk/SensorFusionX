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
  Heart,
  Brain,
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
      title: "Diagnostic Errors Cost Lives",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      stats: [
        { label: "Annual Deaths", value: "40,000-80,000", subtitle: "preventable in U.S. hospitals" },
        { label: "Error Rate", value: "23%", subtitle: "of hospitalized patients" },
        { label: "Malpractice Claims", value: "75%", subtitle: "of radiology claims" }
      ],
      description: "Single-modality systems miss critical patterns, leading to misdiagnosis and patient harm."
    },
    {
      title: "Biosignal Quality Challenges",
      icon: Activity,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      stats: [
        { label: "Signal Amplitude", value: "50-100 µV", subtitle: "EEG signals" },
        { label: "Noise Ratio", value: "10x", subtitle: "larger than target signals" },
        { label: "Artifact Impact", value: "92%", subtitle: "SNR improvement needed" }
      ],
      description: "Low-amplitude signals easily corrupted by motion artifacts and environmental noise."
    },
    {
      title: "Integration Complexity",
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      stats: [
        { label: "Data Volume", value: "2.5 exabytes", subtitle: "generated daily" },
        { label: "Missing Modalities", value: "40%", subtitle: "of research cases" },
        { label: "Integration Gap", value: "20-30%", subtitle: "accuracy improvement possible" }
      ],
      description: "Heterogeneous data sources from wearables, imaging, and clinical records are difficult to integrate."
    }
  ];

  const diseaseStats = [
    { condition: "Myocardial Infarction", errorRate: "1.5%", severity: "Low", color: "text-green-400" },
    { condition: "Stroke (Typical)", errorRate: "17%", severity: "Medium", color: "text-yellow-400" },
    { condition: "Stroke (Atypical)", errorRate: "40%", severity: "High", color: "text-red-400" },
    { condition: "Spinal Abscess", errorRate: "56-75%", severity: "Critical", color: "text-red-500" }
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
            Critical Healthcare Challenge
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Medical Sensor Fusion is{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Critical
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Healthcare systems struggle to transform massive sensor data into reliable clinical insights. 
            Single-modality limitations, signal quality issues, and integration complexity create critical gaps in patient care.
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
                Disease-Specific Diagnostic Error Rates
              </CardTitle>
              <p className="text-muted-foreground">
                Diagnostic accuracy varies dramatically across conditions, with some diseases having error rates exceeding 50%
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {diseaseStats.map((disease, index) => (
                  <motion.div
                    key={disease.condition}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="text-center p-4 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="text-sm text-muted-foreground mb-2">{disease.condition}</div>
                    <div className={`text-2xl font-bold ${disease.color} mb-1`}>
                      {disease.errorRate}
                    </div>
                    <div className="text-xs text-muted-foreground">{disease.severity} Risk</div>
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
                    <Brain className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cognitive Errors</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">65%</div>
                  <p className="text-sm text-muted-foreground">
                    Anchoring bias, premature closure, confirmation bias
                  </p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Systemic Issues</h3>
                  <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                  <p className="text-sm text-muted-foreground">
                    Communication breakdowns, time pressures, lack of follow-up
                  </p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Signal Quality</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">Critical</div>
                  <p className="text-sm text-muted-foreground">
                    Single-modality limitations, artifacts, noise contamination
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
