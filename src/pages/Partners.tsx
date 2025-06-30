import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Heart, 
  Users, 
  Shield, 
  Zap,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Download,
  Play,
  Star,
  MapPin
} from 'lucide-react';
import * as React from 'react';

const Partners = () => {
  const [selectedPartnerType, setSelectedPartnerType] = useState('hospitals');
  const [pricingPlan, setPricingPlan] = useState('professional');

  const partnerTypes: { [key: string]: any } = {
    hospitals: {
      title: 'Hospitals & Health Systems',
      icon: Heart,
      description: 'Integrate PulseBridge with your emergency department for faster patient intake and improved outcomes.',
      benefits: [
        'Reduced ER wait times by 40%',
        'Pre-arrival patient data access',
        'Streamlined triage process',
        'Improved patient satisfaction scores',
        'HIPAA-compliant data sharing'
      ],
      features: [
        'Real-time patient status updates',
        'Automated bed management',
        'Staff notification system',
        'Medical history integration',
        'Insurance verification'
      ],
      color: 'from-emergency to-red-600',
      stats: { partners: '450+', satisfaction: '98%', timeReduction: '40%' }
    },
    government: {
      title: 'Government & Emergency Services',
      icon: Shield,
      description: 'Partner with PulseBridge to enhance your community\'s emergency response capabilities.',
      benefits: [
        'Improved emergency response times',
        'Better resource allocation',
        'Enhanced public safety',
        'Community resilience building',
        'Data-driven decision making'
      ],
      features: [
        'Multi-agency coordination',
        'Real-time incident mapping',
        'Resource deployment optimization',
        'Public alert integration',
        'Performance analytics'
      ],
      color: 'from-trust to-blue-600',
      stats: { partners: '120+', coverage: '89%', responseImprovement: '35%' }
    },
    nonprofits: {
      title: 'NGOs & Non-Profits',
      icon: Users,
      description: 'Amplify your community impact with PulseBridge\'s volunteer network and emergency response platform.',
      benefits: [
        'Expanded volunteer reach',
        'Professional training programs',
        'Community engagement tools',
        'Impact measurement',
        'Grant funding opportunities'
      ],
      features: [
        'Volunteer management system',
        'Training certification platform',
        'Community outreach tools',
        'Impact reporting dashboard',
        'Fundraising integration'
      ],
      color: 'from-success to-green-600',
      stats: { partners: '200+', volunteers: '15K+', impact: '92%' }
    },
    corporate: {
      title: 'Corporate Partners',
      icon: Building2,
      description: 'Enhance your workplace safety and employee wellness with PulseBridge\'s enterprise solutions.',
      benefits: [
        'Employee safety enhancement',
        'Workplace emergency preparedness',
        'CSR program integration',
        'Brand reputation improvement',
        'Tax incentive opportunities'
      ],
      features: [
        'Workplace emergency systems',
        'Employee training programs',
        'Safety compliance tools',
        'Incident reporting platform',
        'Wellness program integration'
      ],
      color: 'from-purple-500 to-purple-700',
      stats: { partners: '85+', employees: '500K+', incidents: '67%' }
    }
  };

  const pricingPlans = {
    starter: {
      name: 'Starter',
      price: 2500,
      period: 'month',
      description: 'Perfect for small clinics and community organizations',
      features: [
        'Up to 50 emergency responses/month',
        'Basic volunteer network access',
        'Standard training materials',
        'Email support',
        'Monthly reporting'
      ],
      color: 'border-gray-200',
      popular: false
    },
    professional: {
      name: 'Professional',
      price: 7500,
      period: 'month',
      description: 'Ideal for hospitals and large healthcare systems',
      features: [
        'Unlimited emergency responses',
        'Full volunteer network access',
        'Advanced training programs',
        'Priority phone support',
        'Real-time analytics dashboard',
        'Custom integrations',
        'Dedicated account manager'
      ],
      color: 'border-emergency',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for government and large organizations',
      features: [
        'Everything in Professional',
        'Multi-location support',
        'Advanced API access',
        'Custom development',
        '24/7 dedicated support',
        'On-site training',
        'SLA guarantees'
      ],
      color: 'border-trust',
      popular: false
    }
  };

  const successStories = [
    {
      name: 'San Francisco General Hospital',
      type: 'Hospital System',
      location: 'San Francisco, CA',
      results: '40% faster ER intake, 95% patient satisfaction',
      quote: 'PulseBridge has revolutionized our emergency department workflow. We\'re seeing patients faster and with better outcomes.',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      logo: '🏥'
    },
    {
      name: 'Austin Fire Department',
      type: 'Emergency Services',
      location: 'Austin, TX',
      results: '35% improvement in response times, 500+ lives saved',
      quote: 'The integration with our dispatch system has been seamless. Our response times have never been better.',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      logo: '🚒'
    },
    {
      name: 'Community Health Alliance',
      type: 'Non-Profit',
      location: 'Denver, CO',
      results: '300% increase in volunteer engagement, 12 communities served',
      quote: 'PulseBridge has helped us scale our community health programs beyond what we thought possible.',
      avatar: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      logo: '🤝'
    }
  ];

  const integrationPartners = [
    { name: 'Epic', logo: '🏥', category: 'EHR' },
    { name: 'Cerner', logo: '📊', category: 'Healthcare IT' },
    { name: 'Salesforce', logo: '☁️', category: 'CRM' },
    { name: 'Microsoft', logo: '💻', category: 'Cloud Services' },
    { name: 'AWS', logo: '🔧', category: 'Infrastructure' },
    { name: 'Twilio', logo: '📱', category: 'Communications' }
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
                Partner for <span className="gradient-text">Impact</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Join 850+ organizations already using PulseBridge to transform emergency response 
                and save lives in their communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Building2 className="h-5 w-5" />
                  <span>Become a Partner</span>
                </motion.button>
                <motion.button
                  className="btn-outline flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Demo</span>
                </motion.button>
              </div>

              {/* Partner Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">850+</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">40%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-trust/20 to-emergency/20 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-trust to-emergency rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Building2 className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Partner?</h3>
                  <p className="text-gray-600">Transform your emergency response</p>
                </div>
              </div>

              {/* Floating Partner Logos */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl">🏥</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-3xl">🚒</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
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
              Partnership <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with diverse organizations to create comprehensive emergency response networks. 
              Find the partnership model that fits your organization.
            </p>
          </motion.div>

          {/* Partner Type Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(partnerTypes).map(([key, type]) => {
              const Icon = type.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setSelectedPartnerType(key)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 flex items-center space-x-2 ${
                    selectedPartnerType === key
                      ? 'bg-emergency text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{(partnerTypes as any)[key].title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Partner Type Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPartnerType}
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${(partnerTypes as any)[selectedPartnerType].color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      {React.createElement((partnerTypes as any)[selectedPartnerType].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{(partnerTypes as any)[selectedPartnerType].title}</h3>
                      <p className="text-gray-600">Partnership Program</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {(partnerTypes as any)[selectedPartnerType].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {((partnerTypes as any)[selectedPartnerType].benefits as string[]).map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(((partnerTypes as any)[selectedPartnerType].stats as any)).map(([key, value]: [string, any]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-xl font-bold gradient-text">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Platform Features:</h4>
                  <div className="space-y-3 mb-6">
                    {((partnerTypes as any)[selectedPartnerType].features as string[]).map((feature: string, index: number) => (
                      <motion.div
                        key={feature}
                        className="p-4 bg-gray-50 rounded-xl flex items-center justify-between"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Start Partnership</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                    
                    <motion.button
                      className="w-full btn-outline flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Partnership Guide</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing */}
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
              Flexible <span className="gradient-text">Pricing</span> Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your organization's size and needs. 
              All plans include our core emergency response platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <motion.div
                key={key}
                className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-emergency' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Object.keys(pricingPlans).indexOf(key) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emergency text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-4xl font-bold gradient-text">${plan.price.toLocaleString()}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: any, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full font-semibold py-3 px-6 rounded-2xl transition-all duration-200 ${
                    plan.popular
                      ? 'bg-emergency text-white hover:bg-emergency/90'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {key === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Partner <span className="gradient-text">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our partners are transforming emergency response and achieving 
              remarkable results in their communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{story.logo}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.type}</p>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500">{story.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-lg font-semibold text-success mb-2">{story.results}</div>
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Verified Partner</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
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
              Technology <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PulseBridge seamlessly integrates with your existing systems and workflows. 
              We work with leading technology partners to ensure smooth implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrationPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="text-center p-6 glass-card hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <div className="font-medium text-gray-700 mb-1">{partner.name}</div>
                <div className="text-xs text-gray-500">{partner.category}</div>
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
              Ready to Transform Emergency Response?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of organizations already using PulseBridge to save lives 
              and improve emergency outcomes in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building2 className="h-5 w-5" />
                <span>Become a Partner</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Schedule Demo</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Partners;