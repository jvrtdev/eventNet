import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateRepostDto, UpdateRepostDto } from '@dtos';
import { RepostEntity } from '@entities';

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
