import { RepositoryFactory } from '@factories';
import { CreateProfileDto, UpdateProfileDto } from '@dtos';
import { ProfileEntity } from '@entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileRepository extends RepositoryFactory<
  ProfileEntity,
  CreateProfileDto,
  UpdateProfileDto
> {
  constructor() {
    super('profile');
  }

  findById(id: string) {
    return this.prismaService.profile.findFirst({
      where: {
        id,
      },
    });
  }

  findByUserId(userId: string) {
    return this.prismaService.profile.findFirst({
      where: {
        userId,
      },
    });
  }
}
