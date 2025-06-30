import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useVolunteerRegistration() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const register = async (form: { name: string; email: string; phone: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.from('volunteers').insert({
      user_id: user?.id,
      name: form.name,
      email: form.email,
      phone: form.phone,
      status: 'pending',
    });
    if (error) setError(error.message);
    else setSuccess(true);
    setLoading(false);
  };

  return { register, loading, error, success };
} 