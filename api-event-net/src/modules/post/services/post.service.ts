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

  async findAll(queryParams: QueryParamsDto): Promise<PostEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.postRepository.findAll(query);

    return data;
  }

  async findAllPostsByUsersIds(usersIds: string[]): Promise<PostEntity[]> {
    const posts = await this.postRepository.findAllPostsByUsersIds(usersIds);

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

  async findById(id: string): Promise<PostEntity> {
    const post = await this.postRepository.findById(id);

    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);

    return post;
  }

  async update(dto: UpdatePostDto): Promise<PostEntity> {
    const post = await this.findById(dto.id);

    const update = await this.postRepository.update({
      ...dto,
      id: post.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<PostEntity> {
    const post = await this.findById(id);

    const remove = await this.postRepository.delete(post.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
