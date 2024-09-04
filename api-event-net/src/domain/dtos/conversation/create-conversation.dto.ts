import { Conversation } from '@prisma/client';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateConversationDto {
  @IsBoolean()
  @IsNotEmpty()
  isGroup: boolean;
}
