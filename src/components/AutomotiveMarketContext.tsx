import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Users, 
  Car, 
  Navigation, 
  Radio,
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  Zap,
  Shield,
  CheckCircle,
  Calendar,
  Rocket,
  MapPin,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const AutomotiveMarketContext: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const marketInitiatives = [
    {
      title: "Software-Defined Vehicle (SDV)",
      icon: Car,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Industry shift - Software as the core brain of vehicles",
      features: ["OEMs want to own IP", "Control critical software", "Manage value chain"],
      impact: "Reshaping automotive software market"
    },
    {
      title: "ISO 26262 Functional Safety",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "ASIL-D compliance required for ADAS/AD systems",
      features: ["Systemic redundancy", "Freedom from interference", "Toolchain qualification"],
      impact: "Critical barrier to market entry"
    },
    {
      title: "ADAS Market Growth",
      icon: Target,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "42.4% CAGR - $0.3B to $3.3B by 2030",
      features: ["Level 2-3 ADAS adoption", "Level 4-5 autonomous development", "Perception stack demand"],
      impact: "Fastest-growing automotive segment"
    }
  ];

  const regionalMarkets = [
    { region: "North America", marketSize: "$1.2B", growth: "45%", color: "text-green-500" },
    { region: "Europe", marketSize: "$0.9B", growth: "38%", color: "text-blue-400" },
    { region: "Asia-Pacific", marketSize: "$1.1B", growth: "48%", color: "text-orange-400" },
    { region: "Rest of World", marketSize: "$0.1B", growth: "35%", color: "text-purple-400" }
  ];

  const marketOpportunities = [
    {
      title: "Autonomous Vehicle Development",
      icon: Car,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      stats: [
        { label: "Level 4-5 Vehicles", value: "12M", subtitle: "by 2030 globally" },
        { label: "ADAS Vehicles", value: "115M", subtitle: "connected vehicles by 2025" },
        { label: "Market Growth", value: "42.4%", subtitle: "CAGR 2023-2030" }
      ],
      description: "Sensor fusion enables Level 2-5 autonomous capabilities"
    },
    {
      title: "Perception Stack Demand",
      icon: Radio,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      stats: [
        { label: "Market Size", value: "$3.3B", subtitle: "by 2030" },
        { label: "Sensor Fusion Accuracy", value: "95%+", subtitle: "object detection target" },
        { label: "Fusion Confidence", value: "87%", subtitle: "under real-world conditions" }
      ],
      description: "Real-time perception with &lt; 10ms latency requirement"
    },
    {
      title: "Connected Vehicle Ecosystem",
      icon: Globe,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: [
        { label: "Connected Vehicles", value: "115M", subtitle: "globally by 2025" },
        { label: "V2X Infrastructure", value: "$50B", subtitle: "investment planned" },
        { label: "5G Automotive", value: "85%", subtitle: "of new vehicles by 2030" }
      ],
      description: "Multi-sensor fusion for connected vehicle safety"
    }
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
            🚗 Automotive Market Context
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automotive Sensor Fusion Market:{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              42.4% CAGR Growth Opportunity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The automotive sensor fusion market growing from $0.3B (2023) to $3.3B by 2030, 
            driven by ADAS adoption, autonomous vehicle development, and Software-Defined Vehicle (SDV) trends.
          </p>
        </motion.div>

        {/* Market Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/5 to-green-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <Building2 className="h-6 w-6 text-blue-400" />
                Key Market Drivers & Industry Trends
              </CardTitle>
              <p className="text-muted-foreground">
                Automotive industry transformation with sensor fusion as core technology
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {marketInitiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`p-6 rounded-lg border-2 ${initiative.bgColor} ${initiative.borderColor}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${initiative.bgColor} border ${initiative.borderColor}`}>
                        <initiative.icon className={`h-6 w-6 ${initiative.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{initiative.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{initiative.description}</p>
                    <div className="space-y-2 mb-4">
                      {initiative.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-medium text-primary">{initiative.impact}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Regional Markets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <BarChart3 className="h-6 w-6 text-green-400" />
                Regional Market Growth (2030 Forecast)
              </CardTitle>
              <p className="text-muted-foreground">
                Automotive sensor fusion market growth varies significantly across regions
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {regionalMarkets.map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="text-lg font-semibold text-foreground mb-2">{region.region}</div>
                    <div className={`text-3xl font-bold ${region.color} mb-2`}>
                      {region.marketSize}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Market Size (2030)</div>
                    <div className="text-xs text-green-400 font-medium">{region.growth} CAGR</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Market Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <TrendingUp className="h-6 w-6 text-green-400" />
                Automotive Sensor Fusion Market Opportunities
              </CardTitle>
              <p className="text-muted-foreground">
                Massive growth potential in autonomous vehicles and ADAS systems
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {marketOpportunities.map((opportunity, index) => (
                  <motion.div
                    key={opportunity.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className={`p-6 rounded-lg border-2 ${opportunity.bgColor} ${opportunity.borderColor}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${opportunity.bgColor} border ${opportunity.borderColor}`}>
                        <opportunity.icon className={`h-6 w-6 ${opportunity.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{opportunity.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                    <div className="space-y-3">
                      {opportunity.stats.map((stat, statIndex) => (
                        <div key={stat.label} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <div className="text-right">
                            <div className={`text-lg font-bold ${opportunity.color}`}>
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {stat.subtitle}
                            </div>
                          </div>
                        </div>
                      ))}
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
          <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-foreground">
                <Rocket className="h-6 w-6 text-primary" />
                Automotive Sensor Fusion Transformation Vision
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
                <Globe className="h-5 w-5 mr-2" />
                Explore Automotive Sensor Fusion Leadership
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AutomotiveMarketContext;

