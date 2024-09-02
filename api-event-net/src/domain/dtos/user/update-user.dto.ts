import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInput } from './create-user.dto';

export class UpdateUserInput extends PartialType(CreateUserInput) {}
