import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreateCommentDto, UpdateCommentDto } from '@dtos';
import { CommentEntity } from '@entities';
import { CommentRepository } from '../repositories/comment.repository';

@Injectable()
export class CommentSevice
  implements ServiceBase<CommentEntity, CreateCommentDto, UpdateCommentDto>
{
  constructor(private readonly commentRepository: CommentRepository) {}

  async create(dto: CreateCommentDto): Promise<CommentEntity> {
    return this.commentRepository.create(dto);
  }
}
