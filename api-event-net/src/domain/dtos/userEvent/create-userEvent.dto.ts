import { $Enums } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserEventDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  eventId: string;

  @IsEnum($Enums.EventRole)
  role?: string;
}
