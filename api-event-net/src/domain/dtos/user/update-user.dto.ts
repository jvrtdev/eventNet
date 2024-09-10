import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString } from 'class-validator';
import { UpdateProfileDto } from '../profile';
import { UpdateAddressDto } from '../address';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;

  @IsString()
  @IsOptional()
  address?: UpdateAddressDto;

  @IsString()
  @IsOptional()
  profile?: UpdateProfileDto;
}
