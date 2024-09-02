import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressInput } from './create-address.dto';

export class UpdateAddressInput extends PartialType(CreateAddressInput) {}
