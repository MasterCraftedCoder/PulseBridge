import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  title = "Revolutionary Features",
  subtitle = "Cutting-edge technology meets compassionate care"
}) => {
  return (
    <section className="section-padding section-bg-light">
      <div className="content-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-contrast">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-card h-full group-hover:scale-105 transition-all duration-300">
                  {/* Icon with enhanced effects */}
                  <div className="relative mb-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-white relative z-10" />
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                    
                    {/* Glow effect */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300 text-contrast">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover overlay with pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emergency/5 to-trust/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,59,48,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(10,132,255,0.3) 0%, transparent 50%)`
                    }} />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-emergency to-trust rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced additional features showcase */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-contrast">
              Advanced <span className="gradient-text">Technology</span> Stack
            </h3>
            <div className="space-y-4">
              {[
                'Machine Learning for predictive emergency patterns',
                'Real-time geolocation and routing optimization',
                'Blockchain-secured medical record management',
                'IoT integration with wearable health devices',
                'Multi-language voice recognition and processing',
                'Advanced encryption for privacy protection'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-success rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="aspect-square bg-gradient-to-br from-emergency/10 to-trust/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,59,48,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(10,132,255,0.3) 0%, transparent 50%)`
              }} />
              
              <div className="text-center relative z-10">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <span className="text-4xl">🚑</span>
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping animation-delay-200" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-2 text-contrast">AI-Powered</h4>
                <p className="text-gray-600">Emergency Response System</p>
              </div>
            </motion.div>

            {/* Enhanced floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-white font-bold">24/7</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-trust rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-white text-2xl">⚡</span>
            </motion.div>

            {/* Additional decorative elements */}
            <motion.div
              className="absolute top-1/2 -left-8 w-4 h-4 bg-emergency/50 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/4 -right-8 w-6 h-6 bg-success/50 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;