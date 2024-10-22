import { ConversationRequest } from '@prisma/client';

export class ConversationRequestEntity implements ConversationRequest {
  id: string;
  conversationId: string;
  recipientId: string;
  senderId: string;
}
