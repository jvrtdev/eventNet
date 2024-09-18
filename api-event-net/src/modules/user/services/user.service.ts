import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, QueryParamsDto, UpdateUserDto } from '@dtos';
import { ServiceBase } from '@bases';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from '@entities';
import { hash, QueryBuilder } from '@utils';
import { ProfileService } from 'src/modules/profile/services/profile.service';
import { AddressService } from 'src/modules/address/services/address.service';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Injectable()
export class UserService
  implements ServiceBase<UserEntity, CreateUserDto, UpdateUserDto>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly profileService: ProfileService,
    private readonly addressService: AddressService,
    private readonly authService: AuthService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserEntity> {
    const emailAlreadyExists = await this.userRepository.findByEmail(dto.email);

    if (emailAlreadyExists)
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);

    const userNameAlreadyExists = await this.userRepository.findByUserName(
      dto.userName,
    );

    if (userNameAlreadyExists)
      throw new HttpException(
        'UserName already exists',
        HttpStatus.BAD_REQUEST,
      );

    const phoneAlreadyExists = await this.userRepository.findByPhone(dto.phone);

    if (phoneAlreadyExists)
      throw new HttpException('Phone already exists', HttpStatus.BAD_REQUEST);

    dto.password = await hash(dto.password);

    const user = await this.userRepository.create(dto);

    const profile = await this.profileService.create({ userId: user.id });

    const address = await this.addressService.create({ userId: user.id });

    const { token } = await this.authService.create({
      login: user.email,
      password: user.password,
    });

    return {
      ...user,
      token,
      profile,
      address,
    };
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

  async findByUserEmail(userEmail: string): Promise<UserEntity> {
    const user = await this.userRepository.findByEmail(userEmail);

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async findByUserName(userName: string): Promise<UserEntity> {
    const user = await this.userRepository.findByUserName(userName);

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async update(dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findById(dto.id);

    const { profile, address, ...userDto } = dto;

    const update = await this.userRepository.update({
      ...userDto,
      id: user.id,
    });

    update.profile = await this.profileService.update(profile);

    update.address = await this.addressService.update(address);

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<UserEntity> {
    const user = await this.findById(id);

    const remove = await this.userRepository.delete(user.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
