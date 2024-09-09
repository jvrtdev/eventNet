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

    const userNameAlreadyExists = await this.userRepository.findByUserName(
      dto.username,
    );

    if (userNameAlreadyExists)
      throw new HttpException(
        'UserName already exists',
        HttpStatus.BAD_REQUEST,
      );

    dto.password = await hash(dto.password);

    const user = await this.userRepository.create(dto);

    return user;
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
    const user = await this.findById(dto.id);

    const update = await this.userRepository.update({ ...dto, id: user.id });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<UserEntity> {
    const remove = await this.userRepository.delete(id);

    return remove;
  }
}
