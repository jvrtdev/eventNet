import { RepositoryFactory } from '@factories';
import { Injectable } from '@nestjs/common';
import { CreateConversationRequestDto } from '@dtos';
import { ConversationRequestEntity } from '@entities';

@Injectable()
export class ConversationRequestRepository extends RepositoryFactory<
  ConversationRequestEntity,
  CreateConversationRequestDto
> {
  constructor() {
    super('conversationRequest');
  }

  findAll(): Promise<ConversationRequestEntity[]> {
    return this.prismaService.conversationRequest.findMany();
  }

  findAllConversationsRequestsByConversationId(
    conversationId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.prismaService.conversationRequest.findMany({
      where: {
        conversationId,
      },
    });
  }

  findAllConversationsRequestsBySenderId(
    senderId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.prismaService.conversationRequest.findMany({
      where: {
        senderId,
      },
      include: {
        recipient: {
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
    });
  }

  findById(id: string): Promise<ConversationRequestEntity> {
    return this.prismaService.conversationRequest.findFirst({
      where: {
        id,
      },
    });
  }
}
