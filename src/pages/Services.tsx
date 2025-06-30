import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Users, 
  Shield, 
  Clock, 
  Phone,
  Smartphone,
  Activity,
  MapPin,
  Database,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';
import * as React from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState('emergency-response');

  const services: { [key: string]: any } = {
    'emergency-response': {
      title: 'Emergency Response',
      icon: Heart,
      description: 'Instant emergency assistance with AI-powered triage and community volunteer dispatch.',
      features: [
        'AI-powered emergency triage',
        'Sub-3 minute response times',
        'Trained volunteer network',
        'Real-time location tracking',
        'Medical history access',
        '24/7 availability'
      ],
      benefits: [
        'Faster response than traditional EMS',
        'Personalized medical care',
        'Community-based support',
        'Cost-effective solution'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-emergency to-red-600'
    },
    'ai-triage': {
      title: 'AI Triage System',
      icon: Brain,
      description: 'Advanced artificial intelligence that instantly assesses emergency severity and determines optimal response.',
      features: [
        'Natural language processing',
        'Voice pattern analysis',
        'Symptom recognition',
        'Risk stratification',
        'Multi-language support',
        'Continuous learning'
      ],
      benefits: [
        '98.7% accuracy rate',
        'Instant assessment',
        'Reduces human error',
        'Scalable solution'
      ],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-trust to-blue-600'
    },
    'volunteer-network': {
      title: 'Volunteer Network',
      icon: Users,
      description: 'Comprehensive training and management system for community emergency responders.',
      features: [
        'Professional training programs',
        'Skill-based matching',
        'Real-time availability',
        'Performance tracking',
        'Certification management',
        'Community building'
      ],
      benefits: [
        '25,000+ trained volunteers',
        'Local community support',
        'Rapid deployment',
        'Ongoing education'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-success to-green-600'
    },
    'medical-records': {
      title: 'Secure Medical Records',
      icon: Database,
      description: 'Blockchain-secured medical information system for instant emergency access.',
      features: [
        'Blockchain encryption',
        'Instant emergency access',
        'HIPAA compliance',
        'Patient control',
        'Provider integration',
        'Audit trails'
      ],
      benefits: [
        'Enhanced privacy',
        'Faster treatment',
        'Reduced errors',
        'Patient empowerment'
      ],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-500 to-purple-700'
    },
    'mobile-platform': {
      title: 'Mobile Platform',
      icon: Smartphone,
      description: 'Native iOS and Android applications with offline capabilities and one-touch emergency activation.',
      features: [
        'One-touch emergency',
        'Offline functionality',
        'GPS integration',
        'Voice activation',
        'Family sharing',
        'Wearable integration'
      ],
      benefits: [
        'Always accessible',
        'User-friendly design',
        'Battery optimized',
        'Cross-platform sync'
      ],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-indigo-500 to-indigo-700'
    },
    'health-monitoring': {
      title: 'Health Monitoring',
      icon: Activity,
      description: 'Continuous health monitoring through wearable devices and IoT integration.',
      features: [
        'Wearable integration',
        'Vital sign monitoring',
        'Anomaly detection',
        'Predictive alerts',
        'Trend analysis',
        'Family notifications'
      ],
      benefits: [
        'Proactive care',
        'Early detection',
        'Peace of mind',
        'Data insights'
      ],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-teal-500 to-cyan-600'
    }
  };

  const serviceCategories = [
    { id: 'emergency-response', name: 'Emergency Response' },
    { id: 'ai-triage', name: 'AI Triage' },
    { id: 'volunteer-network', name: 'Volunteer Network' },
    { id: 'medical-records', name: 'Medical Records' },
    { id: 'mobile-platform', name: 'Mobile Platform' },
    { id: 'health-monitoring', name: 'Health Monitoring' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Emergency Physician',
      quote: 'PulseBridge has transformed how we handle emergency cases. The AI triage is incredibly accurate.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Community Volunteer',
      quote: 'Being part of the PulseBridge network has been incredibly rewarding. I\'ve helped save three lives.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Jennifer Walsh',
      role: 'Cardiac Survivor',
      quote: 'PulseBridge saved my life. The response was so fast, I couldn\'t believe help arrived in 2 minutes.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Comprehensive emergency response solutions powered by AI, community networks, 
              and cutting-edge technology designed to save lives.
            </p>
          </motion.div>

          {/* Service Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Services Offered', value: '6+', icon: Zap },
              { label: 'Response Time', value: '3.2 min', icon: Clock },
              { label: 'Success Rate', value: '98.7%', icon: Award },
              { label: 'Satisfied Users', value: '50K+', icon: Star }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className="h-8 w-8 text-emergency mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our full range of emergency response services designed to provide 
              fast, reliable, and intelligent care when you need it most.
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedService(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedService === category.id
                    ? 'bg-emergency text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${services[selectedService].color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      {React.createElement(services[selectedService].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{(services as any)[selectedService].title}</h3>
                      <p className="text-gray-600">{(services as any)[selectedService].description}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">
                    {services[selectedService].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {services[selectedService].features.map((feature: any, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">Benefits:</h4>
                      <ul className="space-y-2">
                        {services[selectedService].benefits.map((benefit: any, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-emergency" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className="btn-primary flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      className="btn-outline flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-4 w-4" />
                      <span>Watch Demo</span>
                    </motion.button>
                  </div>
                </div>

                <div>
                  <motion.div
                    className="aspect-video rounded-2xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={(services as any)[selectedService].image}
                      alt={(services as any)[selectedService].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Service Metrics */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold gradient-text">24/7</div>
                      <div className="text-sm text-gray-600">Availability</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-bold gradient-text">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How It Works */}
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
              How Our <span className="gradient-text">Services</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, streamlined process that connects you with life-saving help 
              in minutes, not hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Emergency Detected',
                description: 'Voice, app, or wearable device triggers emergency response',
                icon: Phone
              },
              {
                step: '02',
                title: 'AI Assessment',
                description: 'Advanced AI analyzes situation and determines severity',
                icon: Brain
              },
              {
                step: '03',
                title: 'Volunteer Dispatch',
                description: 'Nearest qualified volunteers are instantly notified',
                icon: Users
              },
              {
                step: '04',
                title: 'Help Arrives',
                description: 'Trained responders arrive with your medical information',
                icon: Heart
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emergency to-trust rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Users</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from people who have experienced our services firsthand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
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
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of people who trust PulseBridge for their emergency response needs. 
              Get started today and experience the future of emergency care.
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
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;