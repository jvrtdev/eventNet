import { forwardRef, Module } from '@nestjs/common';
import { EventController } from './controllers/event.controller';
import { EventRepository } from './repositories/event.repository';
import { EventService } from './services/event.service';
import { ConversationModule } from '../conversation/conversation.module';
import { UserEventModule } from '../userEvent/userEvent.module';

@Module({
  imports: [ConversationModule, forwardRef(() => UserEventModule)],
  controllers: [EventController],
  providers: [EventService, EventRepository],
  exports: [EventService],
})
export class EventModule {}
