import { EventInterface } from './event';

export interface UserEventInterface {
  id?: string;
  userId?: string;
  eventId: string;
  role?: string;
  createdAt: Date;
  event: EventInterface;
}
