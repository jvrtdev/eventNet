import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { ProfileModule } from '../profile/profile.module';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [ProfileModule, AddressModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
