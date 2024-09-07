import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateFriendshipDto, CreateParticipantDto } from 'src/domain/dtos';
import { FriendshipEntity } from 'src/domain/entities';

@Injectable()
export class FriendshipRepository extends RepositoryFactory<
  FriendshipEntity,
  CreateFriendshipDto
> {
  constructor() {
    super('friendship');
  }

  createFriendshipChat(
    data: CreateFriendshipDto,
    users: { userId: string }[],
  ): Promise<FriendshipEntity> {
    return this.prismaService.friendship.create({
      data: {
        user: {
          connect: { id: data.userId },
        },
        friend: {
          connect: { id: data.friendId },
        },
        conversation: {
          create: {
            Participant: {
              createMany: {
                data: users.map((user) => ({
                  userId: user.userId,
                })),
              },
            },
          },
        },
      },
    });
  }
}
