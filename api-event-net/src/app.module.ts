import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { AddressModule } from './modules/address/address.module';
import { CommentModule } from './modules/comment/comment.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { EventModule } from './modules/event/event.module';
import { FeedModule } from './modules/feed/feed.module';
import { FriendshipModule } from './modules/friendship/friendship.module';
import { LikeModule } from './modules/like/like.module';
import { MessageModule } from './modules/message/message.module';
import { ParticipantModule } from './modules/participant/participant.module';
import { PostModule } from './modules/post/post.module';
import { ProfileModule } from './modules/profile/profile.module';
import { RepostModule } from './modules/repost/repost.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    ProfileModule,
    EventModule,
    MessageModule,
    ConversationModule,
    ParticipantModule,
    FriendshipModule,
    PostModule,
    RepostModule,
    LikeModule,
    CommentModule,
    FeedModule,
    EventModule,
    PrismaModule,
  ],
})
export class AppModule {}
