import { CreateConversationRequestDto } from '@dtos';
import { ConversationRequestEntity } from '@entities';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ConversationRequestService } from '../services/conversationRequest.service';

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

  @Get('user/sender/:senderId')
  findAllConversationsRequestsBySenderId(
    @Param('senderId') senderId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.conversationRequestService.findAllConversationsRequestsBySenderId(
      senderId,
    );
  }
  @Get('user/recipient/:recipientId')
  findAllConversationsRequestsByRecipientId(
    @Param('recipientId') recipientId: string,
  ): Promise<ConversationRequestEntity[]> {
    return this.conversationRequestService.findAllConversationsRequestsByRecipientId(
      recipientId,
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
