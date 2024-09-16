import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateRepostDto, UpdateRepostDto } from 'src/domain/dtos';
import { RepostEntity } from 'src/domain/entities';

@Injectable()
export class RepostRepository extends RepositoryFactory<
  RepostEntity,
  CreateRepostDto,
  UpdateRepostDto
> {
  constructor() {
    super('repost');
  }

  findById(id: string): Promise<RepostEntity | null> {
    return this.prismaService.repost.findFirst({
      where: {
        id,
      },
      include: {
        post: true,
        user: true,
      },
    });
  }
}
