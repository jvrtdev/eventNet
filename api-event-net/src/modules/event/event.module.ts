import { Module } from '@nestjs/common';
import { EventController } from './controllers/event.controller';
import { EventRepository } from './repositories/event.repository';
import { EventService } from './services/event.service';
import { ConversationModule } from '../conversation/conversation.module';

@Module({
  imports: [ConversationModule],
  controllers: [EventController],
  providers: [EventService, EventRepository],
  exports: [EventService],
})
export class EventModule {}
