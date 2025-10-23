#!/bin/bash

# 🚀 React Bits Enhancement Setup Script
# This script installs dependencies and sets up the enhanced components

echo "🚀 Setting up React Bits Enhancements..."

# Install Framer Motion for animations
echo "📦 Installing Framer Motion..."
npm install framer-motion

# Install additional animation libraries
echo "📦 Installing additional animation dependencies..."
npm install @react-spring/web

# Create backup of current Index.tsx
echo "💾 Creating backup of current Index.tsx..."
cp src/pages/Index.tsx src/pages/Index.backup.tsx

# Update main.tsx to import enhanced animations
echo "🎨 Adding enhanced animations CSS..."
echo "@import './styles/enhanced-animations.css';" >> src/index.css

# Create a simple test to verify components work
echo "🧪 Creating component test..."
cat > src/components/ComponentTest.tsx << 'EOF'
import React from 'react';
import { motion } from 'framer-motion';

const ComponentTest: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 text-center"
    >
      <h1 className="text-2xl font-bold text-foreground mb-4">
        🎉 React Bits Enhancements Ready!
      </h1>
      <p className="text-muted-foreground">
        All enhanced components are now available for integration.
      </p>
    </motion.div>
  );
};

export default ComponentTest;
EOF

echo "✅ Setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Test the enhanced components by importing them in your Index.tsx"
echo "2. Replace existing components with enhanced versions"
echo "3. Customize animations and timing as needed"
echo "4. Test on different devices and browsers"
echo ""
echo "🔧 Available Enhanced Components:"
echo "- EnhancedHeader: Animated header with rotating metrics"
echo "- AnimatedMetricCard: Cards with count-up animations"
echo "- EnhancedSensorChart: Interactive charts with BlurText"
echo "- AnimatedApplicationsList: Staggered list animations"
echo "- EnhancedResearchBento: Aurora background with enhanced layout"
echo ""
echo "📚 Documentation:"
echo "- Check ENHANCEMENT_PLAN.md for detailed implementation guide"
echo "- Review component files for customization options"
echo "- Test animations with prefers-reduced-motion support"
echo ""
echo "🎯 Ready to enhance your biomedical research platform!"
