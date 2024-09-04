import { Module } from '@nestjs/common';
import { ParticipantService } from './services/participant.service';
import { ParticipantRepository } from './repositories/participant.repository';
import { ParticipantController } from './controllers/participant.controller';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService, ParticipantRepository],
  exports: [ParticipantService],
})
export class ParticipantModule {}
