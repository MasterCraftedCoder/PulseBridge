import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  Scale,
  Lock,
  Heart
} from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using PulseBridge services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: 'Service Description',
      content: `PulseBridge provides emergency response coordination services through AI-powered triage, volunteer networks, and medical record management. Our services are designed to supplement, not replace, traditional emergency services.`
    },
    {
      title: 'User Responsibilities',
      content: `Users must provide accurate information, use services only for legitimate emergencies, maintain confidentiality of account credentials, and comply with all applicable laws and regulations.`
    },
    {
      title: 'Emergency Services Disclaimer',
      content: `PulseBridge is not a substitute for professional emergency services. In life-threatening situations, always call 911 or your local emergency number first. Our services are designed to supplement traditional emergency response.`
    },
    {
      title: 'Volunteer Services',
      content: `Volunteer responders are independent contractors, not employees of PulseBridge. While we provide training and screening, users acknowledge that volunteer response times and quality may vary.`
    },
    {
      title: 'Privacy and Data Protection',
      content: `We are committed to protecting your privacy and personal information. Our data practices are governed by our Privacy Policy, which is incorporated by reference into these Terms.`
    },
    {
      title: 'Limitation of Liability',
      content: `PulseBridge's liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, special, or consequential damages arising from use of our services.`
    },
    {
      title: 'Termination',
      content: `We may terminate or suspend your account and access to services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.`
    }
  ];

  const keyPoints = [
    {
      icon: AlertTriangle,
      title: 'Emergency Disclaimer',
      description: 'Always call 911 for life-threatening emergencies. PulseBridge supplements traditional services.',
      color: 'from-emergency to-red-600'
    },
    {
      icon: Shield,
      title: 'Privacy Protection',
      description: 'Your medical and personal data is protected with enterprise-grade security measures.',
      color: 'from-trust to-blue-600'
    },
    {
      icon: Users,
      title: 'Volunteer Network',
      description: 'Volunteers are independent contractors providing community-based emergency assistance.',
      color: 'from-success to-green-600'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'All users must comply with applicable laws and use services responsibly.',
      color: 'from-purple-500 to-purple-700'
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Please read these terms carefully before using PulseBridge emergency response services. 
              These terms govern your use of our platform and services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span>Last updated: January 15, 2025</span>
              <span>•</span>
              <span>Effective: January 15, 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
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
              Key <span className="gradient-text">Points</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important highlights from our Terms of Service that every user should understand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-br from-trust/5 to-success/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* Additional Important Sections */}
              <motion.div
                className="border-t border-gray-200 pt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-6">Important Additional Terms</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Heart className="h-5 w-5 text-emergency mr-2" />
                      Medical Information
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Provide accurate medical history</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Update information regularly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Maintain confidentiality</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Lock className="h-5 w-5 text-trust mr-2" />
                      Account Security
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Protect login credentials</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Report unauthorized access</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Use strong passwords</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                className="border-t border-gray-200 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h3 className="text-xl font-bold mb-4">Governing Law and Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the State of California, 
                  without regard to its conflict of law provisions. Any disputes arising under these 
                  Terms shall be subject to the exclusive jurisdiction of the courts located in 
                  San Francisco County, California.
                </p>
              </motion.div>

              {/* Changes to Terms */}
              <motion.div
                className="border-t border-gray-200 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Changes to Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of 
                  significant changes via email or through our platform. Continued use of our services 
                  after changes constitutes acceptance of the new Terms.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions About Our <span className="gradient-text">Terms</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our legal team is available to help clarify any questions about these Terms of Service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Mail className="h-12 w-12 text-trust mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Legal Team</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed answers to legal questions
                </p>
                <motion.a
                  href="mailto:legal@pulsebridge.com"
                  className="btn-primary w-full block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  legal@pulsebridge.com
                </motion.a>
              </motion.div>

              <motion.div
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Phone className="h-12 w-12 text-emergency mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Legal Hotline</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our legal team
                </p>
                <motion.a
                  href="tel:1-800-PULSE-LAW"
                  className="btn-secondary w-full block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  1-800-PULSE-LAW
                </motion.a>
              </motion.div>

              <motion.div
                className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Calendar className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Schedule Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Book a meeting with our legal team
                </p>
                <motion.button
                  className="btn-outline w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Meeting
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-emergency to-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              By using PulseBridge, you agree to these Terms of Service. 
              Join our community and help save lives today.
            </p>
            <motion.a
              href="/volunteers"
              className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-5 w-5" />
              <span>Join PulseBridge</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Terms;