import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  conversationId: string

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @IsNotEmpty()
  start_datetime: Date;

  @IsDate()
  @IsNotEmpty()
  end_datetime: Date;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsOptional()
  qr_code?: string

  @IsString()
  @IsNotEmpty()
  image: string;
}
