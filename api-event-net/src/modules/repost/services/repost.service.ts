import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const repost = await this.repostRepository.create(dto);

    return repost;
  }

  async findById(id: string): Promise<RepostEntity | null> {
    const repost = await this.repostRepository.findById(id);

    return repost;
  }

  async update(dto: UpdateRepostDto): Promise<RepostEntity> {
    const repost = await this.findById(dto.id);

    const update = await this.repostRepository.update({
      ...dto,
      id: repost.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<RepostEntity> {
    const repost = await this.findById(id);

    const remove = await this.repostRepository.delete(repost.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
