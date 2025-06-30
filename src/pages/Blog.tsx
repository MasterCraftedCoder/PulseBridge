import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight,
  Heart,
  Users,
  Shield,
  Zap,
  BookOpen
} from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'emergency-response', name: 'Emergency Response', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'community', name: 'Community Stories', count: 5 },
    { id: 'training', name: 'Training & Education', count: 3 },
    { id: 'partnerships', name: 'Partnerships', count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: 'How AI-Powered Triage Saved 1,000 Lives in 2024',
    excerpt: 'A comprehensive look at how our machine learning algorithms have revolutionized emergency response times and outcomes across 450+ cities.',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Medical Officer',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    publishDate: '2024-12-15',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    tags: ['AI', 'Machine Learning', 'Emergency Response', 'Healthcare']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building Stronger Communities Through Emergency Preparedness',
      excerpt: 'Learn how neighborhood volunteer networks are creating more resilient communities and faster emergency response times.',
      author: 'Mike Rodriguez',
      authorRole: 'Community Outreach Director',
      authorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      publishDate: '2024-12-12',
      readTime: '6 min read',
      category: 'Community Stories',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Community', 'Volunteers', 'Preparedness']
    },
    {
      id: 3,
      title: 'The Future of Blockchain in Healthcare Emergency Records',
      excerpt: 'Exploring how decentralized medical records are improving patient outcomes while maintaining privacy and security.',
      author: 'Jennifer Walsh',
      authorRole: 'Blockchain Engineer',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      publishDate: '2024-12-10',
      readTime: '10 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Blockchain', 'Privacy', 'Medical Records']
    },
    {
      id: 4,
      title: 'Training the Next Generation of Emergency Responders',
      excerpt: 'Our comprehensive training program has certified over 25,000 volunteers. Here\'s what makes it so effective.',
      author: 'Dr. Robert Kim',
      authorRole: 'Training Director',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      publishDate: '2024-12-08',
      readTime: '7 min read',
      category: 'Training & Education',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Training', 'Education', 'Certification']
    },
    {
      id: 5,
      title: 'Partnership Spotlight: San Francisco General Hospital',
      excerpt: 'How our integration with SF General reduced ER wait times by 40% and improved patient satisfaction scores.',
      author: 'Lisa Thompson',
      authorRole: 'Partnership Manager',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      publishDate: '2024-12-05',
      readTime: '5 min read',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Partnerships', 'Hospitals', 'Case Study']
    },
    {
      id: 6,
      title: 'Real-Time Emergency Response: A Day in the Life',
      excerpt: 'Follow our dispatch team through a typical day handling emergency calls and coordinating volunteer responses.',
      author: 'Carlos Martinez',
      authorRole: 'Operations Manager',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      publishDate: '2024-12-03',
      readTime: '9 min read',
      category: 'Emergency Response',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Operations', 'Real-time', 'Dispatch']
    },
    {
      id: 7,
      title: 'Mental Health First Aid in Emergency Situations',
      excerpt: 'Understanding the psychological aspects of emergency response and how to provide effective mental health support.',
      author: 'Dr. Amanda Foster',
      authorRole: 'Mental Health Specialist',
      authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      publishDate: '2024-12-01',
      readTime: '8 min read',
      category: 'Training & Education',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      tags: ['Mental Health', 'First Aid', 'Psychology']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase().replace(/\s+/g, '-')) {
      case 'emergency-response': return Heart;
      case 'technology': return Zap;
      case 'community': return Users;
      case 'training': return BookOpen;
      case 'partnerships': return Shield;
      default: return BookOpen;
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              PulseBridge <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Stories, insights, and updates from the frontlines of emergency response innovation. 
              Discover how technology and community are saving lives.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trust bg-white/80 backdrop-blur-sm"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trust bg-white/80 backdrop-blur-sm"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => {
                const Icon = getCategoryIcon(category.id);
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-emergency text-white shadow-lg'
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            
            <div className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-emergency/10 text-emergency px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-trust/10 text-trust px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.authorAvatar}
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium">{featuredPost.author}</div>
                        <div className="text-sm text-gray-500">{featuredPost.authorRole}</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Latest Articles
              {filteredPosts.length !== blogPosts.length && (
                <span className="text-lg font-normal text-gray-500 ml-2">
                  ({filteredPosts.length} of {blogPosts.length})
                </span>
              )}
            </h2>
            {searchTerm && (
              <p className="text-gray-600">
                Showing results for "{searchTerm}"
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-trust/10 text-trust px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-emergency transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-trust hover:text-emergency font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-emergency to-trust text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights on emergency response innovation, 
              community stories, and technology updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                className="bg-white text-emergency hover:bg-gray-100 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;