import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Heart,
  Users,
  Shield,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

const LiveDemo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [emergencyType, setEmergencyType] = useState('');

  const demoSteps = [
    {
      title: 'Emergency Detected',
      description: 'Voice triage analyzing your emergency...',
      status: 'analyzing',
      duration: 3000
    },
    {
      title: 'AI Assessment Complete',
      description: 'High priority cardiac emergency identified',
      status: 'assessed',
      duration: 2000
    },
    {
      title: 'Dispatching Help',
      description: 'Notifying 3 nearby volunteers and EMS',
      status: 'dispatching',
      duration: 4000
    },
    {
      title: 'Help On The Way',
      description: 'Dr. Sarah Chen (2.1 mi) - ETA 4 minutes',
      status: 'dispatched',
      duration: 0
    }
  ];

  const mockMessages = [
    { sender: 'AI', message: 'Hello! I\'m here to help. Can you describe your emergency?', time: '10:23 AM' },
    { sender: 'User', message: 'My chest hurts really bad and I can\'t breathe properly', time: '10:23 AM' },
    { sender: 'AI', message: 'I understand this is serious. Are you experiencing any pain in your left arm or jaw?', time: '10:24 AM' },
    { sender: 'User', message: 'Yes, my left arm is tingling', time: '10:24 AM' },
    { sender: 'AI', message: 'I\'m dispatching emergency help to your location immediately. Stay calm and try to sit down.', time: '10:24 AM' }
  ];

  useEffect(() => {
    if (isRecording && currentStep < demoSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, demoSteps[currentStep].duration);

      return () => clearTimeout(timer);
    }
  }, [isRecording, currentStep]);

  const startDemo = () => {
    setIsRecording(true);
    setCurrentStep(0);
    setEmergencyType('cardiac');
  };

  const resetDemo = () => {
    setIsRecording(false);
    setCurrentStep(0);
    setEmergencyType('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-gradient-to-br from-emergency/5 via-trust/5 to-success/5"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Live <span className="gradient-text">Emergency</span> Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Experience PulseBridge's AI-powered emergency response system in real-time. 
              See how we can save precious minutes when every second counts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Video Demo */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Video className="h-6 w-6 text-emergency mr-3" />
                  Emergency Response Simulation
                </h2>
                
                {/* Video Player */}
                <div className="relative aspect-video bg-black rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-emergency rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🚑</span>
                      </div>
                      <p className="text-lg font-medium mb-4">Emergency Response Demo</p>
                      <p className="text-sm opacity-75">Real emergency response footage</p>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isVideoPlaying ? (
                        <Pause className="h-5 w-5 text-white" />
                      ) : (
                        <Play className="h-5 w-5 text-white ml-1" />
                      )}
                    </button>
                    
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4 text-white" />
                      ) : (
                        <Volume2 className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Demo Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emergency/10 rounded-xl">
                    <Clock className="h-6 w-6 text-emergency mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emergency">2:47</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-trust/10 rounded-xl">
                    <Users className="h-6 w-6 text-trust mx-auto mb-2" />
                    <div className="text-2xl font-bold text-trust">5</div>
                    <div className="text-sm text-gray-600">Volunteers</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-xl">
                    <Heart className="h-6 w-6 text-success mx-auto mb-2" />
                    <div className="text-2xl font-bold text-success">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Demo */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Voice Interface */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Mic className="h-6 w-6 text-emergency mr-3" />
                  Voice Emergency Interface
                </h2>

                {/* Recording Interface */}
                <div className="text-center mb-8">
                  <motion.button
                    onClick={isRecording ? resetDemo : startDemo}
                    className={`w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl transition-all duration-300 ${
                      isRecording 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 animate-pulse' 
                        : 'bg-gradient-to-br from-emergency to-red-600 hover:scale-105'
                    }`}
                    whileHover={{ scale: isRecording ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isRecording ? (
                      <div className="text-center">
                        <MicOff className="h-8 w-8 mx-auto mb-1" />
                        <div className="text-sm">Stop</div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Mic className="h-8 w-8 mx-auto mb-1" />
                        <div className="text-sm">Start Demo</div>
                      </div>
                    )}
                  </motion.button>
                  
                  <p className="text-gray-600 mt-4">
                    {isRecording ? 'Demo in progress...' : 'Tap to start emergency demo'}
                  </p>
                </div>

                {/* Demo Progress */}
                <AnimatePresence>
                  {isRecording && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      {demoSteps.map((step, index) => (
                        <motion.div
                          key={step.title}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            index <= currentStep
                              ? 'border-success bg-success/10'
                              : 'border-gray-200 bg-gray-50'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{step.title}</h4>
                              <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                            {index <= currentStep && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-6 h-6 bg-success rounded-full flex items-center justify-center"
                              >
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Interface */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 text-trust mr-3" />
                  AI Triage Chat
                </h2>

                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {mockMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`max-w-xs p-3 rounded-2xl ${
                        msg.sender === 'User'
                          ? 'bg-trust text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === 'User' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your emergency..."
                    className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-trust"
                    disabled
                  />
                  <button className="p-3 bg-trust text-white rounded-xl hover:bg-trust/90 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location Tracking */}
          <motion.div
            className="mt-12 glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-success mr-3" />
              Real-Time Location & Dispatch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Live Emergency Map</h3>
                  <p className="text-gray-600">Real-time tracking of emergency responders</p>
                </div>
              </div>

              {/* Responder List */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Nearby Responders</h3>
                
                {[
                  { name: 'Dr. Sarah Chen', type: 'Cardiologist', distance: '2.1 mi', eta: '4 min', status: 'En Route' },
                  { name: 'EMT Mike Rodriguez', type: 'Paramedic', distance: '3.2 mi', eta: '6 min', status: 'Dispatched' },
                  { name: 'Nurse Jennifer Walsh', type: 'RN', distance: '1.8 mi', eta: '3 min', status: 'Available' }
                ].map((responder, index) => (
                  <motion.div
                    key={responder.name}
                    className="p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{responder.name}</h4>
                        <p className="text-sm text-gray-600">{responder.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{responder.distance}</div>
                        <div className="text-xs text-gray-500">ETA {responder.eta}</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        responder.status === 'En Route' 
                          ? 'bg-emergency/10 text-emergency'
                          : responder.status === 'Dispatched'
                          ? 'bg-trust/10 text-trust'
                          : 'bg-success/10 text-success'
                      }`}>
                        {responder.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            className="mt-12 glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Shield className="h-6 w-6 text-purple-500 mr-3" />
              Blockchain Security & Privacy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Encrypted Records</h3>
                <p className="text-sm text-gray-600">Medical history secured with blockchain technology</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Users className="h-12 w-12 text-trust mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Verified Responders</h3>
                <p className="text-sm text-gray-600">All volunteers undergo background checks and training</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Heart className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-gray-600">Full compliance with healthcare privacy regulations</p>
              </div>
            </div>
          </motion.div>
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
              Ready to Join PulseBridge?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the future of emergency response in your community. 
              Every second counts when lives are on the line.
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
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emergency font-semibold py-4 px-8 rounded-2xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default LiveDemo;