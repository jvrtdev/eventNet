import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateCommentDto, UpdateCommentDto } from '@dtos';
import { CommentEntity } from '@entities';

@Injectable()
export class CommentRepository extends RepositoryFactory<
  CommentEntity,
  CreateCommentDto,
  UpdateCommentDto
> {
  constructor() {
    super('comment');
  }
}
