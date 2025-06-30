import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark, 
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  Tag,
  Eye
} from 'lucide-react';

const Article = () => {
  const { slug } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(247);
  const [copied, setCopied] = useState(false);

  // Mock article data - in real app would fetch based on slug
  const article = {
    id: 1,
    title: 'How AI-Powered Triage is Revolutionizing Emergency Response Times',
    slug: 'ai-powered-triage-emergency-response',
    excerpt: 'Discover how artificial intelligence is transforming emergency medical services, reducing response times by up to 40% and saving more lives than ever before.',
    content: `
      <p>In the critical moments of a medical emergency, every second counts. Traditional emergency response systems, while effective, often face challenges in quickly assessing the severity of situations and dispatching appropriate resources. This is where artificial intelligence is making a revolutionary impact.</p>

      <h2>The Challenge of Traditional Triage</h2>
      <p>Emergency medical services have long relied on human operators to assess emergency calls and determine the appropriate response. While these professionals are highly trained, the process can be time-consuming and subject to human error, especially during high-stress situations or peak call volumes.</p>

      <blockquote>
        "The difference between a 3-minute and 8-minute response time can literally be the difference between life and death in cardiac emergencies." - Dr. Sarah Chen, Emergency Medicine Specialist
      </blockquote>

      <h2>How AI Triage Works</h2>
      <p>AI-powered triage systems use natural language processing and machine learning algorithms to analyze emergency calls in real-time. These systems can:</p>

      <ul>
        <li>Process voice patterns and stress indicators</li>
        <li>Identify key medical terminology and symptoms</li>
        <li>Cross-reference with medical databases instantly</li>
        <li>Prioritize calls based on severity algorithms</li>
        <li>Suggest optimal resource allocation</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>Cities that have implemented AI triage systems are seeing remarkable results. San Francisco reported a 40% reduction in average response times for high-priority emergencies after implementing PulseBridge's AI system.</p>

      <p>The technology doesn't replace human judgment but enhances it, providing emergency operators with instant insights and recommendations that help them make faster, more informed decisions.</p>

      <h2>The Future of Emergency Response</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated emergency response capabilities. Integration with IoT devices, wearable health monitors, and smart city infrastructure will create a comprehensive emergency response ecosystem that can predict and prevent medical emergencies before they become critical.</p>

      <p>The goal isn't to replace human compassion and expertise but to augment it with technology that can process information faster than any human ever could, ultimately saving more lives and reducing the burden on our healthcare systems.</p>
    `,
    author: {
      name: 'Dr. Michael Rodriguez',
      role: 'Emergency Medicine Researcher',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bio: 'Dr. Rodriguez is a leading researcher in emergency medicine technology with over 15 years of experience in emergency departments.'
    },
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['AI', 'Emergency Response', 'Healthcare Technology', 'Triage'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    views: 1247
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Building Stronger Community Emergency Networks',
      slug: 'community-emergency-networks',
      excerpt: 'How neighborhoods are coming together to create resilient emergency response systems.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '6 min read',
      publishedAt: '2024-01-10'
    },
    {
      id: 3,
      title: 'The Role of Blockchain in Medical Record Security',
      slug: 'blockchain-medical-records',
      excerpt: 'Exploring how blockchain technology ensures patient privacy while enabling emergency access.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '10 min read',
      publishedAt: '2024-01-05'
    },
    {
      id: 4,
      title: 'Training the Next Generation of Emergency Volunteers',
      slug: 'training-emergency-volunteers',
      excerpt: 'Innovative approaches to volunteer training that are making communities safer.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      readTime: '7 min read',
      publishedAt: '2024-01-01'
    }
  ];

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = article.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL');
        }
        break;
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-emergency/5 to-trust/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-emergency transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-emergency/10 text-emergency px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{article.author.name}</div>
                  <div className="text-sm">{article.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">{article.views.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  isLiked 
                    ? 'bg-emergency text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </motion.button>

              <motion.button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  isBookmarked 
                    ? 'bg-trust text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </motion.button>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Share:</span>
                <motion.button
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-4 w-4" />
                </motion.button>
                <motion.button
                  onClick={() => handleShare('facebook')}
                  className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="h-4 w-4" />
                </motion.button>
                <motion.button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.button>
                <motion.button
                  onClick={() => handleShare('copy')}
                  className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.125rem'
                }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">{article.author.name}</h4>
                    <p className="text-gray-600 mb-2">{article.author.role}</p>
                    <p className="text-gray-700 leading-relaxed">{article.author.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24 space-y-8">
                
                {/* Table of Contents */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#challenge" className="block text-sm text-gray-600 hover:text-emergency transition-colors">
                      The Challenge of Traditional Triage
                    </a>
                    <a href="#how-it-works" className="block text-sm text-gray-600 hover:text-emergency transition-colors">
                      How AI Triage Works
                    </a>
                    <a href="#impact" className="block text-sm text-gray-600 hover:text-emergency transition-colors">
                      Real-World Impact
                    </a>
                    <a href="#future" className="block text-sm text-gray-600 hover:text-emergency transition-colors">
                      The Future of Emergency Response
                    </a>
                  </nav>
                </div>

                {/* Newsletter Signup */}
                <div className="glass-card p-6">
                  <h3 className="font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest insights on emergency response technology delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trust text-sm"
                    />
                    <button className="w-full btn-primary text-sm py-2">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-br from-trust/5 to-success/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Related <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more insights on emergency response technology and community health.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <motion.div
                key={relatedArticle.id}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/blog/${relatedArticle.slug}`}>
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="font-semibold mb-2 group-hover:text-emergency transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {relatedArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{new Date(relatedArticle.publishedAt).toLocaleDateString()}</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <MessageCircle className="h-6 w-6 text-trust mr-3" />
              Discussion
            </h3>
            
            <div className="glass-card p-8 text-center">
              <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Join the Conversation</h4>
              <p className="text-gray-600 mb-6">
                Share your thoughts and experiences with emergency response technology.
              </p>
              <button className="btn-primary">
                Start Discussion
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Article;