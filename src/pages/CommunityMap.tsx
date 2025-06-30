import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Heart, 
  Clock, 
  Shield, 
  Activity,
  Search,
  Filter,
  Zap,
  Award,
  TrendingUp
} from 'lucide-react';

const CommunityMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({
    livesaved: 0,
    volunteers: 0,
    responseTime: 0,
    coverage: 0
  });

  // Animate stats on mount
  useEffect(() => {
    const targets = {
      livesaved: 12847,
      volunteers: 25000,
      responseTime: 3.2,
      coverage: 89
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        livesaved: Math.min(prev.livesaved + Math.ceil(targets.livesaved / steps), targets.livesaved),
        volunteers: Math.min(prev.volunteers + Math.ceil(targets.volunteers / steps), targets.volunteers),
        responseTime: Math.min(prev.responseTime + (targets.responseTime / steps), targets.responseTime),
        coverage: Math.min(prev.coverage + Math.ceil(targets.coverage / steps), targets.coverage)
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  const regions = [
    {
      id: 'san-francisco',
      name: 'San Francisco Bay Area',
      coordinates: { x: 15, y: 35 },
      stats: { volunteers: 3200, responses: 1847, avgTime: 2.8 },
      status: 'high-activity',
      description: 'Leading the nation in emergency response innovation'
    },
    {
      id: 'new-york',
      name: 'New York Metro',
      coordinates: { x: 75, y: 25 },
      stats: { volunteers: 4500, responses: 2934, avgTime: 3.1 },
      status: 'high-activity',
      description: 'Largest volunteer network in the country'
    },
    {
      id: 'chicago',
      name: 'Chicago',
      coordinates: { x: 55, y: 30 },
      stats: { volunteers: 2100, responses: 1456, avgTime: 3.4 },
      status: 'active',
      description: 'Rapid growth in community participation'
    },
    {
      id: 'austin',
      name: 'Austin',
      coordinates: { x: 45, y: 65 },
      stats: { volunteers: 1800, responses: 987, avgTime: 2.9 },
      status: 'active',
      description: 'Tech-forward emergency response hub'
    },
    {
      id: 'seattle',
      name: 'Seattle',
      coordinates: { x: 12, y: 15 },
      stats: { volunteers: 2400, responses: 1234, avgTime: 3.2 },
      status: 'active',
      description: 'Strong community health initiatives'
    },
    {
      id: 'denver',
      name: 'Denver',
      coordinates: { x: 40, y: 45 },
      stats: { volunteers: 1600, responses: 876, avgTime: 3.6 },
      status: 'growing',
      description: 'Expanding coverage in mountain communities'
    },
    {
      id: 'miami',
      name: 'Miami',
      coordinates: { x: 78, y: 80 },
      stats: { volunteers: 1900, responses: 1123, avgTime: 3.3 },
      status: 'active',
      description: 'Multilingual emergency response network'
    },
    {
      id: 'phoenix',
      name: 'Phoenix',
      coordinates: { x: 25, y: 60 },
      stats: { volunteers: 1400, responses: 743, avgTime: 4.1 },
      status: 'growing',
      description: 'Desert region specialized response teams'
    }
  ];

  const impactStories = [
    {
      id: 1,
      title: 'Cardiac Emergency Response',
      location: 'San Francisco, CA',
      time: '2 minutes',
      description: 'AI detected cardiac symptoms, dispatched Dr. Chen who administered CPR',
      impact: 'Life Saved',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      title: 'Stroke Prevention',
      location: 'New York, NY',
      time: '3 minutes',
      description: 'Voice analysis detected speech patterns, prevented permanent damage',
      impact: 'Disability Prevented',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      title: 'Community Training',
      location: 'Austin, TX',
      time: 'Ongoing',
      description: '500+ volunteers trained in emergency response protocols',
      impact: 'Community Prepared',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high-activity': return 'from-emergency to-red-600';
      case 'active': return 'from-trust to-blue-600';
      case 'growing': return 'from-success to-green-600';
      default: return 'from-gray-400 to-gray-600';
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
              Community <span className="gradient-text">Impact</span> Map
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Discover how PulseBridge is transforming emergency response across communities nationwide. 
              Real data, real impact, real lives saved.
            </p>
          </motion.div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heart className="h-8 w-8 text-emergency mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {animatedStats.livesaved.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-600">Lives Saved</div>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users className="h-8 w-8 text-trust mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {animatedStats.volunteers.toLocaleString()}+
              </div>
              <div className="text-sm text-gray-600">Active Volunteers</div>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Clock className="h-8 w-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {animatedStats.responseTime.toFixed(1)} min
              </div>
              <div className="text-sm text-gray-600">Avg Response</div>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Shield className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {animatedStats.coverage}%
              </div>
              <div className="text-sm text-gray-600">Coverage Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <motion.div
                className="glass-card p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Live Network Map</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust"
                      />
                    </div>
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust"
                    >
                      <option value="all">All Regions</option>
                      <option value="high-activity">High Activity</option>
                      <option value="active">Active</option>
                      <option value="growing">Growing</option>
                    </select>
                  </div>
                </div>

                {/* Map Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                  {/* US Map Outline (Simplified) */}
                  <svg
                    viewBox="0 0 100 70"
                    className="absolute inset-0 w-full h-full"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                  >
                    {/* Simplified US outline */}
                    <path
                      d="M10,20 L90,20 L90,60 L10,60 Z"
                      fill="rgba(59, 130, 246, 0.1)"
                      stroke="rgba(59, 130, 246, 0.3)"
                      strokeWidth="0.5"
                    />
                  </svg>

                  {/* Region Markers */}
                  {regions
                    .filter(region => 
                      filterType === 'all' || region.status === filterType
                    )
                    .filter(region =>
                      searchTerm === '' || region.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((region, index) => (
                    <motion.div
                      key={region.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${region.coordinates.x}%`,
                        top: `${region.coordinates.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setSelectedRegion(region.id)}
                    >
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 animate-ping">
                        <div className={`w-8 h-8 bg-gradient-to-br ${getStatusColor(region.status)} rounded-full opacity-20`} />
                      </div>
                      
                      {/* Main Marker */}
                      <div className={`w-6 h-6 bg-gradient-to-br ${getStatusColor(region.status)} rounded-full shadow-lg flex items-center justify-center relative z-10`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {selectedRegion === region.id && (
                          <motion.div
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h3 className="font-semibold mb-2">{region.name}</h3>
                            <p className="text-sm text-gray-600 mb-3">{region.description}</p>
                            
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center">
                                <div className="font-bold text-trust">{region.stats.volunteers}</div>
                                <div className="text-gray-500">Volunteers</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-emergency">{region.stats.responses}</div>
                                <div className="text-gray-500">Responses</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-success">{region.stats.avgTime}m</div>
                                <div className="text-gray-500">Avg Time</div>
                              </div>
                            </div>

                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Activity Level</div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-br from-emergency to-red-600 rounded-full" />
                        <span className="text-xs">High Activity</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-br from-trust to-blue-600 rounded-full" />
                        <span className="text-xs">Active</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-br from-success to-green-600 rounded-full" />
                        <span className="text-xs">Growing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Region Details */}
            <div className="space-y-8">
              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Activity className="h-5 w-5 text-emergency mr-2" />
                  Real-Time Activity
                </h3>
                
                <div className="space-y-4">
                  {[
                    { time: '2 min ago', event: 'Emergency response dispatched in Austin', type: 'dispatch' },
                    { time: '5 min ago', event: 'New volunteer registered in Seattle', type: 'volunteer' },
                    { time: '8 min ago', event: 'Training session completed in Miami', type: 'training' },
                    { time: '12 min ago', event: 'Life saved in San Francisco', type: 'success' }
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'success' ? 'bg-success' :
                        activity.type === 'dispatch' ? 'bg-emergency' :
                        activity.type === 'volunteer' ? 'bg-trust' : 'bg-purple-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.event}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 text-success mr-2" />
                  Growth Metrics
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Volunteers</span>
                    <span className="font-bold text-trust">+247 this week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Response Improvement</span>
                    <span className="font-bold text-success">-15% faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Coverage Expansion</span>
                    <span className="font-bold text-emergency">+12 cities</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Success Rate</span>
                    <span className="font-bold text-purple-500">98.7%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
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
              Real <span className="gradient-text">Impact</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dot on the map represents real people whose lives have been touched by our community network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-emergency">{story.time}</span>
                  <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                    {story.impact}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{story.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {story.location}
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
              Join Your Local Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the emergency response network in your area. 
              Every volunteer makes a difference in saving lives.
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

export default CommunityMap;