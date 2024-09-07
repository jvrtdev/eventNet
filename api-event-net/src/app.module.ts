import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { MessageModule } from './modules/message/message.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { FriendshipModule } from './modules/friendship/friendship.module';

@Module({
  imports: [
    UserModule,
    MessageModule,
    ConversationModule,
    ParticipantModule,
    FriendshipModule,
    PrismaModule,
  ],
})
export class AppModule {}
