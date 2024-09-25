import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAddressDto {
  @IsNotEmpty()
  userId: string;

  @IsString ()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;
}
