import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ChatGateway } from './websocket/chat/chat.gateway';
import { ChatModule } from './websocket/chat/chat.module';

@Module({
  imports: [UserModule, ChatModule],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
