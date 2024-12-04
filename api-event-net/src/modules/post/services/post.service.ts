import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreatePostDto, QueryParamsDto, UpdatePostDto } from '@dtos';
import { PostEntity } from '@entities';
import { PostRepository } from '../repositories/post.repository';
import { QueryBuilder } from '@utils';

@Injectable()
export class PostService
  implements ServiceBase<PostEntity, CreatePostDto, UpdatePostDto>
{
  constructor(private readonly postRepository: PostRepository) {}

  async create(dto: CreatePostDto): Promise<PostEntity> {
    return await this.postRepository.create(dto);
  }

  async findAll(): Promise<PostEntity[]> {
    const data = await this.postRepository.findAll();

    return data;
  }

  async findById(id: string): Promise<PostEntity> {
    const post = await this.postRepository.findById(id);

    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);

    return post;
  }

  async findAllPostsByUsersId(userIds: string[]): Promise<PostEntity[]> {
    const posts = await this.postRepository.findAllByUserIds(userIds);

    return posts;
  }

  async findAllPostsLikedByFriends(userIds: string[]): Promise<PostEntity[]> {
    const postsLiked =
      await this.postRepository.findAllPostsLikedByFriends(userIds);

    return postsLiked;
  }

  async findAllPostsCommentedByFriends(
    userIds: string[],
  ): Promise<PostEntity[]> {
    const postsCommented =
      await this.postRepository.findAllPostsCommentedByFriends(userIds);

    return postsCommented;
  }
}
