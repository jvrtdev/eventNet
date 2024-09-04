import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateMessageDto, UpdateMessageDto } from 'src/domain/dtos';
import { MessageEntity } from 'src/domain/entities';

@Injectable()
export class MessageRepository extends RepositoryFactory<
  MessageEntity,
  CreateMessageDto,
  UpdateMessageDto
> {
  constructor() {
    super('message');
  }
}
