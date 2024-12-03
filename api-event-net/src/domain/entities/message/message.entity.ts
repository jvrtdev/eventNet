import { Message } from '@prisma/client';

export class MessageEntity implements Message {
  id: string;
  content: string;
  senderName: string;
  conversationId: string;
  isRead: boolean;
  senderId: string;
  createdAt: Date;
}
