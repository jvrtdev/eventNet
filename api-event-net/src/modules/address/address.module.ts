import { Module } from '@nestjs/common';
import { AddressService } from './services/address.service';
import { AddressRepository } from './repositories/address.repository';

@Module({
  providers: [AddressService, AddressRepository],
  exports: [AddressService],
})
export class AddressModule {}
