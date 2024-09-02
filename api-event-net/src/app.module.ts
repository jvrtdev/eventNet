import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';
@Module({
  imports: [UserModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
