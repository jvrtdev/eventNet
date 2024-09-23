import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreateFriendshipDto, CreateParticipantDto } from '@dtos';
import { FriendshipEntity } from '@entities';
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
    const conversation = await this.conversationService.create({});

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

  async findAllFriendsByUserId(userId: string): Promise<FriendshipEntity[]> {
    const friends =
      await this.friendshipRepository.findAllFriendsByUserId(userId);

    return friends;
  }

  async findById(id: string): Promise<FriendshipEntity> {
    const friendship = await this.friendshipRepository.findById(id);

    if (!friendship)
      throw new HttpException('Friendship not found', HttpStatus.NOT_FOUND);

    return friendship;
  }

  async remove(id: string): Promise<FriendshipEntity> {
    const friendship = await this.findById(id);

    await this.conversationService.remove(friendship.conversationId);

    const remove = this.friendshipRepository.delete(friendship.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
