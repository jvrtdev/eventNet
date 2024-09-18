import { RepositoryFactory } from '@factories';
import { CreateAddressDto, UpdateAddressDto } from '@dtos';
import { AddressEntity } from '@entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressRepository extends RepositoryFactory<
  AddressEntity,
  CreateAddressDto,
  UpdateAddressDto
> {
  constructor() {
    super('address');
  }

  findById(id: string) {
    return this.prismaService.address.findFirst({
      where: {
        id,
      },
    });
  }

  findByUserId(userId: string) {
    return this.prismaService.address.findFirst({
      where: {
        userId,
      },
    });
  }
}
