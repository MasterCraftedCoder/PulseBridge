import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AnalyticsDashboard } from '../../components/ui/AnalyticsDashboard';

const AnalyticsPage: React.FC = () => {
  const { user, role } = useAuth();
  if (role !== 'admin') {
    return <div className="p-8 text-center">Access denied. Admins only.</div>;
  }
  return <AnalyticsDashboard />;
};

export default AnalyticsPage; 