import { RepositoryFactory } from 'src/common/factories';
import { CreateProfileDto, UpdateProfileDto } from 'src/domain/dtos';
import { ProfileEntity } from 'src/domain/entities';

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
