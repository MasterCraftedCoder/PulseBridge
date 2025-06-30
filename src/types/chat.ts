export interface ChatMessage {
  id: string;
  incidentId: string;
  userId: string;
  content: string;
  createdAt: string;
}

export interface ChatUser {
  id: string;
  name: string;
  role: string;
} 