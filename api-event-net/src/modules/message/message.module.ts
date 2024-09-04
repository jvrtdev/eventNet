import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { MessageController } from './message.controller';
import { MessageGateway } from './gateways/message.gateway';
import { MessageService } from './message.service';
import { MessageRepository } from './repositories/message.repository';

@Module({
  providers: [MessageGateway, MessageService, MessageRepository],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
