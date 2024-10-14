import { Injectable } from '@nestjs/common';
import { PostEntity } from '@entities';
import { PostService } from 'src/modules/post/services/post.service';
import { ParticipantService } from 'src/modules/participant/services/participant.service';

@Injectable()
export class FeedService {
  constructor(
    private readonly postService: PostService,
    private readonly participantService: ParticipantService,
  ) {}

  async getUserFeed(userId: string): Promise<PostEntity[]> {
    const friends =
      await this.participantService.findAllFriendsByUserId(userId);

    const friendsId = friends.map((friend) => friend.userId);

    const postByFriends =
      await this.postService.findAllPostsByUsersIds(friendsId);

    const postsLikedByFriends =
      await this.postService.findAllPostsLikedByFriends(friendsId);

    const postsCommentedByFriends =
      await this.postService.findAllPostsCommentedByFriends(friendsId);

    //falta adicionar postsRepostByFriends

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
