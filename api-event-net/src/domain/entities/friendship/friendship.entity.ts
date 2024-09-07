import { $Enums, Friendship } from "@prisma/client";


export class FriendshipEntity implements Friendship{
  id: string;
  conversationId: string;
  userId: string;
  friendId: string;
  status: $Enums.FriendshipStatus;
  createdAt: Date;
}