import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
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
  Rocket,
  MapPin,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const IndiaHealthcareContext: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const governmentInitiatives = [
    {
      title: "National Digital Health Mission (NDHM)",
      icon: Building2,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Launched 2021 - Digital health ecosystem for 1.4B people",
      features: ["Health ID for every citizen", "Digital health records", "Telemedicine integration"],
      impact: "Connecting rural patients to specialists"
    },
    {
      title: "Ayushman Bharat Digital Mission",
      icon: Heart,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "Digital health infrastructure for universal healthcare",
      features: ["PM-JAY integration", "Health facility registry", "Provider registry"],
      impact: "500M+ beneficiaries covered"
    },
    {
      title: "PLI Scheme - Medical Devices",
      icon: Target,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "₹500 crore investment in medical device manufacturing",
      features: ["13 new manufacturing plants", "27 bulk drug parks", "Make in India"],
      impact: "Reducing import dependence by 60%"
    }
  ];

  const regionalChallenges = [
    { state: "Punjab", errorRate: "24%", population: "30M", color: "text-red-500" },
    { state: "West Bengal", errorRate: "17%", population: "100M", color: "text-orange-400" },
    { state: "Maharashtra", errorRate: "16%", population: "120M", color: "text-yellow-400" },
    { state: "Tamil Nadu", errorRate: "11%", population: "80M", color: "text-green-400" }
  ];

  const marketOpportunities = [
    {
      title: "Rural Healthcare Access",
      icon: MapPin,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      stats: [
        { label: "Rural Population", value: "65%", subtitle: "of India's 1.4B people" },
        { label: "Urban Doctors", value: "70%", subtitle: "doctors in cities only" },
        { label: "Healthcare Gap", value: "35%", subtitle: "rural areas lack facilities" }
      ],
      description: "Sensor fusion enables specialist access for 65% rural population"
    },
    {
      title: "Chronic Disease Management",
      icon: Heart,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      stats: [
        { label: "Diabetes Cases", value: "77M", subtitle: "highest globally" },
        { label: "CVD Deaths", value: "1.7M", subtitle: "annually" },
        { label: "COPD Cases", value: "55M", subtitle: "growing burden" }
      ],
      description: "Continuous monitoring reduces catastrophic healthcare expenditure"
    },
    {
      title: "Digital Health Infrastructure",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      stats: [
        { label: "Internet Users", value: "820M", subtitle: "world's largest" },
        { label: "Data Costs", value: "$0.26", subtitle: "per GB (lowest globally)" },
        { label: "Smartphone Penetration", value: "75%", subtitle: "rural areas" }
      ],
      description: "World's lowest data costs enable affordable remote monitoring"
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
            🇮🇳 India Healthcare Context
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            India's Healthcare Crisis:{' '}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Government Initiatives & Market Opportunity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's healthcare technology market growing from $3.8B to $15.3B by 2030, 
            supported by government initiatives and addressing critical healthcare gaps.
          </p>
        </motion.div>

        {/* Government Initiatives */}
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
                Government Initiatives Supporting Growth
              </CardTitle>
              <p className="text-muted-foreground">
                India's digital health transformation with government backing and investment
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {governmentInitiatives.map((initiative, index) => (
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

        {/* Regional Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-red-500/5 to-orange-500/5 border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
                <BarChart3 className="h-6 w-6 text-red-400" />
                Regional Medical Error Rates in India
              </CardTitle>
              <p className="text-muted-foreground">
                Medical negligence varies significantly across Indian states
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {regionalChallenges.map((region, index) => (
                  <motion.div
                    key={region.state}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 bg-background/50 rounded-lg border border-border/50"
                  >
                    <div className="text-lg font-semibold text-foreground mb-2">{region.state}</div>
                    <div className={`text-3xl font-bold ${region.color} mb-2`}>
                      {region.errorRate}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">Medical Negligence Rate</div>
                    <div className="text-xs text-muted-foreground">{region.population} population</div>
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
                India's Healthcare Market Opportunities
              </CardTitle>
              <p className="text-muted-foreground">
                Massive untapped potential in rural healthcare and chronic disease management
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
                India's Healthcare Transformation Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">5.2M → 1.5M</div>
                  <div className="text-sm text-muted-foreground">Annual medical errors reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">65%</div>
                  <div className="text-sm text-muted-foreground">Rural population with specialist access</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$15.3B</div>
                  <div className="text-sm text-muted-foreground">India healthcare tech market by 2030</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Globe className="h-5 w-5 mr-2" />
                India's Global Healthcare Leadership
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IndiaHealthcareContext;
