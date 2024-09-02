import { Module } from '@nestjs/common';
import { MessageGateway } from './message.gateway';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  providers: [MessageGateway, MessageService],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
