import { Injectable } from '@nestjs/common';
import { PostEntity } from '@entities';
import { FriendshipService } from 'src/modules/friendship/services/friendship.service';
import { PostService } from 'src/modules/post/services/post.service';

@Injectable()
export class FeedService {
  constructor(
    private readonly postService: PostService,
    private readonly friendshipService: FriendshipService,
  ) {}

  async getUserFeed(userId: string): Promise<PostEntity[]> {
    const friends = await this.friendshipService.getAllFriendsByUserId(userId);

    const friendsId = friends.map((friend) => friend.friendId);

    const postByFriends =
      await this.postService.findAllPostsByUsersId(friendsId);

    const postsLikedByFriends =
      await this.postService.findAllPostsLikedByFriends(friendsId);

    const postsCommentedByFriends =
      await this.postService.findAllPostsCommentedByFriends(friendsId);

    //adicionar repostByFriends

    const combinedPosts = [
      ...postByFriends,
      ...postsLikedByFriends,
      ...postsCommentedByFriends,
    ];

    // Remover postagens duplicadas
    const uniquePosts = Array.from(
      new Set(combinedPosts.map((post) => post.id)),
    ).map((id) => combinedPosts.find((post) => post.id === id));

    return uniquePosts;
  }
}
