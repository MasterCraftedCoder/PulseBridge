import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  AlertTriangle,
  CheckCircle,
  Building,
  Users,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      description: '24/7 emergency response line',
      contact: '1-800-PULSE-911',
      action: 'Call Now',
      color: 'from-emergency to-red-600',
      urgent: true
    },
    {
      icon: MessageCircle,
      title: 'Support Center',
      description: 'Technical support and assistance',
      contact: 'support@pulsebridge.com',
      action: 'Get Help',
      color: 'from-trust to-blue-600',
      urgent: false
    },
    {
      icon: Mail,
      title: 'General Inquiries',
      description: 'Questions about our services',
      contact: 'hello@pulsebridge.com',
      action: 'Send Email',
      color: 'from-success to-green-600',
      urgent: false
    },
    {
      icon: Building,
      title: 'Business Partnerships',
      description: 'Partnership and collaboration opportunities',
      contact: 'partners@pulsebridge.com',
      action: 'Partner With Us',
      color: 'from-purple-500 to-purple-700',
      urgent: false
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Emergency Way, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      hours: 'Mon-Fri: 9AM-6PM PST',
      isHeadquarters: true
    },
    {
      city: 'New York',
      address: '456 Response Ave, New York, NY 10001',
      phone: '+1 (212) 555-0456',
      hours: 'Mon-Fri: 9AM-6PM EST',
      isHeadquarters: false
    },
    {
      city: 'Austin',
      address: '789 Community Blvd, Austin, TX 78701',
      phone: '+1 (512) 555-0789',
      hours: 'Mon-Fri: 9AM-6PM CST',
      isHeadquarters: false
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get emergency help?',
      answer: 'Our average response time is 3.2 minutes, with volunteers typically arriving within 2-5 minutes of your emergency call.'
    },
    {
      question: 'Is PulseBridge available in my area?',
      answer: 'We currently serve 450+ cities across the United States. Check our coverage map or contact us to see if we\'re available in your location.'
    },
    {
      question: 'How do I become a volunteer?',
      answer: 'Visit our Volunteers page to start the application process. Training takes 4-12 hours depending on your chosen track.'
    },
    {
      question: 'What information do volunteers have access to?',
      answer: 'Volunteers only see essential emergency information needed to help you, such as your location, emergency type, and critical medical alerts.'
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              We're here to help 24/7. Whether you need emergency assistance, have questions about our services, 
              or want to partner with us, we're ready to respond.
            </p>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div
            className="glass-card p-6 max-w-2xl mx-auto mb-12 border-l-4 border-emergency"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-emergency mr-3" />
              <h3 className="text-xl font-bold text-emergency">Emergency Situation?</h3>
            </div>
            <p className="text-gray-700 mb-4">
              If you're experiencing a life-threatening emergency, don't wait! 
              Call 911 immediately or use our emergency response system.
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
              <motion.a
                href="/live-demo"
                className="bg-trust hover:bg-trust/90 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-4 w-4" />
                <span>Use PulseBridge</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Multiple Ways to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for your needs. 
              We're committed to providing fast, helpful responses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  className={`glass-card p-8 text-center hover:shadow-xl transition-all duration-300 group ${
                    method.urgent ? 'ring-2 ring-emergency' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {method.urgent && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emergency text-white px-3 py-1 rounded-full text-xs font-medium">
                        URGENT
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-emergency transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-medium text-lg mb-4">{method.contact}</p>

                  <motion.button
                    className={`w-full font-semibold py-3 px-6 rounded-2xl transition-all duration-200 ${
                      method.urgent
                        ? 'bg-emergency text-white hover:bg-emergency/90'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {method.action}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-trust/5 to-success/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="volunteer">Volunteer Application</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust transition-colors"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust transition-colors resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-16 w-16 text-success mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
                    }}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info & Response Times */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Response Times */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-trust mr-3" />
                  Response Times
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{"< 2 hrs"}</div>
                    <div className="text-sm text-gray-600">Email Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{"< 30 min"}</div>
                    <div className="text-sm text-gray-600">Emergency Calls</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-success/10 rounded-xl">
                  <p className="text-sm text-success font-medium text-center">
                    ✓ 99.9% uptime • ✓ 24/7 availability • ✓ Multi-language support
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Volunteer Application', href: '/volunteers', icon: Users },
                    { name: 'Partner With Us', href: '/partners', icon: Building },
                    { name: 'Emergency Demo', href: '/live-demo', icon: Heart },
                    { name: 'Help Center', href: '/faq', icon: MessageCircle }
                  ].map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="h-5 w-5 text-trust" />
                          <span className="font-medium">{link.name}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-trust transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our offices or reach out to our local teams 
              for region-specific support and partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className={`glass-card p-8 hover:shadow-xl transition-all duration-300 ${
                  office.isHeadquarters ? 'ring-2 ring-trust' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {office.isHeadquarters && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-trust text-white px-3 py-1 rounded-full text-xs font-medium">
                      HEADQUARTERS
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <MapPin className="h-12 w-12 text-trust mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">{office.city}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{office.hours}</span>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-6 btn-outline flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Get Directions</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about PulseBridge services, 
              volunteer programs, and emergency response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            <motion.a
              href="/faq"
              className="btn-outline inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All FAQs</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;