import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/chat/message.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';

@Module({
  imports: [UserModule, MessageModule, PrismaModule],
})
export class AppModule {}
