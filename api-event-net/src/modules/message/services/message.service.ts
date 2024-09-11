import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import {
  CreateMessageDto,
  QueryParamsDto,
  UpdateMessageDto,
} from 'src/domain/dtos';
import { MessageEntity } from 'src/domain/entities';
import { MessageRepository } from '../repositories/message.repository';

@Injectable()
export class MessageService
  implements ServiceBase<MessageEntity, CreateMessageDto, UpdateMessageDto>
{
  constructor(private readonly messageRepository: MessageRepository) {}

  async create(dto: CreateMessageDto): Promise<MessageEntity> {
    if (!dto.content) {
      throw new HttpException('Mensagem inválida!', HttpStatus.BAD_REQUEST);
    }

    const message = await this.messageRepository.create(dto);

    return message;
  }

  async findAllMessagesByConversationId(
    conversationId: string,
  ): Promise<MessageEntity[]> {
    const messages =
      await this.messageRepository.findAllMessagesByConversationId(
        conversationId,
      );

    return messages;
  }
}
