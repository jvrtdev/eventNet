import { EventInterface } from './event';
import { MessageInterface } from './message';
import { UserInterface } from './user';
event;

export interface ConversationInterface {
  id: string;
  isGroup: boolean;
  createdAt: Date;
  event?: EventInterface;
  friendship?: UserInterface;
  message?: MessageInterface;
}
