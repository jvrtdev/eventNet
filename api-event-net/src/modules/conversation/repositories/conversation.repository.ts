import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateConversationDto } from 'src/domain/dtos/conversation';
import { QueryBuilderEntity } from 'src/domain/entities';
import { ConversationEntity } from 'src/domain/entities/conversation';

@Injectable()
export class ConversationRepository extends RepositoryFactory<
  ConversationEntity,
  CreateConversationDto
> {
  constructor() {
    super('conversation');
  }

  findAll(query: QueryBuilderEntity): Promise<ConversationEntity[]> {
    return this.prismaService.conversation.findMany(query);
  }

  findByConversationId(conversationId: string): Promise<ConversationEntity> {
    return this.prismaService.conversation.findFirst({
      where: { id: conversationId },
      include: { 
        Event: true,
        friendship: {
          select: {
            friend: true
          },
        }, 
        message: true },
    });
  }
}
