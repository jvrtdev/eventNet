import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { PostModule } from '../post/post.module';
import { FriendshipModule } from '../friendship/friendship.module';

@Module({
  imports: [PostModule, FriendshipModule],
  controllers: [FeedController],
  providers: [FeedService],
  exports: [FeedService],
})
export class FeedModule {}
