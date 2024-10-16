import { PartialType } from '@nestjs/mapped-types';
import { CreateUserEventDto } from './create-userEvent.dto';

export class UpdateUserEventDto extends PartialType(CreateUserEventDto) {
  id: string;
}
