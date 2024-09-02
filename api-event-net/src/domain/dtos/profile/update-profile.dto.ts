import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileInput } from './create-profile.dto';

export class UpdateProfileInput extends PartialType(CreateProfileInput) {}
