import { CreateConversationDto, UpdateConversationDto } from '@dtos';
import { ConversationEntity, QueryBuilderEntity, UserEntity } from '@entities';
import { RepositoryFactory } from '@factories';
import { Injectable } from '@nestjs/common';

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

  findAllPendingConversationsByUserId(
    userId: string,
  ): Promise<ConversationEntity[]> {
    return this.prismaService.conversation.findMany({
      where: {
        participant: {
          some: {
            userId: userId,
          },
        },
        status: 'pending',
      },
      include: {
        participant: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                userName: true,
                profile: {
                  select: {
                    avatar: true,
                  },
                },
              },
            },
          },
        },
      },
    });
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
