import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { PostModule } from '../post/post.module';
import { ParticipantModule } from '../participant/participant.module';

@Module({
  imports: [PostModule, ParticipantModule],
  controllers: [FeedController],
  providers: [FeedService],
  exports: [FeedService],
})
export class FeedModule {}
