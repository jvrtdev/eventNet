import { Body, Controller, Get, Post } from '@nestjs/common';
import { LikeService } from '../services/like.service';
import { CreateLikeDto } from 'src/domain/dtos';
import { LikeEntity } from 'src/domain/entities';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  createLike(@Body() createLikeDto: CreateLikeDto): Promise<LikeEntity> {
    return this.likeService.create(createLikeDto);
  }

}
