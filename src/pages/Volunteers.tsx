import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  BookOpen,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Download,
  Calendar
} from 'lucide-react';

const Volunteers = () => {
  const [selectedTrack, setSelectedTrack] = useState('basic');
  const [currentStep, setCurrentStep] = useState(0);

  const volunteerTracks: { [key: string]: any } = {
    basic: {
      title: 'Community Responder',
      duration: '8 hours',
      description: 'Essential emergency response training for community volunteers',
      requirements: ['18+ years old', 'Background check', 'Basic fitness'],
      modules: [
        'CPR & First Aid Certification',
        'Emergency Communication',
        'PulseBridge App Training',
        'Legal & Ethical Guidelines'
      ],
      badge: '🏅',
      color: 'from-trust to-blue-600'
    },
    medical: {
      title: 'Medical Professional',
      duration: '4 hours',
      description: 'Advanced training for healthcare professionals',
      requirements: ['Medical license', 'Professional insurance', 'Hospital affiliation'],
      modules: [
        'Advanced Life Support',
        'Triage Protocols',
        'Medical Record Access',
        'Liability Protection'
      ],
      badge: '⚕️',
      color: 'from-emergency to-red-600'
    },
    specialist: {
      title: 'Specialist Responder',
      duration: '12 hours',
      description: 'Specialized training for specific emergency types',
      requirements: ['Basic certification', 'Specialized skills', 'Additional screening'],
      modules: [
        'Mental Health Crisis',
        'Pediatric Emergencies',
        'Disaster Response',
        'Team Leadership'
      ],
      badge: '🎖️',
      color: 'from-success to-green-600'
    }
  };

  const onboardingSteps = [
    {
      title: 'Application',
      description: 'Complete your volunteer application with personal details and emergency contacts',
      icon: Users,
      duration: '5 minutes'
    },
    {
      title: 'Background Check',
      description: 'Secure background verification to ensure community safety',
      icon: Shield,
      duration: '2-3 days'
    },
    {
      title: 'Training Selection',
      description: 'Choose your training track based on your skills and availability',
      icon: BookOpen,
      duration: '1 minute'
    },
    {
      title: 'Certification',
      description: 'Complete online and hands-on training modules',
      icon: Award,
      duration: '4-12 hours'
    },
    {
      title: 'Activation',
      description: 'Join the active volunteer network and start helping your community',
      icon: Heart,
      duration: 'Immediate'
    }
  ];

  const volunteerBenefits = [
    {
      icon: Heart,
      title: 'Save Lives',
      description: 'Make a direct impact in emergency situations and help save lives in your community'
    },
    {
      icon: Award,
      title: 'NFT Badges',
      description: 'Earn unique digital badges and certificates for your volunteer achievements'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a network of like-minded individuals committed to helping others'
    },
    {
      icon: BookOpen,
      title: 'Training',
      description: 'Receive professional-grade emergency response training and certifications'
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'Full liability coverage and legal protection while volunteering'
    },
    {
      icon: Star,
      title: 'Recognition',
      description: 'Public recognition and awards for outstanding volunteer service'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Cardiologist & Volunteer',
      location: 'San Francisco, CA',
      quote: 'Being a PulseBridge volunteer has been incredibly rewarding. The training was comprehensive, and I\'ve already helped save three lives in my neighborhood.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      badge: '⚕️',
      responses: 47
    },
    {
      name: 'Mike Rodriguez',
      role: 'EMT & Community Leader',
      location: 'Austin, TX',
      quote: 'The PulseBridge network gives me the ability to help people even when I\'m off duty. The app makes it easy to respond quickly and effectively.',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      badge: '🏅',
      responses: 89
    },
    {
      name: 'Jennifer Walsh',
      role: 'Nurse & Mother',
      location: 'Denver, CO',
      quote: 'As a working mom, I love that I can help my community on my own schedule. The flexible volunteer system works perfectly with my life.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      badge: '🎖️',
      responses: 34
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Become a <span className="gradient-text">Life Saver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Join 25,000+ volunteers making a difference in their communities. 
                Get trained, get certified, and help save lives with PulseBridge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="h-5 w-5" />
                  <span>Start Application</span>
                </motion.button>
                <motion.button
                  className="btn-outline flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Training Video</span>
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">25K+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">12K+</div>
                  <div className="text-sm text-gray-600">Lives Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">450+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-emergency/20 to-trust/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Heart className="h-16 w-16 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Help?</h3>
                  <p className="text-gray-600">Your community needs you</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white text-2xl">🏅</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-trust rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-white text-3xl">⚕️</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Tracks */}
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
              Choose Your <span className="gradient-text">Training Track</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer specialized training programs designed for different skill levels and backgrounds. 
              Find the track that's right for you.
            </p>
          </motion.div>

          {/* Track Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(volunteerTracks).map(([key, track]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedTrack(key)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 ${
                  selectedTrack === key
                    ? 'bg-emergency text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{track.badge}</span>
                {track.title}
              </motion.button>
            ))}
          </div>

          {/* Track Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTrack}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${volunteerTracks[selectedTrack].color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      <span className="text-2xl">{volunteerTracks[selectedTrack].badge}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{(volunteerTracks as any)[selectedTrack].title}</h3>
                      <p className="text-gray-600">{volunteerTracks[selectedTrack].duration} training</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {volunteerTracks[selectedTrack].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {volunteerTracks[selectedTrack].requirements.map((req: any, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Training Modules:</h4>
                  <div className="space-y-3">
                    {volunteerTracks[selectedTrack].modules.map((module: any, index: number) => (
                      <motion.div
                        key={module}
                        className="p-4 bg-gray-50 rounded-xl flex items-center justify-between"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="font-medium">{module}</span>
                        </div>
                        <Play className="h-4 w-4 text-gray-400" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full mt-6 btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Start This Track</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Onboarding Process */}
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
              Simple <span className="gradient-text">Onboarding</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started as a PulseBridge volunteer is easy. Follow these five simple steps 
              to join our life-saving community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full hidden lg:block">
              <motion.div
                className="h-full bg-gradient-to-r from-emergency to-success rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {onboardingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="text-sm text-emergency font-medium">{step.duration}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Volunteer <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Being a PulseBridge volunteer comes with meaningful rewards and recognition 
              for your service to the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emergency to-trust rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-emergency/5 to-trust/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Volunteer <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our amazing volunteers about their experiences saving lives 
              and making a difference in their communities.
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
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="text-2xl">{testimonial.badge}</div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.responses} responses
                  </div>
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
              Ready to Save Lives?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of volunteers making a real difference in emergency response. 
              Your community needs heroes like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-5 w-5" />
                <span>Start Application</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                <span>Download Brochure</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Volunteers;