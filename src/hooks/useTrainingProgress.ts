import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useTrainingProgress(videoId: string) {
  const { user } = useAuth();
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    supabase
      .from('training_progress')
      .select('completed')
      .eq('user_id', user.id)
      .eq('video_id', videoId)
      .single()
      .then(({ data }: { data: any }) => setCompleted(data?.completed ?? false));
  }, [user, videoId]);

  const markComplete = async () => {
    setLoading(true);
    await supabase.from('training_progress').upsert({
      user_id: user?.id,
      video_id: videoId,
      completed: true,
      completed_at: new Date().toISOString(),
    }, { onConflict: ['user_id', 'video_id'] });
    setCompleted(true);
    setLoading(false);
  };

  return { completed, markComplete, loading };
} 