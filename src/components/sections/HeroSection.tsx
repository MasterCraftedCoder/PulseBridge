import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon: LucideIcon;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  actions: HeroAction[];
  backgroundVideo?: string;
  backgroundImage?: string;
  showAmbulanceAnimation?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  actions,
  backgroundVideo,
  backgroundImage,
  showAmbulanceAnimation = false,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {backgroundVideo ? (
          <div className="absolute inset-0">
            <img
              src={backgroundVideo}
              alt="Emergency Response Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </div>
        ) : backgroundImage ? (
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emergency/90 via-trust/85 to-success/90" />
        )}
        
        {/* Enhanced Animated Grid Overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Professional Floating Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 4 + 6,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Medical Cross Animation */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2" />
          </div>
        </motion.div>

        {/* Heartbeat Line Animation */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-8 opacity-30"
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

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl mb-4 opacity-90 text-contrast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-contrast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {title}
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed text-contrast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {actions.map((action, index) => {
              const Icon = action.icon;
              const baseClasses = "font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl flex items-center space-x-3 relative overflow-hidden";
              
              let variantClasses = "";
              switch (action.variant) {
                case 'primary':
                  variantClasses = "bg-emergency hover:bg-emergency/90 text-white";
                  break;
                case 'secondary':
                  variantClasses = "bg-trust hover:bg-trust/90 text-white";
                  break;
                case 'outline':
                  variantClasses = "border-2 border-white text-white hover:bg-white hover:text-emergency backdrop-blur-sm";
                  break;
              }
              
              return (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={action.href}
                    className={`${baseClasses} ${variantClasses} group`}
                  >
                    <Icon className="h-5 w-5 group-hover:animate-pulse" />
                    <span>{action.label}</span>
                    {action.variant === 'primary' && (
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2 opacity-70 text-contrast">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Professional Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 border-2 border-white/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-16 h-16 border-2 border-white/20 rounded-2xl"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Emergency Response Visualization */}
      <motion.div
        className="absolute bottom-20 right-20 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="relative w-24 h-24"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Emergency Response Network Visualization */}
          <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emergency rounded-full animate-pulse" />
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 60}deg) translateX(30px) translateY(-50%)`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;