import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProfileInput {
  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsOptional()
  github?: string;
  @IsString()
  @IsOptional()
  linkedin?: string;

  @IsString()
  @IsOptional()
  instagram?: string;
}
