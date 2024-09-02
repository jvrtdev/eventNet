import { IsOptional, IsString } from "class-validator";

export class CreateAddressInput {
  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;
}
