import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedMetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  status?: "success" | "warning" | "error" | "neutral";
  description?: string;
  trend?: 'up' | 'down' | 'stable';
  delay?: number;
}

const AnimatedMetricCard: React.FC<AnimatedMetricCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  status = "neutral", 
  description,
  trend = 'stable',
  delay = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const statusConfig = {
    success: {
      color: "text-success",
      glow: "shadow-success/20",
      border: "border-success/30",
      bg: "bg-success/5"
    },
    warning: {
      color: "text-warning", 
      glow: "shadow-warning/20",
      border: "border-warning/30",
      bg: "bg-warning/5"
    },
    error: {
      color: "text-destructive",
      glow: "shadow-destructive/20", 
      border: "border-destructive/30",
      bg: "bg-destructive/5"
    },
    neutral: {
      color: "text-primary",
      glow: "shadow-primary/10",
      border: "border-primary/20",
      bg: "bg-primary/5"
    },
  };

  const trendConfig = {
    up: { icon: '↗', color: 'text-success' },
    down: { icon: '↘', color: 'text-destructive' },
    stable: { icon: '→', color: 'text-muted-foreground' }
  };

  const config = statusConfig[status];
  const trendData = trendConfig[trend];

  // Animate number counting
  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numericValue)) return;

    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericValue * easeOutCubic;
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timeout = setTimeout(animate, delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: delay / 1000,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "industrial-card scan-line group relative overflow-hidden",
        "hover:border-primary/40 cursor-pointer",
        config.border,
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100"
      )}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative space-y-3">
        {/* Header with icon and trend */}
        <div className="flex items-center justify-between">
          <motion.p 
            className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: delay / 1000 + 0.2, duration: 0.4 }}
          >
            {title}
          </motion.p>
          <div className="flex items-center gap-2">
            <motion.div
              className={cn(
                "p-1.5 rounded-lg bg-background/50 border border-border",
                config.border,
                config.glow
              )}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={cn("h-3.5 w-3.5", config.color)} />
            </motion.div>
            <motion.span 
              className={cn("text-xs", trendData.color)}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: delay / 1000 + 0.4, duration: 0.3 }}
            >
              {trendData.icon}
            </motion.span>
          </div>
        </div>
        
        {/* Animated value */}
        <motion.div 
          className="metric-value relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: delay / 1000 + 0.3, duration: 0.5 }}
        >
          <motion.span
            key={displayValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            {typeof value === 'string' && value.includes('%') 
              ? `${displayValue.toFixed(1)}%`
              : typeof value === 'string' && value.includes('Hz')
              ? `${displayValue.toFixed(0)} Hz`
              : typeof value === 'string' && value.includes('ms')
              ? `${displayValue.toFixed(1)} ms`
              : displayValue.toFixed(0)
            }
          </motion.span>
        </motion.div>
        
        {/* Description */}
        {description && (
          <motion.p 
            className="text-xs text-muted-foreground/80"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: delay / 1000 + 0.5, duration: 0.4 }}
          >
            {description}
          </motion.p>
        )}
      </div>
      
      {/* Pulse indicator for active status */}
      {status === "success" && (
        <motion.div 
          className="absolute top-2 right-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: delay / 1000 + 0.6, duration: 0.3 }}
        >
          <motion.span 
            className="relative flex h-2 w-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </motion.span>
        </motion.div>
      )}

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default AnimatedMetricCard;
