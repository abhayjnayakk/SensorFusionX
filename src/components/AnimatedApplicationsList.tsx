import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, Layers, Shield, Zap, Database, TrendingUp, Users } from 'lucide-react';

interface Application {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  status: 'active' | 'development' | 'planned';
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface AnimatedApplicationsListProps {
  applications?: Application[];
  showMetrics?: boolean;
  staggerDelay?: number;
}

const AnimatedApplicationsList: React.FC<AnimatedApplicationsListProps> = ({
  applications = [],
  showMetrics = true,
  staggerDelay = 0.1
}) => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  const defaultApplications: Application[] = [
    {
      id: 'clinical-monitoring',
      title: 'Clinical Monitoring',
      description: 'Real-time patient monitoring with multi-modal sensor fusion for enhanced diagnostic accuracy.',
      icon: Brain,
      color: 'text-primary',
      status: 'active',
      metrics: [
        { label: 'Accuracy', value: '94.2%' },
        { label: 'Latency', value: '4.3ms' }
      ]
    },
    {
      id: 'quality-assessment',
      title: 'Quality Assessment',
      description: 'Automated signal quality assessment with confidence-weighted fusion algorithms.',
      icon: Eye,
      color: 'text-success',
      status: 'active',
      metrics: [
        { label: 'SNR Range', value: '15-35 dB' },
        { label: 'Artifact Detection', value: '89.1%' }
      ]
    },
    {
      id: 'research-platform',
      title: 'Research Platform',
      description: 'Open research platform for biomedical signal processing and fusion algorithm development.',
      icon: Layers,
      color: 'text-warning',
      status: 'development',
      metrics: [
        { label: 'Active Users', value: '127' },
        { label: 'Publications', value: '12' }
      ]
    }
  ];

  const apps = applications.length > 0 ? applications : defaultApplications;

  const statusConfig = {
    active: { 
      color: 'text-success', 
      bg: 'bg-success/10', 
      border: 'border-success/30',
      label: 'Active'
    },
    development: { 
      color: 'text-warning', 
      bg: 'bg-warning/10', 
      border: 'border-warning/30',
      label: 'In Development'
    },
    planned: { 
      color: 'text-muted-foreground', 
      bg: 'bg-muted/10', 
      border: 'border-muted/30',
      label: 'Planned'
    }
  };

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">Key Applications</h2>
        <p className="text-muted-foreground">Biomedical signal fusion use cases</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {apps.map((app, index) => {
            const Icon = app.icon;
            const status = statusConfig[app.status];
            
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * staggerDelay,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`
                  industrial-card p-6 cursor-pointer relative overflow-hidden
                  ${selectedApp === app.id ? 'ring-2 ring-primary/50' : ''}
                  ${hoveredApp === app.id ? 'shadow-lg shadow-primary/10' : ''}
                `}
                onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                onHoverStart={() => setHoveredApp(app.id)}
                onHoverEnd={() => setHoveredApp(null)}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                  animate={{ 
                    opacity: hoveredApp === app.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Status badge */}
                <motion.div
                  className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.border} ${status.color}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * staggerDelay + 0.3, duration: 0.4 }}
                >
                  {status.label}
                </motion.div>

                {/* Icon and title */}
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * staggerDelay + 0.2, duration: 0.4 }}
                >
                  <motion.div 
                    className={`p-2 rounded-lg bg-primary/10 border border-primary/20 ${app.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">{app.title}</h3>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-sm text-muted-foreground mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * staggerDelay + 0.4, duration: 0.4 }}
                >
                  {app.description}
                </motion.p>

                {/* Metrics */}
                {showMetrics && app.metrics && (
                  <motion.div 
                    className="grid grid-cols-2 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * staggerDelay + 0.5, duration: 0.4 }}
                  >
                    {app.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        className="text-center p-2 rounded-lg bg-card/50 border border-border/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * staggerDelay + 0.6 + metricIndex * 0.1,
                          duration: 0.3
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-sm font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Expandable details */}
                <AnimatePresence>
                  {selectedApp === app.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border/50"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-xs text-muted-foreground"
                      >
                        Click to learn more about this application and its implementation details.
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0"
                  animate={{ 
                    opacity: hoveredApp === app.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AnimatedApplicationsList;
