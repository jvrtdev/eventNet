import { Body, Controller, Get } from '@nestjs/common';
import { MessageEntity } from 'src/domain/entities';
import { MessageService } from '../services/message.service';
import { CreateMessageDto, UpdateMessageDto } from 'src/domain/dtos';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async create(@Body() dto: CreateMessageDto): Promise<MessageEntity> {
    return this.messageService.create(dto);
  }
}
