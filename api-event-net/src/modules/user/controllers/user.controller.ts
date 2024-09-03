import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, QueryParamsDto, UpdateUserDto } from 'src/domain/dtos';
import { UserService } from '../services/user.service';
import { UserEntity } from 'src/domain/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll() /*@Body('queryParams') queryParams: QueryParamsDto,*/
  : Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserEntity | null> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    updateUserDto.id = id;
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.remove(id);
  }
}
