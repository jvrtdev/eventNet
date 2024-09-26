import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateConversationDto, UpdateConversationDto } from '@dtos';
import { ConversationEntity, QueryBuilderEntity } from '@entities';

@Injectable()
export class ConversationRepository extends RepositoryFactory<
  ConversationEntity,
  CreateConversationDto,
  UpdateConversationDto
> {
  constructor() {
    super('conversation');
  }

  findAll(query: QueryBuilderEntity): Promise<ConversationEntity[]> {
    return this.prismaService.conversation.findMany(query);
  }

  findAllConversationsWithStatusAcceptedByConversationsIds(
    conversationsIds: string[],
  ): Promise<ConversationEntity[]> {
    return this.prismaService.conversation.findMany({
      where: {
        id: {
          in: conversationsIds,
        },
        isGroup: false,
        status: 'accepted',
      },
    });
  }

  findById(id: string): Promise<ConversationEntity> {
    return this.prismaService.conversation.findFirst({
      where: {
        id,
      },
      include: {
        event: true,
        participant: true,
        message: true,
      },
    });
  }
}
