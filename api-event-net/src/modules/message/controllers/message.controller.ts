import { Body, Controller, Get } from '@nestjs/common';
import { MessageEntity } from 'src/domain/entities';
import { MessageService } from '../services/message.service';
import { ControllerBase } from 'src/common/base';
import { CreateMessageDto, UpdateMessageDto } from 'src/domain/dtos';

@Controller('message')
export class MessageController implements ControllerBase<MessageEntity, CreateMessageDto, UpdateMessageDto > {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async create(@Body() dto: CreateMessageDto): Promise<MessageEntity> {
    return this.messageService.create(dto);
  }

  
}
