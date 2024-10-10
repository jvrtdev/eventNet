import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { LikeService } from '../services/like.service';
import { CreateLikeDto, QueryParamsDto } from '@dtos';
import { LikeEntity } from '@entities';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  createLike(@Body() createLikeDto: CreateLikeDto): Promise<LikeEntity> {
    return this.likeService.create(createLikeDto);
  }

  @Get()
  findAllLikes(@Query() queryParams: QueryParamsDto): Promise<LikeEntity[]> {
    return this.likeService.findAll(queryParams);
  }

  @Get(':id')
  findLikeById(@Param('id') id: string): Promise<LikeEntity> {
    return this.likeService.findById(id);
  }

  @Delete(':id')
  removeLike(@Param('id') id: string): Promise<LikeEntity> {
    return this.likeService.remove(id);
  }
}
