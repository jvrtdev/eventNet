import { ConversationInterface } from './conversation';
import { UserInterface } from './user';

export interface FriendshipInterface {
  id?: string;
  conversationId: string;
  userId: string;
  friendId: string;
  status?: string;
  createdAt?: Date;
  friend?: UserInterface;
  conversation?: ConversationInterface;
}
