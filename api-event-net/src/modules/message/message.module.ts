import { Module } from '@nestjs/common';
import { MessageGateway } from './gateways/message.gateway';
import { MessageRepository } from './repositories/message.repository';
import { MessageController } from './controllers/message.controller';
import { MessageService } from './services/message.service';

@Module({
  providers: [MessageGateway, MessageService, MessageRepository],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
