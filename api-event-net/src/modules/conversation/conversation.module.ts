import { forwardRef, Module } from '@nestjs/common';
import { ConversationService } from './services/conversation.service';
import { ConversationRepository } from './repositories/conversation.repository';
import { ConversationController } from './controllers/conversation.controller';
import { ParticipantModule } from '../participant/participant.module';
import { ConversationRequestModule } from '../conversationRequest/conversationRequest.module';

@Module({
  imports: [
    forwardRef(() => ParticipantModule),
    forwardRef(() => ConversationRequestModule),
  ],
  controllers: [ConversationController],
  providers: [ConversationService, ConversationRepository],
  exports: [ConversationService],
})
export class ConversationModule {}
