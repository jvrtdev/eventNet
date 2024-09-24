import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateConversationDto {
  @IsBoolean()
  @IsOptional()
  isGroup?: boolean;

  @IsUUID()
  @IsOptional()
  senderId?: string;

  @IsUUID()
  @IsOptional()
  recipientId?: string;

  @IsNotEmpty()
  status: string | null;
}
