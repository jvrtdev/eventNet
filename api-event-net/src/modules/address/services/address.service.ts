import { ServiceBase } from 'src/common/base';
import { CreateAddressDto, UpdateAddressDto } from 'src/domain/dtos';
import { AddressEntity } from 'src/domain/entities';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories/address.repository';

@Injectable()
export class AddressService
  implements ServiceBase<AddressEntity, CreateAddressDto, UpdateAddressDto>
{
  constructor(private readonly addressRepository: AddressRepository) {}

  async create(dto?: CreateAddressDto): Promise<AddressEntity> {
    const address = await this.addressRepository.create(dto);

    return address;
  }

  async findById(id: string): Promise<AddressEntity> {
    const address = await this.addressRepository.findById(id);

    if (!address)
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);

    return address;
  }

  async findByUserId(id: string): Promise<AddressEntity> {
    const address = await this.addressRepository.findByUserId(id);

    if (!address)
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);

    return address;
  }

  async update(dto: UpdateAddressDto): Promise<AddressEntity> {
    const address = await this.findById(dto.id);

    const update = await this.addressRepository.update({
      ...dto,
      id: address.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_FOUND);

    return update;
  }

  async remove(id: string): Promise<AddressEntity> {
    const address = await this.findById(id);

    const remove = await this.addressRepository.delete(address.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
