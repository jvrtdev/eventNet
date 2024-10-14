import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRepostDto, UpdateRepostDto } from '@dtos';
import { RepostEntity } from '@entities';
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

  @Put(':id')
  updateRepost(
    @Param('id') id: string,
    @Body() updateRepostDto: UpdateRepostDto,
  ): Promise<RepostEntity> {
    updateRepostDto.id = id;
    return this.repostService.update(updateRepostDto);
  }

  @Delete(':id')
  removeRepost(@Param('id') id: string): Promise<RepostEntity> {
    return this.repostService.remove(id);
  }
}
