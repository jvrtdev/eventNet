import { Controller, Get } from '@nestjs/common';
import { ConversationEntity } from 'src/domain/entities';
import { ConversationService } from '../services/conversation.service';
import { QueryParamsDto } from 'src/domain/dtos';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  async findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return await this.conversationService.findAll(queryParams);
  }
}
