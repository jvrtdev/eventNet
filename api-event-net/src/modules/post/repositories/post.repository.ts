import { CreatePostDto, UpdatePostDto } from '@dtos';
import { PostEntity, QueryBuilderEntity } from '@entities';
import { RepositoryFactory } from '@factories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository extends RepositoryFactory<
  PostEntity,
  CreatePostDto,
  UpdatePostDto
> {
  constructor() {
    super('post');
  }

  findAll(): Promise<PostEntity[]> {
    return this.prismaService.post.findMany({
      include: {
        comments: true,
        likes: true,
        reposts: true,
        owner: true,
        _count: true,
      },
    });
  }

  findById(id: string): Promise<PostEntity | null> {
    return this.prismaService.post.findFirst({
      where: {
        id,
      },
      include: {
        comments: {
          select: {
            user: true,
            text: true,
            createdAt: true,
          },
        },
        reposts: true,
        likes: true,
        owner: true,
        _count: true,
      },
    });
  }

  findAllByUserIds(userIds: string[]): Promise<PostEntity[]> {
    return this.prismaService.post.findMany({
      where: {
        ownerId: {
          in: userIds,
        },
      },
      include: { owner: true, _count: true },
    });
  }

  findAllPostsLikedByFriends(friendIds: string[]): Promise<PostEntity[]> {
    return this.prismaService.post.findMany({
      where: {
        likes: {
          some: {
            userId: { in: friendIds },
          },
        },
      },
      include: { owner: true, likes: true, _count: true },
    });
  }

  findAllPostsCommentedByFriends(friendIds: string[]): Promise<PostEntity[]> {
    return this.prismaService.post.findMany({
      where: {
        comments: {
          some: {
            userId: {
              in: friendIds,
            },
          },
        },
      },
      include: {
        owner: true,
        comments: {
          select: {
            user: true,
          },
        },
        _count: true,
      },
    });
  }
}
