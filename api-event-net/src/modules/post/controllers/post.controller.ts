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
import { PostService } from '../services/post.service';
import { CreatePostDto, QueryParamsDto, UpdatePostDto } from '@dtos';
import { PostEntity } from '@entities';

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

  @Put(':id')
  updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostEntity> {
    updatePostDto.id = id;
    return this.postService.update(updatePostDto);
  }

  @Delete(':id')
  removePost(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.remove(id);
  }
}
