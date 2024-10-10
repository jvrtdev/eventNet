import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreateLikeDto, QueryParamsDto } from '@dtos';
import { LikeEntity } from '@entities';
import { LikeRepository } from '../repositories/like.repository';
import { QueryBuilder } from '@utils';

@Injectable()
export class LikeService implements ServiceBase<LikeEntity, CreateLikeDto> {
  constructor(private readonly likeRepository: LikeRepository) {}

  async create(dto: CreateLikeDto): Promise<LikeEntity> {
    const like = await this.likeRepository.create(dto);

    return like;
  }

  async findAll(queryParams: QueryParamsDto): Promise<LikeEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.likeRepository.findAll(query);

    return data;
  }

  async findById(id: string): Promise<LikeEntity> {
    const like = await this.likeRepository.findById(id);

    if (!like) throw new HttpException('Like not found', HttpStatus.NOT_FOUND);

    return like;
  }

  async remove(id: string): Promise<LikeEntity> {
    const like = await this.findById(id);

    const remove = await this.likeRepository.delete(like.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
