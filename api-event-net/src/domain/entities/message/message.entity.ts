import { Message } from '@prisma/client';

export class MessageEntity implements Message {
  id: string;
  content: string;
  conversationId: string;
  isRead: boolean;
  senderId: string;
  timeStamp?: Date;
  createdAt: Date;
}
