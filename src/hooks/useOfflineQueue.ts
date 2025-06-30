import { useEffect } from 'react';
import { queueIncident, syncQueuedIncidents } from '../lib/offline';

export function useOfflineQueue() {
  useEffect(() => {
    const handleOnline = () => {
      syncQueuedIncidents();
    };
    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  return { queueIncident };
} 