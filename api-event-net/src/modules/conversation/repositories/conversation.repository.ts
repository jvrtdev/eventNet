import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateConversationDto } from '@dtos';
import { ConversationEntity, QueryBuilderEntity } from '@entities';

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

  findById(id: string): Promise<ConversationEntity> {
    return this.prismaService.conversation.findFirst({
      where: {
        id,
      },
      include: {
        Event: true,
        friendship: {
          select: {
            friend: true,
          },
        },
        message: true,
      },
    });
  }
}
