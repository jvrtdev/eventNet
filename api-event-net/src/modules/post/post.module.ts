import { Module } from '@nestjs/common';
import { PostRepository } from './repositories/post.repository';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';

@Module({
  controllers: [PostController],
  providers: [PostRepository, PostService],
  exports: [PostService],
})
export class PostModule {}
