import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreatePostDto, UpdatePostDto } from 'src/domain/dtos';
import { PostEntity, QueryBuilderEntity } from 'src/domain/entities';

@Injectable()
export class PostRepository extends RepositoryFactory<
  PostEntity,
  CreatePostDto,
  UpdatePostDto
> {

  constructor() {
    super('post')
  }

  findAll(query: QueryBuilderEntity): Promise<PostEntity[]> {
    return this.prismaService.post.findMany({
      ...query,
      include: {
        comments: true,
        likes: true,
        reposts: true,
        owner: true,
        _count: true
      },
    });
  }

  findById(id: string): Promise<PostEntity | null> {
    return this.prismaService.post.findFirst({
      where: {
        id,
      },
      include: {
        comments: true,
        reposts: true,
        likes: true,
        owner: true,
        _count: true
      },
    });
  }
}
