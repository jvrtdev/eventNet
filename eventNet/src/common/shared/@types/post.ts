import { CommentInterface } from "./comment";
import { LikeInterface } from "./like";
import { UserInterface } from "./user";

export interface PostInterface {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  text: string;
  ownerId: string;
  owner?: UserInterface
  comments?: CommentInterface;
  likes?: LikeInterface;
  reposts?: any;
  _count: {
    comments: number
    likes: number
    reposts: number
  }
}
