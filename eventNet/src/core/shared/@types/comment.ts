import { UserInterface } from './user';

export interface CommentInterface {
  postId: string;
  userId: string;
  text: string;
  user?: Pick<UserInterface, 'name' | 'userName' | 'profile' | 'id'>;
}
