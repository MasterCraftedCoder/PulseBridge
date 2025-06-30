import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: string;
  emergency: string;
}

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Cardiac Arrest Survivor",
      location: "San Francisco, CA",
      content: "PulseBridge saved my life. The AI triage immediately recognized my symptoms and dispatched help within 90 seconds. The volunteer who arrived knew my medical history and administered CPR perfectly. I'm here today because of this incredible system.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emergency: "Cardiac Emergency"
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      role: "Emergency Physician",
      location: "Austin, TX",
      content: "As an ER doctor, I've seen how PulseBridge transforms emergency response. The AI-powered triage is incredibly accurate, and having patient data ready when they arrive saves precious minutes. It's revolutionizing how we handle emergencies.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emergency: "Medical Professional"
    },
    {
      id: 3,
      name: "Jennifer Walsh",
      role: "Community Volunteer",
      location: "Denver, CO",
      content: "Being a PulseBridge volunteer has been the most rewarding experience. The training was comprehensive, and the app guides me through every emergency. I've helped save three lives in my neighborhood this year. The community impact is incredible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emergency: "Community Hero"
    },
    {
      id: 4,
      name: "Robert Kim",
      role: "Stroke Survivor",
      location: "Seattle, WA",
      content: "My wife used PulseBridge when I had a stroke. The voice recognition detected the urgency immediately, and a trained volunteer arrived before the ambulance. The quick response prevented permanent damage. This technology is a game-changer.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      emergency: "Stroke Emergency"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-trust/5 to-emergency/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Stories, Real <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the people whose lives have been touched by PulseBridge's emergency response network.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="relative h-96 md:h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center relative">
                  {/* Quote Icon */}
                  <Quote className="h-12 w-12 text-emergency/20 mx-auto mb-6" />
                  
                  {/* Emergency Type Badge */}
                  <div className="inline-block bg-emergency/10 text-emergency px-4 py-2 rounded-full text-sm font-medium mb-6">
                    {testimonials[currentIndex].emergency}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-emergency transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-emergency transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-emergency scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <motion.div
                className="bg-emergency h-1 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-xl transition-all duration-200 text-left ${
                index === currentIndex
                  ? 'bg-emergency/10 border-2 border-emergency'
                  : 'bg-white/50 hover:bg-white/80 border-2 border-transparent'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-sm truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;