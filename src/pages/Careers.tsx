import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart,
  Search,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Coffee,
  Laptop
} from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'medical', name: 'Medical Affairs', count: 3 },
    { id: 'operations', name: 'Operations', count: 2 },
    { id: 'design', name: 'Design', count: 1 },
    { id: 'marketing', name: 'Marketing', count: 1 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'san-francisco', name: 'San Francisco, CA' },
    { id: 'austin', name: 'Austin, TX' },
    { id: 'new-york', name: 'New York, NY' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Lead the development of our AI-powered emergency triage system. Work with cutting-edge machine learning technologies to save lives.',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow', 'Healthcare domain knowledge preferred'],
      benefits: ['Equity package', 'Health insurance', 'Flexible PTO'],
      posted: '2 days ago',
      urgent: true
    },
    {
      id: 2,
      title: 'Emergency Medicine Consultant',
      department: 'medical',
      location: 'Remote',
      type: 'Part-time',
      salary: '$80k - $120k',
      description: 'Provide medical expertise for our emergency response protocols and training programs.',
      requirements: ['MD with ER experience', 'Board certification', 'Telemedicine experience'],
      benefits: ['Flexible schedule', 'Professional development', 'Impact-driven work'],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Build and maintain our web platform and mobile applications that connect communities in emergencies.',
      requirements: ['React/Node.js expertise', '3+ years experience', 'Mobile development preferred'],
      benefits: ['Stock options', 'Health coverage', 'Learning budget'],
      posted: '3 days ago',
      urgent: false
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k - $140k',
      description: 'Design intuitive interfaces for emergency situations. Create user experiences that work under pressure.',
      requirements: ['5+ years UX design', 'Figma/Sketch proficiency', 'Mobile-first design'],
      benefits: ['Design conference budget', 'Top-tier equipment', 'Flexible hours'],
      posted: '5 days ago',
      urgent: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140k - $180k',
      description: 'Ensure 99.99% uptime for our life-critical emergency response infrastructure.',
      requirements: ['AWS/GCP expertise', 'Kubernetes', 'CI/CD pipelines'],
      benefits: ['On-call compensation', 'Professional certification budget', 'Equity'],
      posted: '1 day ago',
      urgent: true
    },
    {
      id: 6,
      title: 'Community Operations Manager',
      department: 'operations',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Manage volunteer networks and community partnerships across the Northeast region.',
      requirements: ['Community management experience', 'Non-profit background preferred', 'Excellent communication'],
      benefits: ['Travel opportunities', 'Community impact', 'Professional growth'],
      posted: '1 week ago',
      urgent: false
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Mission-Driven Work',
      description: 'Every day you\'ll know your work directly saves lives and helps communities.'
    },
    {
      icon: TrendingUp,
      title: 'Rapid Growth',
      description: 'Join a fast-growing company with opportunities for career advancement.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision insurance plus mental health support.'
    },
    {
      icon: Laptop,
      title: 'Top Equipment',
      description: 'Latest MacBook Pro, monitors, and any tools you need to do your best work.'
    },
    {
      icon: Coffee,
      title: 'Learning Budget',
      description: '$2,000 annual budget for conferences, courses, and professional development.'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || 
      (selectedLocation === 'remote' && job.location === 'Remote') ||
      job.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

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
                Join Our <span className="gradient-text">Mission</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Help us build the future of emergency response. Work with cutting-edge technology 
                while making a real difference in people's lives every day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase className="h-5 w-5" />
                  <span>View Open Positions</span>
                </motion.button>
                <motion.button
                  className="btn-outline flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="h-5 w-5" />
                  <span>Meet the Team</span>
                </motion.button>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">$50M</div>
                  <div className="text-sm text-gray-600">Series B Funding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4.9★</div>
                  <div className="text-sm text-gray-600">Glassdoor Rating</div>
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
                    <Briefcase className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Ready to Make Impact?</h3>
                  <p className="text-gray-600">Join our life-saving mission</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white text-2xl">💡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-emergency rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-white text-3xl">🚀</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
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
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for passionate individuals who want to use technology to save lives. 
              Find your perfect role and join our mission.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trust"
              />
            </div>

            {/* Department and Location Filters */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="glass-card p-8 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold">{job.title}</h3>
                            {job.urgent && (
                              <span className="bg-emergency text-white px-3 py-1 rounded-full text-sm font-medium">
                                Urgent
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                            <div className="flex items-center space-x-1">
                              <Briefcase className="h-4 w-4" />
                              <span className="capitalize">{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{job.posted}</div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-trust rounded-full" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Benefits:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {job.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-success rounded-full" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-end">
                          <motion.button
                            className="btn-primary w-full flex items-center justify-center space-x-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredJobs.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or check back later for new openings.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Company Benefits */}
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
              Why Work at <span className="gradient-text">PulseBridge</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a mission, growth opportunities, 
              and benefits that support your whole life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => {
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

      {/* Team Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're building a diverse, inclusive team of people who are passionate about 
                using technology to save lives and help communities.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Mission-First Mindset',
                    description: 'Every decision we make is guided by our mission to save lives and help communities.'
                  },
                  {
                    title: 'Continuous Learning',
                    description: 'We invest in our team\'s growth with learning budgets, conferences, and mentorship.'
                  },
                  {
                    title: 'Work-Life Balance',
                    description: 'Flexible hours, remote work options, and unlimited PTO to recharge and stay healthy.'
                  },
                  {
                    title: 'Diversity & Inclusion',
                    description: 'We\'re committed to building a team that reflects the communities we serve.'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <h3 className="text-2xl font-bold mb-2">Meet Our Team</h3>
                  <p className="text-gray-600">Diverse backgrounds, shared mission</p>
                </div>
              </div>

              {/* Team Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">85%</div>
                  <div className="text-sm text-gray-600">Employee Satisfaction</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emergency">40%</div>
                  <div className="text-sm text-gray-600">Women in Tech</div>
                </div>
              </div>
            </motion.div>
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
              Join our mission to transform emergency response and make a real difference 
              in communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="h-5 w-5" />
                <span>View All Positions</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-5 w-5" />
                <span>Learn About Culture</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;