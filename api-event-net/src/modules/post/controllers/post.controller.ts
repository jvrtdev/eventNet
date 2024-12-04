import { CreatePostDto, QueryParamsDto } from '@dtos';
import { PostEntity } from '@entities';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAllPosts(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findPostById(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.findById(id);
  }

  @Get('user/:id')
  findAllPostsByUserId(@Param('id') id: string): Promise<PostEntity[]> {
    return this.postService.findAllPostsByUsersId([id]);
  }
}
