import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  userId: string;
}
