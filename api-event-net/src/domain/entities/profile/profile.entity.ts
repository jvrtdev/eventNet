import { Profile } from '@prisma/client'


export class ProfileEntity implements Profile{
  id: string;
  avatar: string;
  bio: string;
  github: string;
  instagram: string;
  linkedin: string;
  userId: string;
}
