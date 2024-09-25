import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateMessageDto, UpdateMessageDto } from '@dtos';
import { MessageEntity } from '@entities';

@Injectable()
export class MessageRepository extends RepositoryFactory<
  MessageEntity,
  CreateMessageDto,
  UpdateMessageDto
> {
  constructor() {
    super('message');
  }

  findAllMessagesByConversationId(
    conversationId: string,
  ): Promise<MessageEntity[] | null> {
    return this.prismaService.message.findMany({
      where: {
        conversationId,
      },
    });
  }

  findbyId(id: string): Promise<MessageEntity> {
    return this.prismaService.message.findFirst({
      where: {
        id,
      },
    });
  }
}
