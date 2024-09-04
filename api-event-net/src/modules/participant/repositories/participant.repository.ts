import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateParticipantDto } from 'src/domain/dtos/participant';
import { ParticipantEntity } from 'src/domain/entities';

@Injectable()
export class ParticipantRepository extends RepositoryFactory<
  ParticipantEntity,
  CreateParticipantDto
> {
  constructor() {
    super('participant');
  }
}
