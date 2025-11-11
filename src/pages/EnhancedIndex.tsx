import React from 'react';
import { Activity, Database, Layers, Eye, Brain, Shield, TrendingUp, Users, Zap, Radio, Server, Cpu, Gauge } from "lucide-react";
import { useSensorSimulation } from "@/hooks/useSensorSimulation";
import EnhancedHeader from "@/components/EnhancedHeader";
import AnimatedMetricCard from "@/components/AnimatedMetricCard";
import EnhancedSensorChart from "@/components/EnhancedSensorChart";
import { SensorMetrics } from "@/components/SensorMetrics";
import AnimatedApplicationsList from "@/components/AnimatedApplicationsList";
import EnhancedResearchBento from "@/components/EnhancedResearchBento";
import ResearchVisualization from "@/components/ResearchVisualization";
import AdvancedCharts from "@/components/AdvancedCharts";
import DatasetVisualization from "@/components/DatasetVisualization";

const EnhancedIndex = () => {
  const { buffer: sensorData, metrics: qualityMetrics } = useSensorSimulation();

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated background accent */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Enhanced Header */}
      <EnhancedHeader isLive={true} systemStatus="operational" />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* System Overview - Enhanced with Animated Cards */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">System Overview</h2>
            <p className="text-sm text-muted-foreground">Real-time biomedical signal processing metrics</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedMetricCard
              icon={Database}
              title="Data Streams"
              value="4"
              status="success"
              description="ECG, EEG, EMG, Fused"
              trend="stable"
              delay={0}
            />
            <AnimatedMetricCard
              icon={Zap}
              title="Processing"
              value="240"
              unit="Hz"
              status="success"
              description="Sampling rate"
              trend="up"
              delay={100}
            />
            <AnimatedMetricCard
              icon={Shield}
              title="Uptime"
              value="99.9"
              unit="%"
              status="success"
              description="System reliability"
              trend="stable"
              delay={200}
            />
            <AnimatedMetricCard
              icon={Gauge}
              title="Latency"
              value="4.3"
              unit="ms"
              status="success"
              description="Processing delay"
              trend="down"
              delay={300}
            />
          </div>
        </section>

        {/* Real-time Sensor Data - Enhanced Chart */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Real-time Sensor Data</h2>
            <p className="text-sm text-muted-foreground">Live biomedical signal monitoring</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <EnhancedSensorChart 
              data={sensorData} 
              title="Live Sensor Signals"
              showTrends={true}
            />
            <SensorMetrics 
              snrDb={qualityMetrics?.signalToNoiseRatioDb}
              artifactScore={qualityMetrics?.artifactScore}
              driftScore={qualityMetrics?.driftScore}
              fusionConfidence={qualityMetrics?.fusionConfidence}
            />
          </div>
        </section>

        {/* Research Visualizations */}
        <section className="space-y-4">
          <ResearchVisualization />
        </section>

        {/* Advanced Charts */}
        <section className="space-y-4">
          <AdvancedCharts />
        </section>

        {/* Dataset Visualizations */}
        <section className="space-y-4">
          <DatasetVisualization />
        </section>

        {/* Enhanced Research Validation Bento */}
        <section className="space-y-4">
          <EnhancedResearchBento />
        </section>

        {/* Enhanced Key Applications */}
        <section className="space-y-4">
          <AnimatedApplicationsList 
            showMetrics={true}
            staggerDelay={0.1}
          />
        </section>
      </main>
    </div>
  );
};

export default EnhancedIndex;
