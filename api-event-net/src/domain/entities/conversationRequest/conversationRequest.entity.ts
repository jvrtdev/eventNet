import { ConversationRequest } from '@prisma/client';

export class ConversationRequestEntity implements ConversationRequest {
  id: string;
  recipientId: string;
  senderId: string;
}
