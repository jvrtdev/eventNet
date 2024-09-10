import { Module } from '@nestjs/common';
import { ProfileService } from './services/profile.service';
import { ProfileRepository } from './repositories/profile.repository';

@Module({
  providers: [ProfileService, ProfileRepository],
  exports: [ProfileService],
})
export class ProfileModule {}
