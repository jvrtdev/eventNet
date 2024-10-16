import { ServiceBase } from '@bases';
import { CreateLikeDto } from '@dtos';
import { LikeEntity } from '@entities';
import { Injectable } from '@nestjs/common';
import { LikeRepository } from '../repositories/like.repository';

@Injectable()
export class LikeService implements ServiceBase<LikeEntity, CreateLikeDto> {
  constructor(private readonly likeRepository: LikeRepository) {}

  async create(dto: CreateLikeDto): Promise<LikeEntity> {
    return this.likeRepository.create(dto);
  }

  async remove(id: string): Promise<LikeEntity> {
    return this.likeRepository.delete(id);
  }
}
