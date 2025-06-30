import { useState } from 'react'

interface TriageResult {
  severity: number
  advice: string
  recommendedActions: string[]
  estimatedWaitTime: number
}

interface VoiceResult {
  audioUrl: string
  transcript: string
}

export const useTriage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const analyzeSymptoms = async (symptoms: string): Promise<TriageResult | null> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/.netlify/functions/triage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze symptoms')
      }

      const result = await response.json()
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      return null
    } finally {
      setLoading(false)
    }
  }

  const generateVoiceAdvice = async (advice: string): Promise<VoiceResult | null> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/.netlify/functions/voice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: advice }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate voice advice')
      }

      const result = await response.json()
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      return null
    } finally {
      setLoading(false)
    }
  }

  const createMentorVideo = async (videoType: string, variables: Record<string, any>) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/.netlify/functions/tavus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoType, variables }),
      })

      if (!response.ok) {
        throw new Error('Failed to create mentor video')
      }

      const result = await response.json()
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      return null
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    analyzeSymptoms,
    generateVoiceAdvice,
    createMentorVideo,
  }
}