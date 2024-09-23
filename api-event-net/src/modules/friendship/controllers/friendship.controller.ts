import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FriendshipService } from '../services/friendship.service';
import { CreateFriendshipDto } from '@dtos';
import { FriendshipEntity } from '@entities';

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
  ): Promise<FriendshipEntity[]> {
    return this.friendshipService.findAllFriendsByUserId(userId);
  }
}
