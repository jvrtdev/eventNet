import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { AddressModule } from './modules/address/address.module';
import { CommentModule } from './modules/comment/comment.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { EventModule } from './modules/event/event.module';
import { FeedModule } from './modules/feed/feed.module';
import { LikeModule } from './modules/like/like.module';
import { MessageModule } from './modules/message/message.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { PostModule } from './modules/post/post.module';
import { ProfileModule } from './modules/profile/profile.module';
import { RepostModule } from './modules/repost/repost.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { UserEventModule } from './modules/userEvent/userEvent.module';
import { ConversationRequestModule } from './modules/conversationRequest/conversationRequest.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    ProfileModule,
    EventModule,
    MessageModule,
    ConversationModule,
    ParticipantModule,
    PostModule,
    RepostModule,
    LikeModule,
    CommentModule,
    FeedModule,
    EventModule,
    AuthModule,
    PrismaModule,
    UserEventModule,
    ConversationRequestModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
