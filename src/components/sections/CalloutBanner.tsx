import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Activity, Zap } from 'lucide-react';

interface CalloutBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  showPlayButton?: boolean;
  variant?: 'default' | 'video' | 'gradient';
}

const CalloutBanner: React.FC<CalloutBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  showPlayButton = false,
  variant = 'default'
}) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'video':
        return 'bg-gradient-to-r from-trust to-emergency';
      case 'gradient':
        return 'bg-gradient-to-br from-emergency via-trust to-success';
      default:
        return 'bg-text';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 ${getBackgroundClasses()}`}>
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </>
        )}
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Medical visualization elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-1/2" />
          </div>
        </motion.div>

        {/* Heartbeat line */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-8 opacity-30"
          animate={{
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 20" className="w-full h-full">
            <motion.path
              d="M0,10 L20,10 L25,5 L30,15 L35,0 L40,20 L45,10 L100,10"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {showPlayButton && (
                <motion.button
                  className="group flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors relative">
                    <Play className="h-5 w-5 ml-1" />
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                  </div>
                  <span>Watch Live Demo</span>
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              )}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={ctaLink}
                  className="inline-flex items-center space-x-3 bg-emergency hover:bg-emergency/90 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Emergency response network visualization */}
      <motion.div
        className="absolute top-10 right-10 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="relative w-20 h-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 border border-white/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emergency rounded-full animate-pulse" />
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 90}deg) translateX(25px) translateY(-50%)`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CalloutBanner;