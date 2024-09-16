import { Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { CreateLikeDto } from 'src/domain/dtos';
import { LikeEntity } from 'src/domain/entities';
import { LikeRepository } from '../repositories/like.repository';

@Injectable()
export class LikeService implements ServiceBase<LikeEntity, CreateLikeDto> {
  constructor(private readonly likeRepository: LikeRepository) {}

  async create(dto: CreateLikeDto): Promise<LikeEntity> {
    return this.likeRepository.create(dto);
  }
}
