import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Layers, 
  Zap, 
  Shield, 
  Brain, 
  Activity, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Database,
  Cpu,
  Target
} from 'lucide-react';

const SolutionFramework: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const layers = [
    {
      title: "Real-Time Signal Processing",
      icon: Activity,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      features: [
        "Advanced noise reduction and artifact removal",
        "Adaptive filtering preserves clinical features",
        "Continuous quality assessment (SNR, drift, artifacts)",
        "240 Hz sampling rate for high-fidelity capture"
      ],
      metrics: [
        { label: "SNR Quality", value: "24.5 dB", color: "text-green-400" },
        { label: "Artifact Detection", value: "12.3%", color: "text-blue-400" },
        { label: "Drift Compensation", value: "8.7%", color: "text-purple-400" }
      ]
    },
    {
      title: "Cross-Modal Feature Fusion",
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      features: [
        "Attention-based modality alignment",
        "Graph-based representation learning",
        "Adaptive fusion weights based on signal quality",
        "Handles missing or degraded modalities"
      ],
      metrics: [
        { label: "Fusion Confidence", value: "87%", color: "text-green-400" },
        { label: "Modality Alignment", value: "94%", color: "text-purple-400" },
        { label: "Missing Data Handling", value: "91%", color: "text-blue-400" }
      ]
    },
    {
      title: "Confidence-Weighted Decision Support",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      features: [
        "87% fusion confidence under realistic noise",
        "Interpretable diagnostic recommendations",
        "Uncertainty quantification for clinical trust",
        "Real-time performance (4.3ms latency)"
      ],
      metrics: [
        { label: "Processing Latency", value: "4.3ms", color: "text-green-400" },
        { label: "System Uptime", value: "99.9%", color: "text-blue-400" },
        { label: "Clinical Accuracy", value: "87.2%", color: "text-purple-400" }
      ]
    }
  ];

  const performanceComparison = [
    { method: "Simple Concatenation", accuracy: 68.3, latency: 3.1, robustness: 52.4, color: "text-red-400" },
    { method: "Kalman Filter", accuracy: 74.6, latency: 5.8, robustness: 63.7, color: "text-orange-400" },
    { method: "Deep Learning", accuracy: 82.1, latency: 12.4, robustness: 71.3, color: "text-blue-400" },
    { method: "Our Framework", accuracy: 87.2, latency: 4.3, robustness: 87.0, color: "text-green-400", highlight: true }
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
            Our Solution
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligent Multi-Modal{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Sensor Fusion Framework
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-layer architecture that transforms noisy biosignals into confident clinical insights 
            through real-time processing, cross-modal fusion, and confidence-weighted decision support.
          </p>
        </motion.div>

        {/* Three-Layer Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className={`h-full ${layer.bgColor} ${layer.borderColor} border-2 hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${layer.bgColor} border ${layer.borderColor}`}>
                      <layer.icon className={`h-6 w-6 ${layer.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {layer.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {layer.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Performance Metrics</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {layer.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + metricIndex * 0.05 }}
                          className="flex justify-between items-center p-3 bg-background/50 rounded-lg"
                        >
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <span className={`text-lg font-bold ${metric.color}`}>
                            {metric.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Validation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <BarChart3 className="h-6 w-6 text-green-400" />
                Performance Validation
              </CardTitle>
              <p className="text-muted-foreground">
                Our framework outperforms traditional methods across all key metrics
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Method</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">Accuracy</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">Latency</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">Noise Robustness</th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceComparison.map((method, index) => (
                      <motion.tr
                        key={method.method}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className={`border-b border-border/30 ${method.highlight ? 'bg-green-500/10' : ''}`}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {method.highlight && <Badge className="bg-green-500 text-white">Best</Badge>}
                            <span className="font-medium text-foreground">{method.method}</span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4">
                          <span className={`text-lg font-bold ${method.color}`}>
                            {method.accuracy}%
                          </span>
                        </td>
                        <td className="text-center py-4 px-4">
                          <span className={`text-lg font-bold ${method.color}`}>
                            {method.latency}ms
                          </span>
                        </td>
                        <td className="text-center py-4 px-4">
                          <span className={`text-lg font-bold ${method.color}`}>
                            {method.robustness}%
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: CheckCircle, title: "23.4% Improvement", subtitle: "vs. baseline methods", color: "text-green-400" },
            { icon: Zap, title: "Real-time Processing", subtitle: "4.3ms latency", color: "text-blue-400" },
            { icon: Shield, title: "Robust Performance", subtitle: "Under 20dB noise", color: "text-purple-400" },
            { icon: Database, title: "Public Validation", subtitle: "PhysioNet, EEG datasets", color: "text-orange-400" }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="text-center p-6 bg-background/50 rounded-lg border border-border/50"
            >
              <div className={`w-12 h-12 ${benefit.color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionFramework;
