import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateParticipantDto } from '@dtos';
import { ParticipantEntity, QueryBuilderEntity } from '@entities';

@Injectable()
export class ParticipantRepository extends RepositoryFactory<
  ParticipantEntity,
  CreateParticipantDto
> {
  constructor() {
    super('participant');
  }

  findAll(query: QueryBuilderEntity): Promise<ParticipantEntity[]> {
    return this.prismaService.participant.findMany(query);
  }

  findById(id: string): Promise<ParticipantEntity | null> {
    return this.prismaService.participant.findFirst({
      where: { id },
    });
  }
}
