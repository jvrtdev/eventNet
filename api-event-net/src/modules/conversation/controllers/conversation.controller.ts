import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ConversationEntity } from '@entities';
import { ConversationService } from '../services/conversation.service';
import {
  CreateConversationDto,
  QueryParamsDto,
  UpdateConversationDto,
} from '@dtos';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  createConversation(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationService.create(createConversationDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return this.conversationService.findAll(queryParams);
  }

  @Get(':id')
  findByConversationId(@Param('id') id: string): Promise<ConversationEntity> {
    return this.conversationService.findById(id);
  }

  @Put(':id')
  updateConversation(
    @Param('id') id: string,
    @Body() updateConversationDto: UpdateConversationDto,
  ): Promise<ConversationEntity> {
    updateConversationDto.id = id;
    return this.conversationService.update(updateConversationDto);
  }

  @Delete(':id')
  removeConversation(@Param('id') id: string): Promise<ConversationEntity> {
    return this.conversationService.remove(id);
  }
}
