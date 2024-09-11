import { Message } from '@prisma/client';
import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  conversationId: string;

  @IsBoolean()
  @IsOptional()
  isRead?: boolean;


  @IsString()
  @IsNotEmpty()
  senderId: string;
}
