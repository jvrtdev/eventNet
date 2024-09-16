import { $Enums, User } from '@prisma/client';
import { ProfileEntity } from '../profile';
import { AddressEntity } from '../address';

export class UserEntity implements User {
  id: string;
  name: string;
  userName: string;
  email: string;
  password: string;
  phone: string;
  role: $Enums.UserRole;
  createdAt: Date;
  profile?: ProfileEntity;
  address?: AddressEntity;
  token?: string | null;
}
