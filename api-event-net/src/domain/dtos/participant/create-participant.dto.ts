import { $Enums } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  @IsNotEmpty()
  conversationId: string;

  @IsEnum($Enums.ParticipantRole)
  @IsNotEmpty()
  role?: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
