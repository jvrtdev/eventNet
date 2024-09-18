import { Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreateRepostDto, UpdateRepostDto } from '@dtos';
import { RepostEntity } from '@entities';
import { RepostRepository } from '../repositories/repost.repository';

@Injectable()
export class RepostService
  implements ServiceBase<RepostEntity, CreateRepostDto, UpdateRepostDto>
{
  constructor(private readonly repostRepository: RepostRepository) {}

  async create(dto: CreateRepostDto): Promise<RepostEntity> {
    return await this.repostRepository.create(dto);
  }

  async findById(id: string): Promise<RepostEntity | null> {
    return await this.repostRepository.findById(id);
  }
}
