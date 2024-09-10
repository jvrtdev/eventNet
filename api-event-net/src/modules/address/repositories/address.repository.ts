import { RepositoryFactory } from 'src/common/factories';
import { CreateAddressDto, UpdateAddressDto } from 'src/domain/dtos';
import { AddressEntity } from 'src/domain/entities';

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
