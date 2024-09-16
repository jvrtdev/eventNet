import { Module } from '@nestjs/common';
import { RepostController } from './controllers/repost.controller';
import { RepostService } from './services/repost.service';
import { RepostRepository } from './repositories/repost.repository';

@Module({
  controllers: [RepostController],
  providers: [RepostService, RepostRepository],
  exports: [RepostService],
})
export class RepostModule {}
