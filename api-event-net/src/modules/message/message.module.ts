import { Module } from '@nestjs/common';
import { MessageGateway } from './message.gateway';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

@Module({
  providers: [MessageGateway, MessageService, MessageRepository],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
