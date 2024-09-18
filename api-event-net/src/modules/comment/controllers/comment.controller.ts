import { Body, Controller, Post } from '@nestjs/common';
import { CommentSevice } from '../services/comment.service';
import { CreateCommentDto } from '@dtos';
import { CommentEntity } from '@entities';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentSevice) {}

  @Post()
  createComment(
    @Body() createCommentDto: CreateCommentDto,
  ): Promise<CommentEntity> {
    return this.commentService.create(createCommentDto);
  }
}
