import { Like } from '@prisma/client';

export class LikeEntity implements Like {
  id: string;
  postId: string;
  userId: string;
  createdAt: Date;
}
