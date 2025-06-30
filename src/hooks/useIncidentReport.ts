import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useIncidentReport() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const report = async (form: { description: string; lat: string; lng: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.from('incidents').insert({
      user_id: user?.id,
      description: form.description,
      location: `POINT(${form.lng} ${form.lat})`,
      status: 'open',
    });
    if (error) setError(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  return { report, loading, error, success };
} 