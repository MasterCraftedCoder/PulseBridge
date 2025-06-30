import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks for demo mode
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo_anon_key';

// Check if we're in demo mode (using fallback values)
const isDemoMode = supabaseUrl === 'https://demo.supabase.co' || supabaseAnonKey === 'demo_anon_key';

if (isDemoMode) {
  console.warn('⚠️ Running in demo mode - Supabase features will be simulated');
}

// Create Supabase client with error handling
let supabase: any = null;

try {
  if (!isDemoMode) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } else {
    // Create a mock Supabase client for demo purposes
    supabase = {
      auth: {
        signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Demo mode - auth disabled' } }),
        signUp: () => Promise.resolve({ data: null, error: { message: 'Demo mode - auth disabled' } }),
        signOut: () => Promise.resolve({ error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: null }),
        update: () => Promise.resolve({ data: null, error: null }),
        delete: () => Promise.resolve({ data: null, error: null }),
      }),
      channel: () => ({
        on: () => ({ subscribe: () => {} }),
      }),
    };
  }
} catch (error) {
  console.error('Failed to initialize Supabase:', error);
  // Fallback to mock client
  supabase = {
    auth: {
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase initialization failed' } }),
      signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase initialization failed' } }),
      signOut: () => Promise.resolve({ error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: null }),
      update: () => Promise.resolve({ data: null, error: null }),
      delete: () => Promise.resolve({ data: null, error: null }),
    }),
    channel: () => ({
      on: () => ({ subscribe: () => {} }),
    }),
  };
}

export { supabase, isDemoMode };
export default supabase;