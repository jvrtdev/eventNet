import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ParticipantService } from '../services/participant.service';
import { ParticipantEntity } from '@entities';
import { CreateParticipantDto, QueryParamsDto } from '@dtos';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post()
  createParticipant(
    @Body() createParticipantDto: CreateParticipantDto,
  ): Promise<ParticipantEntity> {
    return this.participantService.create(createParticipantDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryParamsDto): Promise<ParticipantEntity[]> {
    return this.participantService.findAll(queryParams);
  }

  @Get(':id')
  findById(@Param() id: string): Promise<ParticipantEntity> {
    return this.participantService.findById(id);
  }

  @Delete(':id')
  removeParticipant(@Param() id: string): Promise<ParticipantEntity> {
    return this.participantService.remove(id);
  }
}
