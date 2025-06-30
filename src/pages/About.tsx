import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Target, 
  Lightbulb, 
  Globe,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Lives Saved', value: '12,847+', icon: Heart },
    { label: 'Active Volunteers', value: '25,000+', icon: Users },
    { label: 'Partner Cities', value: '450+', icon: Globe },
    { label: 'Response Time', value: '3.2 min', icon: Clock },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every decision we make is guided by our commitment to saving lives and helping communities.',
      color: 'from-emergency to-red-600'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We protect your privacy and medical information with the highest security standards.',
      color: 'from-trust to-blue-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to improve emergency response.',
      color: 'from-success to-green-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of communities coming together to help one another.',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Founded',
      description: 'PulseBridge was founded with a mission to revolutionize emergency response through technology.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2021',
      title: 'First Deployment',
      description: 'Launched our pilot program in San Francisco with 100 volunteers and AI triage system.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2022',
      title: 'National Expansion',
      description: 'Expanded to 50 cities across the United States, saving over 1,000 lives.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2023',
      title: 'Blockchain Integration',
      description: 'Introduced blockchain-secured medical records and achieved HIPAA compliance.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2024',
      title: 'Global Impact',
      description: 'Reached 450+ cities and 25,000+ volunteers, saving over 12,000 lives.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Emergency medicine physician with 15+ years of experience. Former head of emergency services at UCSF.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Former Google AI researcher specializing in healthcare applications and machine learning.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'Jennifer Walsh',
      role: 'Chief Medical Officer',
      bio: 'Board-certified emergency physician and former director of emergency services at Stanford Health.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Former Apple engineer with expertise in mobile health applications and real-time systems.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: '#'
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
                About <span className="gradient-text">PulseBridge</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                We're on a mission to revolutionize emergency response through AI-powered technology 
                and community-driven solutions that save lives every day.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="h-5 w-5" />
                  <span>Join Our Mission</span>
                </motion.button>
                <motion.button
                  className="btn-outline flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Our Timeline</span>
                </motion.button>
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
                  <motion.div 
                    className="w-32 h-32 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Heart className="h-16 w-16 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Saving Lives</h3>
                  <p className="text-gray-600">Through Technology & Community</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Icon className="h-12 w-12 text-emergency mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-trust/5 to-success/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Target className="h-12 w-12 text-emergency mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                To revolutionize emergency response by connecting communities through AI-powered 
                technology, reducing response times, and saving lives through innovative solutions 
                that put people first.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduce emergency response times by 50%',
                  'Train 100,000+ community volunteers',
                  'Expand to 1,000+ cities globally',
                  'Save 100,000+ lives by 2030'
                ].map((goal) => (
                  <li key={goal} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Lightbulb className="h-12 w-12 text-trust mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                A world where every person has access to immediate, high-quality emergency care 
                through connected communities and intelligent technology that anticipates and 
                responds to medical emergencies.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Global Network', desc: 'Worldwide emergency response coverage' },
                  { title: 'AI Prevention', desc: 'Predictive health monitoring and alerts' },
                  { title: 'Community Care', desc: 'Neighbors helping neighbors in crisis' }
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-trust to-success rounded-full flex items-center justify-center mt-1">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we build technology 
              that serves humanity in its most critical moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-emergency transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global emergency response network, 
              here's how we've grown to save thousands of lives.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emergency to-trust rounded-full hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${Number(item.year.slice(-2)) % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex-1">
                    <div className="glass-card p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emergency to-trust rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          <p className="text-emergency font-medium">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative lg:block hidden">
                    <div className="w-6 h-6 bg-gradient-to-br from-emergency to-trust rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1">
                    <motion.div
                      className="aspect-video rounded-2xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of medical professionals, engineers, and innovators 
              is united by a shared passion for saving lives through technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emergency/20 to-trust/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-emergency font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether as a volunteer, partner, or supporter, there are many ways 
              to help us save lives and transform emergency response.
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
                href="/careers"
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;