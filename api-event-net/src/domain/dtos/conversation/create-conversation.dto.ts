import { IsBoolean, IsOptional } from 'class-validator';

export class CreateConversationDto {
  @IsBoolean()
  @IsOptional()
  isGroup?: boolean;
}
