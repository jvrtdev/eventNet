import { Repost } from "@prisma/client";


export class RepostEntity implements Repost{
  id: string;
  postId: string;
  userId: string;
  text: string;
  createdAt: Date;
}