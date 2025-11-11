import { Activity, Database, Layers, Eye, Brain, Shield, TrendingUp, Users, Zap, Radio, Server, Cpu, Gauge, Camera, Smartphone, MapPin } from "lucide-react";
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
import TechnologyRoadmap from "@/components/MarketOpportunity";

const Index = () => {
  const { buffer: sensorData, metrics: qualityMetrics } = useSensorSimulation();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 1. Automotive Sensor Fusion for Autonomous Vehicles */}
      <HeroSection />

      {/* 2. Live Automotive Sensor Fusion Demo - Largely Visible */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Live{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Automotive Sensor Fusion Demo
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Real-time multi-modal sensor fusion for autonomous vehicles with validated performance metrics.
              Experience the future of autonomous driving perception.
            </p>

            {/* Sensor Control Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Camera className="h-6 w-6" />
                Camera Sensor
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Smartphone className="h-6 w-6" />
                IMU Sensor
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MapPin className="h-6 w-6" />
                GPS Sensor
              </button>
            </div>
          </div>

          {/* System Overview - Enhanced */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                description="Real-time fusion rate"
              />
              <MetricCard
                icon={Shield}
                title="Reliability"
                value="99.9"
                unit="%"
                status="success"
                description="System uptime"
              />
              <MetricCard
                icon={Gauge}
                title="Latency"
                value="4.3"
                unit="ms"
                status="success"
                description="End-to-end delay"
              />
            </div>
          </div>

          {/* Real-time Sensor Data - Large and Prominent */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {/* Main Sensor Chart - Takes 2 columns */}
            <div className="xl:col-span-2">
              <SensorChart data={sensorData} />
            </div>
            {/* Sensor Metrics - Takes 1 column */}
            <div className="xl:col-span-1">
              <SensorMetrics
                snrDb={qualityMetrics?.signalToNoiseRatioDb}
                artifactScore={qualityMetrics?.artifactScore}
                driftScore={qualityMetrics?.driftScore}
                fusionConfidence={qualityMetrics?.fusionConfidence}
              />
            </div>
          </div>

          {/* Research Visualizations - Automotive Focused */}
          <div className="space-y-12">
            <ResearchVisualization />
            <AdvancedCharts />
            <DatasetVisualization />
            <ResearchValidationBento />
          </div>
        </div>
      </section>

      {/* 3. Intelligent Multi-Modal Sensor Fusion Framework */}
      <SolutionFramework />

      {/* 4. Multi-Modal Automotive Sensor Fusion */}
      <AutomotiveMVP />

      {/* 5. Technology Roadmap */}
      <TechnologyRoadmap />

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