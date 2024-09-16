import { Module } from '@nestjs/common';
import { CommentController } from './controllers/comment.controller';
import { CommentSevice } from './services/comment.service';
import { CommentRepository } from './repositories/comment.repository';

@Module({
  controllers: [CommentController],
  providers: [CommentSevice, CommentRepository],
  exports: [CommentSevice],
})
export class CommentModule {}
