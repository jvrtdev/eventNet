import { Message } from '@prisma/client';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageInput {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  conversationId: string;

  @IsBoolean()
  @IsNotEmpty()
  isRead: boolean;

  @IsDate()
  @IsNotEmpty()
  timeStamp: Date;

  @IsString()
  @IsNotEmpty()
  senderId: string;
}
