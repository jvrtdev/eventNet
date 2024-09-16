import { Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { CreateRepostDto, UpdateRepostDto } from 'src/domain/dtos';
import { RepostEntity } from 'src/domain/entities';
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
