export interface ParticipantInterface {
  id?: string;
  conversationId: string;
  userId: string;
  role: string;
  user?: {
    name: string;
    profile: {
      avatar: string;
    };
  };
}
