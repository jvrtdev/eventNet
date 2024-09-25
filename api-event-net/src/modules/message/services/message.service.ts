import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { CreateMessageDto, UpdateMessageDto } from '@dtos';
import { MessageEntity } from '@entities';
import { MessageRepository } from '../repositories/message.repository';

@Injectable()
export class MessageService
  implements ServiceBase<MessageEntity, CreateMessageDto, UpdateMessageDto>
{
  constructor(private readonly messageRepository: MessageRepository) {}

  async create(dto: CreateMessageDto): Promise<MessageEntity> {
    const message = await this.messageRepository.create(dto);

    return message;
  }

  async findById(id: string): Promise<MessageEntity> {
    const message = await this.messageRepository.findbyId(id);

    if (!message)
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);

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

  async update(dto: UpdateMessageDto): Promise<MessageEntity> {
    const message = await this.findById(dto.id);

    const update = await this.messageRepository.update({
      ...dto,
      id: message.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<MessageEntity> {
    const message = await this.findById(id);

    const remove = await this.messageRepository.delete(message.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
