import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, QueryParamsDto, UpdateUserDto } from 'src/domain/dtos';
import { ServiceBase } from 'src/common/base';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from 'src/domain/entities';
import { hash, QueryBuilder } from 'src/common/utils';

@Injectable()
export class UserService
  implements ServiceBase<UserEntity, CreateUserDto, UpdateUserDto>
{
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<UserEntity> {
    const emailAlreadyExists = await this.userRepository.findByEmail(dto.email);

    if (emailAlreadyExists)
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);

    dto.password = await hash(dto.password);

    return this.userRepository.create(dto);
  }

  async findAll(queryParams: QueryParamsDto): Promise<UserEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.userRepository.findAll(query);

    return data;
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async update(dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.update(dto);

    return user;
  }

  async remove(id: string): Promise<UserEntity> {
    return this.userRepository.Delete(id);
  }
}
