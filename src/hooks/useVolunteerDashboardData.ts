import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useVolunteerDashboardData() {
  const { user } = useAuth();
  const [trainingProgress, setTrainingProgress] = useState<any[]>([]);
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    // Fetch training progress
    supabase
      .from('training_progress')
      .select('*')
      .eq('user_id', user.id)
      .then(({ data }: { data: any }) => setTrainingProgress(data ?? []));
    // Fetch incident history
    supabase
      .from('incidents')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }: { data: any }) => setIncidents(data ?? []));
  }, [user]);

  return { trainingProgress, incidents };
} 