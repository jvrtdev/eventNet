import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateLikeDto } from '@dtos';
import { LikeEntity } from '@entities';

@Injectable()
export class LikeRepository extends RepositoryFactory<
  LikeEntity,
  CreateLikeDto
> {
  constructor() {
    super('like');
  }
}
