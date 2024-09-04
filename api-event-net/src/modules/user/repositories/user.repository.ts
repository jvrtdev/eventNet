import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { QueryBuilderEntity, UserEntity } from 'src/domain/entities';
import { RepositoryFactory } from 'src/common/factories';
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

  findAll(query: QueryBuilderEntity): Promise<UserEntity[]> {
    return this.prismaService.user.findMany({
      ...query,
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

  findByEmail(email: string): Promise<UserEntity | null> {
    return this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }

  findByUserName(userName: string): Promise<UserEntity | null> {
    return this.prismaService.user.findFirst({
      where: {
        userName,
      },
    });
  }

  update({
    id,
    address,
    profile,
    ...data
  }: UpdateUserDto & { id: string }): Promise<UserEntity | null> {
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
      include: {
        profile: true,
        address: true,
      },
    });
  }
}
