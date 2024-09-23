import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConversationEntity } from '@entities';
import { ConversationService } from '../services/conversation.service';
import { QueryParamsDto } from '@dtos';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  findAll(@Query() queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return this.conversationService.findAll(queryParams);
  }

  @Get(':id')
  findByConversationId(@Param('id') id: string): Promise<ConversationEntity> {
    return this.conversationService.findById(id);
  }
}
