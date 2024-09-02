import { Body, Controller } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageInput } from 'src/domain/dtos';
import { MessageEntity } from 'src/domain/entities';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  async createMessage(@Body() dto: CreateMessageInput): Promise<MessageEntity> {
    return this.messageService.create(dto);
  }
}
