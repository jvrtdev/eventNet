import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString } from 'class-validator';
import { UpdateProfileDto, CreateProfileDto } from '../profile';
import { CreateAddressDto, UpdateAddressDto } from '../address';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;

  @IsString()
  @IsOptional()
  address?: CreateAddressDto | UpdateAddressDto;

  @IsString()
  @IsOptional()
  profile?: CreateProfileDto | UpdateProfileDto;
}
