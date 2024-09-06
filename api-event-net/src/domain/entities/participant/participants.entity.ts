import { $Enums, Participant } from '@prisma/client';

export class ParticipantEntity implements Participant {
  id: string;
  conversationId: string;
  role: $Enums.ParticipantRole;
  userId: string;
  createdAt: Date;
}
