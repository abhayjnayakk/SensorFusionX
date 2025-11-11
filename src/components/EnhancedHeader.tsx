import React, { useState, useEffect } from 'react';
import { Activity, Brain, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedHeaderProps {
  isLive?: boolean;
  systemStatus?: 'operational' | 'maintenance' | 'error';
}

const EnhancedHeader: React.FC<EnhancedHeaderProps> = ({ 
  isLive = true, 
  systemStatus = 'operational' 
}) => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { label: 'Data Streams', value: '4', icon: Activity },
    { label: 'Processing Rate', value: '240 Hz', icon: Zap },
    { label: 'System Uptime', value: '99.9%', icon: Shield },
    { label: 'Fusion Quality', value: '87.2%', icon: Brain }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    operational: { color: 'text-success', bg: 'bg-success/10', border: 'border-success/30' },
    maintenance: { color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30' },
    error: { color: 'text-destructive', bg: 'bg-destructive/10', border: 'border-destructive/30' }
  };

  const config = statusConfig[systemStatus];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="border-b border-border/50 backdrop-blur-md bg-background/80 sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Brand & Title */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div 
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-border"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Activity className="h-5 w-5 text-primary" />
            </motion.div>
            <div>
              <motion.h1 
                className="text-xl font-bold text-foreground glow-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Biomedical Sensor Fusion Research
              </motion.h1>
              <motion.p 
                className="text-xs text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Ongoing Research Project | Multi-modal Signal Processing
              </motion.p>
            </div>
          </motion.div>

          {/* Center Section - Rotating Metrics */}
          <motion.div 
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMetric}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-card/50 border border-border/50"
              >
                <metrics[currentMetric].icon className="h-4 w-4 text-primary" />
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground">
                    {metrics[currentMetric].value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metrics[currentMetric].label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Section - Status Indicator */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bg} border ${config.border}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="relative flex h-2 w-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className={`absolute inline-flex h-full w-full rounded-full ${config.color} opacity-75 animate-ping`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${config.color}`}></span>
              </motion.span>
              <span className={`text-xs font-medium ${config.color}`}>
                {isLive ? 'Live' : 'Offline'}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default EnhancedHeader;
