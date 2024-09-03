import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { ServiceBase } from 'src/common/base';
import { UserRepository } from '../repository/user.repository';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class UserService
  implements ServiceBase<UserEntity, CreateUserDto, UpdateUserDto>
{
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    //TODOO: implementar os useCases

    return this.userRepository.create(data);
  }

  async findAll(): Promise<UserEntity[]> {
    // TODO: fazer os queryParams
    //const { skip, take, where, orderBy } = params;

    const data = await this.userRepository.findAll();

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
