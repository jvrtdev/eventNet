import { Controller, Get, Param } from '@nestjs/common';
import { ConversationEntity } from '@entities';
import { ConversationService } from '../services/conversation.service';
import { QueryParamsDto } from '@dtos';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return this.conversationService.findAll(queryParams);
  }

  @Get(':conversationId')
  findByConversationId(
    @Param('conversationId') conversationId: string,
  ): Promise<ConversationEntity> {
    return this.conversationService.findByConversationId(conversationId);
  }
}
