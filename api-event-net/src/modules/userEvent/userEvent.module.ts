import { Module } from '@nestjs/common';
import { EventModule } from '../event/event.module';
import { ParticipantModule } from '../participant/participant.module';
import { UserEventController } from './controllers/userEvent.controller';
import { UserEventRepository } from './repositories/userEvent.reposiory';
import { UserEventService } from './services/userEvent.service';

@Module({
  imports: [ParticipantModule, EventModule],
  controllers: [UserEventController],
  providers: [UserEventService, UserEventRepository],
  exports: [UserEventService],
})
export class UserEventModule {}
