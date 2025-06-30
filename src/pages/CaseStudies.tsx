import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Clock, 
  Users, 
  MapPin, 
  Award, 
  ArrowRight,
  Star,
  Calendar
} from 'lucide-react';
import { useState } from 'react';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Cases', count: 12 },
    { id: 'cardiac', name: 'Cardiac Emergency', count: 4 },
    { id: 'stroke', name: 'Stroke Response', count: 3 },
    { id: 'trauma', name: 'Trauma Care', count: 2 },
    { id: 'community', name: 'Community Impact', count: 3 }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'cardiac',
      title: 'Cardiac Arrest Response in Downtown SF',
      subtitle: 'AI Triage Saves Life in 90 Seconds',
      location: 'San Francisco, CA',
      date: 'March 15, 2024',
      responseTime: '90 seconds',
      outcome: 'Life Saved',
      patient: 'Sarah Chen, 42',
      responder: 'Dr. Michael Rodriguez',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: 'A 42-year-old woman experienced sudden cardiac arrest while walking to work. PulseBridge\'s AI immediately detected the emergency through her smartwatch and dispatched the nearest volunteer.',
      challenge: 'Rush hour traffic made traditional ambulance response difficult, with estimated arrival time of 12+ minutes.',
      solution: 'PulseBridge AI identified Dr. Rodriguez, a cardiologist, just 2 blocks away. He arrived in 90 seconds with an AED.',
      impact: 'Patient survived with full recovery. Response time was 10x faster than traditional emergency services.',
      metrics: {
        responseTime: '90s',
        survivalRate: '100%',
        timesSaved: '10x faster',
        satisfaction: '5/5 stars'
      },
      testimonial: {
        quote: "PulseBridge saved my life. The speed of response was incredible - I can't imagine what would have happened without it.",
        author: "Sarah Chen, Survivor"
      }
    },
    {
      id: 2,
      category: 'stroke',
      title: 'Stroke Detection Through Voice Analysis',
      subtitle: 'AI Prevents Permanent Disability',
      location: 'Austin, TX',
      date: 'February 28, 2024',
      responseTime: '3 minutes',
      outcome: 'Disability Prevented',
      patient: 'Robert Kim, 58',
      responder: 'EMT Jennifer Walsh',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: 'A 58-year-old man called PulseBridge complaining of confusion and slurred speech. AI voice analysis immediately detected stroke symptoms.',
      challenge: 'Patient was alone at home and couldn\'t clearly communicate his address due to stroke symptoms.',
      solution: 'AI used phone location data and dispatched EMT Walsh, who administered stroke medication within the critical window.',
      impact: 'Patient recovered fully with no permanent disability. Early intervention prevented lasting brain damage.',
      metrics: {
        responseTime: '3 min',
        recoveryRate: '100%',
        disabilityPrevented: 'Yes',
        satisfaction: '5/5 stars'
      },
      testimonial: {
        quote: "The AI caught what I couldn't even properly explain. It literally saved my future.",
        author: "Robert Kim, Survivor"
      }
    },
    {
      id: 3,
      category: 'trauma',
      title: 'Multi-Vehicle Accident Response',
      subtitle: 'Coordinated Community Response',
      location: 'Denver, CO',
      date: 'January 12, 2024',
      responseTime: '2 minutes',
      outcome: '3 Lives Saved',
      patient: 'Multiple victims',
      responder: 'Community Response Team',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: 'A three-car collision on I-25 triggered PulseBridge\'s mass casualty protocol, coordinating multiple volunteers simultaneously.',
      challenge: 'Multiple victims with varying injury severity required immediate triage and coordinated response.',
      solution: 'AI dispatched 5 volunteers with different specialties, creating an instant emergency response team.',
      impact: 'All three victims survived. Coordinated response prevented fatalities in serious accident.',
      metrics: {
        responseTime: '2 min',
        volunteersDispatched: '5',
        livesaved: '3',
        satisfaction: '5/5 stars'
      },
      testimonial: {
        quote: "Having trained volunteers arrive before the ambulance made all the difference. They saved my family.",
        author: "Maria Gonzalez, Family Member"
      }
    },
    {
      id: 4,
      category: 'community',
      title: 'Neighborhood Health Network Launch',
      subtitle: 'Building Community Resilience',
      location: 'Seattle, WA',
      date: 'December 5, 2023',
      responseTime: 'Ongoing',
      outcome: '500+ Volunteers Trained',
      patient: 'Entire Community',
      responder: 'Community Health Alliance',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      summary: 'Seattle\'s Ballard neighborhood partnered with PulseBridge to create a comprehensive community health network.',
      challenge: 'Limited emergency services coverage in rapidly growing neighborhood with aging population.',
      solution: 'Trained 500+ residents in emergency response, creating a network of community first responders.',
      impact: 'Reduced average emergency response time by 40%. Created model for other neighborhoods nationwide.',
      metrics: {
        volunteersTrained: '500+',
        responseImprovement: '40%',
        communitiesCovered: '12',
        satisfaction: '4.9/5 stars'
      },
      testimonial: {
        quote: "PulseBridge transformed our neighborhood into a caring, prepared community. We look out for each other now.",
        author: "David Park, Community Leader"
      }
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const impactStats = [
    { label: 'Lives Saved', value: '12,847', icon: Heart },
    { label: 'Response Time', value: '2.3 min', icon: Clock },
    { label: 'Success Rate', value: '98.7%', icon: Award },
    { label: 'Communities', value: '450+', icon: Users }
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
              Real <span className="gradient-text">Impact</span> Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Discover how PulseBridge is transforming emergency response and saving lives 
              across communities nationwide. Every case study represents real people and real outcomes.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => {
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

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-emergency text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredCases.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="glass-card p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedCase(study.id)}
                >
                  {/* Case Image */}
                  <div className="aspect-video rounded-xl overflow-hidden mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Case Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {study.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {study.location}
                      </div>
                    </div>
                    <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      {study.outcome}
                    </span>
                  </div>

                  {/* Case Content */}
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-emergency font-medium mb-4">{study.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.summary}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-emergency/10 rounded-xl">
                      <Clock className="h-5 w-5 text-emergency mx-auto mb-1" />
                      <div className="font-bold text-emergency">{study.responseTime}</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center p-3 bg-trust/10 rounded-xl">
                      <Heart className="h-5 w-5 text-trust mx-auto mb-1" />
                      <div className="font-bold text-trust">{study.outcome}</div>
                      <div className="text-xs text-gray-600">Outcome</div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Patient: {study.patient}
                    </div>
                    <div className="flex items-center text-emergency font-medium">
                      <span className="mr-2">Read Full Case</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Detailed Case Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedCase(null)}
            />
            
            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {(() => {
                const study = caseStudies.find(s => s.id === selectedCase);
                if (!study) return null;

                return (
                  <div className="p-8">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCase(null)}
                      className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>

                    {/* Header */}
                    <div className="mb-8">
                      <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {study.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            {study.location}
                          </div>
                        </div>
                        <span className="bg-success/10 text-success px-4 py-2 rounded-full font-medium">
                          {study.outcome}
                        </span>
                      </div>

                      <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                      <p className="text-xl text-emergency font-medium">{study.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3">The Situation</h3>
                          <p className="text-gray-700 leading-relaxed">{study.summary}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">PulseBridge Solution</h3>
                          <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">Impact & Results</h3>
                          <p className="text-gray-700 leading-relaxed">{study.impact}</p>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <cite className="text-emergency font-medium">
                            — {study.testimonial.author}
                          </cite>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        {/* Key Metrics */}
                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <h4 className="font-semibold mb-4">Key Metrics</h4>
                          <div className="space-y-4">
                            {Object.entries(study.metrics).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="font-bold text-emergency">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Case Details */}
                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <h4 className="font-semibold mb-4">Case Details</h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-gray-600">Patient:</span>
                              <div className="font-medium">{study.patient}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">First Responder:</span>
                              <div className="font-medium">{study.responder}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Response Time:</span>
                              <div className="font-medium text-emergency">{study.responseTime}</div>
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="bg-gray-50 p-6 rounded-2xl">
                          <h4 className="font-semibold mb-4">Patient Satisfaction</h4>
                          <div className="flex items-center mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600">Verified patient review</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Your Story Could Be Next
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of communities already using PulseBridge to transform 
              emergency response and save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/volunteers"
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Volunteer
              </motion.a>
              <motion.a
                href="/partners"
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CaseStudies;