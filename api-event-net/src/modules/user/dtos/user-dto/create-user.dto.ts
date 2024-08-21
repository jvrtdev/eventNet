import { CreateAddressDto } from '../address-dto/create-address.dto';
import { CreateProfileDto } from '../profile-dto/create-profile.dto';
import { UpdateAddressDto } from '../address-dto/update-address.dto';
import { UpdateProfileDto } from '../profile-dto/update-profile.dto';

export class CreateUserDto {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address?: CreateAddressDto | UpdateAddressDto;
  profile?: CreateProfileDto | UpdateProfileDto;
}
