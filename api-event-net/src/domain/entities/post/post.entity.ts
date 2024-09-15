import { Post } from '@prisma/client';

export class PostEntity implements Post {
  id: string;
  ownerId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
