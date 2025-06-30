import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useBrochureDownload() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const download = async () => {
    setLoading(true);
    // TODO: Replace with your Supabase Storage bucket and file path
    const { data, error } = await supabase.storage.from('public').download('brochure.pdf');
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'PulseBridge_Brochure.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      // Log download
      await supabase.from('brochure_downloads').insert({ user_id: user?.id });
    }
    setLoading(false);
  };

  return { download, loading };
} 