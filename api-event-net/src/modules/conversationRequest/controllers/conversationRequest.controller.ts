import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ConversationRequestService } from '../services/conversationRequest.service';
import { ConversationRequestEntity } from '@entities';
import { CreateConversationRequestDto } from '@dtos';

@Controller('conversationRequest')
export class ConversationRequestController {
  constructor(
    private readonly conversationRequestService: ConversationRequestService,
  ) {}

  @Post()
  createConversationRequest(
    @Body() createConversationRequestDto: CreateConversationRequestDto,
  ): Promise<ConversationRequestEntity> {
    return this.conversationRequestService.create(createConversationRequestDto);
  }

  @Get()
  findAllConversationsRequests(): Promise<ConversationRequestEntity[]> {
    return this.conversationRequestService.findAll();
  }

  @Get('conversation/:conversationId')
  findAllConversationsRequestsByConversationId(
    @Param('conversationId') conversationId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.conversationRequestService.findAllConversationsRequestsByConversationId(
      conversationId,
    );
  }

  @Get('user/:senderId')
  findAllConversationsRequestsBySenderId(
    @Param('senderId') senderId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.conversationRequestService.findAllConversationsRequestsBySenderId(
      senderId,
    );
  }

  @Get(':id')
  findConversationRequestById(
    @Param('id') id: string,
  ): Promise<ConversationRequestEntity> {
    return this.conversationRequestService.findById(id);
  }

  @Delete(':id')
  removeConversationRequest(
    @Param('id') id: string,
  ): Promise<ConversationRequestEntity> {
    return this.conversationRequestService.remove(id);
  }

  @Delete('accepted/:id')
  accepted(@Param('id') id: string): Promise<ConversationRequestEntity> {
    return this.conversationRequestService.accepted(id);
  }

  @Delete('refused/:id')
  refused(@Param('id') id: string): Promise<ConversationRequestEntity> {
    return this.conversationRequestService.refused(id);
  }
}
