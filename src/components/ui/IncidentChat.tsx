import React, { useState } from 'react';
import { useIncidentChat } from '../../hooks/useIncidentChat';
import { ChatMessage } from '../../types/chat';

interface IncidentChatProps {
  incidentId: string;
  userId: string;
}

export const IncidentChat: React.FC<IncidentChatProps> = ({ incidentId, userId }) => {
  const [message, setMessage] = useState('');
  const { messages, sendMessage } = useIncidentChat(incidentId, userId);

  const handleSend = async () => {
    if (message.trim()) {
      await sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="h-48 overflow-y-auto mb-2">
        {messages.length === 0 ? (
          <div className="text-gray-400 text-center">No messages yet.</div>
        ) : (
          messages.map((msg: ChatMessage) => (
            <div key={msg.id} className="mb-1">
              <span className="font-semibold">{msg.userId}:</span> {msg.content}
              <span className="text-xs text-gray-400 ml-2">{new Date(msg.createdAt).toLocaleTimeString()}</span>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
        />
        <button className="btn btn-primary" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}; 