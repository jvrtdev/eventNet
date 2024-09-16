import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto, QueryParamsDto } from 'src/domain/dtos';
import { PostEntity } from 'src/domain/entities';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAllPosts(@Query() queryParams: QueryParamsDto): Promise<PostEntity[]> {
    return this.postService.findAll(queryParams);
  }

  @Get(':id')
  findPostById(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.findById(id);
  }
}
