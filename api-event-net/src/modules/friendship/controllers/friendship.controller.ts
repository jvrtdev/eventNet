import { Body, Controller, Post } from '@nestjs/common';
import { FriendshipService } from '../services/friendship.service';
import { CreateFriendshipDto } from 'src/domain/dtos';
import { FriendshipEntity } from 'src/domain/entities';

@Controller('friendship')
export class FriendshipController {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Post()
  create(
    @Body() createFriendshipDto: CreateFriendshipDto,
  ): Promise<FriendshipEntity> {
    return this.friendshipService.create(createFriendshipDto);
  }
}
