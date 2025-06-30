import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

type Incident = Database['public']['Tables']['incidents']['Row']

export const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchIncidents()
    subscribeToIncidents()
  }, [])

  const fetchIncidents = async () => {
    try {
      const { data, error } = await supabase
        .from('incidents')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setIncidents(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const subscribeToIncidents = () => {
    const channel = supabase
      .channel('incidents')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'incidents'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setIncidents(prev => [payload.new as Incident, ...prev])
            // Play notification sound for new incidents
            playNotificationSound()
          } else if (payload.eventType === 'UPDATE') {
            setIncidents(prev => 
              prev.map(incident => 
                incident.id === payload.new.id ? payload.new as Incident : incident
              )
            )
          } else if (payload.eventType === 'DELETE') {
            setIncidents(prev => 
              prev.filter(incident => incident.id !== payload.old.id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }

  const playNotificationSound = () => {
    // Create a subtle notification sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1)
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  }

  const createIncident = async (incidentData: Omit<Incident, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('incidents')
        .insert([incidentData])
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' }
    }
  }

  const updateIncident = async (id: string, updates: Partial<Incident>) => {
    try {
      const { data, error } = await supabase
        .from('incidents')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' }
    }
  }

  const claimIncident = async (incidentId: string, volunteerId: string) => {
    return updateIncident(incidentId, {
      status: 'claimed',
      volunteer_id: volunteerId
    })
  }

  const closeIncident = async (incidentId: string, responseTime?: number) => {
    return updateIncident(incidentId, {
      status: 'closed',
      response_time: responseTime
    })
  }

  return {
    incidents,
    loading,
    error,
    createIncident,
    updateIncident,
    claimIncident,
    closeIncident,
    refetch: fetchIncidents
  }
}