import { Module } from '@nestjs/common';
import { ConversationService } from './services/conversation.service';
import { ConversationRepository } from './repositories/conversation.repository';
import { ConversationController } from './controllers/conversation.controller';

@Module({
  controllers: [ConversationController],
  providers: [ConversationService, ConversationRepository],
  exports: [ConversationService],
})
export class ConversationModule {}
