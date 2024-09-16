import { Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { CreateFriendshipDto, CreateParticipantDto } from 'src/domain/dtos';
import { FriendshipEntity } from 'src/domain/entities';
import { FriendshipRepository } from '../repositories/friendship.repository';
import { ConversationService } from 'src/modules/conversation/services/conversation.service';
import { ParticipantService } from 'src/modules/participant/services/participant.service';

@Injectable()
export class FriendshipService
  implements ServiceBase<FriendshipEntity, CreateFriendshipDto>
{
  constructor(
    private readonly friendshipRepository: FriendshipRepository,
    private readonly conversationService: ConversationService,
    private readonly participantService: ParticipantService,
  ) {}

  async create(dto: CreateFriendshipDto): Promise<FriendshipEntity> {
    const conversation = await this.conversationService.create();

    dto.conversationId = conversation.id;

    const friendship = await this.friendshipRepository.create(dto);

    const participantData: CreateParticipantDto[] = [
      {
        conversationId: friendship.conversationId,
        userId: friendship.userId,
      },
      {
        conversationId: friendship.conversationId,
        userId: friendship.friendId,
      },
    ];

    await this.participantService.createMany(participantData);

    return friendship;
  }

  async getAllFriendsByUserId(userId: string) {
    const friends = await this.friendshipRepository.findAllFriends(userId)
    
    return friends
  }
}
