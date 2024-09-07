import { Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { CreateFriendshipDto, CreateParticipantDto } from 'src/domain/dtos';
import { FriendshipEntity } from 'src/domain/entities';
import { FriendshipRepository } from '../repositories/friendship.repository';

@Injectable()
export class FriendshipService
  implements ServiceBase<FriendshipEntity, CreateFriendshipDto>
{
  constructor(private readonly friendshipRepository: FriendshipRepository) {}

  async create(dto: CreateFriendshipDto): Promise<FriendshipEntity> {
    const users = [
      {
        userId: dto.userId,
      },
      {
        userId: dto.friendId,
      },
    ];

    return await this.friendshipRepository.createFriendshipChat(dto, users);
  }
}
