import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateConversationDto {
  @IsString()
  @IsNotEmpty()
  senderId: string;

  @IsString()
  @IsNotEmpty()
  receiverId: string;

  @IsBoolean()
  @IsNotEmpty()
  isGroup?: boolean;
}
