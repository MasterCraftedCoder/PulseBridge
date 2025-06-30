import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { ChatMessage } from '../types/chat';

export function useIncidentChat(incidentId: string, userId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Subscribe to Supabase channel for this incidentId
    const channel = supabase.channel(`incident-chat-${incidentId}`)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_messages', filter: `incident_id=eq.${incidentId}` }, (payload) => {
        if (payload.new) {
          setMessages((msgs) => [...msgs, payload.new as ChatMessage]);
        }
      })
      .subscribe();
    // Initial fetch
    supabase
      .from('chat_messages')
      .select('*')
      .eq('incident_id', incidentId)
      .order('created_at', { ascending: true })
      .then(({ data }) => {
        if (data) setMessages(data as ChatMessage[]);
      });
    // Cleanup
    return () => {
      supabase.removeChannel(channel);
    };
  }, [incidentId]);

  const sendMessage = async (content: string) => {
    await supabase.from('chat_messages').insert({
      incident_id: incidentId,
      user_id: userId,
      content,
      created_at: new Date().toISOString(),
    });
  };

  return { messages, sendMessage };
} 