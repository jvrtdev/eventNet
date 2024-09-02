import { CreateAddressInput } from '../address/create-address.dto';
import { CreateProfileInput } from '../profile/create-profile.dto';
import { UpdateAddressInput } from '../address/update-address.dto';
import { UpdateProfileInput } from '../profile/update-profile.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  address?: CreateAddressInput | UpdateAddressInput;

  @IsString()
  @IsOptional()
  profile?: CreateProfileInput | UpdateProfileInput;
}
