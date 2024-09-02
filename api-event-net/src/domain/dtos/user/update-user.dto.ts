import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString } from 'class-validator';
import {
  CreateAddressDto,
  UpdateAddressDto,
  CreateProfileDto,
  UpdateProfileDto,
} from '@dtos';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;

  @IsString()
  @IsOptional()
  address?: CreateAddressDto | UpdateAddressDto;

  @IsString()
  @IsOptional()
  profile?: CreateProfileDto | UpdateProfileDto;
}
