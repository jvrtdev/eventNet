import { UserInterface } from '@core/shared/@types/user';

export interface MessageInterface {
  id?: string;
  content: string;
  conversationId: string;
  isRead?: boolean;
  senderId: string;
  createdAt?: Date;
  receiver?: UserInterface;
}
