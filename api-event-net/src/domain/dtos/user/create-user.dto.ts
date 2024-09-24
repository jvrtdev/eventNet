import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAddressDto, UpdateAddressDto } from '../address';
import { CreateProfileDto, UpdateProfileDto } from '../profile';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsOptional()
  address?: CreateAddressDto | UpdateAddressDto;

  @IsOptional()
  profile?: CreateProfileDto | UpdateProfileDto;
}
