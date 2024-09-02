import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [UserModule, MessageModule, PrismaModule],
})
export class AppModule {}
