import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommentSevice } from '../services/comment.service';
import { CreateCommentDto, QueryParamsDto, UpdateCommentDto } from '@dtos';
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

  @Get()
  findAllUsers(@Query() queryParams: QueryParamsDto): Promise<CommentEntity[]> {
    return this.commentService.findAll(queryParams);
  }

  @Get(':id')
  findUserById(@Param('id') id: string): Promise<CommentEntity> {
    return this.commentService.findById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> {
    updateCommentDto.id = id;
    return this.commentService.update(updateCommentDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<CommentEntity> {
    return this.commentService.remove(id);
  }
}
