import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Shield, 
  Clock, 
  Smartphone, 
  MapPin, 
  Heart, 
  X,
  Play,
  CheckCircle,
  Database
} from 'lucide-react';
import { useState } from 'react';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Triage',
      description: 'Advanced machine learning algorithms instantly assess emergency severity and determine optimal response protocols.',
      color: 'from-emergency to-red-600',
      details: {
        overview: 'Our AI triage system processes voice, text, and biometric data to provide instant medical assessment with 98.7% accuracy.',
        capabilities: [
          'Natural language processing in 50+ languages',
          'Emotion and stress level detection',
          'Symptom pattern recognition',
          'Risk stratification algorithms',
          'Predictive emergency modeling'
        ],
        demo: 'Voice analysis demo showing real-time triage assessment',
        stats: { accuracy: '98.7%', languages: '50+', responseTime: '<2s' }
      }
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with trained volunteers and medical professionals in your local area for immediate emergency response.',
      color: 'from-trust to-blue-600',
      details: {
        overview: 'A verified network of 25,000+ volunteers including doctors, nurses, EMTs, and trained community responders.',
        capabilities: [
          'Geolocation-based volunteer matching',
          'Skill-based responder selection',
          'Real-time availability tracking',
          'Automated backup assignments',
          'Community impact scoring'
        ],
        demo: 'Interactive map showing volunteer network coverage',
        stats: { volunteers: '25,000+', coverage: '450+ cities', avgResponse: '3.2 min' }
      }
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Military-grade encryption and blockchain technology protect your medical data while ensuring instant access for responders.',
      color: 'from-purple-500 to-purple-700',
      details: {
        overview: 'Decentralized medical record system with zero-knowledge proofs ensuring privacy while enabling emergency access.',
        capabilities: [
          'End-to-end encryption',
          'Immutable emergency logs',
          'Zero-knowledge medical records',
          'Smart contract automation',
          'HIPAA compliance'
        ],
        demo: 'Blockchain transaction visualization',
        stats: { encryption: '256-bit AES', uptime: '99.99%', compliance: 'HIPAA' }
      }
    },
    {
      icon: Clock,
      title: '24/7 Response',
      description: 'Round-the-clock emergency monitoring with average 3-minute response times across our network.',
      color: 'from-success to-green-600',
      details: {
        overview: 'Always-on emergency response system with global coverage and instant escalation protocols.',
        capabilities: [
          'Continuous monitoring',
          'Automatic escalation',
          'Multi-channel alerts',
          'Backup system redundancy',
          'Global time zone coverage'
        ],
        demo: 'Real-time response dashboard',
        stats: { uptime: '99.99%', avgResponse: '3.2 min', coverage: '24/7' }
      }
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Native iOS and Android apps with offline capabilities and one-touch emergency activation.',
      color: 'from-indigo-500 to-indigo-700',
      details: {
        overview: 'Intuitive mobile experience designed for high-stress emergency situations with accessibility features.',
        capabilities: [
          'One-touch emergency activation',
          'Offline emergency mode',
          'Voice-only operation',
          'Accessibility compliance',
          'Battery optimization'
        ],
        demo: 'Mobile app interface walkthrough',
        stats: { platforms: 'iOS/Android', offline: 'Full support', battery: '72h standby' }
      }
    },
    {
      icon: MapPin,
      title: 'Precision Location',
      description: 'Advanced GPS and indoor positioning technology for accurate emergency location detection.',
      color: 'from-yellow-500 to-orange-500',
      details: {
        overview: 'Multi-source location technology combining GPS, WiFi, Bluetooth beacons, and cellular triangulation.',
        capabilities: [
          'Sub-meter GPS accuracy',
          'Indoor positioning system',
          'Automatic location sharing',
          'Location history tracking',
          'Geofencing alerts'
        ],
        demo: 'Location tracking visualization',
        stats: { accuracy: '<1 meter', indoor: 'Supported', update: 'Real-time' }
      }
    },
    {
      icon: Heart,
      title: 'Vital Monitoring',
      description: 'Integration with wearable devices and IoT sensors for continuous health monitoring and automatic alerts.',
      color: 'from-pink-500 to-red-500',
      details: {
        overview: 'Seamless integration with popular wearables and medical devices for proactive emergency detection.',
        capabilities: [
          'Wearable device integration',
          'Abnormal vital detection',
          'Automatic emergency triggers',
          'Health trend analysis',
          'Family notifications'
        ],
        demo: 'Wearable integration dashboard',
        stats: { devices: '50+ supported', detection: 'Real-time', accuracy: '99.2%' }
      }
    },
    {
      icon: Database,
      title: 'Medical Records',
      description: 'Secure, instant access to critical medical information including allergies, medications, and emergency contacts.',
      color: 'from-teal-500 to-cyan-600',
      details: {
        overview: 'Comprehensive medical profile system with emergency-optimized data presentation for first responders.',
        capabilities: [
          'Critical info prioritization',
          'Allergy and medication alerts',
          'Emergency contact automation',
          'Medical history timeline',
          'Doctor integration'
        ],
        demo: 'Medical record interface for responders',
        stats: { records: 'Comprehensive', access: 'Instant', security: 'Encrypted' }
      }
    }
  ];

  const openModal = (index: number) => {
    setSelectedFeature(index);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emergency/10 via-trust/10 to-success/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Revolutionary <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Cutting-edge technology meets compassionate care. Discover how PulseBridge 
              is transforming emergency response with AI, blockchain, and community networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  onClick={() => openModal(index)}
                >
                  <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="flex items-center text-emergency font-medium group-hover:text-trust transition-colors duration-300">
                      <span className="mr-2">Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emergency/5 to-trust/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Modal */}
      <AnimatePresence>
        {selectedFeature !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="p-8">
                {(() => {
                  const feature = features[selectedFeature];
                  const Icon = feature.icon;
                  
                  return (
                    <>
                      {/* Header */}
                      <div className="flex items-center mb-8">
                        <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{feature.title}</h2>
                          <p className="text-gray-600 text-lg">{feature.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Overview */}
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Overview</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {feature.details.overview}
                          </p>

                          {/* Capabilities */}
                          <h4 className="text-lg font-semibold mb-4">Key Capabilities</h4>
                          <div className="space-y-3">
                            {feature.details.capabilities.map((capability, index) => (
                              <motion.div
                                key={capability}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                                <span className="text-gray-700">{capability}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Demo & Stats */}
                        <div>
                          {/* Demo Placeholder */}
                          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-6">
                            <div className="text-center">
                              <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 font-medium">{feature.details.demo}</p>
                              <p className="text-sm text-gray-500 mt-2">Interactive demo coming soon</p>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-1 gap-4">
                            {Object.entries(feature.details.stats).map(([key, value]) => (
                              <div key={key} className="p-4 bg-gray-50 rounded-xl">
                                <div className="text-2xl font-bold gradient-text">{value}</div>
                                <div className="text-sm text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                        <motion.a
                          href="/live-demo"
                          className="btn-primary inline-flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="h-4 w-4" />
                          <span>Try Live Demo</span>
                        </motion.a>
                      </div>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-trust/5 to-success/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built on <span className="gradient-text">Cutting-Edge</span> Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages the latest advances in AI, blockchain, and mobile technology 
              to deliver unparalleled emergency response capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'TensorFlow', logo: '🧠' },
              { name: 'Blockchain', logo: '⛓️' },
              { name: 'React Native', logo: '📱' },
              { name: 'WebRTC', logo: '📹' },
              { name: 'AWS', logo: '☁️' },
              { name: 'GraphQL', logo: '🔗' },
              { name: 'Docker', logo: '🐳' },
              { name: 'Kubernetes', logo: '⚙️' },
              { name: 'Redis', logo: '⚡' },
              { name: 'PostgreSQL', logo: '🗄️' },
              { name: 'WebSocket', logo: '🔄' },
              { name: 'ML Kit', logo: '🤖' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center p-6 glass-card hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{tech.logo}</div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emergency to-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of communities already using PulseBridge to save lives 
              and transform emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/live-demo"
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Live Demo
              </motion.a>
              <motion.a
                href="/volunteers"
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Network
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;