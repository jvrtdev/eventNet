import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateFriendshipDto } from '@dtos';
import { FriendshipEntity } from '@entities';

@Injectable()
export class FriendshipRepository extends RepositoryFactory<
  FriendshipEntity,
  CreateFriendshipDto
> {
  constructor() {
    super('friendship');
  }

  findAllFriendsByUserId(userId: string): Promise<FriendshipEntity[]> {
    return this.prismaService.friendship.findMany({
      where: {
        userId,
      },
      include: {
        friend: true,
      },
    });
  }

  findById(id: string): Promise<FriendshipEntity> {
    return this.prismaService.friendship.findFirst({
      where: {
        id,
      },
    });
  }
}
