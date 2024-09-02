import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/chat/message.module';
@Module({
  imports: [UserModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
