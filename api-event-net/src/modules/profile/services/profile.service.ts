import { ServiceBase } from 'src/common/base';
import { CreateProfileDto, UpdateProfileDto } from 'src/domain/dtos';
import { ProfileEntity } from 'src/domain/entities';
import { ProfileRepository } from '../repositories/profile.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService
  implements ServiceBase<ProfileEntity, CreateProfileDto, UpdateProfileDto>
{
  constructor(private readonly profileRepository: ProfileRepository) {}

  async create(dto?: CreateProfileDto): Promise<ProfileEntity> {
    const profile = await this.profileRepository.create(dto);

    return profile;
  }

  async findById(id: string): Promise<ProfileEntity> {
    const profile = await this.profileRepository.findById(id);

    if (!profile)
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);

    return profile;
  }

  async findByUserId(id: string): Promise<ProfileEntity> {
    const profile = await this.profileRepository.findByUserId(id);

    if (!profile)
      throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);

    return profile;
  }

  async update(dto: UpdateProfileDto): Promise<ProfileEntity> {
    const profile = await this.findById(dto.id);

    const update = await this.profileRepository.update({
      ...dto,
      id: profile.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_FOUND);

    return update;
  }

  async remove(id: string): Promise<ProfileEntity> {
    const profile = await this.findById(id);

    const remove = await this.profileRepository.delete(profile.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
