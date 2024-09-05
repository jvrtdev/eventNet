import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { CreateParticipantDto } from 'src/domain/dtos/participant';
import { ParticipantEntity } from 'src/domain/entities';
import { ParticipantRepository } from '../repositories/participant.repository';
import { QueryParamsDto } from 'src/domain/dtos';
import { QueryBuilder } from 'src/common/utils';

@Injectable()
export class ParticipantService
  implements ServiceBase<ParticipantEntity, CreateParticipantDto>
{
  constructor(private readonly participantRepository: ParticipantRepository) {}

  async create(dto: CreateParticipantDto): Promise<ParticipantEntity> {
    const participant = await this.participantRepository.create(dto);

    return participant;
  }

  async findAll(queryParams: QueryParamsDto): Promise<ParticipantEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.participantRepository.findAll(query);

    return data;
  }

  async findById(id: string): Promise<ParticipantEntity> {
    const participant = await this.participantRepository.findById(id);

    if (!participant)
      throw new HttpException('Participant not found', HttpStatus.NOT_FOUND);

    return participant;
  }

  async remove(id: string): Promise<ParticipantEntity> {
    const remove = await this.participantRepository.delete(id);

    return remove;
  }
}
