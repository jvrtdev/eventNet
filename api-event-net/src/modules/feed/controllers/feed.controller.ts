import { Controller, Get, Param } from '@nestjs/common';
import { PostEntity } from '@entities';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get(':userId')
  getUserFeed(@Param('userId') userId: string): Promise<PostEntity[]> {
    return this.feedService.getUserFeed(userId);
  }
}
