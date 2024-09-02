import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ChatGateway } from './modules/chat/chat.gateway';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
