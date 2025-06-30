import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Heart, 
  Phone, 
  MapPin,
  Clock,
  ArrowRight,
  Smartphone,
  Brain
} from 'lucide-react';

// Components
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import StatBar from '@/components/sections/StatBar';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import CalloutBanner from '@/components/sections/CalloutBanner';

const Home = () => {
  const heroActions = [
    {
      label: 'Get Emergency Help',
      href: '/live-demo',
      variant: 'primary' as const,
      icon: Phone,
    },
    {
      label: 'Join Network',
      href: '/volunteers',
      variant: 'secondary' as const,
      icon: Users,
    },
    {
      label: 'Partner With Us',
      href: '/partners',
      variant: 'outline' as const,
      icon: Shield,
    },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Triage',
      description: 'Instant medical assessment using advanced AI to prioritize emergency responses with 98.7% accuracy.',
      color: 'from-emergency to-emergency/80',
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with 25,000+ trained volunteers and medical professionals in your area for immediate help.',
      color: 'from-trust to-trust/80',
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Military-grade encryption and blockchain technology protect your medical records and privacy.',
      color: 'from-success to-success/80',
    },
    {
      icon: Clock,
      title: '24/7 Response',
      description: 'Round-the-clock emergency support with average 3.2-minute response time across our network.',
      color: 'from-purple-500 to-purple/80',
    },
  ];

  const stats = [
    { label: 'Lives Saved', value: 12847, suffix: '+' },
    { label: 'Response Time', value: 3.2, suffix: ' min avg' },
    { label: 'Active Volunteers', value: 25000, suffix: '+' },
    { label: 'Partner Hospitals', value: 450, suffix: '+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <HeroSection
        title="Emergency Response"
        subtitle="Reimagined"
        description="Revolutionary hyper-local emergency network connecting communities with instant medical assistance through AI-powered triage and volunteer networks."
        actions={heroActions}
        backgroundImage="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        showAmbulanceAnimation={false}
      />

      {/* Stats Bar */}
      <StatBar stats={stats} />

      {/* How It Works Preview */}
      <section className="section-padding section-bg-light relative overflow-hidden">
        <div className="content-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-contrast">
              How <span className="gradient-text">PulseBridge</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps that can save a life. Our AI-powered system connects you with help in seconds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Emergency Detection',
                description: 'Voice, app, or wearable device instantly detects and reports your emergency.',
                icon: Smartphone,
                color: 'from-emergency to-red-600'
              },
              {
                step: '02',
                title: 'AI Triage',
                description: 'Advanced algorithms assess severity and determine optimal response protocol.',
                icon: Brain,
                color: 'from-trust to-blue-600'
              },
              {
                step: '03',
                title: 'Network Dispatch',
                description: 'Nearest qualified volunteers and professionals are instantly notified.',
                icon: Users,
                color: 'from-success to-green-600'
              },
              {
                step: '04',
                title: 'Help Arrives',
                description: 'Trained responders arrive with your medical history and emergency contacts.',
                icon: Heart,
                color: 'from-purple-500 to-purple-700'
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <motion.div 
                    className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="h-10 w-10 text-white relative z-10" />
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-contrast">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>

                {/* Connection line for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/how-it-works"
              className="btn-primary inline-flex items-center space-x-2 hover-lift"
            >
              <span>See Full Process</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-emergency/10 to-trust/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-success/10 to-purple-500/10 rounded-full blur-3xl" />
      </section>

      {/* Features Grid */}
      <FeatureGrid features={features} />

      {/* Live Demo Callout */}
      <CalloutBanner
        title="Experience PulseBridge Live"
        description="See our emergency response system in action with a real-time demonstration of AI triage and volunteer dispatch."
        ctaText="Try Live Demo"
        ctaLink="/live-demo"
        backgroundImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        variant="video"
        showPlayButton={true}
      />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Community Impact */}
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
              Real <span className="gradient-text">Impact</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every day, PulseBridge helps save lives and strengthen communities through technology and human compassion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                title: 'Sarah\'s Cardiac Emergency',
                description: 'AI detected cardiac symptoms and dispatched Dr. Chen in 90 seconds, saving Sarah\'s life.',
                location: 'San Francisco, CA',
                impact: 'Life Saved',
                time: '90 seconds'
              },
              {
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                title: 'Community Training Success',
                description: '500+ volunteers trained in Austin, creating a resilient emergency response network.',
                location: 'Austin, TX',
                impact: 'Community Prepared',
                time: 'Ongoing'
              },
              {
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                title: 'Hospital Integration',
                description: 'Seamless integration with SF General reduced ER wait times by 40%.',
                location: 'San Francisco, CA',
                impact: '40% Faster',
                time: 'System-wide'
              },
            ].map((story, index) => (
              <motion.div
                key={story.title}
                className="feature-card hover-lift group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-contrast group-hover:text-emergency transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {story.location}
                  </div>
                  <div className="flex items-center text-emergency font-medium">
                    <Clock className="h-4 w-4 mr-1" />
                    {story.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/case-studies"
              className="btn-outline inline-flex items-center space-x-2 hover-lift"
            >
              <span>Read More Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="content-container">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI, blockchain security, and real-time communication 
              to deliver the fastest emergency response system ever created.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'AI/ML', icon: '🧠', description: 'Advanced triage algorithms' },
              { name: 'Blockchain', icon: '⛓️', description: 'Secure medical records' },
              { name: 'Real-time', icon: '⚡', description: 'Instant communication' },
              { name: 'Mobile', icon: '📱', description: 'Cross-platform apps' },
              { name: 'IoT', icon: '🔗', description: 'Wearable integration' },
              { name: 'Cloud', icon: '☁️', description: '99.9% uptime' },
              { name: 'Analytics', icon: '📊', description: 'Performance insights' },
              { name: 'Security', icon: '🔒', description: 'HIPAA compliant' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-semibold text-white mb-2">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-emergency/10 via-transparent to-trust/10" />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emergency/20 to-trust/20 rounded-full blur-3xl"
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
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-emergency to-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Emergency Response?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of volunteers, healthcare professionals, and communities 
              making a real difference in emergency response worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/volunteers"
                  className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Become a Volunteer</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/partners"
                  className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200 inline-flex items-center space-x-2"
                >
                  <Shield className="h-5 w-5" />
                  <span>Partner With Us</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;