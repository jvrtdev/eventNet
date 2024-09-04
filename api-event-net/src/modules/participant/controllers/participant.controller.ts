import { Controller, Get } from '@nestjs/common';
import { ParticipantService } from '../services/participant.service';
import { ControllerBase } from 'src/common/base';
import { ParticipantEntity } from 'src/domain/entities';
import { CreateParticipantDto } from 'src/domain/dtos/participant';

@Controller('participant')
export class ParticipantController
  implements ControllerBase<ParticipantEntity, CreateParticipantDto>
{
  constructor(private readonly participantService: ParticipantService) {}
  @Get()
  async create(dto: CreateParticipantDto): Promise<ParticipantEntity> {
    return await this.participantService.create(dto);
  }
}
