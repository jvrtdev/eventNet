export interface MessageInterface {
  id: string;
  content: string;
  conversationId: string;
  isRead: boolean;
  senderId: string;
  timeStamp?: Date;
  createdAt: Date;
}
