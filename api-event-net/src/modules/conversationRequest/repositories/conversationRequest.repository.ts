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

  findAllByConversationId(
    conversationId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.prismaService.conversationRequest.findMany({
      where: {
        conversationId,
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
