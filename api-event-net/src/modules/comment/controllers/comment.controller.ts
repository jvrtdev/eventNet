import { Body, Controller, Post } from '@nestjs/common';
import { CommentSevice } from '../services/comment.service';
import { CreateCommentDto } from 'src/domain/dtos';
import { CommentEntity } from 'src/domain/entities';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentSevice) {}

  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto): Promise<CommentEntity> {
    return this.commentService.create(createCommentDto);
  }
}
