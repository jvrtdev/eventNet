import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { UserService } from '../service/user.service';
import { UserEntity } from 'src/domain/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserEntity | null> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async update(@Body() updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
