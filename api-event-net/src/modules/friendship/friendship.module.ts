import { Module } from '@nestjs/common';
import { FriendshipService } from './services/friendship.service';
import { FriendshipRepository } from './repositories/friendship.repository';
import { FriendshipController } from './controllers/friendship.controller';
import { ConversationModule } from '../conversation/conversation.module';
import { ParticipantModule } from '../participant/participant.module';

@Module({
  imports: [ConversationModule, ParticipantModule],
  controllers: [FriendshipController],
  providers: [FriendshipService, FriendshipRepository],
  exports: [FriendshipService],
})
export class FriendshipModule {}
