import { Address } from '@prisma/client';

export class AddressEntity implements Address {
  id: string;
  state: string;
  city: string;
  neighborhood: string;
  userId: string;
}
