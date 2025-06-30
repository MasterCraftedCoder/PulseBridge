import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  CreditCard,
  Gift,
  Award,
  Zap,
  Crown,
  ArrowRight
} from 'lucide-react';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('family');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    individual: {
      name: 'Individual',
      description: 'Perfect for personal emergency protection',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        'Personal emergency response',
        'AI-powered triage',
        'Basic medical records',
        'Community volunteer access',
        'Mobile app access',
        'Email support'
      ],
      color: 'from-trust to-blue-600',
      icon: Heart,
      popular: false
    },
    family: {
      name: 'Family',
      description: 'Comprehensive protection for your entire family',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        'Up to 6 family members',
        'Priority emergency response',
        'Advanced medical records',
        'Family location sharing',
        'Pediatric emergency protocols',
        'Phone & chat support',
        'Emergency contact automation'
      ],
      color: 'from-emergency to-red-600',
      icon: Users,
      popular: true
    },
    premium: {
      name: 'Premium',
      description: 'Ultimate protection with exclusive benefits',
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      features: [
        'Everything in Family',
        'Dedicated medical concierge',
        'Specialist consultations',
        'Health monitoring integration',
        'Travel emergency coverage',
        '24/7 priority support',
        'Annual health assessment',
        'Exclusive volunteer network'
      ],
      color: 'from-purple-500 to-purple-700',
      icon: Crown,
      popular: false
    }
  };

  const addOns = [
    {
      name: 'Pet Emergency Care',
      description: 'Emergency response for your furry family members',
      price: 4.99,
      icon: '🐕'
    },
    {
      name: 'Travel Protection',
      description: 'Extended coverage when traveling internationally',
      price: 9.99,
      icon: '✈️'
    },
    {
      name: 'Mental Health Support',
      description: '24/7 crisis counseling and mental health resources',
      price: 7.99,
      icon: '🧠'
    }
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
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
              Choose Your <span className="gradient-text">Protection</span> Plan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Comprehensive emergency response protection for you and your loved ones. 
              Join thousands of families who trust PulseBridge for their safety.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <motion.button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                  billingCycle === 'yearly' ? 'bg-success' : 'bg-gray-300'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <motion.span
                  className="ml-3 bg-success text-white px-3 py-1 rounded-full text-sm font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  Save up to 20%
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(plans).map(([key, plan]) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={key}
                  className={`glass-card p-8 relative cursor-pointer transition-all duration-300 ${
                    selectedPlan === key ? 'ring-2 ring-emergency scale-105' : ''
                  } ${plan.popular ? 'ring-2 ring-success' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: Object.keys(plans).indexOf(key) * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedPlan(key)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-success text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold gradient-text">
                        ${getPrice(plan).toFixed(2)}
                      </span>
                      <span className="text-gray-600">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>

                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-success font-medium">
                        Save ${getSavings(plan).toFixed(2)} per year
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full font-semibold py-3 px-6 rounded-2xl transition-all duration-200 ${
                      selectedPlan === key
                        ? 'bg-emergency text-white'
                        : plan.popular
                        ? 'bg-success text-white hover:bg-success/90'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedPlan === key ? 'Selected' : 'Choose Plan'}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
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
              Optional <span className="gradient-text">Add-Ons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your protection with specialized services tailored to your unique needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{addon.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold gradient-text mb-4">
                    +${addon.price}/month
                  </div>
                  <motion.button
                    className="w-full btn-outline"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
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
              Compare <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what's included in each plan to make the best choice for your family's safety.
            </p>
          </motion.div>

          <div className="glass-card p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6">Features</th>
                  <th className="text-center py-4 px-6">Individual</th>
                  <th className="text-center py-4 px-6">Family</th>
                  <th className="text-center py-4 px-6">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Emergency Response',
                  'AI Triage',
                  'Medical Records',
                  'Family Members',
                  'Priority Support',
                  'Travel Coverage',
                  'Health Monitoring',
                  'Concierge Service'
                ].map((feature, index) => (
                  <tr key={feature} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium">{feature}</td>
                    <td className="text-center py-4 px-6">
                      {index < 3 ? (
                        <CheckCircle className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <div className="w-5 h-5 bg-gray-200 rounded-full mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {index < 5 ? (
                        <CheckCircle className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <div className="w-5 h-5 bg-gray-200 rounded-full mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="h-5 w-5 text-success mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our <span className="gradient-text">Subscribers</span> Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                plan: 'Family Plan',
                quote: 'PulseBridge gave me peace of mind knowing my family is protected. When my daughter had an allergic reaction, help arrived in minutes.',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
              },
              {
                name: 'Michael Chen',
                plan: 'Premium Plan',
                quote: 'The concierge service is incredible. They helped coordinate my father\'s care across multiple specialists seamlessly.',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.plan}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
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
              Ready to Protect Your Family?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of families who trust PulseBridge for their emergency protection. 
              Start your subscription today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CreditCard className="h-5 w-5" />
                <span>Start Subscription</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Talk to Expert</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Subscription;