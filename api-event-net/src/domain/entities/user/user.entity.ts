import { $Enums, User } from '@prisma/client'

export class UserEntity implements User{
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: $Enums.UserRole;
}
