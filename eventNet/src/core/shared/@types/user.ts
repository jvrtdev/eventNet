import { AddressInterface } from './address';
import { ProfileInterface } from './profile';

export interface UserInterface {
  createdAt?: Date;
  email: string;
  id: string;
  name: string;
  password?: string;
  phone: string;
  role?: string;
  userName: string;
  token?: string;
  address: AddressInterface;
  profile: ProfileInterface;
}
