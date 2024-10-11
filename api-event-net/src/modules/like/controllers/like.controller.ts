import { CreateLikeDto } from '@dtos';
import { LikeEntity } from '@entities';
import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { LikeService } from '../services/like.service';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  createLike(@Body() createLikeDto: CreateLikeDto): Promise<LikeEntity> {
    return this.likeService.create(createLikeDto);
  }

  @Delete(':id')
  removeLike(@Param('id') id: string): Promise<LikeEntity> {
    return this.likeService.remove(id);
  }
}
