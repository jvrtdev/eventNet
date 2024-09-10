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
}
