import { Injectable } from '@nestjs/common';
import { PostEntity } from '@entities';
import { PostService } from 'src/modules/post/services/post.service';

@Injectable()
export class FeedService {
  constructor(private readonly postService: PostService) {}

  //   async getUserFeed(userId: string): Promise<PostEntity[]> {
  //     const friends = await this.friendshipService.findAllFriendsByUserId(userId);

  //     const friendsId = friends.map((friend) => friend.friendId);

  //     const postByFriends =
  //       await this.postService.findAllPostsByUsersId(friendsId);

  //     const postsLikedByFriends =
  //       await this.postService.findAllPostsLikedByFriends(friendsId);

  //     const postsCommentedByFriends =
  //       await this.postService.findAllPostsCommentedByFriends(friendsId);

  //     //falta adicionar postsRepostByFriends

  //     const combinedPosts = [
  //       ...postByFriends,
  //       ...postsLikedByFriends,
  //       ...postsCommentedByFriends,
  //     ];

  //     // Remover postagens duplicadas
  //     const uniquePosts = Array.from(
  //       new Set(combinedPosts.map((post) => post.id)),
  //     ).map((id) => combinedPosts.find((post) => post.id === id));

  //     return uniquePosts;
  //   }
}
