import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  FileText,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Your personal and medical information is protected with military-grade encryption and blockchain security.',
      color: 'from-emergency to-red-600'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect, how we use it, and who has access to it.',
      color: 'from-trust to-blue-600'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Only authorized emergency responders can access your information during verified emergencies.',
      color: 'from-success to-green-600'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have complete control over your data, including the ability to update, delete, or restrict access.',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const dataTypes = [
    {
      category: 'Personal Information',
      items: [
        'Name, address, and contact information',
        'Emergency contacts and relationships',
        'Age, gender, and basic demographics',
        'Account credentials and preferences'
      ],
      purpose: 'Identity verification and emergency contact'
    },
    {
      category: 'Medical Information',
      items: [
        'Medical conditions and allergies',
        'Current medications and dosages',
        'Medical history and procedures',
        'Healthcare provider information'
      ],
      purpose: 'Emergency medical response and treatment'
    },
    {
      category: 'Location Data',
      items: [
        'Real-time GPS coordinates during emergencies',
        'Home and work addresses',
        'Frequently visited locations',
        'Emergency incident locations'
      ],
      purpose: 'Emergency response dispatch and routing'
    },
    {
      category: 'Usage Information',
      items: [
        'App usage patterns and preferences',
        'Emergency response history',
        'Training completion records',
        'Volunteer activity logs'
      ],
      purpose: 'Service improvement and quality assurance'
    }
  ];

  const rights = [
    'Access your personal data and receive a copy',
    'Correct inaccurate or incomplete information',
    'Delete your account and associated data',
    'Restrict processing of your information',
    'Data portability to other services',
    'Object to certain data processing activities',
    'Withdraw consent for optional data collection',
    'File complaints with regulatory authorities'
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Your privacy and data security are fundamental to everything we do. 
              Learn how we protect your information while saving lives.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>Last updated: January 15, 2025</span>
              <span>•</span>
              <span>Effective: January 15, 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide how we handle your personal information 
              and ensure your privacy is protected at every step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Collection */}
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
              What Data We <span className="gradient-text">Collect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We only collect information that's necessary to provide emergency response services 
              and improve your safety. Here's exactly what we collect and why.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((dataType, index) => (
              <motion.div
                key={dataType.category}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{dataType.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-700">What we collect:</h4>
                  <ul className="space-y-2">
                    {dataType.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-trust/10 rounded-xl">
                  <h4 className="font-semibold mb-2 text-trust">Purpose:</h4>
                  <p className="text-gray-700">{dataType.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
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
              How We <span className="gradient-text">Use</span> Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your information is used exclusively for emergency response, service improvement, 
              and ensuring your safety. We never sell or misuse your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-emergency mr-3" />
                Emergency Response
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emergency rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Immediate Response</h4>
                    <p className="text-gray-600">Location and medical data shared with nearest responders during emergencies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emergency rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Medical History Access</h4>
                    <p className="text-gray-600">Critical medical information provided to healthcare professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emergency rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Emergency Contacts</h4>
                    <p className="text-gray-600">Automatic notification of designated emergency contacts</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Database className="h-6 w-6 text-trust mr-3" />
                Service Improvement
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-trust rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Response Optimization</h4>
                    <p className="text-gray-600">Analyzing response times and patterns to improve emergency services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-trust rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Platform Enhancement</h4>
                    <p className="text-gray-600">Using aggregated data to improve app functionality and user experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-trust rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold">Training Programs</h4>
                    <p className="text-gray-600">Developing better training materials based on real emergency scenarios</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
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
              Your <span className="gradient-text">Rights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have complete control over your personal information. 
              Here are your rights and how to exercise them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
              <motion.div
                key={right}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{right}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 glass-card p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Exercise Your Rights</h3>
            <p className="text-gray-600 mb-6">
              To exercise any of these rights, contact our privacy team. 
              We'll respond within 30 days and verify your identity for security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:privacy@pulsebridge.com"
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                <span>Email Privacy Team</span>
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-outline flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-4 w-4" />
                <span>Contact Support</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
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
              Security <span className="gradient-text">Measures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ multiple layers of security to protect your information, 
              from encryption to access controls and regular security audits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Encryption',
                description: 'All data is encrypted in transit and at rest using AES-256 encryption standards.',
                features: ['End-to-end encryption', 'Secure key management', 'Regular encryption updates']
              },
              {
                icon: Shield,
                title: 'Access Control',
                description: 'Strict access controls ensure only authorized personnel can access your data.',
                features: ['Multi-factor authentication', 'Role-based permissions', 'Regular access reviews']
              },
              {
                icon: FileText,
                title: 'Compliance',
                description: 'We comply with HIPAA, GDPR, and other privacy regulations worldwide.',
                features: ['HIPAA compliance', 'GDPR compliance', 'Regular audits']
              }
            ].map((measure, index) => {
              const Icon = measure.icon;
              return (
                <motion.div
                  key={measure.title}
                  className="glass-card p-8 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="h-12 w-12 text-trust mb-6" />
                  <h3 className="text-xl font-bold mb-4">{measure.title}</h3>
                  <p className="text-gray-600 mb-6">{measure.description}</p>
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-emergency to-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our privacy team is here to help. Contact us with any questions 
              about how we handle your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:privacy@pulsebridge.com"
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                <span>privacy@pulsebridge.com</span>
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Privacy;