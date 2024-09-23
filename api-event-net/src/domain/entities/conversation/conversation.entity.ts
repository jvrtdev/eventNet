import { $Enums, Conversation } from '@prisma/client';

export class ConversationEntity implements Conversation {
  id: string;
  isGroup: boolean;
  status: $Enums.FriendshipStatus;
  createdAt: Date;
}
