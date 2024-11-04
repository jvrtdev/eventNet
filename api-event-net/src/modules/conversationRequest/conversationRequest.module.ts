import { forwardRef, Module } from '@nestjs/common';
import { ConversationModule } from '../conversation/conversation.module';
import { ConversationRequestController } from './controllers/conversationRequest.controller';
import { ConversationRequestService } from './services/conversationRequest.service';
import { ConversationRequestRepository } from './repositories/conversationRequest.repository';
import { ConversationRequestGateway } from './gateways/conversationRequest.gateways';

@Module({
  imports: [forwardRef(() => ConversationModule)],
  controllers: [ConversationRequestController],
  providers: [
    ConversationRequestService,
    ConversationRequestRepository,
    ConversationRequestGateway,
  ],
  exports: [ConversationRequestService],
})
export class ConversationRequestModule {}
