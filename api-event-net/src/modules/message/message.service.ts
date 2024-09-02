import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { MessageEntity } from 'src/domain/entities';
import { MessageRepository } from './message.repository';
import { CreateMessageInput, UpdateMessageInput } from 'src/domain/dtos';

@Injectable()
export class MessageService
  implements ServiceBase<MessageEntity, CreateMessageInput, UpdateMessageInput>
{
  constructor(private readonly messageRepository: MessageRepository) {}

  async create(dto: CreateMessageInput): Promise<MessageEntity> {
    //validar se existe um conversation(chat), se não existir, criar um conversation e colocar na tabela participants o id do sender e o receiver
    
    if (dto.content != null) {
      throw new HttpException('Mensagem inválida!', HttpStatus.BAD_REQUEST);
    }

    const message = await this.messageRepository.create(dto);

    return message
  }
}
