import { PartialType } from '@nestjs/mapped-types';
import { CreateConversationDto } from './create-conversation.dto';
import { FriendshipStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateConversationDto extends PartialType(CreateConversationDto) {
  id: string;

  @IsNotEmpty()
  @IsEnum(FriendshipStatus)
  status: string;
}
