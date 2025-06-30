export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          role: 'citizen' | 'volunteer' | 'admin' | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: 'citizen' | 'volunteer' | 'admin' | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: 'citizen' | 'volunteer' | 'admin' | null
          updated_at?: string
        }
      }
      incidents: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          reporter_id: string | null
          lat: number | null
          lng: number | null
          severity: number
          status: 'open' | 'claimed' | 'closed'
          description: string | null
          ai_advice: string | null
          volunteer_id: string | null
          response_time: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          reporter_id?: string | null
          lat?: number | null
          lng?: number | null
          severity: number
          status?: 'open' | 'claimed' | 'closed'
          description?: string | null
          ai_advice?: string | null
          volunteer_id?: string | null
          response_time?: number | null
        }
        Update: {
          id?: string
          updated_at?: string
          status?: 'open' | 'claimed' | 'closed'
          volunteer_id?: string | null
          response_time?: number | null
        }
      }
      volunteers: {
        Row: {
          id: string
          profile_id: string
          skills: string[]
          certification_level: 'basic' | 'medical' | 'specialist'
          active: boolean
          nft_token_id: string | null
          total_responses: number
          average_rating: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          skills?: string[]
          certification_level?: 'basic' | 'medical' | 'specialist'
          active?: boolean
          nft_token_id?: string | null
          total_responses?: number
          average_rating?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          skills?: string[]
          certification_level?: 'basic' | 'medical' | 'specialist'
          active?: boolean
          nft_token_id?: string | null
          total_responses?: number
          average_rating?: number | null
          updated_at?: string
        }
      }
      medical_records: {
        Row: {
          id: string
          profile_id: string
          allergies: string[] | null
          medications: string[] | null
          conditions: string[] | null
          emergency_contacts: Json | null
          blood_type: string | null
          encrypted_data: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          allergies?: string[] | null
          medications?: string[] | null
          conditions?: string[] | null
          emergency_contacts?: Json | null
          blood_type?: string | null
          encrypted_data?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          allergies?: string[] | null
          medications?: string[] | null
          conditions?: string[] | null
          emergency_contacts?: Json | null
          blood_type?: string | null
          encrypted_data?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}