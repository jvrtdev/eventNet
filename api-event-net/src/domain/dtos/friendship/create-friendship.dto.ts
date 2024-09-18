import { $Enums } from '@prisma/client';

export class CreateFriendshipDto {
  conversationId: string;
  userId: string;
  friendId: string;
  status?: $Enums.FriendshipStatus;
}
