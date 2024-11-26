import { EventInterface } from './event';
import { MessageInterface } from './message';
import { ParticipantInterface } from './participant';
import { UserInterface } from './user';

export interface ConversationInterface {
  conversationId: string;
  id: string;
  isGroup: boolean;
  createdAt: Date;
  event?: EventInterface;
  message?: MessageInterface;
  participant: ParticipantInterface[];
  sender?: UserInterface;
  _count?: {
    event: number;
    message: number;
    participant: number;
  };
}
