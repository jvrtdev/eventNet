import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateLikeDto } from '@dtos';
import { LikeEntity, QueryBuilderEntity } from '@entities';

@Injectable()
export class LikeRepository extends RepositoryFactory<
  LikeEntity,
  CreateLikeDto
> {
  constructor() {
    super('like');
  }

  findAll(query: QueryBuilderEntity): Promise<LikeEntity[]> {
    return this.prismaService.like.findMany({
      ...query,
    });
  }

  findById(id: string): Promise<LikeEntity> {
    return this.prismaService.like.findFirst({
      where: {
        id,
      },
    });
  }
}
