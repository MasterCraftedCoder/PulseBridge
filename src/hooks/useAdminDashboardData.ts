import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useAdminDashboardData() {
  const [analytics, setAnalytics] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    // Fetch analytics (replace with your analytics table/query)
    supabase
      .from('analytics')
      .select('*')
      .then(({ data }: { data: any }) => setAnalytics(data ?? []));
    // Fetch volunteers
    supabase
      .from('volunteers')
      .select('*')
      .then(({ data }: { data: any }) => setVolunteers(data ?? []));
    // Fetch applications
    supabase
      .from('applications')
      .select('*')
      .then(({ data }: { data: any }) => setApplications(data ?? []));
    // Fetch incidents
    supabase
      .from('incidents')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }: { data: any }) => setIncidents(data ?? []));
  }, []);

  return { analytics, volunteers, applications, incidents };
} 