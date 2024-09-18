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

  findAllFriends(userId: string): Promise<FriendshipEntity[]> {
    return this.prismaService.friendship.findMany({
      where: {
        userId: userId,
      },
      include: {
        friend: true,
      },
    });
  }
}
