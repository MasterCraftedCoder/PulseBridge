import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Phone, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-gradient-to-br from-emergency/5 via-trust/5 to-success/5 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 */}
          <div className="mb-8">
            <motion.div
              className="text-8xl md:text-9xl font-bold gradient-text mb-4"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.div>
            
            {/* Broken Siren Animation */}
            <motion.div
              className="flex justify-center mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-emergency to-red-600 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <AlertTriangle className="h-12 w-12 text-white" />
                </motion.div>
                
                {/* Broken effect lines */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-1 bg-emergency"
                  animate={{
                    rotate: [0, 45, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-1 bg-emergency"
                  animate={{
                    rotate: [0, -45, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity
                  }}
                />
              </div>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Emergency Response <span className="gradient-text">Not Found</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looks like this page went off the grid! Don't worry, our emergency response 
            team is here to help you get back on track.
          </p>

          {/* Error Details */}
          <motion.div
            className="glass-card p-6 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-3 flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-emergency mr-2" />
              What happened?
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• The page you're looking for doesn't exist</li>
              <li>• The URL might be mistyped</li>
              <li>• The page may have been moved or deleted</li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>Return Home</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </button>
            </motion.div>
          </div>

          {/* Emergency Contact */}
          <motion.div
            className="glass-card p-6 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-semibold mb-3 flex items-center justify-center">
              <Phone className="h-5 w-5 text-trust mr-2" />
              Need Immediate Help?
            </h3>
            <p className="text-gray-600 mb-4">
              If you're experiencing a real emergency, don't wait! 
              Contact emergency services immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="tel:911"
                className="bg-emergency hover:bg-emergency/90 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-4 w-4" />
                <span>Call 911</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/live-demo"
                  className="bg-trust hover:bg-trust/90 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Try PulseBridge</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h4 className="font-semibold mb-4 text-gray-700">Popular Pages</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'Live Demo', href: '/live-demo' },
                { name: 'Volunteers', href: '/volunteers' },
                { name: 'Partners', href: '/partners' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-trust hover:text-emergency transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emergency/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;