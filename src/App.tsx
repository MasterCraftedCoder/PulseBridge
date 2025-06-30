import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { NavBar } from './components/layout/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard';
// import EmergencyPage from './pages/Emergency'; // TODO: Create this page

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';
import BackgroundShapes from '@/components/ui/BackgroundShapes';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import HowItWorks from '@/pages/HowItWorks';
import LiveDemo from '@/pages/LiveDemo';
import Features from '@/pages/Features';
import CommunityMap from '@/pages/CommunityMap';
import Volunteers from '@/pages/Volunteers';
import Partners from '@/pages/Partners';
import Subscription from '@/pages/Subscription';
import CaseStudies from '@/pages/CaseStudies';
import Blog from '@/pages/Blog';
import Article from '@/pages/Article';
import FAQ from '@/pages/FAQ';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Auth from '@/pages/Auth';
import RoleSelection from '@/pages/RoleSelection';

const ProtectedRoute: React.FC<{ children: React.ReactNode; role?: string }> = ({ children, role }) => {
  const { user, role: userRole, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (role && userRole !== role) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Register service worker manually if available and not in StackBlitz environment
    const isInStackBlitz = window.location.hostname.includes('stackblitz') || 
                          window.self !== window.top; // Check if running in iframe
    
    if ('serviceWorker' in navigator && !isInStackBlitz) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }

    // Simulate loading time for animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background relative overflow-x-hidden">
          <BackgroundShapes />
          <Header />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/live-demo" element={<LiveDemo />} />
              <Route path="/features" element={<Features />} />
              <Route path="/community-map" element={<CommunityMap />} />
              <Route path="/volunteers" element={<Volunteers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Article />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/auth" element={<Auth />} />
              <Route 
                path="/role-selection" 
                element={
                  <ProtectedRoute>
                    <RoleSelection />
                  </ProtectedRoute>
                } 
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={
                <ProtectedRoute><UserDashboard /></ProtectedRoute>
              } />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>
              } />
              <Route path="/volunteer/dashboard" element={
                <ProtectedRoute role="volunteer"><VolunteerDashboard /></ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;