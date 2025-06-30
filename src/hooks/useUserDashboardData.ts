import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useUserDashboardData() {
  const { user } = useAuth();
  const [applicationStatus, setApplicationStatus] = useState<string | null>(null);
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    // Fetch application status
    supabase
      .from('applications')
      .select('status')
      .eq('user_id', user.id)
      .single()
      .then(({ data }: { data: any }) => setApplicationStatus(data?.status ?? null));
    // Fetch incident history
    supabase
      .from('incidents')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }: { data: any }) => setIncidents(data ?? []));
  }, [user]);

  return { applicationStatus, incidents };
} 