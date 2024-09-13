import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { MessageModule } from './modules/message/message.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { FriendshipModule } from './modules/friendship/friendship.module';
import { AddressModule } from './modules/address/address.module';
import { ProfileModule } from './modules/profile/profile.module';
import { EventModule } from './modules/event/event.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    ProfileModule,
    MessageModule,
    ConversationModule,
    ParticipantModule,
    FriendshipModule,
    EventModule,
    PrismaModule,
  ],
})
export class AppModule {}
