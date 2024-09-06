import { Conversation } from '@prisma/client';

export class ConversationEntity implements Conversation {
  id: string;
  isGroup: boolean;
  createdAt: Date;
}
