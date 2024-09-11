import { Module } from '@nestjs/common';
import { ConversationService } from './services/conversation.service';
import { ConversationRepository } from './repositories/conversation.repository';

@Module({
  providers: [ConversationService, ConversationRepository],
  exports: [ConversationService],
})
export class ConversationModule {}
