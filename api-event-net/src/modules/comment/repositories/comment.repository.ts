import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateCommentDto, UpdateCommentDto } from '@dtos';
import { CommentEntity, QueryBuilderEntity } from '@entities';

@Injectable()
export class CommentRepository extends RepositoryFactory<
  CommentEntity,
  CreateCommentDto,
  UpdateCommentDto
> {
  constructor() {
    super('comment');
  }

  findAll(query: QueryBuilderEntity): Promise<CommentEntity[]> {
    return this.prismaService.comment.findMany({
      ...query,
    });
  }

  findById(id: string): Promise<CommentEntity> {
    return this.prismaService.comment.findFirst({
      where: {
        id,
      },
    });
  }
}
