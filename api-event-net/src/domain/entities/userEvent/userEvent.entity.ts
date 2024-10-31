import { $Enums, UserEvent } from '@prisma/client';

export class UserEventEntity implements UserEvent {
  id: string;
  userId: string;
  eventId: string;
  role: $Enums.EventRole;
  createdAt: Date;
}
