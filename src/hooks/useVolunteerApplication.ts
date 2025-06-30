import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useVolunteerApplication() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Save step progress (upsert by user_id)
  const saveStep = async (step: number, data: any) => {
    setLoading(true);
    setError(null);
    await supabase.from('applications').upsert({
      user_id: user?.id,
      step,
      status: 'in_progress',
      data,
    }, { onConflict: ['user_id'] });
    setLoading(false);
  };

  // Submit application (final step)
  const submit = async (data: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.from('applications').upsert({
      user_id: user?.id,
      step: 4,
      status: 'submitted',
      data,
    }, { onConflict: ['user_id'] });
    if (error) setError(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  return { saveStep, submit, loading, error, success };
} 