import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Brain, 
  Users, 
  Heart, 
  Mic, 
  MapPin, 
  Shield, 
  Clock,
  Smartphone,
  Headphones,
  Activity,
  CheckCircle
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Voice Triage',
      subtitle: 'Speak Your Emergency',
      description: 'Simply call or use our app to describe your emergency. Our advanced AI voice recognition system instantly analyzes your speech patterns, tone, and keywords to assess the severity and type of emergency.',
      icon: Mic,
      features: [
        'Multi-language support (50+ languages)',
        'Background noise filtering',
        'Emotion and stress level detection',
        'Automatic location detection'
      ],
      color: 'from-emergency to-red-600',
      video: '/assets/demo-triage.mp4'
    },
    {
      id: '02',
      title: 'AI Analysis',
      subtitle: 'Intelligent Assessment',
      description: 'Our AI mentor processes your information using machine learning algorithms trained on millions of emergency cases. It determines the urgency level, required response type, and optimal resource allocation.',
      icon: Brain,
      features: [
        'Real-time medical assessment',
        'Predictive emergency modeling',
        'Resource optimization algorithms',
        'Integration with medical databases'
      ],
      color: 'from-trust to-blue-600',
      video: '/assets/demo-mentor.mp4'
    },
    {
      id: '03',
      title: 'Volunteer Dispatch',
      subtitle: 'Community Response',
      description: 'Trained volunteers and medical professionals in your area are instantly notified. Our smart dispatch system selects the best responders based on proximity, skills, and availability.',
      icon: Users,
      features: [
        'Geolocation-based matching',
        'Skill-based volunteer selection',
        'Real-time availability tracking',
        'Automated backup assignments'
      ],
      color: 'from-success to-green-600',
      video: null
    },
    {
      id: '04',
      title: 'Blockchain ID',
      subtitle: 'Secure Medical Records',
      description: 'Your medical history, allergies, and emergency contacts are securely accessed through blockchain technology, ensuring responders have critical information while maintaining your privacy.',
      icon: Shield,
      features: [
        'Encrypted medical records',
        'Instant access for responders',
        'Privacy-first architecture',
        'Immutable emergency logs'
      ],
      color: 'from-purple-500 to-purple-700',
      video: null
    }
  ];

  const metrics = [
    { label: 'Average Response Time', value: '3.2 minutes', icon: Clock },
    { label: 'Success Rate', value: '98.7%', icon: CheckCircle },
    { label: 'Lives Saved', value: '12,847+', icon: Heart },
    { label: 'Active Volunteers', value: '25,000+', icon: Users },
  ];

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
              How <span className="gradient-text">PulseBridge</span> Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Four revolutionary steps that transform emergency response from minutes to seconds, 
              connecting you with life-saving help through cutting-edge AI and community networks.
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className="h-8 w-8 text-emergency mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.id}
                className={`mb-32 last:mb-0 ${isEven ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Step {step.id}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-emergency mb-4">
                    {step.subtitle}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.video ? (
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          <p className="text-gray-600 font-medium">
                            Interactive Demo Coming Soon
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                            <Icon className="h-16 w-16 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                          <p className="text-gray-600">{step.subtitle}</p>
                        </div>
                      </div>
                    )}

                    {/* Floating elements */}
                    <motion.div
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <span className="text-white font-bold text-sm">{step.id}</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

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
              Powered by <span className="gradient-text">Advanced Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, blockchain security, and real-time communication 
              to deliver the fastest, most reliable emergency response system ever created.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Mobile-First Design',
                description: 'Native iOS and Android apps with offline capabilities and one-touch emergency activation.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                description: 'Advanced AI models trained on millions of emergency cases for accurate triage and prediction.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Shield,
                title: 'Blockchain Security',
                description: 'Immutable medical records and identity verification with enterprise-grade encryption.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: MapPin,
                title: 'Real-Time Location',
                description: 'Precise GPS tracking with indoor positioning and automatic location sharing.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: Headphones,
                title: 'Voice Processing',
                description: 'Natural language processing with emotion detection and multi-language support.',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: Activity,
                title: 'IoT Integration',
                description: 'Seamless connection with wearables, smart home devices, and medical equipment.',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
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
              Experience the Future of Emergency Response
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See PulseBridge in action with our live demonstration and discover how 
              technology can save lives in your community.
            </p>
            <motion.a
              href="/live-demo"
              className="inline-flex items-center space-x-3 bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              <span>Try Live Demo</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;