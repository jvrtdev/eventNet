import { Comment } from '@prisma/client';

export class CommentEntity implements Comment {
  id: string;
  postId: string;
  userId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
