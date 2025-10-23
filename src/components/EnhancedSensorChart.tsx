import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Activity, TrendingUp, TrendingDown, Minus } from 'lucide-react';

type Point = { t: number; ecg: number; eeg: number; emg: number; fused: number };

interface EnhancedSensorChartProps {
  data?: Point[];
  title?: string;
  showTrends?: boolean;
}

const BlurText: React.FC<{ 
  text: string; 
  delay?: number; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}> = ({ text, delay = 0, className = '', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setCurrentText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={directionVariants[direction]}
      animate={isVisible ? { y: 0, x: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-4 bg-primary ml-1"
      />
    </motion.div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl"
      >
        <p className="text-xs text-muted-foreground mb-2">Time: {payload[0].payload.t}s</p>
        {payload.map((entry: any, index: number) => (
          <motion.div 
            key={index} 
            className="flex items-center justify-between gap-4 text-xs"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span style={{ color: entry.color }} className="font-medium">
              {entry.name}
            </span>
            <span className="text-foreground font-mono">
              {entry.value}
            </span>
          </motion.div>
        ))}
      </motion.div>
    );
  }
  return null;
};

const EnhancedSensorChart: React.FC<EnhancedSensorChartProps> = ({ 
  data, 
  title = "Real-time Sensor Data",
  showTrends = true 
}) => {
  const [selectedSignal, setSelectedSignal] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fallback data if data is undefined
  const safeData = data || [];
  
  const chartData = useMemo(() => {
    if (safeData.length === 0) {
      return Array.from({ length: 100 }, (_, i) => ({
        t: i * 0.1,
        ECG: Math.sin(i * 0.1) * 0.5 + Math.random() * 0.2,
        EEG: Math.sin(i * 0.15) * 0.3 + Math.random() * 0.1,
        EMG: Math.sin(i * 0.2) * 0.4 + Math.random() * 0.15,
        Fused: Math.sin(i * 0.12) * 0.6 + Math.random() * 0.1,
      }));
    }
    return safeData.slice(-300).map((d) => ({
      t: Number(d.t.toFixed(1)),
      ECG: Number(d.ecg.toFixed(3)),
      EEG: Number(d.eeg.toFixed(3)),
      EMG: Number(d.emg.toFixed(3)),
      Fused: Number(d.fused.toFixed(3)),
    }));
  }, [safeData]);

  // Calculate trends
  const trends = useMemo(() => {
    if (chartData.length < 2) return {};
    
    const recent = chartData.slice(-10);
    const previous = chartData.slice(-20, -10);
    
    const calculateTrend = (signal: string) => {
      const recentAvg = recent.reduce((sum, d) => sum + d[signal], 0) / recent.length;
      const previousAvg = previous.reduce((sum, d) => sum + d[signal], 0) / previous.length;
      return recentAvg > previousAvg ? 'up' : recentAvg < previousAvg ? 'down' : 'stable';
    };

    return {
      ECG: calculateTrend('ECG'),
      EEG: calculateTrend('EEG'),
      EMG: calculateTrend('EMG'),
      Fused: calculateTrend('Fused')
    };
  }, [chartData]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-3 w-3 text-success" />;
      case 'down': return <TrendingDown className="h-3 w-3 text-destructive" />;
      default: return <Minus className="h-3 w-3 text-muted-foreground" />;
    }
  };

  const signalColors = {
    ECG: '#ef4444',
    EEG: '#a855f7', 
    EMG: '#10b981',
    Fused: '#3b82f6'
  };

  return (
    <motion.div 
      className="industrial-card scan-line space-y-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="p-2 rounded-lg bg-primary/10 border border-primary/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Activity className="h-5 w-5 text-primary" />
          </motion.div>
          <div>
            <BlurText 
              text={title}
              delay={200}
              className="text-lg font-semibold text-foreground"
              direction="up"
            />
            <motion.p 
              className="text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Live biomedical signal monitoring
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex items-center gap-1 text-green-400">
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs">Live</span>
          </div>
        </motion.div>
      </div>

      {/* Interactive Chart */}
      <motion.div 
        className="h-64 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="t" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            
            <Line
              type="monotone"
              dataKey="ECG"
              stroke={signalColors.ECG}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: signalColors.ECG }}
              className="cursor-pointer"
              onClick={() => setSelectedSignal(selectedSignal === 'ECG' ? null : 'ECG')}
            />
            <Line
              type="monotone"
              dataKey="EEG"
              stroke={signalColors.EEG}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: signalColors.EEG }}
              className="cursor-pointer"
              onClick={() => setSelectedSignal(selectedSignal === 'EEG' ? null : 'EEG')}
            />
            <Line
              type="monotone"
              dataKey="EMG"
              stroke={signalColors.EMG}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: signalColors.EMG }}
              className="cursor-pointer"
              onClick={() => setSelectedSignal(selectedSignal === 'EMG' ? null : 'EMG')}
            />
            <Line
              type="monotone"
              dataKey="Fused"
              stroke={signalColors.Fused}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, fill: signalColors.Fused }}
              className="cursor-pointer"
              onClick={() => setSelectedSignal(selectedSignal === 'Fused' ? null : 'Fused')}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Trend Indicators */}
      {showTrends && (
        <motion.div 
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {Object.entries(trends).map(([signal, trend]) => (
            <motion.div
              key={signal}
              className={`flex items-center justify-between p-2 rounded-lg border ${
                selectedSignal === signal 
                  ? 'border-primary/50 bg-primary/5' 
                  : 'border-border/50 bg-card/50'
              }`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedSignal(selectedSignal === signal ? null : signal)}
            >
              <span className="text-xs font-medium text-foreground">{signal}</span>
              {getTrendIcon(trend)}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default EnhancedSensorChart;
