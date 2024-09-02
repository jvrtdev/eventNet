import { CreateUserDto, UpdateUserDto } from '@dtos';
import { UserEntity } from '@entities';
import { RepositoryFactory } from '@factories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends RepositoryFactory<
  UserEntity,
  CreateUserDto,
  UpdateUserDto
> {
  constructor() {
    super('user');
  }

  create(data: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.user.create({
      data: {
        ...data,
        profile: {
          create: {},
        },
        address: {
          create: {},
        },
      },
      include: {
        profile: true,
        address: true,
      },
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.prismaService.user.findMany({
      include: {
        profile: true,
        address: true,
      },
    });
  }

  findById(id: string): Promise<UserEntity | null> {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
      include: {
        profile: true,
        address: true,
      },
    });
  }

  update({ id, address, profile, ...data }: UpdateUserDto & { id: string }) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...data,
        profile: {
          update: {
            data: profile,
          },
        },
        address: {
          update: {
            data: address,
          },
        },
      },
    });
  }
}
