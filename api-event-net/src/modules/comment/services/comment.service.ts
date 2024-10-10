import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreateCommentDto, QueryParamsDto, UpdateCommentDto } from '@dtos';
import { CommentEntity } from '@entities';
import { CommentRepository } from '../repositories/comment.repository';
import { QueryBuilder } from '@utils';

@Injectable()
export class CommentSevice
  implements ServiceBase<CommentEntity, CreateCommentDto, UpdateCommentDto>
{
  constructor(private readonly commentRepository: CommentRepository) {}

  async create(dto: CreateCommentDto): Promise<CommentEntity> {
    const comment = await this.commentRepository.create(dto);

    return comment;
  }

  async findAll(queryParams: QueryParamsDto): Promise<CommentEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.commentRepository.findAll(query);

    return data;
  }

  async findById(id: string): Promise<CommentEntity> {
    const comment = await this.commentRepository.findById(id);

    if (!comment)
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);

    return comment;
  }

  async update(dto: UpdateCommentDto): Promise<CommentEntity> {
    const comment = await this.findById(dto.id);

    if (!comment)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return comment;
  }

  async remove(id: string): Promise<CommentEntity> {
    const user = await this.findById(id);

    const remove = await this.commentRepository.delete(user.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
