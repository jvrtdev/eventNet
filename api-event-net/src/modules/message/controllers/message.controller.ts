import { Controller, Get, Param } from '@nestjs/common';
import { MessageEntity } from '@entities';
import { MessageService } from '../services/message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get(':conversationId')
  getAllMessagesByConversationId(
    @Param('conversationId') conversationId: string,
  ): Promise<MessageEntity[]> {
    return this.messageService.findAllMessagesByConversationId(conversationId);
  }
}
