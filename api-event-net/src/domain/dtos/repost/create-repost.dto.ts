import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRepostDto {
  @IsString()
  @IsNotEmpty()
  postId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()
  text?: string;
}
