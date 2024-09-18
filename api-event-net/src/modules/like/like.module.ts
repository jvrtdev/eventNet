import { Module } from '@nestjs/common';
import { LikeService } from './services/like.service';
import { LikeRepository } from './repositories/like.repository';
import { LikeController } from './controllers/like.controller';

@Module({
  controllers: [LikeController],
  providers: [LikeService, LikeRepository],
  exports: [LikeService],
})
export class LikeModule {}
