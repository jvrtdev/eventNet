import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFriendshipDto } from 'src/domain/dtos';
import { FriendshipEntity } from 'src/domain/entities';
import { FriendshipService } from '../services/friendship.service';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Post()
  create(
    @Body() createFriendshipDto: CreateFriendshipDto,
  ): Promise<FriendshipEntity> {
    return this.friendshipService.create(createFriendshipDto);
  }

  @Get(':userId')
  findAllFriendsByUserId(
    @Param('userId') userId: string,
  ): Promise<FriendshipEntity[] | null> {
    return this.friendshipService.getAllFriendsByUserId(userId);
  }
}
