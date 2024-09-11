import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto, UpdateMessageDto } from 'src/domain/dtos';
import { MessageEntity } from 'src/domain/entities';
import { MessageService } from '../services/message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() dto: CreateMessageDto): Promise<MessageEntity> {
    return this.messageService.create(dto);
  }

  @Get(':conversationId')
  getAllMessagesByConversationId(
    @Param('conversationId') conversationId: string,
  ): Promise<MessageEntity[]> {
    return this.messageService.findAllMessagesByConversationId(conversationId);
  }
}
