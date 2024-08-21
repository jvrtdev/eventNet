export class CreateUserDto {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address?: CreateAddressDto;
  profile?: CreateProfileDto;
}

export class CreateAddressDto {
  id?: string;
  city?: string;
  state?: string;
  neighborhood?: string;
}

export class CreateProfileDto {
  id?: string;
  bio?: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}
