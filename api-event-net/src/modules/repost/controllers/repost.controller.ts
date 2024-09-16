import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRepostDto } from 'src/domain/dtos';
import { RepostEntity } from 'src/domain/entities';
import { RepostService } from '../services/repost.service';

@Controller('repost')
export class RepostController {
  constructor(private readonly repostService: RepostService) {}

  @Post()
  createRepost(
    @Body() createRepostDto: CreateRepostDto,
  ): Promise<RepostEntity> {
    return this.repostService.create(createRepostDto);
  }

  @Get(':id')
  findRepostById(@Param('id') id: string): Promise<RepostEntity | null> {
    return this.repostService.findById(id);
  }
}
