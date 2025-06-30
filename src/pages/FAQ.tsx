import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Phone, 
  Mail, 
  MessageCircle,
  Heart,
  Shield,
  Users,
  Clock,
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'emergency', name: 'Emergency Response', icon: Heart },
    { id: 'volunteers', name: 'Volunteers', icon: Users },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield },
    { id: 'technical', name: 'Technical Support', icon: Phone },
    { id: 'billing', name: 'Billing & Plans', icon: CheckCircle }
  ];

  const faqData = [
    {
      id: 1,
      category: 'emergency',
      question: 'How quickly can PulseBridge respond to an emergency?',
      answer: 'Our average response time is 3.2 minutes from the moment you activate emergency assistance. This includes AI triage assessment, volunteer dispatch, and first responder arrival. Response times may vary based on your location and volunteer availability in your area.',
      priority: 'high'
    },
    {
      id: 2,
      category: 'emergency',
      question: 'What types of emergencies does PulseBridge handle?',
      answer: 'PulseBridge handles all types of medical emergencies including cardiac events, strokes, breathing difficulties, severe injuries, allergic reactions, and mental health crises. Our AI triage system is trained to assess and prioritize all emergency situations.',
      priority: 'high'
    },
    {
      id: 3,
      category: 'volunteers',
      question: 'What qualifications do I need to become a volunteer?',
      answer: 'Basic volunteers need to be 18+, pass a background check, and complete our 8-hour training program. Medical professionals can join with shorter training (4 hours) if they have current licenses. All volunteers receive CPR/First Aid certification.',
      priority: 'medium'
    },
    {
      id: 4,
      category: 'volunteers',
      question: 'How often am I expected to respond as a volunteer?',
      answer: 'There\'s no minimum response requirement. You can set your availability in the app and only respond when you\'re able. Most volunteers respond to 2-5 emergencies per month, but this varies by location and personal availability.',
      priority: 'medium'
    },
    {
      id: 5,
      category: 'privacy',
      question: 'How is my medical information protected?',
      answer: 'We use military-grade encryption and blockchain technology to secure your medical data. Information is only accessible to verified responders during active emergencies. We\'re fully HIPAA compliant and never share data with third parties.',
      priority: 'high'
    },
    {
      id: 6,
      category: 'privacy',
      question: 'Can I control what medical information is shared?',
      answer: 'Yes, you have complete control over your medical profile. You can choose what information to include, set different access levels for different types of responders, and update your preferences at any time through the app.',
      priority: 'medium'
    },
    {
      id: 7,
      category: 'technical',
      question: 'What if I don\'t have internet during an emergency?',
      answer: 'The PulseBridge app works offline for emergency activation. It will automatically connect when service is restored to dispatch help. We also integrate with traditional 911 systems as a backup.',
      priority: 'high'
    },
    {
      id: 8,
      category: 'technical',
      question: 'Which devices and platforms are supported?',
      answer: 'PulseBridge is available on iOS (12+) and Android (8+). We also have a web app and integrate with popular wearable devices like Apple Watch, Fitbit, and medical alert systems.',
      priority: 'low'
    },
    {
      id: 9,
      category: 'billing',
      question: 'How much does PulseBridge cost?',
      answer: 'Basic emergency response is free for individuals. Premium plans start at $9.99/month and include advanced features like family coverage, medical record storage, and priority response. Enterprise plans are available for organizations.',
      priority: 'medium'
    },
    {
      id: 10,
      category: 'billing',
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 30-day free trial of our Premium plan. You can cancel anytime during the trial period with no charges. Basic emergency services remain free forever.',
      priority: 'low'
    },
    {
      id: 11,
      category: 'emergency',
      question: 'What happens if no volunteers are available?',
      answer: 'Our system automatically escalates to traditional emergency services (911) if no volunteers are available within 60 seconds. We also have partnerships with professional EMS services in most areas as backup.',
      priority: 'high'
    },
    {
      id: 12,
      category: 'volunteers',
      question: 'Am I legally protected when volunteering?',
      answer: 'Yes, all volunteers are covered by comprehensive liability insurance and Good Samaritan laws. We provide legal protection for actions taken in good faith during emergency response situations.',
      priority: 'medium'
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-emergency" />;
      case 'medium': return <Info className="h-4 w-4 text-trust" />;
      default: return <CheckCircle className="h-4 w-4 text-success" />;
    }
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Find answers to common questions about PulseBridge emergency response, 
              volunteer programs, privacy, and technical support.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trust focus:border-transparent shadow-lg"
              />
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Questions Answered', value: '10K+', icon: HelpCircle },
              { label: 'Avg Response Time', value: '< 2 min', icon: Clock },
              { label: 'Satisfaction Rate', value: '98%', icon: CheckCircle },
              { label: 'Support Channels', value: '24/7', icon: MessageCircle }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Category Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    const categoryCount = category.id === 'all' 
                      ? faqData.length 
                      : faqData.filter(faq => faq.category === category.id).length;

                    return (
                      <motion.button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'bg-emergency text-white shadow-lg' 
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          isActive ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          {categoryCount}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Contact Support */}
                <div className="mt-8 p-4 bg-gradient-to-br from-trust/10 to-emergency/10 rounded-xl">
                  <h4 className="font-semibold mb-2">Need More Help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Can't find what you're looking for? Our support team is here 24/7.
                  </p>
                  <div className="space-y-2">
                    <motion.button
                      className="w-full btn-primary text-sm py-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat
                    </motion.button>
                    <motion.button
                      className="w-full btn-outline text-sm py-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email Support
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">
                    {selectedCategory === 'all' ? 'All Questions' : 
                     categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <span className="text-gray-500">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-500">
                      Try adjusting your search or browse different categories.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => {
                      const isOpen = openItems.includes(faq.id);
                      
                      return (
                        <motion.div
                          key={faq.id}
                          className="glass-card overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <motion.button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                            whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-start space-x-3 flex-1">
                                {getPriorityIcon(faq.priority)}
                                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                  {faq.question}
                                </h3>
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              </motion.div>
                            </div>
                          </motion.button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <div className="pl-7 border-l-2 border-gray-100">
                                    <p className="text-gray-600 leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-trust/5 to-success/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our support team is available 24/7 to help with any questions about 
              PulseBridge emergency response, volunteer programs, or technical issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <MessageCircle className="h-12 w-12 text-trust mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Get instant help from our support team
                </p>
                <motion.button
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Chat
                </motion.button>
              </motion.div>

              <motion.div
                className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Phone className="h-12 w-12 text-emergency mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Emergency Line</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency support hotline
                </p>
                <motion.a
                  href="tel:1-800-PULSE-911"
                  className="btn-secondary w-full block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call Now
                </motion.a>
              </motion.div>

              <motion.div
                className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Mail className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Detailed help via email support
                </p>
                <motion.a
                  href="mailto:support@pulsebridge.com"
                  className="btn-outline w-full block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Email
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;