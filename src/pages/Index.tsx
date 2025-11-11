import { Activity, Database, Layers, Eye, Brain, Shield, TrendingUp, Users, Zap, Radio, Server, Cpu, Gauge } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { useSensorSimulation } from "@/hooks/useSensorSimulation";
import { SensorChart } from "@/components/SensorChart";
import { SensorMetrics } from "@/components/SensorMetrics";
import ResearchVisualization from "@/components/ResearchVisualization";
import AdvancedCharts from "@/components/AdvancedCharts";
import DatasetVisualization from "@/components/DatasetVisualization";
import ResearchValidationBento from "@/components/ResearchValidationBento";
import HeroSection from "@/components/HeroSection";
import ProblemSpace from "@/components/ProblemSpace";
import SolutionFramework from "@/components/SolutionFramework";
import AutomotiveMVP from "@/components/AutomotiveMVP";
import AutomotiveMarketContext from "@/components/AutomotiveMarketContext";
import MarketOpportunity from "@/components/MarketOpportunity";

const Index = () => {
  const { buffer: sensorData, metrics: qualityMetrics } = useSensorSimulation();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Space */}
      <ProblemSpace />

      {/* Solution Framework */}
      <SolutionFramework />

      {/* Automotive MVP Section */}
      <AutomotiveMVP />

      {/* Automotive Market Context */}
      <AutomotiveMarketContext />

      {/* Live Demo Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Live{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Automotive Sensor Fusion Demo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time multi-modal sensor fusion for autonomous vehicles with validated performance metrics
            </p>
          </div>

          {/* System Overview - Compact */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                icon={Database}
                title="Sensor Streams"
                value="5"
                unit=""
                status="success"
                description="LiDAR, RADAR, Camera, IMU, GPS"
              />
              <MetricCard
                icon={Zap}
                title="Processing"
                value="100"
                unit="Hz"
                status="success"
                description="Sampling rate"
              />
              <MetricCard
                icon={Shield}
                title="Uptime"
                value="99.9"
                unit="%"
                status="success"
                description="System reliability"
              />
              <MetricCard
                icon={Gauge}
                title="Latency"
                value="10"
                unit="ms"
                status="success"
                description="Perception stack delay"
              />
            </div>
          </div>

          {/* Real-time Sensor Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <SensorChart data={sensorData} />
            <SensorMetrics 
              snrDb={qualityMetrics?.signalToNoiseRatioDb}
              artifactScore={qualityMetrics?.artifactScore}
              driftScore={qualityMetrics?.driftScore}
              fusionConfidence={qualityMetrics?.fusionConfidence}
            />
          </div>

          {/* Research Visualizations */}
          <div className="space-y-8">
            <ResearchVisualization />
            <AdvancedCharts />
            <DatasetVisualization />
            <ResearchValidationBento />
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <MarketOpportunity />

      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Automotive Sensor Fusion Platform</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Enabling autonomous and connected vehicles through intelligent multi-modal sensor fusion. 
              Real-time perception stack with confidence-weighted fusion—validated, reliable, production-ready.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Team Utkarsh</span>
              <span>•</span>
              <span>Autonomous Vehicle Technology</span>
              <span>•</span>
              <span>Connected Vehicle Solutions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;